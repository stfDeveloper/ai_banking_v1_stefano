# Preflight 02 — Copy Deck (italiano, emotivo, conversion-focused)

> Tutto il testo della landing in italiano.
> Stile: editoriale, dignitoso, mai gridato.
> Lettore: persona reale con mutuo o azienda con conto + leasing.
> Promessa: la banca paga sempre se sbaglia, e noi ti diciamo se sta sbagliando.
> Convenzione: ogni sezione ha **chiave i18n proposta** + testo + variante shorter per mobile.

---

## 1. Navigation

- `landing.nav.method` → "Metodo"
- `landing.nav.cases` → "Casi"
- `landing.nav.authority` → "Antonio Annibali"
- `landing.nav.tool` → "Strumento AI"
- `landing.nav.cta` → "Avvia pre-analisi"

Microcopy hover:
- "Metodo" → "Come uniamo matematica, AI e diritto."
- "Casi" → "10 cause, 8 vinte. Oltre 400.000€ restituiti."
- "Antonio Annibali" → "Il matematico che ha formato il nostro team."
- "Strumento AI" → "Carica il PDF del mutuo e leggilo in pochi minuti."

---

## 2. Hero

### Variante A (preferita)
- **Eyebrow** `landing.hero.eyebrow`: "Analisi mutui con AI + matematici, con il Prof. Antonio Annibali al tavolo"
- **Titolo** `landing.hero.title`: "La banca paga sempre se sbaglia.
La domanda è: sta sbagliando con te?"
- **Sottotitolo** `landing.hero.subtitle`: "Carica il PDF del tuo mutuo, del leasing o del finanziamento.
Il nostro sistema lo legge in pochi minuti e ti dice se ci sono discrepanze degne di approfondimento.
Non costa niente. Non ti facciamo perdere tempo."
- **CTA primaria** `landing.hero.primaryCta`: "Avvia la pre-analisi gratuita"
- **CTA secondaria** `landing.hero.secondaryCta`: "Vedi un esempio di analisi"

### Proof chips sotto la CTA
- `landing.hero.proofOne`: "10 cause portate, 8 vinte"
- `landing.hero.proofTwo`: "400.000€ restituiti ai clienti"
- `landing.hero.proofThree`: "Prof. Antonio Annibali al nostro tavolo"

### Microcopy sotto bottoni
`landing.hero.microcopy`: "Nessuna carta di credito. Risposta entro 24 ore. I tuoi documenti restano tuoi."

### Workspace mock label
- Document code: `MUTUO-2024-0457`
- Title: "Piano di ammortamento — Mutuo prima casa"
- Meta: "Banca anonimizzata · Durata 25 anni · Tasso variabile"
- Video pill: "Demo in 1 minuto"
- KPI tile 1: value `7`, label "Discrepanze segnalate"
- KPI tile 2: value `€ 8.420`, label "Stima differenza"
- KPI tile 3: value `2'40"`, label "Tempo analisi AI"
- Audit rail items:
  - "Discrasia TAEG dichiarato vs. effettivo" — meta "Severità alta"
  - "Capitalizzazione composta non dichiarata" — meta "Da verificare"
  - "Mora sopra soglia usura nel 2019" — meta "Documenti richiesti"

### Variante B (mobile shorter)
- Titolo: "La banca sbaglia più di quanto pensi.
Scopri se sta sbagliando con te."
- Sub: "Carichi il PDF, leggiamo, ti diciamo cosa abbiamo trovato. Gratis."
- CTA: "Avvia la pre-analisi"

---

## 3. Sezione 2 — La verità sui mutui in Italia

- **Eyebrow** `landing.truth.eyebrow`: "Il quadro reale"
- **Titolo** `landing.truth.title`: "In Italia, oltre 6 milioni di famiglie pagano un mutuo. Non tutti sanno che il piano può contenere errori reali."
- **Lead** `landing.truth.lead`: "Tassi BCE che si muovono, rate che cambiano, sospensioni, surroghe, mora calcolata male, TAEG dichiarato sul contratto che non torna con quello effettivo. Sono cose che succedono. Non sempre per cattiva fede della banca. Ma succedono. E quando succedono, ci sono dei soldi che il cliente ha diritto di chiedere indietro."

### KPI Bar
- `landing.truth.kpis[0].value`: "3,43%"
  `landing.truth.kpis[0].label`: "tasso medio nuovi mutui (aprile 2026, ABI)"
- `landing.truth.kpis[1].value`: "86%"
  `landing.truth.kpis[1].label`: "nuovi mutui italiani a tasso fisso (Q1 2026, CRIF)"
- `landing.truth.kpis[2].value`: "€ 161.000"
  `landing.truth.kpis[2].label`: "importo medio mutuo erogato"
- `landing.truth.kpis[3].value`: "25-30 anni"
  `landing.truth.kpis[3].label`: "durata del 43% dei nuovi mutui"

### Paragrafi sotto la KPI bar
- `landing.truth.p1`: "Più la rata dura, più gli errori si accumulano. Più sono le sospensioni, più il piano di rimborso viene ricalcolato. Più sono le rinegoziazioni, più tornano interessi da spiegare. Più anni passano, più il rischio che la banca abbia sbagliato cresce."
- `landing.truth.p2`: "Il problema non è solo umano. È matematico. La differenza tra un piano scritto in regime di capitalizzazione semplice e uno in regime di capitalizzazione composta è la differenza tra qualche migliaio di euro pagati in più o di meno. Su 25 anni, conta."

