# Dataset en Voorbewerking

Voor dit project combineren we twee **Eurostat-datasets** die samen inzicht geven in de ontwikkeling van het Europese wagenpark én de bijbehorende emissies.  
Beide ruwe tabellen zijn als CSV in deze repository opgenomen zodat alle visualisaties volledig *self-contained* draaien – zonder externe API-calls.

---

## Dataset&nbsp;1 · Personenauto’s per soort motor-energie

**Lokale CSV** → [`data/cars_by_fuel.csv`](../data/cars_by_fuel.csv)

*(Originele bron: <https://ec.europa.eu/eurostat/databrowser/view/road_eqs_carpda>)*
  
* **Inhoud** – aantal personenauto’s per land/jaar opgesplitst naar brandstoftype.  
* **Gebruik** – we nemen kolommen `ELC` (volledig elektrisch) en `TOTAL` om het **EV-aandeel** te berekenen.  
* **Snelstatistiek** – Gem. EV-aandeel ≈ 0,75 % (σ ≈ 2,2 %), maximum ≈ 23,9 %.

---

## Dataset&nbsp;2 · Gemiddelde CO₂-uitstoot (nieuwe auto’s)

**Lokale CSV** → [`data/co2_new_cars.csv`](../data/co2_new_cars.csv)

*(Originele bron: <https://ec.europa.eu/eurostat/databrowser/view/sdg_13_31>)*
  
* **Inhoud** – gemiddelde CO₂-uitstoot (g/km) van nieuw geregistreerde personenauto’s per land en jaar.  
* **Gebruik** – fungeert als afhankelijke variabele in onze correlatie-analyse.  
* **Snelstatistiek** – Gem. 126,5 g/km (σ ≈ 22,4), minimum 14,5 g/km, maximum 161,2 g/km.

---

## Voorbewerking

Beide CSV’s zijn samengevoegd op `geo` (ISO-landcode) en `TIME_PERIOD` (jaar).  
Voor elk land-jaar berekenden we het **EV-aandeel** als  

\[
\text{EV-aandeel} = \frac{\text{ELC}}{\text{TOTAL}} \times 100\%
\]

Rijen met ontbrekende waarden vormden minder dan 2 % en zijn verwijderd, zodat interpolatie niet nodig was.  
Het resulterende bestand **`data/ev_airquality_ready.csv`** vormt de basis voor alle visualisaties in dit Jupyter Book.
