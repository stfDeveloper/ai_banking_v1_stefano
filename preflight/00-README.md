# Preflight — ai_banking_v1_stefano

Cartella di preparazione strategica e tecnica per la landing di analisi mutui con AI + matematici formati dal Prof. Antonio Annibali.

## Indice

1. [`01-design-system.md`](./01-design-system.md) — Design system completo (dark mutui), palette, tipografia, motion, componenti, sezioni, CTA, a11y, perf, token CSS pronti. 1000+ righe.
2. [`02-copy-deck.md`](./02-copy-deck.md) — Tutto il copy in italiano, chiavi i18n, microcopy, FAQ, SEO copy. Conversion-focused.
3. [`03-research.md`](./03-research.md) — Ricerca su Annibali, mercato italiano mutui 2026, giurisprudenza Cass. SU 15130/2024, ord. 18664/2023, sentenze territoriali, tear-down competitor (TutelaMutuo + Cesynt).
4. [`04-action-plan.md`](./04-action-plan.md) — Piano d'azione operativo: scope, fasi, dipendenze, roadmap, KPI, DOD.
5. [`05-materials.md`](./05-materials.md) — Stato dei materiali (tutti i 16 file letti integralmente).
6. [`06-old-site-extracts.md`](./06-old-site-extracts.md) — Distillato del vecchio sito "Check-up Bancario": frasi-killer, brand storico, esempi numerici, mappa pagine SOS, modello commerciale "zero anticipo", domande aperte per Stefano.
7. [`materials/`](./materials/) — 16 file (1 PDF + 15 txt convertiti da docx) dei materiali storici.

## Order of reading per Stefano

1. `05-materials.md` (sapere subito cosa devi sbloccare e quanto ci vuole).
2. `04-action-plan.md` (capire il piano e le decisioni che ti servono prendere).
3. `03-research.md` (vedere su che fonti sono basati i claim).
4. `02-copy-deck.md` (validare il tono e i numeri).
5. `01-design-system.md` (validare l'estetica e la struttura).

## Riepilogo posizionamento

- **Promessa**: la banca paga sempre se sbaglia. Noi ti diciamo se sta sbagliando con te.
- **USP**:
  1. AI proprietaria per pre-analisi PDF in pochi minuti.
  2. Team matematico formato sui lavori del Prof. Antonio Annibali (Sapienza, LUISS).
  3. 10 cause, 8 vinte, oltre €400.000 restituiti, zero anticipi.
  4. Trasparenza accademica e giurisprudenziale (citiamo anche Cass. SU 15130/2024 che ci contraddice in parte).
- **Tono**: editoriale, dignitoso, dark fintech-tribunale.
- **Differenza vs. TutelaMutuo**: noi abbiamo l'AI + il posizionamento accademico + numeri verificati + onestà sulla giurisprudenza.

## Cosa serve da te per partire con l'implementazione

Vedi `04-action-plan.md` cap. 5 ("Open dependencies") e `06-old-site-extracts.md` cap. 7. Riassunto:

### Decisioni chiuse (25/05/2026)
1. ✅ **Brand**: **Check-up Bancario** (eredità storica), tono professionale puro. Niente "AI" attaccato al nome. Il nome di progetto interno resta `ai_banking_v1_stefano`.
2. ✅ **Annibali**: al tavolo, firma dottrinale e matematica del metodo. Team operativo cresciuto al suo fianco e oggi più adatto alla quotidianità operativa, su volumi reali.
3. ✅ **Numeri**: 10 cause portate, 8 vinte, oltre €400.000 restituiti, €0 anticipati. Tutti confermati.
4. ✅ **Casi (Sig.ra Anna e altri)**: citabili **in anonimo**. Tutti i testimonial usano forme come "Cliente A.", "Famiglia del nord Italia", "Azienda manifatturiera del centro Italia". Mai nomi e cognomi.
5. ✅ **Sezione SOS**: dentro la landing v1, in un'unica run. 4 voci (precetto, decreto ingiuntivo, recupero crediti, altro) come sezione dedicata della landing.
6. ✅ **Mockup demo**: serve un **smartphone mock** ("cell mock") realistico per la demo dal vivo, in aggiunta al workspace mock desktop.
7. ✅ **i18n**: solo `it.json`, mai stringhe hardcoded.

### Cosa serve ancora prima di partire col codice
- **Numero verde 800 141359**: è ancora attivo? Lo mostriamo in hero o solo in footer?
- **Ok a partire con la Fase B** (token + nav + hero) dopo aver letto i file aggiornati.