---

## 4. Sezione 3 — La figura: Antonio Annibali

- **Eyebrow** `landing.authority.eyebrow`: "Chi c'è al nostro tavolo"
- **Titolo** `landing.authority.title`: "Antonio Annibali ha passato decenni a dimostrare che gli interessi nei mutui italiani vanno guardati con un'altra lente. Oggi quella lente è la nostra."
- **Bio** `landing.authority.bio`:
  "Professore ordinario di Matematica Finanziaria all'Università La Sapienza di Roma.
  Docente alla LUISS Guido Carli.
  Attuario incaricato di bilanci tecnici per le casse di previdenza dei dottori commercialisti, della professione infermieristica, degli impiegati in agricoltura.
  Ha pubblicato in modo continuo, dal 2016 ad oggi, lavori che dimostrano matematicamente la presenza di anatocismo nei mutui ‘alla francese’ stilati in capitalizzazione composta — lavori che hanno costretto comunità accademica e tribunali a guardare il problema più da vicino.
  Annibali siede al nostro tavolo. È la firma matematica e dottrinale del nostro metodo."

- **Pull quote** `landing.authority.quote`:
  "L'anatocismo, in matematica finanziaria, è la trasformazione di interessi in capitale. Quando un mutuo è scritto in regime di capitalizzazione composta, escludendo casi limite banali, gli interessi su interessi sono lì, anche se nessuno li ha dichiarati."
- `landing.authority.quoteCite`: "— Prof. Antonio Annibali, *Sulla misura del livello di anatocismo presente nelle operazioni finanziarie regolate dal regime della capitalizzazione composta*, 2021"

### Lista pubblicazioni (mostrare massimo 5)
- `landing.authority.papers[0]`: "Anatocismo, metodologie di ammortamento e regimi finanziari (Napoli, 2016)"
- `landing.authority.papers[1]`: "Il modello matematico ‘completo’ del calcolo del TEG per la verifica di usura in mutui e finanziamenti (2019)"
- `landing.authority.papers[2]`: "Giusta nota per dimostrare la presenza di anatocismo nell’ammortamento dei mutui ‘alla francese’ in capitalizzazione composta (2019)"
- `landing.authority.papers[3]`: "Sulla misura del livello di anatocismo nelle operazioni finanziarie in capitalizzazione composta (2021)"
- `landing.authority.papers[4]`: "Contro-rapporto al Rapporto Scientifico AMASES 2022/01 sull'anatocismo nei mutui (2023)"

### Sotto-sezione "Il team che applica la sua dottrina"
- `landing.authority.teamEyebrow`: "Chi lavora ogni giorno sui contratti"
- `landing.authority.teamTitle`: "I matematici che applicano il metodo, ogni giorno, sui mutui veri"
- `landing.authority.teamBody`:
  "Annibali ha dato la cornice teorica. Il team matematico che lavora con noi la applica nella pratica quotidiana: legge i piani di ammortamento, verifica i regimi finanziari, calcola le discrepanze, scrive le perizie.
  Sono specialisti operativi che hanno lavorato per anni accanto a lui, sui casi reali, e che oggi portano la sua matematica fino alla scrivania del giudice."

### Closing della sezione
- `landing.authority.closing`: "Quando analizziamo il tuo mutuo, lo facciamo con la matematica di Annibali e con le mani di chi quella matematica la applica ogni giorno. Non con il foglio Excel di tutti."

### CTA card
- `landing.authority.ctaLabel`: "Scopri il metodo"
- `landing.authority.ctaHref`: `#metodo`

---

## 5. Sezione 4 — Il metodo: matematica + AI + legge

- **Eyebrow** `landing.method.eyebrow`: "Il nostro metodo"
- **Titolo** `landing.method.title`: "Tre cose insieme: la matematica, l'AI, il diritto. Una senza l'altra non basta."

### Card 1 — Matematica
- `landing.method.cards[0].title`: "Matematica seria, non foglio di calcolo improvvisato"
- `landing.method.cards[0].body`:
  "La filosofia matematica del nostro metodo porta la firma del Prof. Antonio Annibali.
  Il team operativo che la applica ogni giorno è cresciuto al suo fianco e oggi lavora con strumenti aggiornati su contratti reali.
  Conosciamo la differenza tra regime semplice e composto, sappiamo cosa succede quando il piano viene ricalcolato dopo una sospensione, sappiamo leggere il TAEG come si deve.
  Non improvvisiamo perizie: lavoriamo con strumenti accademici."

### Card 2 — Intelligenza artificiale
- `landing.method.cards[1].title`: "L'AI fa quello che un consulente da solo non riuscirebbe a fare in tempi umani"
- `landing.method.cards[1].body`:
  "L'umano da solo sbaglia.
  L'AI da sola sbaglia.
  Insieme, l'errore si riduce.
  Il nostro sistema legge il PDF in pochi minuti, estrae il piano di ammortamento, verifica i tassi, confronta i regimi, segnala tutte le discrepanze che meritano una seconda lettura.
  Tu vedi una prima preview. Il matematico vede il resto."

### Card 3 — Diritto
- `landing.method.cards[2].title`: "Se la banca ha sbagliato, si va davanti al giudice."
- `landing.method.cards[2].body`:
  "Il team legale lavora con i nostri matematici da anni.
  10 cause portate, 8 vinte.
  Oltre 400.000€ restituiti ai clienti.
  Niente anticipi: si lavora a successo.
  Se non si può fare, te lo diciamo prima di farti perdere tempo."

