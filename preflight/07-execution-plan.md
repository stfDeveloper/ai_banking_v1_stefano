# Preflight 07 — Execution Plan unificato (la bibbia del sito)

> Tutto quello che è in `01-design-system.md`, `02-copy-deck.md`, `03-research.md`, `04-action-plan.md`, `05-materials.md`, `06-old-site-extracts.md` viene qui messo in **un solo flusso coeso**.
> Una sola narrazione. Un solo arco emotivo. Una sola sequenza di componenti.
> Da qui in poi si esegue, non si discute più.

---

## 1. La narrazione del sito (arco emotivo)

Il sito è un **dossier che convince in 9 atti**. Ogni atto risolve una domanda nella testa di chi legge, e prepara la successiva.

| # | Atto | Domanda nella testa di chi legge | Risposta che diamo | Sezione tecnica |
|---|------|----------------------------------|--------------------|-----------------|
| I | Promessa | "Esiste davvero un modo serio di scoprire se la banca mi ha fregato?" | Sì, AI + matematica accademica + diritto. Eccone la prova subito. | `hero` |
| II | Quadro | "Sono solo, o succede anche ad altri?" | È un problema sistemico, ecco i numeri di mercato. | `truth` |
| III | Autorità | "Mi posso fidare di chi me lo dice?" | Antonio Annibali è al nostro tavolo. È la firma matematica del metodo. | `authority` |
| IV | Metodo | "Come funziona davvero questo lavoro?" | Tre cose insieme: matematica, AI, diritto. | `method` |
| V | Prova | "Avete fatto vincere qualcuno davvero?" | 10 cause, 8 vinte, €400.000+ restituiti, €0 anticipati. | `results` |
| VI | Procedura | "Cosa devo fare io, in concreto?" | 5 step, ti facciamo vedere lo schermo del telefono. | `flow` + `cell-mock` |
| VII | Trasparenza | "E se nel mio caso non trovate niente?" | Te lo diciamo lo stesso. Niente perizia da vendere. | `findings` + `demo-reveal` |
| VIII | Riconoscimento | "Sono il caso giusto?" | Vedi quale dei tre profili sei. + Se è un'emergenza, c'è il blocco SOS. | `audience` + `sos` |
| IX | Conferma | "Lo hanno fatto altri come me?" | Cinque casi reali, anonimizzati, con cifre. | `testimonials` |
| X | Approfondimento | "Voglio capire prima di muovermi." | Pillole video + stampa + sentenze + FAQ. | `pills` + `press` + `faq` |
| XI | Decisione | "OK. Cosa devo cliccare?" | CTA finale unica, calma, gold su dark. | `cta-final` + `footer` |

### Regole della narrazione
- Ogni sezione **deve preparare** la successiva. Mai sezioni isolate.
- Ogni sezione si chiude con un ponte: una frase di transizione o una micro-CTA che porta avanti.
- L'ordine non è negoziabile: cambia l'effetto.
- La sezione SOS è dentro la v1, posizionata **dopo `audience`** perché chi arriva con un decreto in mano si è già auto-segmentato come "Decreti e precetti" nel blocco audience.

---

## 2. Il filo psicologico (la conversione)

Ogni atto del sito attiva una **leva emotiva precisa**, in linea con le best practice di conversion-focused italiano per servizi che toccano i soldi delle persone.

