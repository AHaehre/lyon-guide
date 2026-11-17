# Lyon-guide

Interaktivt turistkart og lokalguide for Lyon, laget for helgen 20.–22. november 2026.
Ren statisk web-app: én HTML-fil, datafiler og en service worker. Ingen byggesteg, ingen server.

## Innhold

- `index.html` – hele appen (kart, GPS, arrondissement-deteksjon, steder, program)
- `data/arrondissements.js` – offisielle grenser for Lyons ni arrondissement (Grand Lyon åpne data)
- `data/pois-a.js`, `pois-b.js`, `pois-c.js` – 107 steder med norsk tekst (Vieux Lyon/Fourvière, Presqu'île, Croix-Rousse/østsiden/utenfor byen)
- `data/plan.js` – programmet for fredag, lørdag og søndag
- `data/routes.js` – gå- og kjøreruter mellom stoppene (OSRM), med avstand og tid
- `data/streets.js` – gatenett for sentrum, så gatenavn fungerer uten nett
- `sw.js`, `manifest.webmanifest`, `icon-*.png` – offline-støtte og «Legg til på Hjem-skjerm»

## Publisere

Appen må ligge på en https-adresse for at GPS skal virke på iPhone.

**GitHub Pages (anbefalt, gratis):**
1. Lag et nytt offentlig repo på github.com, for eksempel `lyon-guide`.
2. Last opp alle filene i denne mappen (dra og slipp i nettleseren, eller `git push`).
3. Settings → Pages → Branch: `main`, mappe `/ (root)` → Save.
4. Etter et minutt ligger appen på `https://<brukernavn>.github.io/lyon-guide/`.

**Netlify Drop (raskest):** gå til app.netlify.com/drop og slipp hele mappen der. Du får en https-adresse med en gang.

Ved oppdatering av datafiler: endre versjonsnummeret `?v=` i `index.html` og `VERSION` i `sw.js`, så henter telefonene nytt innhold.

## Installere på iPhone

1. Åpne adressen i Safari.
2. Trykk Del-knappen → «Legg til på Hjem-skjerm».
3. Åpne appen fra hjemskjermen og tillat stedstjenester når den spør.
4. Åpne alle fire fanene én gang mens du har nett, og zoom litt rundt i sentrum, så ligger kartet lagret for offline-bruk.

Send samme lenke til Øyvind, så gjør han det samme.

## Bruk

- Toppfeltet viser arrondissement, kvartal og gate der dere står.
- **Her**: hva dere står ved, hva som er i nærheten, Wikipedia-oppslag på fransk for alt annet.
- **Program**: dagens stopp med gåtid og avstand. Trykk på et stopp eller en strekning for å se den på kartet.
- **Steder**: søk i alle stedene.
- **Bydeler**: de ni arrondissementene.
- Hold fingeren på kartet (eller dobbelttrykk) for å sette posisjonen manuelt, for eksempel ved frokostbordet. «Tilbake til GPS» i banneret.

## Lokal testing

```bash
python3 -m http.server 8765 --directory lyon-guide
```