### Pull quote di chiusura sezione
- `landing.method.closingQuote`:
  "Un umano sbaglia.
  Un umano con l'AI sbaglia meno.
  Un umano con l'AI, una squadra di matematici e Annibali al tavolo, una discrepanza la trova."

---

## 6. Sezione 5 — Risultati (data wall)

- **Eyebrow** `landing.results.eyebrow`: "I numeri reali, aggiornati"
- **Titolo** `landing.results.title`: "Non promesse. Quello che è successo davvero."

### KPI
- `landing.results.kpis[0].value`: "10"
  `landing.results.kpis[0].label`: "cause portate avanti"
- `landing.results.kpis[1].value`: "8/10"
  `landing.results.kpis[1].label`: "vinte"
- `landing.results.kpis[2].value`: "€ 400.000+"
  `landing.results.kpis[2].label`: "restituiti ai nostri clienti"
- `landing.results.kpis[3].value`: "€ 0"
  `landing.results.kpis[3].label`: "anticipati dai nostri clienti"

### Footnote
- `landing.results.footnote`: "Numeri aggiornati al [DATA]. Casistica reale, non simulata. La nostra responsabilità è dirti se vale la pena di muoversi, non promettere risultati che non possiamo garantire."

### CTA
- `landing.results.ctaLabel`: "Vedi le sentenze"
- `landing.results.ctaHelp`: "Anonimizzate dove richiesto dalla legge."

---

## 7. Sezione 6 — Come funziona

- **Eyebrow** `landing.flow.eyebrow`: "Come funziona, in 5 passaggi"
- **Titolo** `landing.flow.title`: "Cinque passaggi. Niente burocrazia. Niente sorprese."

### Step 1
- `landing.flow.steps[0].title`: "Carichi il PDF del mutuo"
- `landing.flow.steps[0].body`:
  "Mutuo, leasing, finanziamento, conto corrente: ci basta il piano di ammortamento o il contratto.
  Non sai dove trovarlo? Hai un breve tutorial qui sotto: in 60 secondi sai dove cercare nel home banking della tua banca."
- `landing.flow.steps[0].cta`: "Vedi tutorial"

### Step 2
- `landing.flow.steps[1].title`: "L'AI legge il documento"
- `landing.flow.steps[1].body`:
  "In pochi minuti il nostro sistema estrae le voci principali: capitale, durata, tasso, regime, TAEG dichiarato, condizioni di mora, eventuali sospensioni.
  Confronta con la matematica corretta.
  Segnala dove ci sono divergenze."

### Step 3
- `landing.flow.steps[2].title`: "Ricevi una prima preview"
- `landing.flow.steps[2].body`:
  "Una pagina di sintesi.
  Se non c'è nulla, te lo diciamo apertamente: ‘sembra in regola’.
  Se c'è qualcosa, te lo diciamo nello stesso modo: ‘ci sono X segnali che meritano un'analisi più approfondita’."

### Step 4
- `landing.flow.steps[3].title`: "Ti ricontatta un consulente vero"
- `landing.flow.steps[3].body`:
  "Niente bot.
  Una persona ti chiama o ti scrive, ti chiede i documenti che mancano, ti dice cosa serve per arrivare a una perizia completa.
  Anche qui, gratis."

### Step 5
- `landing.flow.steps[4].title`: "Se la banca ti deve dei soldi, si parte"
- `landing.flow.steps[4].body`:
  "Si formalizza la perizia con il matematico.
  Si valuta la strategia con il team legale.
  Si manda la diffida.
  Se serve, si va davanti al giudice.
  Tu non anticipi nulla."

### CTA dopo i 5 step
- `landing.flow.cta`: "Avvia la pre-analisi"
- `landing.flow.help`: "Caricamento sicuro · I tuoi documenti restano tuoi"

---

## 8. Sezione 7 — Cosa scopriamo (tipologie di discrepanze)

- **Eyebrow** `landing.findings.eyebrow`: "Cosa cerchiamo nel tuo contratto"
- **Titolo** `landing.findings.title`: "Le sei aree in cui le banche, statisticamente, sbagliano di più."

### Card
1. `landing.findings.items[0].title`: "Anatocismo sui conti correnti"
   `landing.findings.items[0].body`: "Interessi calcolati sugli interessi quando la legge non lo permetteva. La Corte di Cassazione, ordinanza n. 18664/2023, ha ribadito che il correntista può chiedere la rideterminazione del saldo se l'anatocismo è stato applicato in modo illegittimo."
   `landing.findings.items[0].tag`: "Cass. 18664/2023"

2. `landing.findings.items[1].title`: "Discrasia TAEG / ISC"
   `landing.findings.items[1].body`: "Il TAEG indicato sul contratto è diverso da quello effettivamente applicato. Es. Tribunale di Avezzano, sentenza n. 168 del 21/02/2026: il piano è stato ricalcolato e oltre 5.900 € sono stati restituiti."
   `landing.findings.items[1].tag`: "Trib. Avezzano 168/2026"

3. `landing.findings.items[2].title`: "Mora sopra la soglia di usura"
   `landing.findings.items[2].body`: "Tassi di mora applicati oltre il limite legale al momento della stipula. Implica la non debenza degli interessi moratori e, in alcuni casi, conseguenze più ampie sul contratto."
   `landing.findings.items[2].tag`: "art. 644 c.p. / L.108/96"