| Atto | Leva | Implementazione |
|------|------|-----------------|
| I — Hero | Sollievo + curiosità | Promessa chiara + cell-mock interattivo che fa vedere "guarda quanto è semplice". |
| II — Truth | Normalizzazione | "Non sei solo. È un problema sistemico. Ecco i numeri." Riduce vergogna. |
| III — Authority | Trust by association | Annibali = matematica accademica = giudice ti crederà. Riduce paura di ridicolo. |
| IV — Method | Razionalizzazione | Tre pilastri visibili: matematica, AI, legge. Riduce sensazione di fumo. |
| V — Results | Social proof numerico | 4 numeri chiave + tutte le sentenze. Riduce dubbio. |
| VI — Flow | Riduzione fatica | "5 step, gratis, in pochi minuti." Riduce inerzia. |
| VII — Findings + Demo | Onestà | "Se non c'è, te lo diciamo." Disclaimer Cass. SU 15130/2024. Riduce sospetto di markettaro. |
| VIII — Audience + SOS | Auto-riconoscimento | Tre profili + 4 emergenze. Il lettore si trova. Riduce confusione. |
| IX — Testimonials | Identificazione | "Anche io ho avuto paura, poi mi sono fidato." Riduce paura di essere il primo. |
| X — Pills + Press + FAQ | Razionalizzazione finale | Educazione + autorità terza + risposte a obiezioni. Disinnesca esitazioni residue. |
| XI — CTA finale | Decisione | Un solo bottone, copy calmo. Niente urgenza fasulla. |

Il filo è: **sollievo → normalizzazione → fiducia → comprensione → prova → fattibilità → onestà → riconoscimento → identificazione → conferma → decisione**.

Mai saltare un anello. Mai allarmare.

---

## 3. Mappa di transizione tra sezioni

Ogni sezione ha un microcopy di chiusura ("ponte") che porta avanti. Coppie sezione → ponte:

| Da | Ponte (micro testo finale) | A |
|----|----------------------------|---|
| Hero | "Ecco cosa c'è dietro i mutui italiani oggi." | Truth |
| Truth | "E al centro del nostro lavoro c'è un nome." | Authority |
| Authority | "Vediamo come applichiamo la sua matematica." | Method |
| Method | "I numeri di quello che è successo finora." | Results |
| Results | "Adesso vediamo come funziona dal tuo telefono." | Flow + Cell-mock |
| Flow | "Ecco le sei aree in cui la banca sbaglia di più." | Findings |
| Findings | "Vediamone una al lavoro, oscurata." | Demo-reveal |
| Demo-reveal | "Capiamo se è il tuo caso." | Audience |
| Audience | "Se invece sei in mezzo a un atto, c'è poco tempo." | SOS |
| SOS | "Sentiamo chi ci è già passato." | Testimonials |
| Testimonials | "Approfondisci con calma, le pillole del matematico." | Pills |
| Pills | "Cosa scrivono le testate e i tribunali." | Press |
| Press | "Le domande più frequenti, risposte oneste." | FAQ |
| FAQ | "OK. Vale la pena di provarci." | CTA finale |

Questi ponti vanno **scritti nelle ultime righe di ogni sezione**, non lasciati al caso. Già implicitamente presenti nel copy deck, qui esplicitati.

---

## 4. Mappa visuale del sito (sintesi 1 pagina)

```
┌─────────────────────────────────────────────────────────────┐
│  NAV  · logo · Metodo · Casi · Annibali · Strumento · CTA   │  sticky
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   I.  HERO                                                   │  bg: aurora dark, glow gold
│       copy | CELL-MOCK (cycling: empty → loading → result)   │  proof chips
│                                                              │
├─────────────────────────────────────────────────────────────┤
│   II. TRUTH (KPI bar mercato + lead)                         │  counters animati
├─────────────────────────────────────────────────────────────┤
│   III. AUTHORITY (Annibali at the table + team operativo)    │  spotlight card + papers
├─────────────────────────────────────────────────────────────┤
│   IV. METHOD (3 card: matematica + AI + diritto + quote)     │  bento grid + border beam
├─────────────────────────────────────────────────────────────┤
│   V. RESULTS (4 KPI grandi + sentenze)                       │  number ticker
├─────────────────────────────────────────────────────────────┤
│   VI. FLOW (5 step + CELL-MOCK sincronizzato)                │  step magnetic + cell mock
├─────────────────────────────────────────────────────────────┤
│   VII. FINDINGS (6 card discrepanze + disclaimer Cass.)      │  bento grid + tag norm
├─────────────────────────────────────────────────────────────┤
│   VIII. DEMO-REVEAL (preview oscurata + overlay)             │  blurred + shimmer
├─────────────────────────────────────────────────────────────┤
│   IX. AUDIENCE (3 colonne: privati, aziende, decreti)        │  card-doc
├─────────────────────────────────────────────────────────────┤
│   X. SOS (4 card emergenza + numero verde)                   │  coral edge + deadline pill
├─────────────────────────────────────────────────────────────┤
│   XI. TESTIMONIALS (5 casi anonimi)                          │  animated testimonials carousel
├─────────────────────────────────────────────────────────────┤
│   XII. PILLS (4 video Annibali brevi)                        │  card video con play hover
├─────────────────────────────────────────────────────────────┤
│   XIII. PRESS (trust marquee + sentenze grid)                │  marquee infinito
├─────────────────────────────────────────────────────────────┤
│   XIV. FAQ (11 voci accordion oneste)                        │  accordion animato
├─────────────────────────────────────────────────────────────┤
│   XV. CTA-FINAL (titolo serif gigante + CTA gold)            │  lamp/spotlight effect
├─────────────────────────────────────────────────────────────┤
│   FOOTER (4 colonne + payoff + statuto + privacy)            │
└─────────────────────────────────────────────────────────────┘
```

