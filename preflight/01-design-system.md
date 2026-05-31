# Preflight 01 — Design System (Dark Mutui / Banking AI)

> Riferimento operativo per costruire la landing di `ai_banking_v1_stefano`.
> Pattern: dark fintech autorevole. Tono: verità, matematica, calma, vittoria.
> Non un dark "crypto/AI viola". Dark "tribunale + studio attuariale + studio legale".

Indice:
- 1. Mission, audience e tono di voce visivo
- 2. Brand mood, pattern di layout, anti-pattern
- 3. Palette dark mutui (token completi)
- 4. Typography stack e scala tipografica
- 5. Spacing system, grid e breakpoints
- 6. Elevation, shadows, blur, glass
- 7. Componenti UI (token + stati)
- 8. CTA system e gerarchia di conversione
- 9. Motion system e principi di animazione
- 10. Iconografia, illustrazione, fotografia
- 11. Sezioni della landing (pattern + scopo + KPI)
- 12. Stato, vuoto, errore, caricamento
- 13. Accessibilità (WCAG 2.2 AA target)
- 14. Performance budget
- 15. Implementazione (SCSS/Bootstrap/Angular)
- 16. Naming convention e file structure
- 17. Sticky CTA, navigation, scroll behavior
- 18. Microcopy visivo (badge, pill, chip, tooltip)
- 19. Dark mode native vs. solo dark
- 20. Checklist di rilascio

---

## 1. Mission, audience e tono di voce visivo

### 1.1 Cosa stiamo costruendo
Una landing che fa due cose insieme:
1. spiegare che esiste un metodo serio, matematico, ingegnerizzato per scoprire se la banca ti ha applicato anatocismo, errori di TAEG, capitalizzazione composta non dichiarata, mora illegittima, ammortamento ricalcolato male dopo sospensioni;
2. far caricare un PDF di mutuo/leasing/finanziamento e ricevere una pre-analisi AI gratuita che dice subito se vale la pena di approfondire.

La promessa centrale è: **la banca paga sempre se sbaglia, e con noi sbagliare la sua matematica diventa visibile.**

### 1.2 Audience
- Privato con mutuo in corso o estinto da meno di 10 anni (privato terrorizzato dalle rate, ha sentito parlare di interessi nascosti).
- Imprenditore con conto corrente aziendale, leasing, finanziamento, decreto ingiuntivo o precetto in arrivo.
- Libero professionista con partita IVA, esposto su più contratti bancari.
- Consulente di terzi (commercialista, avvocato civilista) che cerca un partner tecnico.
- Famiglia con mutuo prima casa, rata appena aumentata.

### 1.3 Tono di voce visivo
- Calmo, non gridato.
- Numerico, non slogan.
- Documentale, non instagrammabile.
- Materiale e tipografico, non aeroporto fintech.
- Sicuro, non aggressivo: chi è in difficoltà reale con la banca ha bisogno di un porto, non di un altro markettaro.

### 1.4 Cosa NON deve sembrare
- Non un sito di crypto.
- Non un sito di "scopri quanto vali" da pop-up.
- Non un sito di "rimborso truffa" con il bottone rosso lampeggiante.
- Non un sito di studio legale anni '90 con sfondi verdi e leoni.
- Non un sito di SaaS B2B in viola gradient.

---

## 2. Brand mood, pattern di layout, anti-pattern

### 2.1 Mood board verbale
> Studio attuariale + tribunale + bilancio annuale di una banca + pagina del Sole 24 Ore + interfaccia Bloomberg + romanzo di Camilleri rilegato in cuoio + Pantone Notte Mediterranea.

### 2.2 Pattern macro di pagina
Pattern dominante: **"Documento autorevole con prove crescenti"**.
La pagina è un dossier che si apre con la promessa, si chiude con l'azione, e nel mezzo accumula evidenze.

Sequenza emotiva:
1. Promessa → "scopri se la banca ti deve dei soldi".
2. Verità del mercato → "in Italia molti mutui hanno errori reali".
3. Autorità → Annibali e i matematici.
4. Metodo → AI + matematica + legale, raccontato con calma.
5. Risultati → 10 cause, 8 vinte, 400k+ recuperati.
6. Come funziona → flusso step semplice, pdf upload.
7. Dimostrazione → preview oscurata di una discrepanza.
8. Per chi è → privati, aziende, leasing, conti correnti.
9. Voci → testimonianze rilevanti.
10. Stampa → testate / sentenze / casistica.
11. FAQ → cosa NON è (no anatocismo automatico, no promesse vuote).
12. CTA finale → "carica il PDF, non ti costa nulla".

### 2.3 Pattern di layout dei singoli blocchi
- Hero a due colonne: copy + workspace mock con audit-rail discrepanze.
- Sezioni storytelling: full-width text + visual a destra con dati.
- Sezioni di prova: griglia di card (sentenze, testate, casi).
- Sezione metodo: timeline orizzontale con 5 step.
- Sezione Annibali: split 60/40 ritratto + bio + citazione + paper list.
- Sezione discrepancy: "ledger reveal" con interi numeri sfocati.
- Sezione FAQ: accordion con tono didattico, non vendita.
- CTA finale: full-bleed scuro con titolo serif grande.

### 2.4 Anti-pattern
- Niente carousel di logo cliente "Amazon, Apple, Google" che non hanno senso qui.
- Niente gradient viola/rosa "AI-style".
- Niente neon glow di tipo cyberpunk.
- Niente video di mani su tastiera in slow motion.
- Niente "Save money fast!!!".
- Niente popup di newsletter al primo scroll.
- Niente dark pattern (countdown finti, "solo oggi", "ultimi 2 posti").
- Niente loghi testate fasulle: o ce le abbiamo davvero, o non si mettono.
- Niente "9.8/10" tipo Trustpilot finto.
- Niente icone emoji nei titoli.

---

## 3. Palette dark mutui

### 3.1 Concetto
Tre temperature:
- **Notte profonda** per i fondi (autorità, tribunale, calma).
- **Oro denaro** per gli accenti azione (CTA principale, dato monetario positivo).
- **Smeraldo verifica** per dati positivi e conferme (es. "calcolo verificato", "discrepanza confermata").

Più due tinte di servizio:
- **Bordeaux discrepanza** per evidenziare l'errore della banca (mai allarmistico stile rosso warning).
- **Pietra istituzionale** per link, riferimenti normativi, link a sentenze.

### 3.2 Token semantici (CSS custom properties)

```css
:root {
  /* Fondali — Notte Mediterranea */
  --bg-deep:        #0A0E14; /* root background, sezioni hero */
  --bg-canvas:      #0F1620; /* superficie principale leggibile */
  --bg-panel:       #131C28; /* card "documento" */
  --bg-elevated:    #182233; /* card sopra panel, hover */
  --bg-overlay:     rgba(10, 14, 20, 0.72);
  --bg-translucent: rgba(255, 255, 255, 0.04);

  /* Inchiostro */
  --ink-primary:    #F5F7FA; /* titoli, body principale */
  --ink-secondary:  #B6C3D2; /* paragrafi secondari, meta */
  --ink-muted:      #6B7B8E; /* didascalie, hint */
  --ink-disabled:   #3F4A59; /* placeholder, disabled */
  --ink-inverse:    #0A0E14; /* testo su sfondi chiari/oro */

  /* Bordi e divisori */
  --border-soft:    rgba(255, 255, 255, 0.06);
  --border-default: rgba(255, 255, 255, 0.10);
  --border-strong:  rgba(255, 255, 255, 0.18);
  --border-gold:    rgba(212, 162, 76, 0.45);

  /* Accenti — Oro denaro autorità */
  --gold-50:        #FBF2DF;
  --gold-100:       #F1DDA8;
  --gold-200:       #E6C575;
  --gold-300:       #D9B158;
  --gold-400:       #D4A24C; /* CTA primary */
  --gold-500:       #B8862F;
  --gold-600:       #8F6420;
  --gold-700:       #5F4416;

  /* Accenti — Smeraldo verifica */
  --emerald-100:    #BFEEE7;
  --emerald-300:    #5FD8C8;
  --emerald-400:    #2EC4B6; /* badge "verificato", numeri recuperati */
  --emerald-500:    #1E9B90;
  --emerald-700:    #145E58;

  /* Servizio — Bordeaux discrepanza */
  --coral-100:      #F8C9C5;
  --coral-300:      #F08882;
  --coral-400:      #E45858; /* warning gentile */
  --coral-500:      #B83C3C;
  --coral-700:      #7A2424;

  /* Istituzionale — Pietra/Navy link */
  --navy-300:       #6B8EE3;
  --navy-400:       #4E74CC; /* link normativi, riferimenti */
  --navy-500:       #2F58A8;
  --navy-700:       #1A3470;

  /* Stati */
  --focus-ring:     0 0 0 3px rgba(212, 162, 76, 0.55);
  --focus-ring-emerald: 0 0 0 3px rgba(46, 196, 182, 0.50);
}
```