4. `landing.findings.items[3].title`: "Capitalizzazione composta non trasparente"
   `landing.findings.items[3].body`: "Il regime di calcolo non è dichiarato in contratto. Se il maggior costo derivante non è chiarito al cliente, alcune sentenze hanno riconosciuto il ricalcolo in capitalizzazione semplice."
   `landing.findings.items[3].tag`: "art. 117 TUB"

5. `landing.findings.items[4].title`: "Piano ricalcolato male dopo sospensione"
   `landing.findings.items[4].body`: "Le moratorie e le sospensioni possono produrre ricalcoli scorretti del capitale residuo e degli interessi. Spesso queste anomalie restano invisibili senza una verifica matematica completa."
   `landing.findings.items[4].tag`: "verifica caso-per-caso"

6. `landing.findings.items[5].title`: "Penali ed estinzione anticipata"
   `landing.findings.items[5].body`: "Penali oltre il limite di legge, oneri accessori non inclusi nel TAEG, spese di chiusura non dovute. Tutti elementi su cui si può chiedere il ricalcolo."
   `landing.findings.items[5].tag`: "art. 125 sexies TUB"

### Disclaimer onesto
- `landing.findings.disclaimer`:
  "Importante: non tutti i mutui hanno errori.
  La Corte di Cassazione, Sezioni Unite, sentenza n. 15130 del 2024, ha chiarito che il piano alla francese in sé non è automaticamente anatocistico.
  Proprio per questo serve un'analisi vera, non un proclama.
  Noi guardiamo il tuo caso. Se c'è, lo trovi. Se non c'è, te lo diciamo."

---

## 9. Sezione 8 — Demo: la preview oscurata

- **Eyebrow** `landing.demo.eyebrow`: "Anteprima di un report reale (anonimizzato)"
- **Titolo** `landing.demo.title`: "Questo è quello che troviamo davvero in un piano di ammortamento."

### Card report (preview oscurata)
- Header: "Report di pre-analisi — Mutuo prima casa, durata 25 anni"
- Sezione "Dati contratto" (visibili):
  - Importo: € 161.000
  - Durata: 25 anni
  - Tasso fisso: 3,43% dichiarato
  - Regime: capitalizzazione composta non dichiarata in contratto
- Sezione "Discrepanze rilevate" (parte visibile, parte blur):
  - Voce 1: "Differenza TAEG dichiarato / effettivo" — visibile severità ALTA, valore oscurato
  - Voce 2: "Capitalizzazione composta non trasparente" — visibile severità MEDIA, dettagli oscurati
  - Voce 3-7: oscurate
- Sezione "Stima differenza" (oscurata): "€ ████ — sblocca con l'analisi completa"
- Overlay copy:
  - `landing.demo.overlayTitle`: "Per vedere il dettaglio, ti serve l'analisi completa."
  - `landing.demo.overlayBody`: "Da quello che vediamo qui, è probabile che la banca ti debba dei soldi. Possiamo procedere insieme. Senza anticipi."
  - `landing.demo.overlayCta`: "Procedi con l'analisi del mio mutuo"

---

## 10. Sezione 9 — Per chi è

- **Eyebrow** `landing.audience.eyebrow`: "Per chi serve"
- **Titolo** `landing.audience.title`: "Tre profili. Stessa analisi seria."

### Card 1 — Privati
- `landing.audience.cards[0].title`: "Privati con mutuo casa"
- `landing.audience.cards[0].body`: "Mutuo prima casa, seconda casa, ristrutturazione, surroghe. In corso o estinto da meno di 10 anni: la prescrizione lavora a tuo favore se ti muovi adesso."
- bullet:
  - "Mutuo prima casa"
  - "Mutuo seconda casa"
  - "Ristrutturazione e green"
  - "Surroghe e rinegoziazioni"

### Card 2 — Aziende e P.IVA
- `landing.audience.cards[1].title`: "Aziende e Partite IVA"
- `landing.audience.cards[1].body`: "Conto corrente aziendale, leasing, finanziamenti a medio termine, anticipo fatture. Sono i contratti in cui storicamente le banche applicano più anatocismo: la Cassazione lo ha confermato più volte."
- bullet:
  - "Conto corrente aziendale"
  - "Leasing immobiliare e strumentale"
  - "Finanziamento a medio termine"
  - "Anticipo fatture / castelletto"

### Card 3 — Decreti e precetti
- `landing.audience.cards[2].title`: "Decreti ingiuntivi, precetti, esecuzioni"
- `landing.audience.cards[2].body`: "Se hai ricevuto un decreto ingiuntivo o un atto di precetto, c'è tempo per analizzare il piano e contestare gli importi non dovuti. Spesso si scopre che la cifra contestata è molto inferiore a quella richiesta."
- bullet:
  - "Decreto ingiuntivo ricevuto"
  - "Atto di precetto"
  - "Pignoramento in corso"
  - "Recupero crediti aggressivo"

---

## 11. Sezione 10 — Voci dei clienti

- **Eyebrow** `landing.testimonials.eyebrow`: "Voci di chi si è affidato a noi"
- **Titolo** `landing.testimonials.title`: "Sono storie di persone, non di marketing."

**Convenzione**: tutti i casi sono citati **in anonimo** (es. "Cliente A.", "Famiglia del nord Italia", "Azienda manifatturiera"). Mai nome e cognome reale. Mai città piccola che possa identificare.