---

## 5. I 10 componenti riutilizzabili da 21st.dev (adattati al nostro stack)

21st.dev è una community shadcn/React. Il nostro stack è Angular 20 + Bootstrap + SCSS. Quindi prendiamo **i pattern visivi e di motion**, NON il codice React. Li riscriviamo come componenti Angular con SCSS + Web Animations API + IntersectionObserver.

| # | Componente 21st.dev | Pattern preso | Dove lo usiamo | Adattamento Angular |
|---|---------------------|---------------|----------------|----------------------|
| 1 | **Aurora Hero bg** (dhiluxui/aurora-hero-bg-2) | sfondo animato gradient mesh dark con glow soft di colore | `hero` | `<app-aurora-bg>` con 2-3 layer `background: radial-gradient` animati via `@keyframes` lentissimo (40-60s), gold + emerald + navy desaturati. CSS pure, no canvas. |
| 2 | **Animated Counter** (preetsuthar17/animated-counter) | numeri che salgono con easing | `truth` KPI bar, `results` data wall | direttiva `appCountUp` + IntersectionObserver. WAAPI per animare. Tabular nums. |
| 3 | **Animated Testimonials Carousel** (aceternity) | carousel testimonial con foto + rotate 3D + word-by-word reveal | `testimonials` | `<app-testimonials-carousel>` standalone. CSS 3D transforms. Su mobile diventa stack verticale. |
| 4 | **Bento Grid** (aceternity/magic-ui) | griglia a riquadri di altezze diverse | `method` (3 pilastri), `findings` (6 discrepanze) | `<app-bento>` con CSS Grid auto-fit/auto-fill, ogni cell ha hover reveal. |
| 5 | **Spotlight Card** (aceternity) | card scura con riflesso luminoso al mouse | `authority` (foto Annibali), card metodo | direttiva `appSpotlight` che traccia `mouseenter/move` e applica un radial-gradient su pseudo-elemento `::before`. |
| 6 | **Magnetic Button** (community) | CTA che segue leggermente il puntatore | CTA primarie hero + cta-final | direttiva `appMagnetic` con translate3d max ±6px, deactivated on touch e su `prefers-reduced-motion`. |
| 7 | **Marquee** (magic-ui) | strip di loghi che scorre infinita | `press` (testate stampa) | `<app-marquee>` con doppia copia del contenuto + `transform: translateX` animato. Pausa al hover. |
| 8 | **Border Beam** (magic-ui) | bordo luminoso animato che gira intorno alla card | `cell-mock` glow, card method al hover | pseudo-element `::after` con `conic-gradient` rotante via `@keyframes spin`. |
| 9 | **Background Beams / Particles** (aceternity) | linee verticali sottili animate sullo sfondo, o particelle | sezioni `authority` e `cta-final` (sobrio) | `<app-beams>` con SVG path animati. Niente canvas pesante. |
| 10 | **Lamp Effect** (aceternity) | "faro" radiale di luce dietro un titolo | `cta-final` | radial-gradient gold semi-trasparente nascosto dietro il titolo serif, blur 80px. |

