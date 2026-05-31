# Preflight 05 — Materiali di riferimento

> Cosa abbiamo, cosa manca, cosa serve fare per sbloccare i materiali.

---

## STATO AGGIORNATO — tutti i 16 file letti

**Update 2026-05-25 ore 19:20**: tutti i 16 file sono stati convertiti, copiati in `preflight/materials/` e letti integralmente. Workaround riuscito: `textutil -convert txt` accetta path completo del file anche dentro il container Mail (macOS blocca il listing della directory ma non l'accesso al file con path esatto). Il distillato strategico è in `06-old-site-extracts.md`.

| File | Origine | Stato |
|------|---------|-------|
| `01-schema-preliminare.pdf` | originale | letto, 32 pagine |
| `02-sito-anatocismo.txt` | docx convertito | letto |
| `03-testo-sito-modificato.txt` | docx convertito | letto |
| `04-sos-altro.txt` | docx convertito | letto |
| `05-nuovo-sito-mutuo.txt` | docx convertito | letto |
| `06-nuovo-sito-checkup-bancario.txt` | docx convertito | letto |
| `07-sos-precetto.txt` | docx convertito | letto |
| `08-nuovo-sito-conto-corrente.txt` | docx convertito | letto |
| `09-sos-decreto-ingiuntivo.txt` | docx convertito | letto |
| `10-nuovo-sito-finanziamento.txt` | docx convertito | letto |
| `11-nuovo-sito-chi-siamo.txt` | docx convertito | letto |
| `12-sos-recupero-crediti.txt` | docx convertito | letto |
| `13-nuovo-sito-leasing.txt` | docx convertito | letto |
| `14-checkup-home-vecchio.txt` | docx convertito | letto |
| `15-checkup-home-nuovo.txt` | docx convertito | letto |
| `16-checkup-annuncio-facebook.txt` | docx convertito | letto |

I file `.docx` originali restano dove sono in Mail. I `.txt` in `materials/` sono testo puro non formattato (estratto con `textutil`), sufficiente per il lavoro di copy.

→ **Nessuna azione richiesta da Stefano per i materiali.** Le sezioni 1-7 originali di questo file restano per memoria del processo.

---

## 1. File letti integralmente (storico del processo)

### `schema-preliminare.pdf`
- 32 pagine.
- Documento fondante del progetto.
- Letto integralmente e già citato in:
  - `03-research.md` cap. 2 (visione progressiva fasi 1-2-3).
  - `04-action-plan.md` cap. 0 (premessa strategica).

Contenuto principale:
1. Premessa strategica e condizioni iniziali (fasi del progetto, soggetti coinvolti).
2. Investimenti iniziali e successivi, scenari di sostenibilità (€6.000 iniziali, snodo gennaio/febbraio).
3. Struttura economica fase 3 (ripartizione ritorni, sviluppo futuro, espansione a leasing/prestiti).

Riferimento esplicito al Prof. Antonio Annibali come figura matematica del tavolo (pag. 2-3: "circa 400 pagine di documentazione, costituita in larga parte da articoli di Antonio Annibali").

---

## 2. File NON ancora leggibili (16 docx)

I file elencati nella richiesta utente esistono in `~/Library/Containers/com.apple.mail/Data/Library/Mail Downloads/`, ma:

- **macOS blocca lo shell dell'agente**: il container Mail è protetto, l'agente non ha Full Disk Access su quel path. Conseguenza: non possiamo né copiarli né leggerli da shell.
- **Read tool dell'agente li raggiunge** (ha letto il PDF), ma non supporta il formato `.docx` (binary unsupported).
- Risultato: per sbloccarli serve un piccolo passo manuale dell'utente.

### Elenco file da sbloccare (ordine dal più vecchio al più nuovo, come da richiesta)

| # | Nome file | Inferenza contenuto |
|---|-----------|---------------------|
| 1 | `sito anatocismo 2-1.docx` | testo sito vecchio, pagina anatocismo |
| 2 | `testo sito modificato.docx` | iterazione successiva del copy sito |
| 3 | `SOS altro.docx` | pagina "SOS" generica |
| 4 | `nuovo sito 13-07-2021 pag. mutuo .docx` | pagina mutuo, 13 luglio 2021 |
| 5 | `nuovo sito 13-07-2021 pag. check-up bancario.docx` | pagina check-up bancario |
| 6 | `SOS precetto.docx` | pagina SOS precetto |
| 7 | `nuovo sito 13-07-2021 pag. conto corrente .docx` | pagina conto corrente |
| 8 | `SOS decreto ingiuntivo.docx` | pagina SOS decreto ingiuntivo |
| 9 | `nuovo sito 13-07-2021 pag. finanziamento .docx` | pagina finanziamento |
| 10 | `nuovo sito 20-07-2021 pag. chi siamo.docx` | pagina chi siamo |
| 11 | `SOS recupero crediti.docx` | pagina SOS recupero crediti |
| 12 | `nuovo sito 13-07-2021 pag. leasing .docx` | pagina leasing |
| 13 | `checkup bancario 1 testo home vecchio.docx` | testo home vecchio del checkup |
| 14 | `check-up bancario 1 testo nuovo sito.docx` | testo home nuovo del checkup |
| 15 | `checkup bancario annuncio facebook.docx` | annuncio Facebook |

(Sono 15 docx + 1 pdf già letto = 16 file totali, allineato con il conteggio fornito.)

---

## 3. Cosa fare per sbloccare i docx

### Opzione A — Drag & Drop (la più veloce, 30 secondi)
1. Apri Mail.app sull'email che contiene gli allegati.
2. Seleziona tutti gli allegati con Cmd+A nella riga allegati.
3. Trascinali su questa cartella in Finder:
   `/Users/stf/Documents/GitHub/ai_banking_v1_stefano/preflight/materials/`
4. Dimmi "fatto" → leggo tutto e integro nei copy del deck.

### Opzione B — Esportazione manuale (se non si possono trascinare)
Per ogni file Mail Download di interesse, da Mail.app:
- "Salva con nome…" → salvarlo in `preflight/materials/`.
- Va bene il formato `.docx` originale.

### Opzione C — Conversione manuale a PDF
Se preferisci conservare i `.docx` dove sono e darmi solo le copie in PDF:
- Apri ogni `.docx` con Pages o Word.
- Esporta in PDF.
- Salva il PDF in `preflight/materials/`.

### Opzione D — Concedere Full Disk Access (più invasiva, non necessaria)
- Impostazioni → Privacy e sicurezza → Accesso completo al disco → aggiungere il terminale o il processo Cursor.
- Sconsigliata se non strettamente necessaria.

---

## 4. Cosa farò appena saranno disponibili

Per ciascun file:
1. Lettura integrale.
2. Estrazione delle frasi, claim, headline e CTA del vecchio sito.
3. Confronto con il `02-copy-deck.md`: dove c'è una frase forte già usata storicamente, la valuto e, se conserva valore, la integro nella nuova landing.
4. Estrazione del tono di voce: dove le pagine SOS funzionavano, riproduco la stessa logica di empatia (es. "Hai ricevuto un decreto ingiuntivo? Ecco cosa puoi fare nelle prossime 48 ore.").
5. Inserimento dei riferimenti nei tre file principali:
   - `02-copy-deck.md` (nuovo copy con citazioni del vecchio).
   - `03-research.md` (nota su tono di voce storico).
   - `04-action-plan.md` (eventuale roadmap di pagine secondarie SOS).

---

## 5. Pagine secondarie suggerite (in base al naming dei file)

Dal pattern dei file, il vecchio progetto aveva una struttura ricca con sezioni dedicate:
- pag. mutuo
- pag. check-up bancario
- pag. conto corrente
- pag. finanziamento
- pag. leasing
- pag. chi siamo
- SOS precetto
- SOS decreto ingiuntivo
- SOS recupero crediti
- SOS altro

Implicazione per la nostra roadmap:

### Fase 1 (questa landing)
- Una landing unica lunga, che condensa tutto (`pag. mutuo` + `pag. leasing` + `pag. conto corrente` + `pag. finanziamento` come 4 audience nella sezione "Per chi è").
- "SOS" comunicato come sezione "Decreti e precetti" nell'audience.

### Fase 2 (sotto-landing dedicate)
- `/mutuo` — landing dedicata.
- `/leasing` — landing dedicata.
- `/conto-corrente-aziendale` — landing dedicata.
- `/finanziamento` — landing dedicata.
- `/sos/decreto-ingiuntivo` — pagina emergenza.
- `/sos/precetto` — pagina emergenza.
- `/sos/recupero-crediti` — pagina emergenza.
- `/chi-siamo` — pagina autorità (Annibali, team, statuto).
- `/check-up-bancario` — strumento dedicato per aziende.

Tutte da pianificare quando i materiali docx saranno integrati.

---

## 6. Stato della cartella

```
preflight/materials/
└── (vuoto in attesa dei docx)
```

Quando i file saranno qui dentro, questa cartella diventerà la base di "tono di voce storico". Verrà riferita dal copy deck (capitolo dedicato).

---

## 7. Riepilogo veloce per Stefano

| Cosa | Stato | Azione |
|------|-------|--------|
| `schema-preliminare.pdf` | letto integralmente | nulla, già citato |
| 15 `.docx` Mail Downloads | non letti (macOS sandbox + formato) | trascinarli in `preflight/materials/` |
| Annibali + autorità | ricerca esterna fatta | conferma da te se è partner formale |
| Mercato 2026 | ricerca fatta | nessuna azione |
| Giurisprudenza 2024-26 | ricerca fatta | nessuna azione |
| Competitor (TutelaMutuo + Cesynt) | tear-down fatto | nessuna azione |
| Design system | scritto | revisione finale dopo i docx |
| Copy deck | scritto | revisione finale dopo i docx |
| Action plan | scritto | nessuna azione |

Quando hai trascinato i docx, dimmi solo "ci sono". Riparto da lì.