### Testimonial 1 (privato — caso storico)
- `landing.testimonials.items[0].quote`:
  "Avevo paura di tutto: paura di buttare via tempo, paura della banca, paura del consulente che mi avrebbe fatto pagare in anticipo. Alla fine mi sono fidato. Tre anni dopo, il mutuo è finito in anticipo e mi hanno restituito 8.500 €."
- `landing.testimonials.items[0].amount`: "€ 8.500 restituiti + estinzione anticipata"
- `landing.testimonials.items[0].name`: "Cliente A."
- `landing.testimonials.items[0].context`: "Mutuo prima casa, € 95.000, durata residua 7 anni"

### Testimonial 2 (privato — riduzione rata)
- `landing.testimonials.items[1].quote`:
  "Avevo cinque anni di mutuo ancora da pagare e una rata che era diventata insostenibile. Hanno analizzato il piano in due settimane. Oggi non pago più nulla alla banca e ho ricevuto un rimborso che non immaginavo nemmeno."
- `landing.testimonials.items[1].amount`: "€ 5.000 restituiti + estinzione"
- `landing.testimonials.items[1].name`: "Cliente B."
- `landing.testimonials.items[1].context`: "Mutuo prima casa, residuo 5 anni"

### Testimonial 3 (caso "Sig.ra Anna" — dal vecchio sito, anonimizzato)
- `landing.testimonials.items[2].quote`:
  "Avevo pagato 160 rate del mio mutuo. Pensavo di doverne ancora 116 per arrivare a fine corsa, circa 35.000 € residui. Dopo l'analisi è venuto fuori che in realtà avevo già pagato tutto. Anzi: la banca mi doveva 7.000 €."
- `landing.testimonials.items[2].amount`: "Mutuo già estinto + € 7.000 da recuperare"
- `landing.testimonials.items[2].name`: "Cliente C."
- `landing.testimonials.items[2].context`: "Mutuo prima casa, 160 rate pagate su 276"

### Testimonial 4 (azienda)
- `landing.testimonials.items[3].quote`:
  "Avevamo un conto corrente aziendale aperto da 18 anni. Lo abbiamo dato in analisi pensando ‘non troveranno niente’. È venuta fuori una cifra a sei zeri di interessi calcolati in modo scorretto. La banca ha trattato, la causa è stata vinta."
- `landing.testimonials.items[3].amount`: "Oltre € 150.000 ottenuti in transazione"
- `landing.testimonials.items[3].name`: "Azienda manifatturiera del nord Italia"
- `landing.testimonials.items[3].context`: "Conto corrente aziendale aperto da 18 anni"

### Testimonial 5 (riduzione rata, esempio storico)
- `landing.testimonials.items[4].quote`:
  "La mia rata era di 600 € al mese. Dopo l'analisi e il ricalcolo, è scesa a 256 €. Un'altra famiglia che seguivano è passata da 900 € a 411 €. Quello che cambia non è solo il rimborso, è quanto respiri ogni mese."
- `landing.testimonials.items[4].amount`: "Rata mensile da € 600 a € 256"
- `landing.testimonials.items[4].name`: "Famiglia del centro Italia"
- `landing.testimonials.items[4].context`: "Mutuo prima casa, durata residua 12 anni"

### Pull quote finale
- `landing.testimonials.closing`:
  "‘Se la banca sbaglia, è giusto che paghi.’
  È la frase che ci ripetono i clienti quando finisce tutto.
  È anche il principio da cui partiamo noi."

---

## 11.bis Sezione SOS — quando c'è poco tempo

Sezione dedicata alle emergenze: chi ha già ricevuto un atto e non sa cosa fare nei prossimi giorni.
Posizionata **dopo "Per chi è" e prima delle testimonianze**, con palette leggermente più rossa/coral per segnalare l'urgenza (nel design system: bordi coral, eyebrow coral, body invariato).

- **Eyebrow** `landing.sos.eyebrow`: "Hai poco tempo. Iniziamo subito."
- **Titolo** `landing.sos.title`: "SOS bancario: quando l'atto è già arrivato a casa"
- **Lead** `landing.sos.lead`: "Decreti, precetti, recuperi crediti aggressivi: ci sono scadenze precise. Più passa il tempo, più si stringe lo spazio di manovra. Parla con noi prima di prendere decisioni."

### Card 1 — SOS Decreto ingiuntivo
- `landing.sos.items[0].title`: "Decreto ingiuntivo ricevuto"
- `landing.sos.items[0].deadline`: "40 giorni per opporsi"
- `landing.sos.items[0].body`:
  "Il decreto ingiuntivo è un provvedimento sommario: ti ingiunge di pagare entro 40 giorni dalla notifica, e ti avverte che in mancanza di opposizione si va all'esecuzione forzata.
  In quei 40 giorni si può ancora contestare l'importo, verificare il piano, opporre vizi di forma e di merito.
  Chiamaci o scrivici lo stesso giorno: la prima telefonata è gratis e ti diciamo se vale la pena di opporsi."
- `landing.sos.items[0].cta`: "Parla con noi adesso"

