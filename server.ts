import express from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database("school.db");

// Initialize Database Tables
db.exec(`
  CREATE TABLE IF NOT EXISTS applications (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    class TEXT NOT NULL,
    date TEXT NOT NULL,
    status TEXT DEFAULT 'pending'
  );

  CREATE TABLE IF NOT EXISTS events (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    date TEXT NOT NULL,
    category TEXT NOT NULL,
    time TEXT DEFAULT '9:00 AM',
    desc TEXT DEFAULT 'A school event scheduled to bring the community together.'
  );

  CREATE TABLE IF NOT EXISTS results (
    studentId TEXT PRIMARY KEY,
    studentName TEXT NOT NULL,
    className TEXT NOT NULL,
    term TEXT NOT NULL,
    gpa TEXT NOT NULL,
    status TEXT NOT NULL,
    subjects JSON NOT NULL
  );
`);

// Seed initial data if empty
const appCount = db.prepare("SELECT count(*) as count FROM applications").get() as { count: number };
if (appCount.count === 0) {
  const insertApp = db.prepare("INSERT INTO applications (id, name, class, date, status) VALUES (?, ?, ?, ?, ?)");
  insertApp.run('LK-2026-001', 'Musa Ibrahim', 'JSS 1', '2026-03-01', 'pending');
  insertApp.run('LK-2026-002', 'Chioma Okoro', 'SSS 1 (Science)', '2026-03-02', 'approved');
}

const eventCount = db.prepare("SELECT count(*) as count FROM events").get() as { count: number };
if (eventCount.count === 0) {
  const insertEvent = db.prepare("INSERT INTO events (id, title, date, category, time, desc) VALUES (?, ?, ?, ?, ?, ?)");
  insertEvent.run('1', 'Open Day', '2026-04-12', 'Academic', '10:00 AM - 2:00 PM', 'Prospective parents and students are invited to explore our campus.');
  insertEvent.run('2', 'Inter-House Sports', '2026-05-08', 'Sports', 'All Day', 'A day of healthy competition and athletic excellence.');
}

const resultCount = db.prepare("SELECT count(*) as count FROM results").get() as { count: number };
if (resultCount.count === 0) {
  const insertResult = db.prepare("INSERT INTO results (studentId, studentName, className, term, gpa, status, subjects) VALUES (?, ?, ?, ?, ?, ?, ?)");
  insertResult.run(
    'LK/2024/001', 
    'Adebayo Samuel', 
    'JSS 3 Gold', 
    '2nd Term 2025/2026', 
    '3.85', 
    'Promoted', 
    JSON.stringify([
      { name: "Mathematics", score: 92, grade: "A" },
      { name: "English Language", score: 85, grade: "A" },
      { name: "Basic Science", score: 78, grade: "B" },
      { name: "Computer Studies", score: 95, grade: "A" },
    ])
  );
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/applications", (req, res) => {
    const apps = db.prepare("SELECT * FROM applications ORDER BY date DESC").all();
    res.json(apps);
  });

  app.post("/api/applications", (req, res) => {
    const { name, class: className } = req.body;
    const id = `LK-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const date = new Date().toISOString().split('T')[0];
    const insert = db.prepare("INSERT INTO applications (id, name, class, date, status) VALUES (?, ?, ?, ?, ?)");
    insert.run(id, name, className, date, 'pending');
    res.json({ id, name, class: className, date, status: 'pending' });
  });

  app.patch("/api/applications/:id", (req, res) => {
    const { status } = req.body;
    const { id } = req.params;
    const update = db.prepare("UPDATE applications SET status = ? WHERE id = ?");
    update.run(status, id);
    res.json({ success: true });
  });

  app.get("/api/events", (req, res) => {
    const events = db.prepare("SELECT * FROM events ORDER BY date ASC").all();
    res.json(events);
  });

  app.post("/api/events", (req, res) => {
    const { title, date, category } = req.body;
    const id = Math.random().toString(36).substr(2, 9);
    const insert = db.prepare("INSERT INTO events (id, title, date, category) VALUES (?, ?, ?, ?)");
    insert.run(id, title, date, category);
    res.json({ id, title, date, category });
  });

  app.delete("/api/events/:id", (req, res) => {
    const { id } = req.params;
    const del = db.prepare("DELETE FROM events WHERE id = ?");
    del.run(id);
    res.json({ success: true });
  });

  app.get("/api/results/:studentId", (req, res) => {
    const { studentId } = req.params;
    const result = db.prepare("SELECT * FROM results WHERE studentId = ?").get() as any;
    if (result) {
      result.subjects = JSON.parse(result.subjects);
      res.json(result);
    } else {
      res.status(404).json({ error: "Result not found" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist/index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
