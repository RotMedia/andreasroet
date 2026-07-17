# andreasroet.de

Statischer Hub für Musik, Shop (Gumroad-Spiegel), Tutorials & Blog.
Astro · kein CMS · kein Cookie-Banner nötig.

## Setup (lokal)

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # erzeugt dist/
```

## Struktur

- `src/pages/` — Seiten (index, music, shop, blog, about, imprint, privacy)
- `src/content/blog/` — Blogposts als Markdown (category: tutorial | article)
- `src/data/products.json` — Shop-Daten, generiert vom Gumroad-Sync
- `src/data/music.json` — Music-Seite: label / self / soundcloud (von Hand pflegen)
- `scripts/sync-gumroad.mjs` — zieht Produkte per Gumroad-API
- `public/llms.txt` — KI-Crawler-Zusammenfassung

## Neuen Blogpost veröffentlichen

Markdown-Datei in `src/content/blog/` anlegen:

```md
---
title: "Titel"
description: "1–2 Sätze für Meta & KI-Suche."
date: 2026-07-10
category: tutorial        # oder: article
topic: "Sound Design"     # optional
youtube: "VIDEO_ID"       # optional, Zwei-Klick-Embed
duration: "24:18"         # optional
---

Text hier.
```

Push auf `main` → GitHub Action baut & deployed automatisch.

## Gumroad-Sync (auf Hermes)

```bash
export GUMROAD_ACCESS_TOKEN=...   # Gumroad → Settings → Advanced → Applications
npm run sync
git add src/data/products.json && git commit -m "sync: gumroad" && git push
```

Token anlegen: Gumroad-App erstellen (Redirect URI: http://127.0.0.1),
"Generate access token".

## Deployment (Webgo)

GitHub-Repo-Secrets setzen: `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`.
`server-dir` in `.github/workflows/deploy.yml` an den Webgo-Webroot anpassen.
Jeder Push auf `main` deployed automatisch.

## Vor dem Livegang (TODO)

- [ ] `src/pages/imprint.astro` — echte Impressumsdaten
- [ ] `src/pages/privacy.astro` — Datenschutzerklärung (Generator, z.B. e-recht24)
- [ ] `src/data/music.json` — echte Releases eintragen
- [ ] Footer/About: SoundCloud- & Bandcamp-URLs ersetzen
- [ ] Gumroad-Sync einmal laufen lassen (ersetzt Platzhalter-Produkt)
- [ ] AV-Vertrag mit Webgo abschließen (Kundenportal)
- [ ] Beispiel-Post `dub-chord-that-breathes.md` anpassen oder löschen