### Card 2 — SOS Precetto
- `landing.sos.items[1].title`: "Atto di precetto"
- `landing.sos.items[1].deadline`: "10 giorni minimo per adempiere"
- `landing.sos.items[1].body`:
  "Il precetto è l'intimazione di pagamento che precede l'esecuzione forzata. È fondato su un titolo esecutivo (un decreto ingiuntivo, un assegno, una cambiale).
  Ci si può opporre in due modi: opposizione all'esecuzione (si discutono le prove) e opposizione agli atti esecutivi (si cercano vizi di forma e processuali).
  Anche qui, 24 ore contano. Chiamaci: ti diciamo subito quale strada è praticabile per te."
- `landing.sos.items[1].cta`: "Chiamaci"

### Card 3 — SOS Recupero crediti
- `landing.sos.items[2].title`: "Recupero crediti aggressivo"
- `landing.sos.items[2].deadline`: "Riguarda anche il debito ceduto"
- `landing.sos.items[2].body`:
  "Hai ricevuto una telefonata o una lettera di una società che ha acquistato il tuo debito con la banca?
  La cessione del credito non rende automaticamente esigibile l'intero importo: spesso, ricalcolando il rapporto originario, la cifra effettivamente dovuta è molto inferiore.
  Prima di pagare o di negoziare con la società di recupero, sentiamoci."
- `landing.sos.items[2].cta`: "Verifica la posizione"

### Card 4 — SOS Altro
- `landing.sos.items[3].title`: "Altre situazioni d'emergenza"
- `landing.sos.items[3].deadline`: "Pignoramenti, sospensioni, sollecito"
- `landing.sos.items[3].body`:
  "Pignoramento immobiliare in arrivo, sospensione di un mutuo scaduta male, sollecito di pagamento con condizioni che non tornano, fideiussione attivata: ogni situazione ha le sue scadenze e i suoi spazi.
  Se non sai da dove cominciare, comincia da una telefonata: non costa niente capire."
- `landing.sos.items[3].cta`: "Spiegaci il caso"

### Microcopy comune
- `landing.sos.helpLine`: "Numero verde 800 141359 — risponde una persona vera, non un bot."
- `landing.sos.disclaimer`: "Il primo contatto è gratuito e non costituisce mandato professionale: serve solo a capire se possiamo aiutarti."

---

## 12. Sezione 11 — Pillole del matematico

- **Eyebrow** `landing.pills.eyebrow`: "Le pillole del matematico"
- **Titolo** `landing.pills.title`: "Quattro video brevi per capire prima di firmare qualunque cosa."

### Pillole
1. `landing.pills.items[0].title`: "Cos'è l'anatocismo, spiegato in 2 minuti"
   `landing.pills.items[0].duration`: "2'18\""
2. `landing.pills.items[1].title`: "Capitalizzazione composta vs. semplice: la differenza in un disegno"
   `landing.pills.items[1].duration`: "3'04\""
3. `landing.pills.items[2].title`: "Quando la Cassazione n. 15130/2024 vale per te (e quando no)"
   `landing.pills.items[2].duration`: "4'12\""
4. `landing.pills.items[3].title`: "Il rischio della perizia improvvisata: tre errori che si vedono ad occhio"
   `landing.pills.items[3].duration`: "3'47\""

### CTA
- `landing.pills.cta`: "Vedi tutte le pillole"

---

## 13. Sezione 12 — Stampa & Sentenze

- **Eyebrow** `landing.press.eyebrow`: "Stampa e sentenze"
- **Titolo** `landing.press.title`: "Cosa dicono di noi e cosa hanno deciso i tribunali."

### Trust strip (solo loghi reali, da fornire)
- "Il Sole 24 Ore"
- "Corriere Economia"
- "La Repubblica"
- "Italia Oggi"

(NB: i loghi vanno usati solo se davvero esistono articoli che ci citano. Non inserire loghi fasulli — anti-pattern.)

### Sentenze rappresentative (anonimizzate)
- "Tribunale di Avezzano, sentenza n. 168 del 21/02/2026 — Mutuo, rimborso di € 5.979,41"
- "Cass. ord. n. 18664/2023 — Anatocismo illegittimo su conto corrente"
- "Cass. SU n. 15130/2024 — Limiti del piano alla francese (sentenza che cita la nostra dottrina)"

### CTA
- `landing.press.cta`: "Vedi l'elenco completo delle sentenze"

---

## 14. Sezione 13 — FAQ

- **Titolo** `landing.faq.title`: "Domande oneste, risposte oneste."
- **Lead** `landing.faq.lead`: "Se hai una domanda diversa, scrivici. Risponde una persona vera."

### Q1
- `landing.faq.items[0].q`: "Funziona davvero su qualsiasi mutuo?"
- `landing.faq.items[0].a`:
  "Funziona su quasi tutti i contratti di mutuo, leasing, finanziamento e conto corrente, sia per privati che per aziende.
  Quello che cambia è il risultato: alcuni contratti sono in regola, altri no.
  La nostra promessa è dirti la verità su entrambi."

### Q2
- `landing.faq.items[1].q`: "Cosa succede se non trovate niente?"
- `landing.faq.items[1].a`:
  "Te lo diciamo apertamente, con la pre-analisi.
  Niente paga, niente perdita di tempo.
  In quel caso ti consigliamo cosa controllare in futuro (es. dopo una surroga o una rinegoziazione)."

### Q3
- `landing.faq.items[2].q`: "Quanto costa la pre-analisi?"
- `landing.faq.items[2].a`: "Zero. È gratuita. La offriamo perché è il modo più onesto di farti capire chi siamo."

