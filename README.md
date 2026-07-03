# Be-Luce Beauty Studio — Demo Landing Page

Demo mobile-first per mostrare a un salone beauty/nail come potrebbe funzionare un sistema semplice di **prenotazioni online**, **promemoria** e **recensioni Google**.

> **Nota per sviluppatori:** Real salon images/logos should only be used in a private demo or after permission from the business. For a public GitHub Pages demo, use generic or authorized assets.

## Avvio locale

```bash
npm install
npm run dev
```

Apri nel browser: **http://localhost:5173/beauty-booking-demo/**

> Con la base path configurata per GitHub Pages, in locale devi includere `/beauty-booking-demo/` nell’URL.

## Build di produzione

```bash
npm run build
npm run preview
```

Preview: **http://localhost:4173/beauty-booking-demo/**

## Asset opzionali

Metti le immagini reali del salone in `public/assets/`:

| File | Uso |
|------|-----|
| `logo.png` | Header (altrimenti: “Be-Luce Beauty Studio”) |
| `hero-salon.jpg` | Hero |
| `service-manicure.jpg` | Card Manicure / Mani + piedi |
| `service-pedicure.jpg` | Card Pedicure |
| `service-nails.jpg` | Semipermanente / Ricostruzione gel |
| `service-waxing.jpg` | Ceretta |
| `google-profile.png` | Sezione Google Business |
| `reviews-screenshot.png` | Sezione recensioni |

Se un file manca, la pagina mostra placeholder eleganti — nessun errore di build.

## Pubblicazione su GitHub Pages

### 1. Crea il repository su GitHub

- Nome repository: **`beauty-booking-demo`**
- Pubblico o privato (Pages funziona su entrambi con piano adeguato)

### 2. Push del codice

```bash
cd beauty-booking-demo
git init
git add .
git commit -m "Add Be-Luce beauty salon booking demo landing page"
git branch -M main
git remote add origin https://github.com/<TUO-USERNAME>/beauty-booking-demo.git
git push -u origin main
```

### 3. Deploy

```bash
npm run deploy
```

Questo esegue `npm run build` e pubblica la cartella `dist` sul branch `gh-pages`.

### 4. Abilita GitHub Pages (se necessario)

1. Vai su **Settings → Pages** del repository
2. **Source:** branch `gh-pages`, cartella `/ (root)`
3. Salva

### 5. URL finale

```
https://<TUO-USERNAME>.github.io/beauty-booking-demo/
```

Esempio: `https://ale.github.io/beauty-booking-demo/`

## Stack

- React 19 + Vite + TypeScript
- CSS Modules (nessuna UI library)
- `gh-pages` per il deploy

## Personalizzazione rapida

- **WhatsApp:** modifica `WHATSAPP_URL` in `src/utils.ts`
- **Copy e servizi:** `src/components/`
- **Colori:** variabili CSS in `src/App.css`