> Tutti e 10 sono pattern di motion/effetto che possiamo replicare in CSS puro + WAAPI in Angular, senza dipendenze esterne. Mai installare Framer Motion (è React).

---

## 6. Mappa: ogni sezione → i componenti che usa

| Sezione | Componenti tecnici da costruire | Pattern 21st.dev attivato |
|---------|--------------------------------|--------------------------|
| `nav` | logo, link, sticky scroll, drawer mobile, scroll-progress bar | – |
| `hero` | `<app-aurora-bg>`, copy block, cta gold, cta ghost, proof chips, `<app-cell-mock>` | #1 Aurora, #2 Counter (proof?), #6 Magnetic, #8 Border Beam (cell) |
| `truth` | KPI bar (4 counter), lead text, ponte | #2 Counter |
| `authority` | `<app-spotlight>`, ritratto Annibali, bio, pull quote, papers list, sotto-sezione team | #5 Spotlight, #9 Beams |
| `method` | `<app-bento>` 3 card (matematica, AI, diritto), pull quote di chiusura | #4 Bento, #8 Border Beam (hover card) |
| `results` | 4 KPI numeri grandi (counter), CTA "vedi sentenze" | #2 Counter |
| `flow` | stepper 5 step + `<app-cell-mock>` sincronizzato | #6 Magnetic |
| `findings` | `<app-bento>` 6 card discrepanze + tag normativi + disclaimer | #4 Bento |
| `demo-reveal` | report mock con righe blurred + overlay + CTA | shimmer custom |
| `audience` | 3 card-doc privati/aziende/decreti | – |
| `sos` | 4 sos-card con deadline pill + numero verde | #6 Magnetic (CTA) |
| `testimonials` | `<app-testimonials-carousel>` 5 testimonial anonimi | #3 Animated Testimonials |
| `pills` | 4 video card con play hover | – |
| `press` | `<app-marquee>` testate + griglia sentenze | #7 Marquee |
| `faq` | accordion 11 voci | – |
| `cta-final` | titolo serif gigante + lamp + CTA gold + CTA ghost | #10 Lamp, #6 Magnetic |
| `footer` | 4 colonne + payoff + statuto + privacy + bottom row | – |

Totale componenti Angular **standalone da costruire**: 17 + 10 utility/direttive (aurora, beams, spotlight, magnetic, marquee, border-beam, lamp, count-up, reveal, stagger).

---

## 7. Sequenza di build (ordine non opzionale)

### Sprint 0 — Fondamenta (2-3 ore)
1. `client/src/styles/_tokens.scss` — token CSS completi (Appendice A del design system).
2. `client/src/styles/_typography.scss` + `_layout.scss` + `_a11y.scss`.
3. `client/src/styles.scss` — import dei partial + Bootstrap.
4. `client/src/index.html` — meta + font preconnect + `<html lang="it">`.
5. `client/src/assets/i18n/it.json` — tutto il copy deck.
6. Pipe `t` di traduzione (replica del progetto sorgente `normative-ai`).
7. App config: route default `/` → `LandingPageComponent`.

### Sprint 1 — Direttive e utility motion (1-2 ore)
8. `appReveal` (IntersectionObserver + classi).
9. `appStagger` (estende reveal con delay sui figli).
10. `appCountUp` (counter numerico WAAPI).
11. `appMagnetic` (hover magnetico CTA).
12. `appSpotlight` (riflesso radiale al mouse).
13. `appScrollProgress` (bar in alto).

### Sprint 2 — Componenti visivi base (2-3 ore)
14. `<app-aurora-bg>` — sfondo animato hero.
15. `<app-beams>` — linee verticali sezioni.
16. `<app-marquee>` — strip infinita.
17. `<app-bento>` — griglia bento.
18. `<app-spotlight-card>` — card con riflesso.
19. `<app-border-beam>` — bordo luminoso.
20. `<app-lamp>` — faro gold radiale.