### 3.3 Uso per ruolo
- Body sui fondi `--bg-deep` / `--bg-canvas`: testo `--ink-primary` per titoli, `--ink-secondary` per paragrafi.
- Numerali "denaro recuperato" e dati di vittoria: `--gold-400` su `--bg-deep`, con underline leggero o eyebrow.
- Numerali "discrepanze trovate": `--coral-400` (mai per testi di paragrafo).
- Badge "verificato dal matematico" / "dato confermato": `--emerald-400` con micro-icona check.
- Link normativi (art. 1283 c.c., Cassazione SU 15130/2024, ecc.): `--navy-400` con underline.

### 3.4 Contrasto verificato
- `--ink-primary` (#F5F7FA) su `--bg-deep` (#0A0E14): contrasto ~17:1 → AAA per body.
- `--ink-secondary` (#B6C3D2) su `--bg-deep`: ~11:1 → AAA.
- `--ink-muted` (#6B7B8E) su `--bg-deep`: ~5.2:1 → AA per body, AAA per large.
- `--gold-400` (#D4A24C) su `--bg-deep`: ~8.0:1 → AAA per large text e UI accent.
- `--emerald-400` (#2EC4B6) su `--bg-deep`: ~8.4:1 → AAA per large text e icone.
- `--coral-400` (#E45858) su `--bg-deep`: ~5.9:1 → AA per body, AAA large.

### 3.5 Vietato
- Mai testi di paragrafo in oro o smeraldo: solo accenti, numeri, eyebrow.
- Mai testi sotto 4.5:1 in body (sotto 16px).
- Mai `--ink-muted` per testi importanti.
- Mai gradient oro+smeraldo+rosso sullo stesso elemento.

---

## 4. Typography stack e scala

### 4.1 Famiglie
- **Display Serif**: "Source Serif 4" oppure "Newsreader" — usata per H1, H2 hero, citazioni di Annibali, numeri da copertina.
- **Sans Body**: "Inter" var con `font-feature-settings: "ss01", "cv11", "tnum"` per cifre tabulari — usata per body, UI, microcopy.
- **Mono Numerica**: "JetBrains Mono" — usata per numeri di sentenze, codici sentenza, cifre nel ledger di discrepanze.

Fallback:
```css
--font-display: 'Source Serif 4', 'Newsreader', Georgia, 'Times New Roman', serif;
--font-body:    'Inter', system-ui, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif;
--font-mono:    'JetBrains Mono', 'IBM Plex Mono', ui-monospace, SFMono-Regular, monospace;
```

### 4.2 Scala
Usiamo una scala modulare con base 16px e ratio ~1.250 (major third).

| Token | rem | px | Uso |
|------|-----|----|-----|
| `--fs-xxs` | 0.6875 | 11 | hint legali |
| `--fs-xs`  | 0.75   | 12 | meta, label mono |
| `--fs-sm`  | 0.875  | 14 | microcopy |
| `--fs-md`  | 1.000  | 16 | body |
| `--fs-lg`  | 1.125  | 18 | body large, lead intro |
| `--fs-xl`  | 1.375  | 22 | h6, sub-section |
| `--fs-2xl` | 1.625  | 26 | h5 |
| `--fs-3xl` | 2.000  | 32 | h4, card title |
| `--fs-4xl` | 2.500  | 40 | h3, section |
| `--fs-5xl` | 3.250  | 52 | h2 |
| `--fs-6xl` | 4.250  | 68 | h1 desktop |
| `--fs-7xl` | 5.500  | 88 | hero display, ultra |

### 4.3 Line-height
- Body: 1.55 (calmo, leggibile).
- Lead intro: 1.45.
- H1 display: 1.05-1.1.
- H2/H3: 1.15-1.2.
- Mono numerici: 1.25.

### 4.4 Weight
- Display Serif: 400 (regular) per body display, 500 (medium) per accentuazione discreta.
- Sans: 400 body, 500 ui label, 600 button, 700 raro per highlight.
- Evitare 800/900 → sembra urlato.

### 4.5 Tracking
- Display: -0.01em (leggero negativo, autorevole).
- Eyebrow mono caps: 0.18em (label tecnici).
- Body: 0em.

### 4.6 Esempi semantici

```scss
.h-display {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 1.5rem + 4vw, 4.25rem);
  font-weight: 400;
  line-height: 1.08;
  letter-spacing: -0.01em;
  color: var(--ink-primary);
}

.h-eyebrow {
  font-family: var(--font-body);
  font-size: var(--fs-xs);
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-secondary);
}

.t-lead {
  font-family: var(--font-body);
  font-size: clamp(1rem, 0.85rem + 0.6vw, 1.125rem);
  line-height: 1.55;
  color: var(--ink-secondary);
}

.t-mono {
  font-family: var(--font-mono);
  font-variant-numeric: tabular-nums;
  font-feature-settings: 'tnum';
  letter-spacing: 0;
}
```

### 4.7 Numeri da copertina
I numeri di prova (es. "400.000€ restituiti", "8/10 cause vinte", "10 anni di prescrizione") sono **serif display** in oro, mai sans. Sono il volto della prova.

---

## 5. Spacing system, grid, breakpoints

### 5.1 Spacing scale
Base 4px. Una sola scala condivisa.

| Token | px |
|-------|----|
| `--sp-0`  | 0  |
| `--sp-1`  | 4  |
| `--sp-2`  | 8  |
| `--sp-3`  | 12 |
| `--sp-4`  | 16 |
| `--sp-5`  | 20 |
| `--sp-6`  | 24 |
| `--sp-8`  | 32 |
| `--sp-10` | 40 |
| `--sp-12` | 48 |
| `--sp-16` | 64 |
| `--sp-20` | 80 |
| `--sp-24` | 96 |
| `--sp-32` | 128 |

Spacing verticale fra sezioni: 96-128px desktop, 56-72px mobile.

### 5.2 Container
- Container massimo `1280px`, padding laterale 24px mobile / 40px desktop.
- Container reading `720px` per blocchi testuali lunghi (es. metodo, FAQ, manifesto).

### 5.3 Grid
- 12 colonne, gap `24px` desktop, `16px` mobile.
- Bootstrap come base, ma con custom container e gutter.

### 5.4 Breakpoints
```scss
$bp-xs: 360px;   // smartphone piccolo
$bp-sm: 576px;   // smartphone
$bp-md: 768px;   // tablet portrait
$bp-lg: 1024px;  // tablet landscape / laptop piccolo
$bp-xl: 1280px;  // desktop standard
$bp-2xl: 1600px; // desktop largo
```

Mobile-first: scrivere i CSS pensando 375px, poi salire.

### 5.5 Z-index scale
```css
:root {
  --z-base:    0;
  --z-card:    10;
  --z-popover: 100;
  --z-sticky:  500;
  --z-overlay: 800;
  --z-modal:   1000;
  --z-toast:   1100;
}
```

---

## 6. Elevation, shadows, blur, glass

### 6.1 Principio
In dark theme le ombre nere non funzionano. Si usano:
- bordi luminosi (highlight)
- glow di colore tenue
- elevation come variazione di luminosità del fondo

### 6.2 Token

```css
:root {
  --elev-1: 0 1px 0 rgba(255, 255, 255, 0.04) inset,
            0 1px 2px rgba(0, 0, 0, 0.4);
  --elev-2: 0 1px 0 rgba(255, 255, 255, 0.05) inset,
            0 8px 24px rgba(0, 0, 0, 0.45);
  --elev-3: 0 1px 0 rgba(255, 255, 255, 0.06) inset,
            0 24px 64px rgba(0, 0, 0, 0.55);
  --glow-gold:    0 0 0 1px rgba(212, 162, 76, 0.35),
                  0 12px 40px rgba(212, 162, 76, 0.12);
  --glow-emerald: 0 0 0 1px rgba(46, 196, 182, 0.35),
                  0 12px 40px rgba(46, 196, 182, 0.10);
}
```

### 6.3 Glass / blur
Usato con parsimonia, solo per:
- nav scroll mode (`backdrop-filter: blur(14px) saturate(140%)`),
- workspace overlay del PDF reveal,
- modali di conferma.

### 6.4 Vietato
- Niente glass su card di sezione: rovina la leggibilità.
- Niente shadow nera profonda diffusa: rende il sito "amatoriale dark".

---

## 7. Componenti UI

Per ogni componente: token, stati, accessibilità, dipendenze.

### 7.1 Button
Variants:
- `btn-gold` (CTA primaria)
- `btn-ink` (CTA secondaria, inverso)
- `btn-ghost` (terziaria, testuale + freccia)
- `btn-tonal` (utility, su card)
- `btn-emerald` (azione "conferma analisi")
- `btn-link` (testuale puro)

```scss
.btn {
  --pad-x: 1.25rem;
  --pad-y: 0.75rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: var(--pad-y) var(--pad-x);
  border-radius: 999px;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: var(--fs-md);
  letter-spacing: 0.01em;
  border: 1px solid transparent;
  transition: transform 200ms ease, background 200ms ease,
              box-shadow 200ms ease, color 200ms ease;
  cursor: pointer;
}

.btn:focus-visible { box-shadow: var(--focus-ring); outline: none; }
.btn:active { transform: translateY(1px); }

.btn-gold {
  background: var(--gold-400);
  color: var(--ink-inverse);
  box-shadow: var(--glow-gold);
}
.btn-gold:hover {
  background: var(--gold-300);
  box-shadow: 0 0 0 1px var(--gold-200),
              0 16px 48px rgba(212, 162, 76, 0.20);
}

.btn-ghost {
  background: transparent;
  color: var(--ink-primary);
  border-color: var(--border-default);
}
.btn-ghost:hover {
  background: var(--bg-translucent);
  border-color: var(--border-strong);
}

.btn-emerald {
  background: var(--emerald-400);
  color: var(--ink-inverse);
}
```

Sizes:
- `btn-sm` 36px h.
- `btn-md` 44px h (default, accessibility friendly).
- `btn-lg` 52px h, usata in hero e final CTA.

### 7.2 Card "Documento"
Card che evoca un foglio di analisi.

```scss
.card-doc {
  background: var(--bg-panel);
  border: 1px solid var(--border-soft);
  border-radius: 14px;
  padding: var(--sp-6) var(--sp-6);
  box-shadow: var(--elev-2);
  position: relative;
}
.card-doc::before {
  content: '';
  position: absolute;
  inset: 0 auto 0 0;
  width: 3px;
  background: linear-gradient(180deg,
    var(--gold-400) 0%, var(--gold-600) 100%);
  border-radius: 14px 0 0 14px;
  opacity: 0.6;
}
```

### 7.3 KPI tile
Numero grande + label.

```scss
.kpi {
  display: flex;
  flex-direction: column;
  gap: var(--sp-1);
  padding: var(--sp-5);
  background: var(--bg-canvas);
  border: 1px solid var(--border-soft);
  border-radius: 12px;
}
.kpi__value {
  font-family: var(--font-display);
  font-size: var(--fs-4xl);
  color: var(--gold-400);
  line-height: 1.05;
  letter-spacing: -0.01em;
}
.kpi__label {
  font-family: var(--font-body);
  font-size: var(--fs-sm);
  color: var(--ink-secondary);
  letter-spacing: 0.04em;
}
```

### 7.4 Discrepancy badge
Per evidenziare un errore trovato (oscurato in demo).

```scss
.disc-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  font-family: var(--font-mono);
  font-size: var(--fs-xs);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  background: rgba(228, 88, 88, 0.10);
  color: var(--coral-300);
  border: 1px solid rgba(228, 88, 88, 0.30);
}
.disc-badge--ok {
  background: rgba(46, 196, 182, 0.10);
  color: var(--emerald-300);
  border-color: rgba(46, 196, 182, 0.30);
}
```

### 7.5 Audit-rail (lista discrepanze nel workspace mock)

```scss
.audit-rail {
  display: flex;
  flex-direction: column;
  gap: var(--sp-3);
}
.audit-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: var(--sp-3) var(--sp-4);
  border: 1px solid var(--border-soft);
  border-left: 3px solid var(--coral-400);
  border-radius: 0 10px 10px 0;
  background: rgba(228, 88, 88, 0.04);
}
.audit-item--info { border-left-color: var(--navy-400);
  background: rgba(78, 116, 204, 0.06); }
.audit-item--ok   { border-left-color: var(--emerald-400);
  background: rgba(46, 196, 182, 0.05); }
```

### 7.6 Document mock (workspace)
Una "pagina" che mostra righe di testo astratte sotto forma di blocchi orizzontali tipo "redacted".

```scss
.doc-page {
  background: var(--bg-canvas);
  border: 1px solid var(--border-soft);
  border-radius: 10px;
  padding: var(--sp-6);
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.doc-line {
  display: block;
  height: 8px;
  border-radius: 4px;
  background: var(--bg-elevated);
}
.doc-line--accent { background: var(--gold-700); opacity: 0.6; }
.doc-line--warn   { background: var(--coral-700); opacity: 0.55; }
```

### 7.7 Trust strip (testate / sentenze)
Strip con loghi monocromatici in bianco al 60%, layout flex con gap ampio, separatore verticale leggero.

```scss
.trust-strip {
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-8);
  align-items: center;
  justify-content: center;
  opacity: 0.85;
}
.trust-strip img {
  height: 26px;
  filter: brightness(0) invert(1);
  opacity: 0.7;
}
```

### 7.8 Quote / Pull quote
```scss
.pull-quote {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 1rem + 1vw, 2rem);
  line-height: 1.3;
  color: var(--ink-primary);
  border-left: 3px solid var(--gold-400);
  padding-left: var(--sp-6);
}
.pull-quote__cite {
  display: block;
  margin-top: var(--sp-3);
  font-family: var(--font-body);
  font-size: var(--fs-sm);
  color: var(--ink-secondary);
  letter-spacing: 0.04em;
}
```

### 7.9 FAQ accordion
```scss
.faq-item {
  border-bottom: 1px solid var(--border-soft);
}
.faq-item__trigger {
  width: 100%;
  text-align: left;
  padding: var(--sp-5) 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  color: var(--ink-primary);
  font-family: var(--font-display);
  font-size: var(--fs-xl);
}
.faq-item__panel {
  max-height: 0;
  overflow: hidden;
  transition: max-height 320ms ease, padding 320ms ease;
  color: var(--ink-secondary);
}
.faq-item[aria-expanded='true'] .faq-item__panel {
  max-height: 400px;
  padding-bottom: var(--sp-5);
}
```

### 7.10 Upload zone (PDF mutuo)
Componente "drop area" generosa nella sezione "Come funziona".

```scss
.upload-zone {
  border: 1.5px dashed var(--border-strong);
  border-radius: 16px;
  padding: var(--sp-12);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--sp-4);
  background: linear-gradient(180deg, var(--bg-panel) 0%, var(--bg-deep) 100%);
  transition: border-color 200ms ease, background 200ms ease;
}
.upload-zone:hover,
.upload-zone--active {
  border-color: var(--gold-400);
  background: linear-gradient(180deg,
    rgba(212, 162, 76, 0.05) 0%, var(--bg-deep) 100%);
}
.upload-zone__icon {
  width: 64px;
  height: 64px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(212, 162, 76, 0.10);
  color: var(--gold-300);
}
```

### 7.11 Testimonial card
```scss
.tst-card {
  background: var(--bg-panel);
  border: 1px solid var(--border-soft);
  border-radius: 16px;
  padding: var(--sp-6);
  display: flex;
  flex-direction: column;
  gap: var(--sp-4);
}
.tst-quote {
  font-family: var(--font-display);
  font-size: var(--fs-xl);
  color: var(--ink-primary);
  line-height: 1.35;
}
.tst-amount {
  font-family: var(--font-display);
  font-size: var(--fs-3xl);
  color: var(--emerald-400);
  letter-spacing: -0.01em;
}
.tst-meta {
  display: flex;
  gap: var(--sp-3);
  align-items: center;
  color: var(--ink-muted);
  font-size: var(--fs-sm);
}
```

### 7.12 Form field
```scss
.field {
  display: flex;
  flex-direction: column;
  gap: var(--sp-2);
}
.field__label {
  font-size: var(--fs-sm);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink-secondary);
}
.field__input {
  background: var(--bg-canvas);
  border: 1px solid var(--border-default);
  border-radius: 10px;
  padding: 0.75rem 1rem;
  color: var(--ink-primary);
  font-family: var(--font-body);
  font-size: var(--fs-md);
  transition: border-color 200ms ease, background 200ms ease;
}
.field__input::placeholder { color: var(--ink-muted); }
.field__input:focus {
  border-color: var(--gold-400);
  outline: none;
  box-shadow: var(--focus-ring);
}
.field__error {
  color: var(--coral-300);
  font-size: var(--fs-xs);
}
```

### 7.13 Tooltip + popover
Sempre sopra `--z-popover`, freccia con SVG, contenuto in `--bg-elevated`, testo in `--ink-primary`.

### 7.14 Tag normativo
Pillola riferimento articolo o sentenza, monocromatica navy.
```scss
.tag-norm {
  display: inline-flex;
  padding: 2px 8px;
  border-radius: 6px;
  background: rgba(78, 116, 204, 0.12);
  color: var(--navy-300);
  font-family: var(--font-mono);
  font-size: var(--fs-xs);
  letter-spacing: 0.04em;
}
```

### 7.15 Progress bar (multi-step)
Per il flusso upload → preview → contatto.
- Lunga 100%, divisa in 4-5 step.
- Step attivo `--gold-400`, completati `--emerald-400`, futuri `--ink-disabled`.

### 7.16 Avatar autorità
Avatar Annibali con cornice oro sottile e nameplate sotto. Sempre fotografia, mai illustrazione.

### 7.17 Cell-mock (smartphone mockup per demo dal vivo)
Componente prioritario: usato in hero (in alternativa o accanto al workspace mock desktop) e nella sezione "Come funziona" sopra il flusso step. Stefano deve poterlo aprire da cellulare durante una presentazione e mostrare il caricamento del PDF e la preview dei risultati come se fosse un'app reale.

Specifiche:
- Mockup di smartphone in vista frontale, con notch o dynamic island stilizzata in SVG (mai immagine di iPhone reale: per evitare problemi di trademark e per restare in linea con la palette).
- Frame esterno in `--ink-disabled` con corner radius 36px, bordo soft `--border-strong`, ombra `--elev-2`.
- Schermo interno: 360×780 logical, `--bg-canvas`, padding 16px.
- Status bar in alto stilizzata (orario, segnale, batteria) con `--ink-muted`.
- Contenuto schermo: variabile per stato (upload empty, upload progress, results blurred preview).
- Animazioni in 3 step automatici (interattivi su tap):
  1. Empty upload zone con CTA "Carica il PDF".
  2. Progress stepper: "Estraggo il piano… Verifico tassi… Calcolo discrepanze…".
  3. Result blurred preview con due discrepancy badge visibili e overlay "Procedi".

```scss
.cell-mock {
  --cell-w: 320px;
  --cell-h: 660px;
  width: var(--cell-w);
  height: var(--cell-h);
  background: var(--ink-disabled);
  border: 1px solid var(--border-strong);
  border-radius: 36px;
  padding: 12px;
  box-shadow: var(--elev-3);
  position: relative;
  isolation: isolate;
}
.cell-mock__notch {
  position: absolute;
  top: 18px;
  left: 50%;
  transform: translateX(-50%);
  width: 96px;
  height: 24px;
  background: var(--bg-deep);
  border-radius: 999px;
  z-index: 1;
}
.cell-mock__screen {
  width: 100%;
  height: 100%;
  background: var(--bg-canvas);
  border-radius: 26px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
}
.cell-mock__statusbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px 8px;
  font-family: var(--font-mono);
  font-size: var(--fs-xxs);
  color: var(--ink-muted);
}
.cell-mock__body {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
  overflow: hidden;
}
.cell-mock__cta {
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 16px;
  display: flex;
  justify-content: center;
}
```

#### Stati del cell-mock
- **state-empty**: schermo con `upload-zone` ridotta + CTA "Carica il PDF".
- **state-loading**: stepper di analisi animato + bar di progress oro.
- **state-result**: header report + 2 discrepancy badge visibili + righe blurred + overlay sticky bottom "Procedi".

#### Tap su cell-mock
- Su desktop: il mock alterna i tre stati ogni 4 secondi.
- Su mobile: tap singolo cambia stato.
- Rispettare `prefers-reduced-motion`: stato statico su result se l'utente preferisce.

#### Posizionamento sul sito
- **Hero**: a destra del copy su desktop (>1024px), sotto il copy su mobile. Sostituisce il workspace mock desktop nelle viste mobile, lo affianca su desktop largo.
- **Sezione flow**: cell-mock grande, in primo piano, accanto allo stepper dei 5 step. Quando l'utente scrolla, ogni step illumina la sezione corrispondente del cell-mock.

#### Accessibilità
- `aria-label` esplicito: "Anteprima animata dell'app di analisi mutui su smartphone."
- Tutti gli stati hanno equivalente testuale leggibile nascosto (`.visually-hidden`).
- Non sostituisce contenuto: la stessa informazione è disponibile in testo nelle sezioni vicine.

---

## 8. CTA system e gerarchia di conversione

### 8.1 Gerarchia
1. **CTA primaria**: "Avvia la pre-analisi gratuita" → carica PDF / form upload.
2. **CTA secondaria**: "Vedi un esempio di analisi" → demo oscurata.
3. **CTA tonal**: "Parla con un consulente" → WhatsApp / call.
4. **CTA testuale**: "Scarica il vademecum" → lead magnet PDF educativo.

Tutte le CTA primarie nel sito devono avere lo stesso wording. Variazioni minori solo se il contesto lo richiede, ma stessa azione.

### 8.2 Posizionamento
- Hero (sopra la piega).
- Sezione metodo step 5.
- Sezione dimostrazione discrepanza, sotto la preview oscurata.
- Sezione testimonianze, dopo il caso "Sandro-style".
- CTA finale full-bleed.
- Sticky bar dopo lo scroll del 30% (ma non aggressiva).

### 8.3 Wording
- Verbi in 2a singolare: "scopri", "verifica", "carica".
- Mai imperativo aggressivo.
- Sempre "gratis" esplicito quando lo è.

### 8.4 Microcopy attorno alla CTA
- Sotto la CTA primaria: "Nessuna carta di credito. Risposta entro 24 ore. I tuoi documenti restano tuoi."
- Sotto CTA contatto: "Risponde una persona vera, non un bot."

### 8.5 Sticky CTA
Bar fissa in alto dopo scroll del hero. Contiene logo small + CTA primaria. Su mobile diventa bottom bar fissa, non blocca contenuto.

### 8.6 Misurazione
- Eventi GA4/Plausible: `cta_hero_click`, `cta_demo_view`, `upload_start`, `upload_complete`, `result_view`, `contact_submit`.

---

## 9. Motion system

### 9.1 Principi
- Movimento per **rivelare**, non per intrattenere.
- Mai animazioni che bloccano la lettura.
- Durate corte: 150-280ms feedback, 300-600ms reveal.
- `cubic-bezier(0.2, 0.7, 0.1, 1)` come easing principale.
- `prefers-reduced-motion`: disabilita tutto eccetto i fade.

### 9.2 Token
```css
:root {
  --ease-out: cubic-bezier(0.2, 0.7, 0.1, 1);
  --ease-in:  cubic-bezier(0.5, 0, 0.75, 0);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --dur-1: 120ms;
  --dur-2: 200ms;
  --dur-3: 320ms;
  --dur-4: 480ms;
  --dur-5: 720ms;
}
@media (prefers-reduced-motion: reduce) {
  :root {
    --dur-1: 0ms;
    --dur-2: 0ms;
    --dur-3: 0ms;
    --dur-4: 0ms;
    --dur-5: 0ms;
  }
}
```

### 9.3 Pattern di animazione
- **fadeUp**: opacity 0→1, translateY 12px→0, durata 480ms `--ease-out`. Usato su titoli e blocchi text.
- **stagger**: applicato a liste di figli con delay 60ms l'uno dall'altro.
- **scaleIn**: opacity 0→1, scale 0.96→1, durata 600ms. Usato su workspace mock hero.
- **counter**: contatore numerico che sale da 0 al valore reale, easing `--ease-spring`, durata 1600ms al primo entering in viewport.
- **shimmer**: gradient orizzontale che scorre sopra le righe blurred del preview discrepanze.
- **scroll-progress**: barra in alto larga 2px che si riempie in `--gold-400` con `scrollYProgress`.
- **magnetic CTA**: leggero traslate del bottone CTA primaria sull'asse del mouse, max 6px, attivo solo desktop.
- **doc reveal**: nella sezione dimostrazione, sliding overlay che si solleva di 30% mostrando le prime due discrepanze; il resto resta oscurato con testo "sblocca con la consulenza".

### 9.4 Implementazione Angular
Niente Framer Motion (è React). Usiamo:
- Angular animations API per page-level transitions.
- CSS transitions per micro-interactions.
- IntersectionObserver per fadeUp/staggerOnEnter.
- Web Animations API per counter (numeric easing su `Number`).

### 9.5 Direttive Angular proposte
- `@fadeUp` → applica classe `is-revealed` su intersect.
- `@staggerChildren` → applica stagger su `:host > *`.
- `@scaleIn` → reveal con scale + opacity.
- `@countUp` → contatore numerico animato.
- `@magnetic` → magnetic hover su pointer fine.

---

## 10. Iconografia, illustrazione, fotografia

### 10.1 Icone
- SVG monocromatiche, `currentColor`.
- Stroke 1.5px, corner radius coerente.
- Set di riferimento: Lucide o Phosphor (regular weight).
- Dimensioni standard: 16, 20, 24, 32, 48.
- Niente emoji nei testi UI. Mai.

### 10.2 Illustrazione
- Tono editoriale: ritagli vettoriali geometrici tipo "Il Sole 24 Ore inserto economia" o "The Economist".
- Palette ridotta: ink, gold, emerald.
- Niente personaggi stile "Notion": cose serie.
- Diagrammi finanziari semplificati: piano di ammortamento, andamento rata, capitale residuo.

### 10.3 Fotografia
- Ritratti reali in luce dura, b/n o duotone gold/dark.
- Annibali e team matematico: ritratti professionali, sguardo, occhio chiaro.
- Niente stock photo.

### 10.4 Loghi terzi
- Testate giornalistiche, tribunali, università → monocromatici bianchi al 65% opacity.
- Loghi banche → mai sul sito (no naming and shaming senza permesso legale).

---

## 11. Sezioni della landing

Per ogni sezione: scopo, contenuto chiave, pattern visivo, CTA, KPI di conversione.

### 11.1 Navigation
- Logo + 4 voci: "Metodo", "Casi", "Annibali", "Strumento".
- CTA primaria a destra.
- Sticky con `backdrop-filter` dopo 80px di scroll.
- Mobile: hamburger + drawer full screen `--bg-deep`.

### 11.2 Hero
- Eyebrow: "Analisi mutui con AI + matematici, con il Prof. Antonio Annibali al tavolo"
- H1 display: promessa centrale.
- Sub: 2 righe di chiarimento.
- 2 CTA: primaria (avvia analisi) + ghost (vedi un esempio).
- Proof strip: 3 chip dati ("10 cause, 8 vinte", "€400k+ recuperati", "Annibali al nostro tavolo").
- **Mockup di destra (priorità demo)**: smartphone mock (`cell-mock`) animato che mostra il flusso (upload → analisi → preview). Su desktop largo (≥ 1280px) opzionale workspace mock secondario a fianco.

Note di implementazione (priorità per la demo dal vivo):
- Il `cell-mock` deve essere **interattivo**: tap/click cambia stato. Stefano lo userà da telefono.
- Su mobile, il cell-mock va sotto il copy, full-width centrato.
- Su desktop il cell-mock è circa 320×660px, ruotato leggermente di -4deg per dare profondità, ombra `--elev-3` + glow gold sottile.

KPI: % click CTA primaria su utenti hero-visible, interazioni col cell-mock.

### 11.3 La verità sui mutui in Italia
- H2 serif: "La banca non sbaglia mai. Tranne quando sbaglia, e succede più spesso di quanto pensi."
- 4 KPI tile: tasso medio mutuo 3,43%, 86% mutui fissi, importo medio €161k, durate 25-30 anni (43%).
- Lead intro che spiega anatocismo, mora illegittima, TAEG falsato, capitalizzazione non dichiarata, ricalcoli dopo sospensione.

KPI: scroll depth post-hero.

### 11.4 La figura: Antonio Annibali
- Split 60/40. Foto + nameplate.
- Pull quote serif con citazione di Annibali.
- Bio sintetica: Professore ordinario di Matematica Finanziaria alla Sapienza e LUISS. Attuario. Ha pubblicato studi che dimostrano il fenomeno anatocistico nei mutui alla francese in capitalizzazione composta.
- Lista pubblicazioni essenziali (max 5).
- Badge "Formazione del nostro team matematico".

KPI: click su "Le pubblicazioni di Annibali" / scroll.

### 11.5 Il metodo
- H2: "Tre cose insieme: la matematica, l'AI, la legge."
- 3 card-doc side by side:
  - "Matematica" — il team formato da Annibali. Modelli verificati. Tassi, regime, mora, sospensioni, TAEG.
  - "AI" — pre-analisi automatica del PDF in pochi minuti. Riduce falsi positivi che un consulente in 30 minuti non vede.
  - "Legge" — quando l'analisi mostra discrepanze, parte la causa. Il team legale ha vinto 8/10. Senza anticipi.
- Linea-citazione: "L'AI sbaglia meno di un umano. Un umano + AI sbaglia ancora meno. E se al tavolo c'è anche un matematico come Annibali, la discrepanza si trova."

KPI: click "Come funziona il flusso" → scroll alla sezione 11.7.

### 11.6 Risultati (data wall)
- 4 KPI grandi in fila:
  - **10** cause portate avanti
  - **8/10** vinte
  - **€400.000+** restituiti ai clienti
  - **€0** anticipato dai clienti
- Una riga sotto: "Numeri reali, non promesse di marketing. Aggiornati al [DATA]."
- CTA gold "Vedi le sentenze" → modale con elenco/oscurati.

KPI: time-on-section, click sulle sentenze.

### 11.7 Come funziona (flusso step)
Timeline orizzontale 5 step, su mobile diventa vertical timeline:
1. **Carichi il PDF del mutuo o del leasing.** Drop area + tutorial.
2. **L'AI lo analizza.** In pochi minuti il sistema estrae piano, tassi, TAEG, condizioni.
3. **Vedi una prima preview.** Se il sistema non trova nulla, lo dice. Se trova segnali, te lo dice con onestà.
4. **Ti ricontattiamo.** Un consulente prende in carico, raccoglie i dati mancanti, fa l'analisi completa.
5. **Se la banca ti deve dei soldi, partiamo.** Causa, senza anticipi.

Visual: **cell-mock** prominente al centro o di lato, sincronizzato con lo stepper. Quando l'utente entra in viewport o clicca uno step, il cell-mock cambia stato per mostrare quel momento del flusso (es. step 1 = upload empty, step 2 = analizzando, step 3 = result preview).
Su mobile lo stepper resta verticale e il cell-mock è sopra (fixed-height, centrato).

KPI: hover/click sugli step, interazioni col cell-mock, click su "Inizia ora".

### 11.8 Cosa scopriamo (tipologie di discrepanze)
Griglia di card piccole con discrepancy-badge. Esempi:
- Anatocismo da capitalizzazione composta su rapporti di conto corrente (Cass. 18664/2023).
- Discrasia TAEG/ISC indicato in contratto vs. reale (es. Tribunale di Avezzano 168/2026, oltre €5.900 rimborsati).
- Mora superiore alla soglia usura.
- Ammortamento ricalcolato male dopo sospensione/moratoria.
- Penali di estinzione anticipata fuori dai limiti normativi.
- Spese accessorie non incluse nel TAEG.

Sotto la griglia: micro-disclaimer onesto: "Non tutti i mutui hanno errori. La Cassazione SU 15130/2024 ha chiarito che il piano alla francese standard non è di per sé anatocismo. Per questo serve un'analisi reale, non un proclama."

KPI: visualizzazione + click su una card.

### 11.9 Demo: la preview oscurata
- Sezione "Ecco cosa abbiamo trovato in un caso reale" con simulazione di un report con righe blurred.
- 2-3 discrepancy-badge visibili.
- Overlay con messaggio: "Per vedere il dettaglio serve l'analisi completa. È probabile che la banca ti debba dei soldi."
- CTA gold "Avvia la mia analisi".

KPI: scroll depth, CTA click.

### 11.10 Per chi è
3 colonne con icona + lista bullet:
- **Privati**: mutuo prima casa, mutuo seconda casa, ristrutturazione.
- **Aziende e P.IVA**: conto corrente, leasing, finanziamento medio termine.
- **Decreti e precetti**: se hai ricevuto una richiesta di pagamento, c'è tempo per analizzarla (rimanda alla sezione SOS sotto).

KPI: filtro/segmentazione utente.

### 11.10.bis SOS bancario (sezione d'emergenza)
- Sezione dedicata a chi è già in mezzo a un atto. Ton: assertivo e calmo, mai allarmistico.
- Eyebrow + titolo (vedi copy deck cap. 11.bis).
- 4 SOS card affiancate (2x2 desktop, 1x4 mobile):
  - SOS Decreto ingiuntivo (scadenza 40gg)
  - SOS Precetto (10gg minimo)
  - SOS Recupero crediti
  - SOS Altro (pignoramenti, fideiussioni)
- Visual: leggera dominante `--coral-700` sui bordi/eyebrow per segnalare l'urgenza. Card body invariata (palette `--bg-panel`).
- Ogni card ha un "deadline pill" in alto a destra che mostra il tempo disponibile (es. "40 giorni").
- CTA primary "Parla con noi adesso" + numero verde grande sotto.
- KPI: click su CTA SOS, telefonate generate.

```scss
.sos-card {
  position: relative;
  background: var(--bg-panel);
  border: 1px solid var(--border-soft);
  border-left: 3px solid var(--coral-400);
  border-radius: 14px;
  padding: var(--sp-6);
}
.sos-card__eyebrow {
  font-family: var(--font-mono);
  font-size: var(--fs-xs);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--coral-300);
}
.sos-card__deadline {
  position: absolute;
  top: var(--sp-5);
  right: var(--sp-5);
  font-family: var(--font-mono);
  font-size: var(--fs-xs);
  background: rgba(228, 88, 88, 0.10);
  color: var(--coral-300);
  border: 1px solid rgba(228, 88, 88, 0.30);
  padding: 4px 8px;
  border-radius: 999px;
}
```

### 11.11 Voci (testimonianze)
- Caso "Sandro" stile video + caption.
- 3-4 testimonial card con quote + amount restituito.
- Tutte con consenso esplicito + nome puntato (es. "Marco R., Torino").

KPI: video play rate.

### 11.12 Annibali Pillole
- 3-4 card video brevi (60-90s) sotto forma di "Pillole del matematico":
  - "Cos'è l'anatocismo, spiegato in 2 minuti."
  - "Perché serve la matematica per leggere un piano di ammortamento."
  - "Quando la sentenza della Cassazione 15130 vale per te e quando no."
  - "Il rischio della perizia improvvisata."

KPI: play rate + completamento.

### 11.13 Stampa & Sentenze
- Strip testate + griglia sentenze rilevanti (anno, tribunale, importo riconosciuto).

### 11.14 FAQ
Almeno 10 domande oneste:
- "Funziona davvero su qualsiasi mutuo?"
- "Cosa succede se non trovate niente?"
- "Quanto costa la pre-analisi?"
- "Quanto costa la causa?"
- "Quanto può durare?"
- "Il mio mutuo è estinto da 8 anni: posso ancora?"
- "Posso fare l'analisi anche su un leasing?"
- "Cosa fa l'AI esattamente?"
- "I miei documenti restano riservati?"
- "Cosa cambia rispetto a un altro studio legale o consulente?"
- "Se la Cassazione dice che alla francese non c'è anatocismo, perché vi rivolgo a voi?"

### 11.15 CTA finale
Full-bleed, scuro, titolo serif grande, sotto CTA gold + ghost. Microcopy rassicurante.

### 11.16 Footer
- Logo + payoff.
- 4 colonne link: Servizio, Metodo, Risorse, Legali.
- Dati società + P.IVA.
- Statuto associazione (se prevista).
- Riferimenti privacy, cookie, condizioni.
- Sticker accessibility statement.

---

## 12. Stati: vuoto, errore, caricamento

### 12.1 Empty
Usato in dashboard interna: "Nessun documento caricato ancora. Carica un PDF di mutuo, leasing o finanziamento per iniziare."

### 12.2 Error
Su upload fallito: copy umano, non "Error 500". Es. "Non siamo riusciti a leggere questo file. Riprova con un PDF leggibile o contattaci, lo apriamo manualmente."

### 12.3 Loading
- Skeleton screen per i blocchi che caricano (no spinner se possibile).
- Su upload: progress bar dorata + shimmer.
- Su analisi AI: stepper testuale ("Estrazione del piano…", "Verifica tassi…", "Confronto regime…", "Calcolo discrepanze…").

### 12.4 No-result
Quando l'AI non trova niente: tono onesto e umano. "Da quello che vediamo, il tuo contratto sembra regolare. Se vuoi un'analisi approfondita, possiamo comunque farla: ci sono casi in cui le discrepanze si vedono solo guardando da vicino."

---

## 13. Accessibilità (WCAG 2.2 AA target)

### 13.1 Contrasto
- Tutti i testi body ≥ 4.5:1.
- Tutti gli accenti e UI elementi ≥ 3:1.
- CTA verificate con tool (Stark, axe).

### 13.2 Focus
- `:focus-visible` con `--focus-ring` su tutti gli elementi interattivi.
- Mai `outline: 0` senza alternativa.

### 13.3 Tastiera
- Skip-link in alto: "Vai al contenuto".
- Tab order coerente.
- Menu mobile chiudibile con `Esc`.

### 13.4 ARIA
- Landmark `<header>`, `<main>`, `<nav>`, `<footer>`.
- `aria-expanded` su accordion FAQ.
- `aria-current="page"` sui link nav.
- Form: `label` esplicite, errori associati con `aria-describedby`.

### 13.5 Lingua
- `<html lang="it">`.
- Riferimenti normativi italiani.
- Accenti corretti (è, ò, à, à, ì, ù).

### 13.6 Motion
- `prefers-reduced-motion`: rimuove parallax, counter, magnetic, shimmer.

### 13.7 Documenti
- PDF di output (perizia, esempio) accessibili (tagged).

### 13.8 Screen reader
- Numeri prova hanno `aria-label="ottocento mila euro restituiti"` se decorativi.
- Discrepancy-badge usano un aria-label esplicito.

---

## 14. Performance budget

- LCP ≤ 2.5s su 4G.
- INP ≤ 200ms.
- CLS ≤ 0.05.
- JS payload iniziale ≤ 180kb gzip.
- CSS critico inline ≤ 14kb.
- Lazy load di immagini, video, modali oltre piega.
- WebP + AVIF con fallback.
- Font subset (latin-ext per accenti italiani) e `font-display: swap`.
- Niente librerie pesanti (no jQuery, no lodash full, no moment).
- Bundle splitting per la sezione "strumento upload" (carica solo se si entra nel flusso).

---

## 15. Implementazione (SCSS / Bootstrap / Angular)

### 15.1 Stack
- Angular 20 (default Angular CLI).
- Bootstrap 5.3 come reset / utility / grid (già nel `client/package.json`).
- SCSS modulare nei componenti.
- File globali in `client/src/styles/`:
  - `_tokens.scss` — variabili CSS custom properties
  - `_typography.scss`
  - `_layout.scss`
  - `_components.scss`
  - `_motion.scss`
  - `_a11y.scss`

### 15.2 Modulo Angular `landing`
Replicare la struttura del progetto attuale `client/src/app/modules/landing/`:
```
landing/
  components/
    nav/
    hero/
    truth/        // verità sui mutui
    authority/    // Annibali
    method/       // matematica + AI + legge
    results/      // data wall
    flow/         // come funziona
    findings/     // cosa scopriamo
    demo-reveal/  // preview oscurata
    audience/     // per chi è
    testimonials/
    pills/        // pillole Annibali
    press/        // stampa + sentenze
    faq/
    cta-final/
    footer/
  pages/
    landing-page/
  services/
    upload.service.ts
    analytics.service.ts
  interfaces/
    discrepancy.interface.ts
    kpi.interface.ts
  config/
    landing.config.ts
```

### 15.3 i18n
Tutti i testi in `client/src/assets/i18n/it.json`. Mai testo hardcoded in HTML o TS.
Struttura chiavi:
```
landing.nav.metodo
landing.hero.eyebrow
landing.hero.title
landing.hero.subtitle
landing.hero.primaryCta
landing.truth.title
landing.truth.kpis[0].value
landing.authority.bio
...
```

### 15.4 Direttive di motion
Direttiva `appReveal` con input `reveal: 'fadeUp' | 'scaleIn' | 'stagger'`. IntersectionObserver con `rootMargin: -10% 0px`.

### 15.5 Build
- Angular build con `outputMode: 'server'` (già configurato).
- SSR per la landing → buon SEO.
- Prerender della home pagina.

---

## 16. Naming convention e file structure

- BEM-light: `block__element--modifier`.
- Token CSS in kebab-case (`--gold-400`).
- Componenti Angular: `kebab-case` file, `PascalCase` classe.
- SCSS partial: `_underscore.scss`, import via `@use`.
- Chiavi i18n: dot.notation in inglese, valori in italiano.

---

## 17. Sticky CTA, navigation, scroll behavior

### 17.1 Nav
- Altezza 72px.
- Dopo 80px scroll: `backdrop-filter: blur(14px)`, background `rgba(10,14,20,0.72)`, border-bottom soft.
- Logo cambia variante (compatta) dopo scroll.

### 17.2 Sticky CTA mobile
- Bar bottom 56px alta dopo scroll del 25%.
- Background `--bg-panel` con shadow upward.
- CTA primaria fullwidth.

### 17.3 Scroll progress
- Bar 2px top con `--gold-400`.

### 17.4 Anchor scroll
- `scroll-behavior: smooth` (rispettare prefers-reduced).
- Offset di 96px per non finire sotto la nav.

---

## 18. Microcopy visivo (badge, pill, chip, tooltip)

- **Pill "Gratuita"**: smeraldo soft, mono caps.
- **Chip "Verificato dal matematico"**: smeraldo + icona check.
- **Badge "Stima"**: ambra/gold con tooltip "valore indicativo, soggetto a perizia".
- **Chip "Annibali contributor"**: gold outline, icona stella.
- **Tooltip definizioni**: mostra definizione di "TAEG", "ISC", "anatocismo", "francese", "regime composto" su hover/tap.

---

## 19. Dark mode native vs. solo dark

Decisione: il sito è **dark-only**. Il dark è parte dell'identità "studio attuariale + tribunale". Non c'è light mode.

- Niente toggle.
- `color-scheme: dark` nel `<html>`.
- Asset (loghi, foto) ottimizzati per dark.

Eventuale evoluzione futura: light mode "documento stampato" per la dashboard interna (post fase 1 del progetto).

---

## 20. Checklist di rilascio

### 20.1 Pre-lancio
- [ ] Tutte le CTA portano a destinazione corretta.
- [ ] Form upload accetta solo PDF / fa pre-check sul tipo.
- [ ] Privacy + cookie policy presenti e linkati.
- [ ] Statuto associazione presente.
- [ ] Tutti i numeri prova sono datati ("Aggiornati al…").
- [ ] Tutti i ritratti hanno consenso d'immagine.
- [ ] Tutti i testimonial hanno consenso scritto.
- [ ] Tutti i copy passano un secondo occhio (revisione editoriale).
- [ ] Disclaimer su Cass. SU 15130/2024 presente.

### 20.2 Tecnica
- [ ] Lighthouse ≥ 95 Performance, 95 Accessibility, 95 SEO, 100 Best Practices.
- [ ] axe DevTools: 0 violations critical.
- [ ] HTML valida (W3C).
- [ ] sitemap.xml + robots.txt.
- [ ] structured data: Organization, WebSite, FAQPage, BreadcrumbList.
- [ ] Open Graph + Twitter Card.
- [ ] Favicon set completo (16,32,180,192,512 + maskable + apple-touch).

### 20.3 Legale
- [ ] Niente promesse di risultato.
- [ ] Niente "garantito".
- [ ] Niente nomi di banche specifiche senza autorizzazione.
- [ ] Dati di sentenza solo se pubblici o anonimizzati.
- [ ] Disclaimer GDPR su upload PDF (dove vengono salvati, per quanto tempo, chi ha accesso).
- [ ] DPO contattabile.

### 20.4 SEO
- [ ] Title page 55-60 caratteri.
- [ ] Meta description 140-160.
- [ ] H1 unica per pagina.
- [ ] Heading order coerente.
- [ ] Schema Organization + breadcrumb + FAQ.
- [ ] Sitemap aggiornata.

---

## Appendice A — Token CSS completi (drop-in)

```css
:root {
  /* Colors — Fondali */
  --bg-deep:        #0A0E14;
  --bg-canvas:      #0F1620;
  --bg-panel:       #131C28;
  --bg-elevated:    #182233;
  --bg-overlay:     rgba(10, 14, 20, 0.72);
  --bg-translucent: rgba(255, 255, 255, 0.04);

  /* Colors — Ink */
  --ink-primary:    #F5F7FA;
  --ink-secondary:  #B6C3D2;
  --ink-muted:      #6B7B8E;
  --ink-disabled:   #3F4A59;
  --ink-inverse:    #0A0E14;

  /* Colors — Borders */
  --border-soft:    rgba(255, 255, 255, 0.06);
  --border-default: rgba(255, 255, 255, 0.10);
  --border-strong:  rgba(255, 255, 255, 0.18);
  --border-gold:    rgba(212, 162, 76, 0.45);

  /* Colors — Gold */
  --gold-50:  #FBF2DF;
  --gold-100: #F1DDA8;
  --gold-200: #E6C575;
  --gold-300: #D9B158;
  --gold-400: #D4A24C;
  --gold-500: #B8862F;
  --gold-600: #8F6420;
  --gold-700: #5F4416;

  /* Colors — Emerald */
  --emerald-100: #BFEEE7;
  --emerald-300: #5FD8C8;
  --emerald-400: #2EC4B6;
  --emerald-500: #1E9B90;
  --emerald-700: #145E58;

  /* Colors — Coral */
  --coral-100: #F8C9C5;
  --coral-300: #F08882;
  --coral-400: #E45858;
  --coral-500: #B83C3C;
  --coral-700: #7A2424;

  /* Colors — Navy */
  --navy-300: #6B8EE3;
  --navy-400: #4E74CC;
  --navy-500: #2F58A8;
  --navy-700: #1A3470;

  /* Spacing */
  --sp-1: 4px;  --sp-2: 8px;   --sp-3: 12px;  --sp-4: 16px;
  --sp-5: 20px; --sp-6: 24px;  --sp-8: 32px;  --sp-10: 40px;
  --sp-12: 48px; --sp-16: 64px; --sp-20: 80px; --sp-24: 96px; --sp-32: 128px;

  /* Radii */
  --radius-xs: 4px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 22px;
  --radius-pill: 999px;

  /* Type */
  --font-display: 'Source Serif 4', Georgia, serif;
  --font-body:    'Inter', system-ui, sans-serif;
  --font-mono:    'JetBrains Mono', ui-monospace, monospace;

  --fs-xxs: 0.6875rem;
  --fs-xs:  0.75rem;
  --fs-sm:  0.875rem;
  --fs-md:  1rem;
  --fs-lg:  1.125rem;
  --fs-xl:  1.375rem;
  --fs-2xl: 1.625rem;
  --fs-3xl: 2rem;
  --fs-4xl: 2.5rem;
  --fs-5xl: 3.25rem;
  --fs-6xl: 4.25rem;
  --fs-7xl: 5.5rem;

  /* Elevation */
  --elev-1: 0 1px 0 rgba(255,255,255,0.04) inset, 0 1px 2px rgba(0,0,0,0.4);
  --elev-2: 0 1px 0 rgba(255,255,255,0.05) inset, 0 8px 24px rgba(0,0,0,0.45);
  --elev-3: 0 1px 0 rgba(255,255,255,0.06) inset, 0 24px 64px rgba(0,0,0,0.55);

  /* Glow */
  --glow-gold:    0 0 0 1px rgba(212,162,76,0.35), 0 12px 40px rgba(212,162,76,0.12);
  --glow-emerald: 0 0 0 1px rgba(46,196,182,0.35), 0 12px 40px rgba(46,196,182,0.10);

  /* Focus */
  --focus-ring: 0 0 0 3px rgba(212, 162, 76, 0.55);

  /* Motion */
  --ease-out: cubic-bezier(0.2, 0.7, 0.1, 1);
  --ease-in:  cubic-bezier(0.5, 0, 0.75, 0);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --dur-1: 120ms;
  --dur-2: 200ms;
  --dur-3: 320ms;
  --dur-4: 480ms;
  --dur-5: 720ms;

  /* Z-index */
  --z-base: 0;
  --z-card: 10;
  --z-popover: 100;
  --z-sticky: 500;
  --z-overlay: 800;
  --z-modal: 1000;
  --z-toast: 1100;

  /* Layout */
  --container-max: 1280px;
  --container-reading: 720px;
}

html { color-scheme: dark; background: var(--bg-deep); }
body {
  font-family: var(--font-body);
  font-size: var(--fs-md);
  line-height: 1.55;
  color: var(--ink-secondary);
  background: var(--bg-deep);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  color: var(--ink-primary);
  font-weight: 400;
  letter-spacing: -0.01em;
}
h1 { font-size: clamp(2.5rem, 1.4rem + 4vw, 4.25rem); line-height: 1.06; }
h2 { font-size: clamp(2rem, 1.2rem + 3vw, 3.25rem); line-height: 1.12; }
h3 { font-size: clamp(1.5rem, 1rem + 1.8vw, 2.5rem); line-height: 1.18; }
h4 { font-size: var(--fs-3xl); line-height: 1.25; }
h5 { font-size: var(--fs-2xl); line-height: 1.3; }
h6 { font-size: var(--fs-xl); line-height: 1.35; }

p { color: var(--ink-secondary); }
a { color: var(--navy-300); text-decoration: underline;
    text-underline-offset: 3px; text-decoration-thickness: 1px; }
a:hover { color: var(--navy-300); text-decoration-thickness: 2px; }

::selection { background: var(--gold-400); color: var(--ink-inverse); }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## Appendice B — Mappa rapida componenti → token

| Componente | Background | Border | Testo | Accento |
|------------|-----------|--------|-------|---------|
| Hero       | `--bg-deep` | – | `--ink-primary` | `--gold-400` |
| Card-doc   | `--bg-panel` | `--border-soft` | `--ink-primary` | `--gold-400` lato |
| KPI tile   | `--bg-canvas` | `--border-soft` | `--ink-primary` | `--gold-400` value |
| Audit item warn | `rgba(228,88,88,0.04)` | `--coral-400` left | `--ink-primary` | `--coral-300` |
| Audit item ok | `rgba(46,196,182,0.05)` | `--emerald-400` left | `--ink-primary` | `--emerald-300` |
| Btn-gold   | `--gold-400` | – | `--ink-inverse` | hover `--gold-300` |
| Btn-ghost  | trasparente | `--border-default` | `--ink-primary` | hover `--border-strong` |
| Tag-norm   | `rgba(78,116,204,0.12)` | – | `--navy-300` | – |
| Disc-badge warn | `rgba(228,88,88,0.10)` | `rgba(228,88,88,0.30)` | `--coral-300` | – |
| Disc-badge ok | `rgba(46,196,182,0.10)` | `rgba(46,196,182,0.30)` | `--emerald-300` | – |
| FAQ trigger | trasparente | bottom soft | `--ink-primary` | – |
| Upload zone | gradient panel→deep | dashed strong | `--ink-primary` | `--gold-400` su hover |
| Pull quote | trasparente | left 3px `--gold-400` | `--ink-primary` | – |
| Footer | `--bg-canvas` | top soft | `--ink-secondary` | `--gold-400` per logo accent |

---

## Appendice C — Pattern di responsive

- **Hero**: 2col → 1col sotto 992px, workspace mock sotto il copy.
- **Method**: 3col → 2col sotto 992px → 1col sotto 768px.
- **Findings grid**: 3col → 2col → 1col.
- **Audience**: 3col → 1col su mobile, conserva l'icona grande.
- **Footer**: 4col → 2col → 1col.
- **Sticky nav**: si trasforma in bottom CTA bar su mobile.
- **Testimonials**: carousel orizzontale snap su mobile.

---

## Appendice D — Implementazione Angular concreta

### D.1 Token globali
Creare `client/src/styles/_tokens.scss` con il contenuto della Appendice A. Importare in `styles.scss`:
```scss
@use 'styles/tokens';
@use 'styles/typography';
@use 'styles/components';
@use 'styles/motion';
```

### D.2 Direttiva reveal
File `client/src/app/shared/directives/reveal.directive.ts` (placeholder):
- Input `appReveal: 'fadeUp'|'scaleIn'|'stagger'`.
- Su construct, IntersectionObserver con threshold 0.15.
- Aggiunge classe `.is-revealed` dopo intersect.
- Pulisce observer su destroy.

CSS:
```scss
[appReveal] { opacity: 0; transform: translateY(12px);
  transition: opacity var(--dur-4) var(--ease-out),
              transform var(--dur-4) var(--ease-out); }
[appReveal].is-revealed { opacity: 1; transform: translateY(0); }
```

### D.3 Pipe `t`
Pipe di traduzione coerente con il progetto attuale (vedi hero.html corrente).
- `{{ 'landing.hero.title' | t }}`.

### D.4 Servizio upload
- POST multipart al backend Nest `/api/analysis/upload`.
- Validazione tipo file: `application/pdf`.
- Limite size client-side 25MB.
- Pre-fingerprint hash SHA256 lato client per dedup futura.

---

## Appendice E — Vincoli pubblicitari e legali sulla UX

- Nessuna promessa di rimborso garantito.
- Nessun nome di banca scoperto a meno di sentenza definitiva e autorizzazione.
- Nessun "Trova quanto ti devono" senza disclaimer.
- Disclaimer GDPR su upload e gestione del PDF.
- Statuto associazione, se l'attività ha forma associativa (vedi schema preliminare).
- L'AI è un supporto, NON sostituisce la perizia del matematico. Va scritto.
- Disclaimer sul tono "la banca sbaglia": parlare di "errori possibili", "discrepanze da verificare", non di "frode certa".

---

## Appendice F — Open Questions

Da chiudere prima dell'implementazione finale:
1. Nome del brand definitivo (provvisorio: `ai_banking_v1_stefano`).
2. Forma giuridica (società vs. associazione, vedi schema preliminare per riferimenti).
3. Eventuale collaborazione formale con Annibali / Cesynt / TutelaMutuo o autonomia.
4. Casi reali utilizzabili come testimonianza (consenso scritto).
5. URL della demo dashboard (se mostrabile).
6. Disponibilità ritratti professionali (Annibali, team matematico).
7. Loghi di testate giornalistiche utilizzabili (rassegna stampa).
8. Volume dei mutui analizzati da poter raccontare nelle sezioni dati.

---

## Appendice G — Anti-pattern di copy collegati al design

- "Recupera fino a 30.000€!" → no. Si trasforma in: "I clienti hanno recuperato in media [X], casistica reale [LINK]."
- "Garantito o ti rimborsiamo" → no. Si dice "Se non troviamo niente, non paghi niente."
- "Solo per oggi 50% di sconto" → no, dark pattern.
- "I migliori del settore" → no. Si dice "Formati dal Prof. Antonio Annibali, [riferimento accademico]."
- "Le banche tremano davanti a noi" → no. Si dice "La banca paga se sbaglia."

---

## Appendice H — Glossario condiviso (per content + design)

- **Anatocismo**: produzione di interessi sugli interessi.
- **Ammortamento alla francese**: rata costante, quota capitale crescente.
- **Capitalizzazione composta**: regime finanziario in cui gli interessi si sommano al capitale.
- **TAEG / ISC**: tasso annuo effettivo globale / indicatore sintetico di costo.
- **Mora**: interesse di mora applicato in caso di ritardo.
- **Soglia usura**: tasso oltre il quale il prestito è usurario (D.M. trimestrale).
- **PIES**: prospetto informativo europeo standardizzato.
- **Pre-analisi**: prima verifica AI + checklist matematica.
- **Analisi completa**: perizia umana del matematico + supporto legale.
- **Discrepanza**: differenza tra contratto e applicazione effettiva.

Questo glossario deve essere richiamato graficamente tramite tooltip nei punti rilevanti del sito.

---

## Appendice I — Note finali sul tono

Il sito non vende una pillola magica.
Il sito dice: *"esiste una matematica seria, esiste una storia di casi vinti, esiste uno strumento AI che ti dice in poco tempo se vale la pena di approfondire. Non ti facciamo perdere tempo. Se la banca ti deve dei soldi, lo scopriamo. Se non ti deve niente, ti diciamo anche quello."*

La gente che ha un mutuo che gli sta divorando la vita non vuole essere trattata come un lead.
Vuole una persona che dice una cosa vera.
Tutto il design qui sopra serve a non tradirlo.
