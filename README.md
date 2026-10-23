# Apps von marko-vijeko – gemeinsame Webseite

Öffentliche Seiten für **alle** Apps von marko-vijeko (4 Ears, MyDay, …), veröffentlicht über
GitHub Pages unter **https://apps.markovijeko.de** (Datei `CNAME`).

- `index.html` – Übersicht, je App eine Kachel
- `hilfe.html` – Kontakt, häufige Fragen pro App (`#4ears`, `#myday`, …), Hilfe in Krisen (`#krise`)
- `datenschutz.html` – allgemeiner Teil (`#allgemein`) + ein Abschnitt pro App (`#4ears`, …)

Alle Seiten in Deutsch, Englisch und Spanisch (`sprache.js`, `?lang=de|en|es`). Sprungmarken
stehen als `data-anker` im jeweiligen Sprachabschnitt, nicht als `id`.

**Neue App hinzufügen:** in allen drei Sprachen je eine Kachel in `index.html`, einen
`<section data-anker="…">` in `hilfe.html` und `datenschutz.html` und einen Link im Inhalt oben.
In App Store Connect dann `https://apps.markovijeko.de/datenschutz.html#<app>` als
Datenschutz-URL und `https://apps.markovijeko.de/hilfe.html#<app>` als Support-URL eintragen.

Krisennummern: Quelle und Prüfung in `docs/HINWEISE-PSYCHE.md` im Repo `marko-vijeko/OhrenApp`.
Keine Cookies, keine fremden Inhalte; die Schrift Lexend liegt in `fonts/` (OFL).