### Sprint 3 — Cell-mock (PRIORITÀ DEMO) (2 ore)
21. `<app-cell-mock>` standalone con i 3 stati interattivi (empty → loading → result).
22. Test su mobile reale di Stefano.

### Sprint 4 — Sezioni narrative (in ordine narrativo) (1-2 sezioni al giorno)
23. `<app-nav>` + sticky.
24. `<app-hero>` con aurora + cell-mock + proof.
25. `<app-truth>` con KPI counter.
26. `<app-authority>` con spotlight + papers.
27. `<app-method>` con bento 3 card.
28. `<app-results>` con number ticker.
29. `<app-flow>` con stepper + cell-mock sincronizzato.
30. `<app-findings>` con bento 6 card.
31. `<app-demo-reveal>` con preview oscurata.
32. `<app-audience>` con 3 card-doc.
33. `<app-sos>` con 4 sos-card + numero verde.
34. `<app-testimonials>` con carousel animato.
35. `<app-pills>` con video card.
36. `<app-press>` con marquee + sentenze.
37. `<app-faq>` con accordion.
38. `<app-cta-final>` con lamp + magnetic.
39. `<app-footer>`.

### Sprint 5 — SEO + a11y + perf (1 giorno)
40. Structured data (Organization, FAQPage, BreadcrumbList).
41. Meta + Open Graph + Twitter Card.
42. Lighthouse audit + axe DevTools.
43. Test responsive 360 / 768 / 1024 / 1280.
44. Test `prefers-reduced-motion`.
45. Subset font.

### Sprint 6 — Polish + presentazione demo (1 giorno)
46. Test interattivo cell-mock da telefono Stefano.
47. Walkthrough con Stefano.
48. Fix microcopy se servono.

---

## 8. Rules da seguire durante il build

- **i18n-labels**: 0 stringhe italiane hardcoded. Mai. Sempre via `it.json` + pipe `t`.
- **ts-fullstack**: modulo Angular `landing` con `components/pages/services/interfaces/config/`. Componenti standalone.
- **design-pro-max**: pattern → style → colors → typo → motion → sections → anti-patterns → checklist. Già coperto in `01-design-system.md`.
- **main.mdc**: leggere il `hero.html` del progetto sorgente `normative-ai` per il pattern di pipe `t` + animazioni `@fadeUp`. Replicarlo qui.
- **Regex**: vietata, eccetto eccezioni esplicite. Per i validator (es. PDF) usare MIME check, non regex su nome file.

---

## 9. Definition of Done finale della v1 della landing

Quando si dichiara "fatto":

- [ ] Tutte le 17 sezioni implementate nell'ordine narrativo.
- [ ] Tutte le chiavi `it.json` presenti, niente hardcoded.
- [ ] Cell-mock funzionante con 3 stati interattivi su touch + desktop.
- [ ] Sticky CTA + scroll progress + sticky nav implementati.
- [ ] Lighthouse mobile ≥ 90 (dark theme con animazioni regge meglio in mobile reale che in test).
- [ ] axe DevTools 0 violazioni critical.
- [ ] `prefers-reduced-motion` rispettato per tutte le animazioni.
- [ ] Test interattivo dal telefono Stefano ok per demo dal vivo.
- [ ] Privacy + cookie + statuto in footer.
- [ ] Disclaimer Cass. SU 15130/2024 in `findings`.
- [ ] Tutti i casi anonimizzati.
- [ ] Sezione SOS dentro la pagina.
- [ ] Numero verde 800 141359 (placeholder, in attesa conferma) in footer.

---

## 10. Filosofia del sito in una frase

> Un dossier che spiega in 9 atti, senza alzare la voce, che la banca paga sempre se sbaglia, che noi abbiamo il modo per scoprirlo, che lo facciamo gratis fino al primo segnale, e che chi lo ha già fatto adesso vive meglio.

Non un sito che vende.
Un sito che fa vedere come si lavora.
E che cambia delle vite.
