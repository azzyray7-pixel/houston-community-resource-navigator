"""
Builds the SQLite database for the Houston Community Resource Navigator.

Run this first: python scripts/build_database.py
It reads the curated CSVs in /data and loads them into database/community_resources.db
"""
import sqlite3
import csv
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DB_PATH = ROOT / "database" / "community_resources.db"
RESOURCES_CSV = ROOT / "data" / "resources.csv"
CONTEXT_CSV = ROOT / "data" / "neighborhood_context.csv"


def build_database():
    DB_PATH.parent.mkdir(exist_ok=True)
    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()

    cur.executescript("""
        DROP TABLE IF EXISTS resources;
        DROP TABLE IF EXISTS neighborhood_context;

        CREATE TABLE resources (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            category TEXT NOT NULL,
            neighborhood TEXT NOT NULL,
            zip TEXT,
            phone TEXT,
            website TEXT,
            description TEXT
        );

        CREATE TABLE neighborhood_context (
            neighborhood TEXT PRIMARY KEY,
            primary_zip TEXT,
            pct_foreign_born REAL,
            context TEXT,
            source TEXT
        );
    """)

    with open(RESOURCES_CSV, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        rows = [
            (r["id"], r["name"], r["category"], r["neighborhood"], r["zip"],
             r["phone"], r["website"], r["description"])
            for r in reader
        ]
    cur.executemany(
        "INSERT INTO resources (id, name, category, neighborhood, zip, phone, website, description) "
        "VALUES (?, ?, ?, ?, ?, ?, ?, ?)", rows
    )

    with open(CONTEXT_CSV, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        rows = [
            (r["neighborhood"], r["primary_zip"], r["pct_foreign_born"] or None,
             r["context"], r["source"])
            for r in reader
        ]
    cur.executemany(
        "INSERT INTO neighborhood_context (neighborhood, primary_zip, pct_foreign_born, context, source) "
        "VALUES (?, ?, ?, ?, ?)", rows
    )

    conn.commit()
    n_resources = cur.execute("SELECT COUNT(*) FROM resources").fetchone()[0]
    n_neighborhoods = cur.execute("SELECT COUNT(*) FROM neighborhood_context").fetchone()[0]
    conn.close()

    print(f"Database built at {DB_PATH}")
    print(f"  {n_resources} resources loaded")
    print(f"  {n_neighborhoods} neighborhood context rows loaded")


if __name__ == "__main__":
    build_database()