### Q4
- `landing.faq.items[3].q`: "E la causa? Quanto costa?"
- `landing.faq.items[3].a`:
  "Lavoriamo con un modello a successo, senza anticipi sostanziali del cliente.
  Se la causa va bene, una parte del recupero copre il lavoro fatto.
  Le condizioni esatte vengono discusse e firmate prima.
  Niente sorprese."

### Q5
- `landing.faq.items[4].q`: "Quanto può durare?"
- `landing.faq.items[4].a`:
  "La pre-analisi è una questione di pochi minuti per la parte AI, e di pochi giorni per la prima risposta umana.
  La perizia completa richiede dalle 2 alle 4 settimane.
  La causa, se serve, ha tempi giudiziari italiani: stiamo parlando di mesi, non giorni. Ma intanto si protegge la posizione."

### Q6
- `landing.faq.items[5].q`: "Il mio mutuo è estinto da 8 anni: posso ancora?"
- `landing.faq.items[5].a`:
  "Sì, ma con urgenza.
  La prescrizione ordinaria è 10 anni dalla chiusura del rapporto.
  Ogni mese che passa è un mese in meno di cui chiedere il ricalcolo."

### Q7
- `landing.faq.items[6].q`: "Posso fare l'analisi anche su un leasing?"
- `landing.faq.items[6].a`:
  "Sì.
  Il leasing è uno dei contratti su cui troviamo più discrepanze: ammortamenti calcolati con regole proprie, indicizzazioni, riscatti.
  Il principio è lo stesso del mutuo: se la banca o la società di leasing ha applicato male il piano, si può ricalcolare."

### Q8
- `landing.faq.items[7].q`: "Cosa fa l'AI, esattamente?"
- `landing.faq.items[7].a`:
  "Legge il PDF, estrae i dati di contratto, ricostruisce il piano di ammortamento, verifica il TAEG dichiarato vs. effettivo, confronta il regime di capitalizzazione, controlla la mora.
  È un acceleratore della pre-analisi, non sostituisce la perizia del matematico.
  È quello che fa la differenza tra una verifica fatta su 20 contratti in un mese e una fatta su 2."

### Q9
- `landing.faq.items[8].q`: "I miei documenti restano riservati?"
- `landing.faq.items[8].a`:
  "Sì.
  Vengono caricati in modo cifrato, restano nei nostri sistemi solo per il tempo necessario all'analisi, e poi vengono restituiti o cancellati su tua richiesta.
  Trovi tutto nell'informativa privacy."

### Q10
- `landing.faq.items[9].q`: "Cosa cambia rispetto a un altro studio legale o consulente?"
- `landing.faq.items[9].a`:
  "Tre cose:
  1) la nostra matematica è formata sui lavori di Antonio Annibali, una delle voci accademiche più riconosciute sul tema;
  2) abbiamo uno strumento AI che fa la pre-analisi in pochi minuti;
  3) non ti chiediamo soldi per scoprire se vale la pena di muoversi.
  Sono tre cose che insieme nessun altro mette sul tavolo allo stesso tempo."

### Q11
- `landing.faq.items[10].q`: "Se la Cassazione ha detto che la francese non è anatocistica, perché dovrei rivolgermi a voi?"
- `landing.faq.items[10].a`:
  "Perché l'anatocismo non è l'unica cosa che si può trovare.
  Discrasia del TAEG, mora oltre soglia, capitalizzazione non dichiarata, errori sul ricalcolo dopo sospensioni, penali fuori legge, oneri non inclusi nel TAEG: sono casi reali, su cui i tribunali continuano a dare ragione ai clienti.
  Cass. SU 15130/2024 dice che il piano alla francese in sé non è anatocistico. Non dice che il tuo piano è privo di errori."

---

## 15. Sezione 14 — CTA finale

- **Titolo** `landing.finalCta.title`:
  "Se la banca ti deve dei soldi, vale la pena di scoprirlo.
  Non costa niente provarci."
- **Sub** `landing.finalCta.sub`:
  "Carica ora il PDF del tuo mutuo, del tuo leasing o del tuo finanziamento.
  Pochi minuti per l'AI. Pochi giorni per la prima risposta umana.
  Zero anticipi."
- **CTA primary** `landing.finalCta.primary`: "Avvia la pre-analisi gratuita"
- **CTA secondary** `landing.finalCta.secondary`: "Parla con un consulente vero"
- **Microcopy** `landing.finalCta.microcopy`: "Nessuna carta. Nessun bot. Nessun vincolo."

---

## 16. Sezione 15 — Footer

### Brand block
- Payoff `landing.footer.payoff`: "La verità sulla matematica dei mutui italiani."
- Sotto logo: "Costruito con AI, matematica e diritto."

### Colonna 1 — Servizio
- "Avvia pre-analisi"
- "Come funziona"
- "Per privati"
- "Per aziende"
- "Per studi legali partner"

### Colonna 2 — Metodo
- "Il team matematico"
- "Antonio Annibali"
- "L'AI: cosa fa, cosa non fa"
- "Sentenze di riferimento"
- "Glossario"

### Colonna 3 — Risorse
- "Pillole del matematico"
- "Articoli"
- "Guida: come leggere un piano di ammortamento"
- "Tutorial: dove trovare i documenti nel home banking"
- "FAQ"

### Colonna 4 — Legali
- "Privacy"
- "Cookie"
- "Termini del servizio"
- "Statuto associazione"
- "Accessibility statement"

