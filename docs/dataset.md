# Dataset en Voorbewerking

Voor dit project combineren we twee **Eurostat‑datasets** die samen inzicht geven in de ontwikkeling van het Europese wagenpark én de bijbehorende emissies.  
Beide _ruwe_ tabellen staan als CSV in deze repository, zodat alle visualisaties volledig *self‑contained* draaien – dus zonder externe API‑calls.

---

## Dataset&nbsp;1 · Personenauto’s naar motor‑energie

**Lokale CSV** → [`data/cars_by_fuel.csv`](../data/cars_by_fuel.csv)  
*Bron: <https://ec.europa.eu/eurostat/databrowser/view/road_eqs_carpda>*

* **Inhoud** – aantal personenauto’s per land × jaar, uitgesplitst naar brandstoftype.  
* **Gebruik** – kolommen `ELC` (volledig elektrisch) en `TOTAL` zijn nodig om het **EV‑aandeel** te berekenen.  
* **Snelstatistiek** – gemiddeld EV‑aandeel ≈ 0.76 % (σ ≈ 2.30), maximum ≈ 23.9 %.

---

## Dataset&nbsp;2 · Gemiddelde CO₂‑uitstoot (nieuwe auto’s)

**Lokale CSV** → [`data/co2_new_cars.csv`](../data/co2_new_cars.csv)  
*Bron: <https://ec.europa.eu/eurostat/databrowser/view/sdg_13_31>*

* **Inhoud** – gemiddelde CO₂‑uitstoot (g/km) van nieuw geregistreerde personenauto’s per land × jaar.  
* **Gebruik** – fungeert als afhankelijke variabele in de correlatie‑analyse.  
* **Snelstatistiek** – gemiddeld 126.5 g/km (σ ≈ 22.4), minimum 14.5 g/km, maximum 161.2 g/km.

---

## Voorbewerking

1. **Merge** – de twee CSV’s zijn samengevoegd op `geo` (ISO‑landcode) en `TIME_PERIOD` (jaar).  
2. **Berekening EV‑aandeel**  

   \[
   \text{EV‑aandeel} = \frac{\text{ELC}}{\text{TOTAL}} \times 100\%
   \]

3. **Opschoning** – minder dan 2 % van de regels had missende waarden; die zijn verwijderd (geen interpolatie nodig).  
4. **Kolom‑rename** – voor gebruiksgemak hernoemden we `TIME_PERIOD` → `year` en `OBS_VALUE` → `CO2_g_km`.  
5. **Resultaat** – het bestand **`data/ev_airquality_ready.csv`** bevat:  

   | Kolom | Beschrijving | Eenheid |
   |-------|--------------|---------|
   | `geo` | ISO‑3166 alpha‑2 landcode | — |
   | `year` | Jaar van de meting | — |
   | `ELC` | # elektrische personenauto’s | aantallen |
   | `TOTAL` | Totaal # personenauto’s | aantallen |
   | `EV_share` | EV‑aandeel t.o.v. totaal | % |
   | `CO2_g_km` | Gemiddelde CO₂‑uitstoot nieuwe auto’s | g/km |

Dit samengestelde bestand vormt de datasource voor alle analyses en visualisaties in dit Jupyter Book.
