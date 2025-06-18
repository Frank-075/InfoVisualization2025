# Reflectie & Werkverdeling

## Reflectie

Tijdens het bouwen van deze data‑story hebben we iteratief gewerkt: eerst de ruwe Eurostat‐tabellen analyseren, vervolgens prototypes van visualisaties maken en daar feedback op vragen tijdens de _M3 peer‑review_. Enkele inzichten:

* **Datakeuze** – Het samenvoegen van twee complementaire datasets leverde een helder narratief op, maar vergde strikte filtering (bv. `ELC` vs `TOTAL`) om het EV‑aandeel robuust te berekenen.  
* **Visualisatie‑evolutie** – In de eerste versie gebruikten we een eenvoudige lijngrafiek voor het EV‑aandeel. Peer‑feedback wees ons op het ontbreken van context (totaal wagenpark). We hebben daarom gestapelde lijnen getest, maar uiteindelijk gekozen voor aparte lijnen per land om trends duidelijker te vergelijken.  
* **Kritische balans** – Door twee tegengestelde perspectieven te tonen voorkomen we een “wij‑verkopen‑EV’s‑dus‑alles‑goed” narratief. De kaart (Perspectief 2) maakte voor ons visueel duidelijk hoe ongelijk de EV‑penetratie in Europa verdeeld is.  
* **Technische leerpunten** – Plotly‑Python bleek vrijwel één‑op‑één uitwisselbaar met de oorspronkelijke JS‑code, maar het embedden in Jupyter Book vereiste expliciet `fig.show()` zodat de HTML ↔ Plotly‑JSON wordt opgenomen in de build.  
* **Samenwerking** – Wekelijkse sync‑calls (30 min) en een gedeelde Notion‑bord hielpen om taken inzichtelijk te houden. Pull‑requests zijn minimaal twee keer gereviewd voor merge.  

## Werkverdeling

| Teamlid | Taken |
|---------|-------|
| **Leonard Bus** | Data‑acquisitie & opschoning (beide datasets), initiële Python‑merge, HTML→MyST‑migratie |
| **Tygo Honig**  | Concept & tekst *Perspectief 1*, implementatie Visualisatie 1.1 & 1.2, globale redactie |
| **Frank Villano** | Concept & tekst *Perspectief 2*, implementatie Visualisatie 2.1 & 2.2, GitHub Pages‑deployment |
| **Olivier Brouwer** | Introductie‑ en reflectiesecties, consistentie‑check, coördinatie peer‑feedback |

Samen hebben we per sprintdeel een korte _retrospective_ gehouden om bottlenecks (bijv. Plotly‑JS → Py conversie) vroeg te spotten. Deze kruislings verdeelde workflow zorgde voor een uniforme stijl en een tijdige oplevering.
