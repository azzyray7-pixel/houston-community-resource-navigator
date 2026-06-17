# Findings: a light needs assessment for Houston's immigrant and refugee neighborhoods

## Why this project

Houston resettles more refugees than almost any other U.S. city, and several of
its neighborhoods are now home to residents from dozens of countries of origin.
That diversity is a strength, but it also means demand for ESL classes, food
assistance, healthcare, and resettlement case management is not spread evenly
across the city. This project takes a small, honest step toward mapping that
demand against where services are actually located.

This is a student portfolio project, not a commissioned needs assessment. It
leans on existing public research and a hand-curated directory rather than an
original survey, and it should be read as a methodology demonstration first
and a directory second.

## Method

1. **Identify focus neighborhoods.** Gulfton, Alief, Spring Branch, and
   Sharpstown were chosen because existing reporting already documents them as
   high foreign-born, high-immigrant, or historically refugee-receiving areas
   (see Sources below) — not because of original demographic analysis in this
   project.
2. **Build a resource directory.** Twenty-two real organizations serving
   low-income, immigrant, or refugee Houstonians were identified through web
   research and grouped into five categories: Refugee & Immigration Services,
   Multi-Service Community Center, Education & ESL, Healthcare, and Food
   Assistance. Details live in `data/resources.csv`.
3. **Cross-reference against neighborhood context.** `data/neighborhood_context.csv`
   captures what public sources say about each focus neighborhood (for
   example, Gulfton's foreign-born share).
4. **Query for gaps.** `scripts/analyze_gaps.py` runs SQL against the loaded
   database to count resources per neighborhood and per category, then flags
   focus neighborhoods that have no resource with a local presence in a given
   category. "No local presence" does not mean "no access" — many citywide
   programs (library ESL classes, the Houston Food Bank's mobile distributions)
   serve these neighborhoods without being headquartered there.

## What the data shows

Running the pipeline against the current directory surfaces a consistent
pattern: Gulfton and Southwest Houston have a relatively dense cluster of
refugee-resettlement and immigration-service organizations, which matches
their documented role as primary refugee-receiving areas. Direct local
presence thins out for education/ESL, healthcare, and food-assistance
categories in three of the four focus neighborhoods (Alief, Spring Branch,
and Sharpstown), even though citywide programs nominally cover them. Sharpstown
in particular shows no resource in the directory with a listed presence there
at all, despite being treated as part of the same underserved corridor as
Gulfton in city and nonprofit planning documents.

Open `dashboard/Houston_Community_Resource_Dashboard.xlsx` for the full
neighborhood-by-category matrix and the same gap flags as a spreadsheet, or
run `scripts/analyze_gaps.py` to print them to the terminal.

## Limitations

This directory is illustrative, not exhaustive. Twenty-two organizations is a
fraction of what 211 Texas or findhelp.org list for Harris County, several
real organizations are intentionally omitted because their contact details
could not be confirmed, and "neighborhood" is a simplification — most large
nonprofits serve far beyond their headquarters location. A genuine needs
assessment would pair this kind of structural mapping with primary data:
intercept surveys at community centers, interviews with case managers at
organizations like BakerRipley or YMCA International Services, and Census
ACS tract-level data rather than secondary citations of it.

## What a fuller version would add

- Replace the curated CSV with a live pull from 211 Texas or findhelp.org's
  API, refreshed on a schedule
- Add Census ACS variables (poverty rate, limited-English-speaking households,
  foreign-born share) at the tract level instead of citing secondary sources
  for four neighborhoods
- Geocode each organization and render an actual map instead of a card-based
  directory
- Run a short survey or interview round with two or three case managers to
  validate which "citywide" services are realistically reachable for someone
  without a car in Gulfton or Sharpstown

## Sources

- City of Houston, *Gulfton Complete Communities Action Plan*
- Brookings Institution, "How a Houston, Texas neighborhood center is using
  diversity to strengthen a neighborhood" (BakerRipley / Gulfton-Sharpstown)
- Wikipedia, "Demographics of Houston" and "Spring Branch, Houston"
- H-Town Happens, on Houston's Vietnamese refugee community in Alief
- Target Hunger, on Harris County food insecurity
- Organization websites and directories cited inline in `data/resources.csv`
  (YMCA International Services, Catholic Charities of Galveston-Houston,
  Houston Food Bank, BakerRipley, and others)
