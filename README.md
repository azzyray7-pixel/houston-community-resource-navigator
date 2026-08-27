# Houston community resource navigator

A small data pipeline and web app that maps food, health, education, and
refugee/immigration services against the Houston neighborhoods where
low-income and refugee families are concentrated, and flags where local
coverage is thin.

Built as a portfolio project connecting hands-on community program experience
(Missions Director, Sharpstown Baptist Church) with MIS coursework in SQL,
Python, and data analysis.

**[Open the live resource locator](web/index.html)** &middot; **[Read the findings writeup](docs/findings.md)**

## Why this exists

Houston is one of the largest refugee-resettlement cities in the country, and
neighborhoods like Gulfton, Alief, and Spring Branch have foreign-born
population shares far above the city average — in Gulfton's case, 59% versus
29% citywide. Services exist, but they are not evenly distributed, and
families without a car or with limited English often can't get to help that
is only a few miles away. This project asks a simple question with real data:
*for the neighborhoods that need it most, where are the actual gaps in local
service coverage?*

## What's inside

| Piece | What it does |
|---|---|
| `data/` | Curated CSVs: 20 real Houston organizations across 5 service categories, each with a verified phone number and street address where one exists, plus neighborhood demographic context with sources |
| `scripts/build_database.py` | Loads the CSVs into a SQLite database |
| `scripts/analyze_gaps.py` | Runs SQL queries to count resources by neighborhood/category and flag coverage gaps; exports data for the web app |
| `scripts/export_dashboard.py` | Builds an Excel dashboard with live `COUNTIFS` formulas, conditional-formatted gap flags, and a chart |
| `web/` | A filterable, searchable resource locator (vanilla HTML/CSS/JS, no build step) |
| `docs/findings.md` | A short needs-assessment style writeup: methodology, findings, limitations, sources |
| `dashboard/` | The generated Excel workbook |
| `database/` | The generated SQLite database |

## Tech stack

Python (`sqlite3`, `pandas`, `openpyxl`) for the data pipeline, SQL for the
analysis, Excel for a dashboard a non-technical stakeholder could open
directly, and plain HTML/CSS/JS for the web tool — no framework, no build
step, opens by double-clicking `web/index.html`.

## Running it yourself

```bash
pip install -r requirements.txt
python scripts/build_database.py     # builds database/community_resources.db
python scripts/analyze_gaps.py        # prints gap analysis, writes web/data.js
python scripts/export_dashboard.py    # builds dashboard/Houston_Community_Resource_Dashboard.xlsx
```

Then open `web/index.html` directly in a browser — the resource data is
compiled into `web/data.js` by the analysis script, so no local server or
internet connection is required to browse the directory (only the Google
Fonts import needs network access, and the page falls back to system fonts
without it).

## Sample finding

Gulfton — the neighborhood with the highest foreign-born share in the dataset
(59%, versus 29% citywide) — has no directory resource with a *verified*
local presence in Refugee & Immigration Services, Education & ESL,
Healthcare, or Food Assistance; its only local entry is the BakerRipley
Gulfton-Sharpstown campus. That's a sharper finding than an earlier pass of
this project reported, once two entries turned out to be organizations that
have since shut down and a third's real office address (found while verifying
contact info) placed it outside the neighborhood it had been tagged under.
Sharpstown and Spring Branch have similarly thin direct-presence coverage. See
`docs/findings.md` for the full writeup and
`dashboard/Houston_Community_Resource_Dashboard.xlsx` for the underlying
numbers.

## Honest limitations

This is a portfolio project, not an official services directory. Twenty
organizations is a sample, not a census of what's available through 211 Texas
or findhelp.org, "neighborhood" is a simplification for organizations that
serve the whole city, and every phone number, address, and website was
verified against an official source as of August 2026 but will drift out of
date over time. Anyone using this to actually find help should call 211 or
check directly with the organization. `docs/findings.md` lays out what a more
rigorous version of this would need.

## About the author

Raymond Ochonogor is an MIS student at the University of Houston–Downtown and
Missions Director at Sharpstown Baptist Church, where he coordinates
community programs reaching 50–100+ Houstonians per initiative. This project
pairs that community-engagement background with coursework in SQL, Python,
and data analysis. [LinkedIn](https://linkedin.com/in/raymond-ochonogor-886a5a401)

## License

MIT — see [LICENSE](LICENSE).