### Bottom row
- "© 2026 [Brand]. Tutti i diritti riservati. P.IVA — [DATO]."
- "Per assistenza: [EMAIL] · [TEL]"

---

## 17. Microcopy generali (riusabili)

### Loading
- `loading.upload`: "Carico il PDF in sicurezza…"
- `loading.parse`: "Estraggo il piano di ammortamento…"
- `loading.verify`: "Verifico tassi e regime…"
- `loading.compare`: "Confronto con la matematica corretta…"
- `loading.summary`: "Preparo la pre-analisi…"

### Empty state strumento
- `empty.upload.title`: "Non hai ancora caricato nessun documento."
- `empty.upload.body`: "Trascina qui un PDF di mutuo, leasing o finanziamento per iniziare."
- `empty.upload.cta`: "Scegli un PDF"

### Error
- `error.upload.format`: "Per ora accettiamo solo PDF. Riprova con un file PDF."
- `error.upload.size`: "Il file è troppo grande. Massimo 25MB."
- `error.upload.generic`: "Non siamo riusciti a leggere il file. Riprova o scrivici, lo apriamo manualmente noi."

### No-result
- `noresult.title`: "Da quello che vediamo, il tuo contratto sembra in regola."
- `noresult.body`: "Se vuoi un'analisi più approfondita possiamo comunque farla. Alcune discrepanze si vedono solo guardando da vicino il piano completo e le moratorie."
- `noresult.cta`: "Richiedi una verifica manuale"

### Disclaimer GDPR sotto upload
- `gdpr.upload`: "Caricando il file accetti l'informativa privacy. Il PDF viene cifrato in transito e a riposo, è visibile solo al nostro team di analisi, e viene conservato il tempo strettamente necessario all'analisi."

---

## 18. Annunci / Ads ready (per evolutivi)

### Headline Google Ads (max 30 char)
1. "Mutuo: ti hanno fatto pagare troppo?"
2. "Pre-analisi mutuo gratis con AI"
3. "Errori in mutui: scoprilo gratis"
4. "Annibali + AI per il tuo mutuo"
5. "La banca paga sempre se sbaglia"

### Description (max 90 char)
1. "Carica il PDF, lo leggiamo in pochi minuti. Senza anticipi. 8/10 cause vinte."
2. "Matematica accademica + AI + diritto. 400.000€ restituiti ai clienti."
3. "Discrepanze su TAEG, mora, capitalizzazione: scoprile in 24 ore."

### Annuncio Facebook (caso "checkup bancario")
Headline: "Cosa pensa la tua banca di te? E cosa ti sta facendo pagare in più?"
Body:
"Carichi il PDF del tuo mutuo o del tuo conto aziendale.
Il nostro sistema AI lo legge in pochi minuti.
Ti diciamo se la banca ha applicato qualcosa di scorretto. Se non c'è niente, te lo diciamo lo stesso.
Nessun anticipo. Niente bot. Una persona vera ti richiama in 24 ore."
CTA: "Verifica adesso"

---

## 19. Tone of voice — regole di stile per il copy

### Verbi
- 2a singolare (tu).
- Verbi concreti: "carichi", "guardi", "leggi", "decidi".
- Niente "noi siamo i migliori".

### Frasi
- Brevi.
- Spesso una frase = una riga.
- Niente subordinate annegate.

### Lessico
- Italiano, non itanglese.
- Termini tecnici quando servono, sempre con spiegazione vicina.
- Mai "tieni d'occhio gli interessi sui mutui" → si dice cosa fare, in concreto.

### Cosa evitare
- "Siamo i numeri uno"
- "Affidati ai nostri esperti"
- "La soluzione definitiva ai tuoi problemi"
- "Riprendi il controllo delle tue finanze"
- "Smart" / "Empower" / "Game changer"
- Emoji nei titoli
- Esclamativi a raffica

### Quando alzare il tono
Solo in due casi:
1. La pull quote di Annibali (è una citazione, ha un peso suo).
2. Il payoff finale.

---

## 20. SEO copy

### Title tag (home)
"Analisi mutui con AI + matematici — Scopri se la banca ti deve dei soldi"

### Meta description
"Carichi il PDF del tuo mutuo o leasing, lo leggiamo in pochi minuti con AI e matematica. 8 cause vinte su 10. 400.000€ restituiti ai clienti. Pre-analisi gratuita."

### H1
"La banca paga sempre se sbaglia. La domanda è: sta sbagliando con te?"

### Open Graph
- og:title: "Analisi mutui con AI — Scopri se la banca ti deve dei soldi"
- og:description: "Pre-analisi gratuita del tuo mutuo, leasing o finanziamento. AI + matematici formati dal Prof. Antonio Annibali."
- og:image: 1200×630 con titolo serif in oro su fondo `--bg-deep`

### Structured data
- Organization
- WebSite + SearchAction
- FAQPage (Sezione 13)
- BreadcrumbList
- LegalService

---

## 21. Note finali sul tono

Chi arriva qui non è uno che cerca un'altra app fintech.
È uno che ha l'estratto conto sotto gli occhi e una rata che non torna.
O un imprenditore con un decreto ingiuntivo sulla scrivania.
O una famiglia con la paura di non farcela.
Tutto il copy qui sopra esiste per parlargli senza fargli paura, senza prenderlo in giro, senza promettergli stelle.

Diciamo cose vere. E lasciamo che siano i numeri reali a fare il marketing.
