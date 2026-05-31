# Preflight 04 — Action Plan

> Cosa facciamo, in che ordine, con che dipendenze.
> Dura ~3-4 settimane in scenario lineare, vedi cap. 10.

---

## 0. Premessa strategica (basata su schema-preliminare.pdf)

Il PDF `schema-preliminare.pdf` (32 pagine, l'unico file dei materiali che il Read tool ha potuto leggere) è il documento fondante del progetto. Definisce:
- Le 3 figure principali del tavolo: tecnica (core software), legale/commerciale (clienti), matematica (Annibali). + figura finanziatrice iniziale.
- Le 3 fasi:
  1. **Tool interno** per accelerare il matematico (3-4 mesi, base economica 6.000€).
  2. **Componente commerciale e di acquisizione** (funnel, pre-analisi monetizzabile).
  3. **Espansione del perimetro** verso leasing, prestiti personali, altri segmenti.
- Lo snodo critico tra gennaio e febbraio per il cashflow.
- Il principio: il software deve continuare a ricevere risorse per restare vivo e crescere.

**La landing che stiamo costruendo è il primo asset visibile della fase 2 (acquisizione clienti) e contemporaneamente la vetrina del lavoro tecnico della fase 1**.
Tutto il copy, il flusso e la struttura dei dati sulla landing devono essere coerenti con questa visione progressiva.

In particolare:
- La pre-analisi gratuita serve a creare il **primo livello monetizzabile**, in coerenza con cap. 19 dello schema preliminare.
- La sezione "Per chi è" anticipa l'espansione fase 3 (leasing, prestiti, conti correnti, decreti).
- La narrazione di Annibali è il **ponte tra la fase tecnica interna e la credibilità verso il cliente finale**.

---

## 1. Obiettivi della landing

### Obiettivi di business
1. Generare lead qualificati per la pre-analisi (target di confronto: TutelaMutuo).
2. Posizionare il brand come "AI + Annibali + diritto" — i tre pilastri.
3. Costruire reputazione documentale (rassegna stampa, sentenze, casi).
4. Validare CAC e LTV per la fase 2 dello schema preliminare.

### KPI primari
- Conversion rate Hero → CTA primaria click ≥ 6%.
- Conversion rate landing → upload PDF avviato ≥ 2,5%.
- Conversion rate upload avviato → completato ≥ 60%.
- Tempo medio sezione "Come funziona" ≥ 45s.
- Bounce rate sotto 55% su organico.

### KPI secondari
- Scroll depth ≥ 70% nei landed da paid.
- Video "Pillole Annibali" play-through ≥ 40%.
- Click sui link normativi / sentenze ≥ 4% sui visualizer della sezione.

---

## 2. Scope (in / out)

### In scope (fase 1 landing)
- 1 landing page lunga in italiano (dark, dark-only).
- Modulo Angular `landing` con i componenti elencati nel design system (cap. 11 e 15 del file `01-design-system.md`).
- Sezione/strumento upload PDF + analisi placeholder (la vera AI arriva con il backend Nest).
- i18n `it.json` con tutte le chiavi (vedi `02-copy-deck.md`).
- SEO base (meta + structured data).
- Performance budget rispettato (Lighthouse 95+).

### Out of scope (fase successiva)
- Dashboard cliente post-upload (login utente, storico analisi).
- Integrazione AI di estrazione PDF reale (siamo in fase preflight: usiamo un mock di pre-analisi).
- Multilingua (oggi solo IT).
- Light mode.
- Pagamenti / abbonamenti.

---

## 3. Struttura tecnica nel repository

```
ai_banking_v1_stefano/
├── .cursor/                        # rules + skills (già copiato)
├── api/                            # Nest, già inizializzato
│   └── src/
│       └── modules/
│           └── analysis/           # da creare in fase 2
├── client/                         # Angular, già inizializzato
│   └── src/
│       ├── app/
│       │   ├── modules/
│       │   │   └── landing/        # da creare
│       │   │       ├── components/
│       │   │       ├── pages/
│       │   │       ├── services/
│       │   │       ├── interfaces/
│       │   │       └── config/
│       │   └── shared/
│       │       └── directives/     # appReveal, appCountUp, ecc.
│       ├── assets/
│       │   └── i18n/
│       │       └── it.json
│       └── styles/
│           ├── _tokens.scss
│           ├── _typography.scss
│           ├── _layout.scss
│           ├── _components.scss
│           ├── _motion.scss
│           └── _a11y.scss
├── preflight/                      # questo lavoro
│   ├── 01-design-system.md
│   ├── 02-copy-deck.md
│   ├── 03-research.md
│   ├── 04-action-plan.md           # questo file
│   ├── 05-materials.md             # istruzioni per sbloccare i docx Mail
│   └── materials/                  # destinazione finale dei docx Mail
└── package.json
```

---

## 4. Fasi operative

### Fase A — Preflight (questa fase, in corso)
- [x] Verifica struttura repo (`api/`, `client/`, `.cursor/`).
- [x] Lettura di `schema-preliminare.pdf` (fonte fondante).
- [x] Ricerca mercato 2026 (mutui, tassi, ABI/CRIF).
- [x] Ricerca giurisprudenza 2024-2026 (Cass. SU 15130, ordinanza 18664/2023, sentenze territoriali 2026).
- [x] Profilazione autorità: Antonio Annibali (Sapienza, LUISS, pubblicazioni).
- [x] Tear-down competitor (TutelaMutuo / Cesynt / studi legali).
- [x] Preflight design system (`01-design-system.md`, 1000+ righe).
- [x] Preflight copy deck (`02-copy-deck.md`, completo).
- [ ] Sblocco e lettura dei `.docx` di Mail (vedi `05-materials.md`).

### Fase B — Token + Layout di base (Angular)
- [ ] Creare `client/src/styles/_tokens.scss` con tutto il blocco dell'Appendice A del design system.
- [ ] Importare i token globalmente in `styles.scss` (Bootstrap già presente).
- [ ] Setup font: Inter, Source Serif 4, JetBrains Mono via Google Fonts o file locali.
- [ ] Setup i18n: pipe `t`, file `it.json` con tutte le chiavi del copy deck.
- [ ] Direttiva `appReveal` (IntersectionObserver + classi `is-revealed`).
- [ ] Direttiva `appCountUp` (counter animato per i KPI numerici).
- [ ] Modulo Angular `landing` con routing su `/` (default).

### Fase C — Componenti UI
Ordine consigliato:
1. `nav` (sticky + scroll-progress).
2. `cell-mock` (priorità alta — serve a Stefano per le demo dal vivo, va costruito presto).
3. `hero` (con cell-mock interattivo).
4. `truth` (KPI bar + lead).
5. `authority` (split foto/bio + pull quote + papers + sotto-sezione team operativo).
6. `method` (3 card metodo).
7. `results` (data wall 4 KPI).
8. `flow` (5 step sincronizzati col cell-mock).
9. `findings` (6 card discrepanze).
10. `demo-reveal` (preview oscurata).
11. `audience` (3 colonne).
12. `sos` (4 card SOS — sezione d'emergenza, dentro v1).
13. `testimonials` (5 testimonial in anonimo).
14. `pills` (4 video Annibali).
15. `press` (trust strip + sentenze).
16. `faq` (accordion 11 voci).
17. `cta-final` (full bleed).
18. `footer`.

Per ognuno: HTML semantico + SCSS isolato + i18n keys + appReveal.

### Fase D — Upload & flusso pre-analisi (mock)
- [ ] Service `upload.service.ts` con POST mock verso `/api/analysis/upload` (placeholder).
- [ ] Componente `upload-zone` con drag&drop + validazione tipo/size.
- [ ] Step indicator del progress.
- [ ] Vista risultato "preview oscurata" (statica in fase preflight, reale in fase 2).

### Fase E — SEO + Performance + a11y
- [ ] Title, meta, OG, structured data (Organization, FAQPage).
- [ ] Lazy-load di video pillole.
- [ ] Lighthouse audit, fix performance.
- [ ] axe DevTools audit, fix violations.
- [ ] Test responsive 360/375/768/1024/1280/1440.
- [ ] Test prefers-reduced-motion.

### Fase F — Backend Nest (fase 2, fuori scope di questa landing)
- [ ] Modulo `analysis` in Nest.
- [ ] Endpoint `/analysis/upload` per accettare PDF.
- [ ] Job AI estrazione piano di ammortamento.
- [ ] Modello dei dati `Discrepancy`, `Analysis`, `Mortgage`.
- [ ] DB scelto (Postgres + TypeORM, coerente con la skill `postgres-migrations`).
- [ ] Generazione del report PDF di pre-analisi.

---

## 5. Open dependencies / decisioni da prendere

| # | Decisione | Owner | Stato |
|---|-----------|-------|-------|
| 1 | ~~Brand~~ → **RISPOSTO 25/05/2026**: "Check-up Bancario", tono professionale puro. Niente "AI" attaccato al nome. | Stefano | ✅ chiuso |
| 2 | Forma giuridica (società vs. associazione vs. mista) | Stefano + figura legale | Footer, statuto |
| 3 | ~~Annibali è parte formale?~~ → **RISPOSTO**: al tavolo, firma dottrinale; team operativo accanto a lui. | Stefano | ✅ chiuso |
| 4 | ~~Numeri reali (10/8/€400k+)~~ → **CONFERMATI 25/05/2026**. | Figura legale/commerciale | ✅ chiuso |
| 5 | ~~Casistica testimonianze~~ → **CONFERMATA in anonimo**. Niente nomi reali, mai. | Figura legale/commerciale | ✅ chiuso |
| 6 | Ritratti professionali (Annibali, team) | Da pianificare shoot | Sezione `authority` |
| 7 | Loghi testate stampa utilizzabili | Figura commerciale | Sezione `press` |
| 8 | Dominio definitivo + hosting + email aziendale | Stefano | Setup tecnico fase B |
| 9 | DPO / informativa privacy | Figura legale | Upload PDF |
| 10 | Acquisto font commerciale o Google Fonts | Stefano | Setup tipografia |
| 11 | ~~Sezione SOS in v1 o sotto-pagine fase 2?~~ → **DECISO**: dentro la landing v1 in unica run, 4 card SOS. | Stefano | ✅ chiuso |
| 12 | ~~Mockup demo (cell mock)~~ → **DECISO**: smartphone mock interattivo come visual principale (hero + flow). | Stefano | ✅ chiuso |
| 13 | ~~i18n multilingua?~~ → **DECISO**: solo `it.json`. | Stefano | ✅ chiuso |
| 14 | Numero verde 800 141359 ancora attivo? Se sì, lo mostriamo in hero o solo footer? | Stefano | aperto |

---

## 6. Materiali di riferimento (cartella `preflight/materials/`)

I file Mail Downloads forniti (16 documenti DOCX + 1 PDF) sono stati indicati come fonti chiave dei testi storici del vecchio sito, dei testi delle pagine "Sos", dei copy per facebook, della pagina "Chi siamo", e dell'annuncio Facebook del checkup bancario.

### Stato attuale
- ✅ `schema-preliminare.pdf` letto integralmente (32 pagine). Documento fondante.
- ⚠️ I 16 file `.docx` non sono leggibili dall'agente:
  - macOS blocca lo shell agent al container `~/Library/Containers/com.apple.mail/` (Full Disk Access non concesso al terminale).
  - Il Read tool ha accesso al container ma non supporta il formato `.docx` (binary unsupported).
- 👉 Serve un piccolo passo manuale dell'utente — vedi `05-materials.md`.

### Quando i docx saranno disponibili
- Verranno integrati nella cartella `preflight/materials/` come PDF o `.md` convertiti.
- Verranno citati in `02-copy-deck.md` e in questo plan come fonti di linea editoriale per:
  - tono di voce del vecchio sito,
  - copy delle pagine "SOS" (precetto, decreto ingiuntivo, recupero crediti, altro),
  - struttura pagina "Chi siamo",
  - testi storici checkup bancario,
  - annuncio Facebook (per la versione paid della landing).

---

## 7. Roadmap proposta (timeline indicativa)

| Settimana | Cosa | Output |
|-----------|------|--------|
| W1 | Token + i18n + nav + hero + truth | Hero + sezione 2 live in dev |
| W2 | Authority + method + results + flow | Metà landing in dev |
| W3 | Findings + demo + audience + testimonials + pills | Landing completa visivamente |
| W4 | Press + FAQ + final CTA + footer + SEO + a11y + QA | Pronta per UAT, deploy staging |

NB: i tempi raddoppiano se al W2 non sono ancora arrivati ritratti, casistica testimonianze, statuto associazione.

---

## 8. Rischi e mitigazioni

### Rischio 1 — Cifre non verificabili
Se non riusciamo a verificare i "400.000€ restituiti" e "8/10 cause vinte" prima del lancio, dobbiamo:
- mantenere il claim solo se la figura legale/commerciale dà conferma scritta;
- altrimenti sostituire con un range ("oltre €X recuperati") o togliere e usare solo le sentenze pubbliche.

### Rischio 2 — Annibali non è formalmente partner
Allora il copy diventa "team matematico formato sui lavori di Antonio Annibali" — più cauto, ancora vero, ancora autorevole. Già preparato così nel copy deck.

### Rischio 3 — La Cassazione 15130/2024 viene confusa col messaggio
Mitigazione: la FAQ ha già una voce esplicita su questo. La sezione findings ha un disclaimer onesto subito sotto la griglia.

### Rischio 4 — Stack tecnico (Bootstrap + Angular 20 + SCSS) non coerente con design system
Mitigazione: i token sono **CSS custom properties pure**, indipendenti da Bootstrap. Bootstrap viene usato solo come griglia/utility. Tutti i componenti sono custom SCSS.

### Rischio 5 — File materials non recuperabili
Mitigazione: il PDF schema-preliminare già copre la parte strategica e l'autorità di Annibali. I docx servono come "tono di voce" del vecchio sito, ma non sono bloccanti. Se non si sbloccano, la landing parte comunque con il copy del deck 02.

### Rischio 6 — Performance dark theme con shimmer/gradient
Mitigazione: il design system limita shimmer e blur a pochi punti, non sull'intera pagina. Niente parallax. Niente video full-bleed.

---

## 9. Pratiche di sviluppo da seguire (rules e skill)

Dalle regole del workspace:
- **i18n-labels**: ogni testo della landing va in `it.json`. Mai hardcoded in HTML/TS.
- **ts-fullstack**: il modulo Angular `landing` segue la struttura `components/pages/services/interfaces/config/`.
- **design-pro-max**: pattern documentato in `01-design-system.md`. Output format: pattern, style, colors, typography, motion, sections, anti-patterns, checklist (già coperto).
- **main.mdc**: leggere il codice esistente (hero.html attuale del progetto sorgente `normative-ai`) prima di scrivere il nuovo; lì abbiamo già la struttura `motion-item`, `@fadeUp`, `@staggerChildren`, pipe `t` → replichiamo lo stesso pattern qui.
- **regex**: vietato salvo eccezioni esplicite; usare parser e validator (per esempio per il PDF upload usare `application/pdf` MIME check, non regex sul nome).

---

## 10. Definition of Done della landing (fase 1)

- [ ] Tutte le sezioni della cap. 11 del design system implementate.
- [ ] Tutto il copy del deck 02 nel file `it.json`.
- [ ] Tutti i token CSS dell'Appendice A applicati.
- [ ] Direttiva `appReveal` funzionante con `prefers-reduced-motion` rispettato.
- [ ] Upload mock funzionante (anche senza vera AI di backend).
- [ ] Lighthouse desktop e mobile ≥ 95/95/95/100.
- [ ] axe DevTools senza violazioni critical.
- [ ] Test su Safari, Chrome, Firefox, Edge ultime versioni.
- [ ] Test responsive 360 / 768 / 1024 / 1280.
- [ ] Sitemap + robots + structured data deployati.
- [ ] Privacy + cookie + statuto presenti in footer.
- [ ] Numeri prova (8/10, 400k+) verificati o sostituiti.
- [ ] Disclaimer Cass. SU 15130/2024 visibile in findings.
- [ ] CTA primarie tutte con stesso wording ("Avvia la pre-analisi gratuita").

---

## 11. Definition of Done del preflight (questa fase)

- [x] Design system completo (`01-design-system.md`).
- [x] Copy deck completo in italiano (`02-copy-deck.md`).
- [x] Ricerca mercato + giurisprudenza + competitor + Annibali (`03-research.md`).
- [x] Plan d'azione (questo file).
- [x] Documento `05-materials.md` con istruzioni per sbloccare i docx Mail.
- [ ] Lettura completa dei 16 docx (una volta sbloccati dall'utente).
- [ ] Integrazione nei copy delle eventuali frasi/voci chiave dei vecchi siti.

---

## 12. Next step immediato (aggiornato 25/05/2026)

✅ Tutti i materiali letti, decisioni chiave chiuse:
- Brand "Check-up Bancario" professionale.
- Annibali al tavolo, team operativo accanto.
- Numeri 10/8/€400k+ confermati.
- Testimonianze in anonimo.
- SOS dentro v1.
- Cell-mock per demo.
- Solo it.json.

⏳ Resta aperto:
- Numero verde 800 141359 ancora attivo? (non bloccante, intanto lo prevediamo in footer).
- Ok finale di Stefano per partire con la Fase B.

Quando arriva l'ok partiamo nell'ordine della cap. 4:
1. Token globali in `client/src/styles/`.
2. i18n `it.json` con tutte le chiavi.
3. Direttiva `appReveal`.
4. Componente `cell-mock` (priorità demo).
5. Componente `nav` + `hero`.
Dopo l'hero, il resto della landing va a cascata.
