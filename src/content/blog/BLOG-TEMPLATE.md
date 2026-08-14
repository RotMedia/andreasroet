# Blog-Artikel Vorlage — Anleitung

## So legst du einen neuen Artikel an

1. Kopiere den Block unten (ab `---`) in eine neue Datei
2. Dateiname = URL-Slug, z.B. `mein-artikel.md` → wird `/blog/mein-artikel`
   (nur Kleinbuchstaben, Bindestriche statt Leerzeichen, keine Umlaute)
3. Speichere sie in `src/content/blog/`
4. Auf GitHub hochladen → Deploy → live

---

## Frontmatter-Felder (der Kopf zwischen den `---`)

| Feld        | Pflicht | Beschreibung                                                        |
|-------------|---------|--------------------------------------------------------------------|
| title       | ja      | Überschrift des Artikels                                            |
| description | ja      | 1-2 Sätze für Google/Social (SEO). Konkret, keine Floskeln.         |
| date        | ja      | YYYY-MM-DD, z.B. 2026-01-16                                         |
| category    | ja      | `tutorial` (mit Video) oder `article` (text-only)                  |
| topic       | nein    | z.B. Sound Design, Hardware, Arrangement, Mixing, Workflow, Live   |
| tags        | nein    | Liste, z.B. ["dub-techno", "hardware"]                             |
| youtube     | nur Tut | Die Video-ID (der Teil nach `v=` bzw. `youtu.be/`)                 |
| duration    | nein    | Videolänge, z.B. "18:40"                                            |

**Bei text-only Artikeln:** `youtube` und `duration` einfach weglassen — dann erscheint kein Video.

---

## Bilder im Text

1. Bild optimiert (WebP, ~1600px breit) nach `public/blog/` legen
2. Im Text einbinden:

   ![Alt-Text der das Bild beschreibt](/blog/mein-bild.webp)
   *Optionale Bildunterschrift direkt darunter, kursiv*

---

## VORLAGE ZUM KOPIEREN (ab hier):

---
title: "Dein Titel hier"
description: "Ein bis zwei konkrete Sätze, worum es geht — landet bei Google und beim Teilen."
date: 2026-01-01
category: tutorial
topic: Sound Design
tags: ["dub-techno", "hardware"]
youtube: "VIDEO_ID_HIER"
duration: "12:00"
---

## TL;DR

- **Punkt 1** — kurzer Kontext-Halbsatz
- **Punkt 2** — kurzer Kontext-Halbsatz
- **Punkt 3** — kurzer Kontext-Halbsatz

## Erste Überschrift

Kurzer Absatz. Kein Textblock länger als 3-4 Sätze — der Leser muss springen können.

## Zweite Überschrift

Text. Bei Bedarf ein Bild:

![Beschreibung](/blog/beispiel.webp)
*Bildunterschrift*

## Tips & Pitfalls (optional)

**Fettgedruckter Kernpunkt.** Erklärung dahinter.

**Nächster Punkt.** Erklärung.
