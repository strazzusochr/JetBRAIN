# HYPER AAA GRAFIK UPGRADE — MASTER PROMPT V1.0
## GOD UNIVERSE MATRIXX | 3D Web Game | React Three Fiber + Three.js + Expo
---
# MARKER: Wiedereinstieg Hyper AAA Grafik Prompt V1 (Autonomer Startpunkt für vollständige Umsetzung nach Vorgabe)
> **WICHTIG:** Dieser Prompt ist für einen vollautonomen KI-Agenten konzipiert. Lies ihn vollständig, bevor du eine einzige Zeile Code schreibst. Jede Sektion ist verbindlich. Abweichungen sind nur mit expliziter schriftlicher Begründung und Dokumentation erlaubt.

---

## ABSCHNITT 0 — MISSION & KONTEXT

Du bist ein Senior AAA Game Engine Developer mit 30+ Jahren Erfahrung in Echtzeit-3D-Grafik, Shader-Programmierung, Polygonarchitektur und WebGL/WebGPU-Optimierung. Deine Aufgabe ist es, das bestehende 3D Web Game **GOD UNIVERSE MATRIXX** auf ein **Hyper-AAA-Grafik-Niveau** zu heben, vergleichbar mit The Last of Us Part II, Cyberpunk 2077 oder God of War — jedoch vollständig browserbasiert mit React Three Fiber, Three.js, React Native (Expo) und Expo Router.

**Primäres Ziel:** Jeder NPC erhält mindestens **200.000 Polygone** (High-Detail-LOD-0). Alle übrigen Spielwelt-Elemente werden auf ein proportional dazu kalkuliertes, stilistisch kohärentes Niveau angehoben. Keine Kompromisse bei Qualität — Performance wird durch LOD, Instancing und GPU-Techniken sichergestellt, nicht durch Polygon-Reduktion auf dem Main Asset.

**Stack (unveränderlich):**
- React Native via Expo (Cross-Platform: Web, Android, iOS)
- React 19
- React Three Fiber (R3F) + Three.js
- Expo Router
- WebGL2 primär, WebGPU als Progressive Enhancement

---

## ABSCHNITT 1 — POLYGON-BUDGET KALKULATION (VOLLSTÄNDIG KALKULIERT)

### METHODIK
Die Polygon-Zuweisung basiert auf drei Faktoren:
1. **Sichtbarkeits-Priorität** (Wie oft ist das Objekt im Fokus des Players?)
2. **Narrative Wichtigkeit** (Ist es ein Story-Asset oder Background-Füller?)
3. **Screen-Real-Estate** (Wie groß erscheint es auf dem Bildschirm?)

Alle Werte beziehen sich auf **LOD-0** (maximale Detailstufe, Distanz 0–8m).

---

### 1.1 NPC-POLYGON-BUDGET (ALLE TYPEN: MINIMUM 200.000)

**Jeder NPC wird als vollständiges modulares Character-Asset implementiert.**

#### NPC BODY DECOMPOSITION — 200.000 Polygone Basis

| Sub-Mesh | Polygone | Beschreibung |
|---|---|---|
| **Kopf & Gesicht** | 45.000 | Gesichtsgeometrie inkl. Lippen-Loop, Augenlider, Nasenlöcher, Ohrmuscheln |
| **Augen (2x)** | 12.000 | Cornea, Iris, Sklera, Tränensee — alle als separate Meshes |
| **Zähne & Zahnfleisch** | 8.000 | Obere/untere Zahnreihe, Zahnfleisch-Geometrie |
| **Haar / Kopfbedeckung** | 18.000 | Strand-basiertes Haar oder spezifische Kopfbedeckung (Helm, Mütze, Beret) |
| **Hals** | 4.000 | Kehlkopf-Detail, Halsschlagader-Geometrie |
| **Torso** | 22.000 | Brustmuskulatur unter Kleidung, Schulterblatt-Geometrie |
| **Arme (2x)** | 18.000 | Bizeps/Trizeps-Definition, Ellbogen-Detaillierung |
| **Hände (2x)** | 24.000 | Fingerknöchel, Fingernagel-Geometrie, Handlinien |
| **Beine (2x)** | 16.000 | Knie-Detaillierung, Wadenmuskel-Definition |
| **Füsse / Schuhe (2x)** | 12.000 | Schuhsohle, Schnürsenkel als Geometrie |
| **Kleidung Layer 1 (Unterkleidung/Hemd)** | 8.000 | Basis-Kleidungsschicht |
| **Kleidung Layer 2 (Hauptoutfit)** | 9.000 | Jacke / Uniform / Weste mit Falten-Loops |
| **Kleidung Layer 3 (Accessoires)** | 4.000 | Gürtel, Schulterklappen, Kragen |
| **TOTAL BASIS** | **200.000** | |

---

#### NPC TYP-SPEZIFISCHE POLYGON-ADDONS

> **Prinzip:** Jeder Typ baut auf dem 200k-Basis-Mesh auf. Typ-spezifische Ausrüstung wird als separate Attachment-Meshes hinzugefügt (addiert nicht auf das 200k-Limit — diese sind zusätzlich).

---

**POLIZEI-GRUPPE**

```
POLICE (Standard-Polizist)
├── Basis-NPC-Mesh:              200.000 Polygone
├── Polizei-Uniform-Override:    +12.000 (Schulterklappen, Abzeichen, Dienstgrad-Streifen)
├── Pistolen-Holster (Beretta):  +8.500  (vollständige Pistolen-Geometrie mit Abzug)
├── Funkgerät (Schulter):        +5.000
├── Handschellen:                +3.500
├── Polizei-Mütze (Schirm):      +4.000  (Override auf Basis-Haar)
└── GESAMT LOD-0:                233.000 Polygone

RIOT_POLICE (Bereitschaftspolizei)
├── Basis-NPC-Mesh:              200.000 Polygone
├── Schutzweste (Level IV):      +15.000 (Kevlar-Panels, Buckeln, Straps)
├── Riot-Helm (Vollvisier):      +12.000 (Visier als separates Alpha-Mesh)
├── Riot-Schild (Acryl):         +9.000  (Randversiegelung, Griff-Detail)
├── Schlagstock:                 +3.500
├── Knieschoner / Armschoner:    +6.000
├── Kampfstiefel:                +4.500  (Override auf Basis-Schuhe)
└── GESAMT LOD-0:                250.000 Polygone

SEK (Sondereinheit — Spezialkräfte)
├── Basis-NPC-Mesh:              200.000 Polygone
├── Taktische Weste (MOLLE):     +18.000 (jede MOLLE-Schlaufe als Geometrie)
├── Vollgesichts-Gasmaske:       +14.000 (Filterkassetten, Dichtungsringe)
├── MP5 / HK USP:                +22.000 (hochdetailliert: Abzugsgruppe, Magazin, Visier)
├── Taktischer Helm (NVG-Mount): +11.000
├── Nachtsicht-Gerät (hoch):     +8.000
├── Knieschoner Militär:         +5.000
├── Taktische Schuhe / Stiefel:  +5.500
└── GESAMT LOD-0:                283.500 Polygone
```

---

**DEMONSTRANT-GRUPPE**

```
DEMONSTRATOR (Standard-Demo-Teilnehmer)
├── Basis-NPC-Mesh:              200.000 Polygone
├── Casual Clothing Override:    +6.000  (Jeansjacke mit Aufnäher-Geometrie)
├── Transparenten/Schild:        +4.500  (Pappschild mit Rand-Detail)
├── Rucksack:                    +7.000  (Reißverschluss, Tragegurt-Geometrie)
└── GESAMT LOD-0:                217.500 Polygone

ORGANIZER (Veranstaltungsleiter)
├── Basis-NPC-Mesh:              200.000 Polygone
├── Reflective Vest Override:    +5.000
├── Megaphon / Lautsprecher:     +7.500  (Griff, Trichter, Taste-Geometrie)
├── Klemmbrett:                  +3.000
├── Warnweste (Sicherheitsgelb): +3.500
└── GESAMT LOD-0:                219.000 Polygone

KRAUSE (Demo-Anführer — Hero-NPC)
├── Basis-NPC-Mesh:              200.000 Polygone
├── Charakteristisches Outfit:   +14.000 (einzigartiges, erkennbares Design)
├── Megaphon (hochwertig):       +9.000
├── Symbole/Insignien:           +6.000  (Abzeichen, Bänder, Flagge an Stab)
├── Flaggenstab:                 +4.500
├── Hero-Face-Override:          +8.000  (Extra-Facial-Geometrie für Close-ups)
└── GESAMT LOD-0:                241.500 Polygone
```

---

**AGGRESSOR-GRUPPE**

```
EXTREMIST
├── Basis-NPC-Mesh:              200.000 Polygone
├── Provokante Kleidung:         +9.000  (Patches, Aufnäher als Relief-Geometrie)
├── Vermummung (Schal/Sturmmaske)+7.500
├── Improvisierte Waffe (Stange):+4.000
└── GESAMT LOD-0:                220.500 Polygone

RIOTER (Randalierer)
├── Basis-NPC-Mesh:              200.000 Polygone
├── Zerstörte/schmutzige Kleidung+8.000  (Risse als Geometrie, keine Textur-Fakes)
├── Molotow-Cocktail:            +5.500  (Flasche, Docht, Lappen — alle als Mesh)
├── Skimaske:                    +6.000
└── GESAMT LOD-0:                219.500 Polygone
```

---

**ZIVILIST-GRUPPE**

```
CIVILIAN (Wiener Bürger)
├── Basis-NPC-Mesh:              200.000 Polygone
├── Wien-typisches Outfit:       +8.000  (Mantel, Tasche)
└── GESAMT LOD-0:                208.000 Polygone

TOURIST (Tourist)
├── Basis-NPC-Mesh:              200.000 Polygone
├── Kamera (DSLR):               +11.000 (Objektiv, Gehäuse, Gurt — detailliert)
├── Stadtplan / Faltblatt:       +2.500
├── Rucksack Tourist:            +7.000
└── GESAMT LOD-0:                220.500 Polygone

JOURNALIST
├── Basis-NPC-Mesh:              200.000 Polygone
├── Professionelle Kamera:       +18.000 (Broadcast-Kamera mit Objektiv, Akku, Display)
├── Mikrofon (Richtmikro):       +6.000
├── Presseweste:                 +5.000
├── Presseausweis:               +1.500
└── GESAMT LOD-0:                230.500 Polygone

MUSICIAN (Straßenmusiker)
├── Basis-NPC-Mesh:              200.000 Polygone
├── Instrument (Geige/Gitarre):  +22.000 (hochdetailliertes Instrument)
├── Notenständer:                +8.000
├── Instrument-Koffer (offen):   +6.500
└── GESAMT LOD-0:                236.500 Polygone
```

---

**SUPPORT-GRUPPE**

```
MEDIC (Sanitäter)
├── Basis-NPC-Mesh:              200.000 Polygone
├── Medizinisches Outfit:        +7.000  (Override: weißes Kreuz als Relief)
├── Sanitätstasche:              +9.000  (Klettverschlüsse, Taschen als Geometrie)
├── Verbandszeug / Bandagen:     +5.000
├── Stethoskop:                  +4.500
└── GESAMT LOD-0:                225.500 Polygone

FIREFIGHTER (Feuerwehrmann)
├── Basis-NPC-Mesh:              200.000 Polygone
├── Feuerwehr-Schutzanzug:       +16.000 (Aramid-Struktur als Normalmap+Geometry)
├── Feuerwehr-Helm (F1):         +13.000 (Nackenschutz, Visier)
├── Atemschutzmaske (PA):        +11.000 (Maske, Regler, Träger)
├── Druckschlauch:               +8.000  (Kupplungen als Geometrie)
└── GESAMT LOD-0:                248.000 Polygone
```

---

**SONDERROLLEN**

```
PRESS (Pressevertreter)
├── Basis-NPC-Mesh:              200.000 Polygone
├── Presseausweis sichtbar:      +2.000
├── Notizbuch:                   +3.500
├── Pen / Aufnahmegerät:         +4.000
├── Spiegelloses Kamerasystem:   +14.000
└── GESAMT LOD-0:                223.500 Polygone

GOVERNMENT_AGENT (Regierungsagent)
├── Basis-NPC-Mesh:              200.000 Polygone
├── Maßanzug (AAA-Detail):       +18.000 (Revers, Knöpfe als Geometrie, Nähte)
├── Ohrhörer (sichtbar):         +3.000
├── Sonnenbrille (Aviator):      +5.500
├── Ledermappe:                  +6.000
└── GESAMT LOD-0:                232.500 Polygone
```

---

### 1.2 GEBÄUDE-POLYGON-BUDGET

#### STEPHANSDOM — HERO LANDMARK ASSET: 750.000 Polygone

```
Stephansdom Polygon-Aufschlüsselung:

Hauptkörper / Langhaus             120.000 Polygone
├── Außenwände (Quadersteine)       45.000  (jeder Quaderstein als Geometrie-Relief)
├── Strebepfeiler (16x)             35.000  (Fialen, Krabben, Wasserspeier)
└── Sockel / Fundament              40.000  (Rustika-Steinlagen)

Südturm (Hauptturm — 137m)         200.000 Polygone
├── Turm-Schaft (8-eckig)           60.000  (gotische Maßwerk-Geometrie)
├── Maßwerk-Fenster (Turmzone)      50.000  (Spitzbogen, Rosetten als Mesh)
├── Fialen-Krone (Turmspitze)       55.000  (Krabben, Kreuzblume — geometrisch)
└── Adler-Skulptur (Doppeladler)    35.000

Dach — Ziegelmuster (grün/gelb)    150.000 Polygone
├── Haupt-Dachfläche               100.000  (jede Dachziegel als Polygon-Tile)
└── First-Ornamentik                50.000  (Rautenmuster als 3D-Relief)

Spitzbogenfenster (Maßwerk)        100.000 Polygone
├── Westfenster (Riesentor-Zone)    40.000  (Maßwerk-Rosette, Stabwerk)
├── Seitenfenster (je Joch)         35.000  (Lanzettfenster, Dreipass)
└── Chor-Fenster                    25.000

Portale / Reliefs                   80.000 Polygone
├── Riesentor (Westportal)          40.000  (romanische Reliefbänder als Geometrie)
├── Bischofstor                     20.000
└── Singertor                       20.000

Innen sichtbarer Bereich            60.000 Polygone
├── Säulen (16x), Blattkapitelle)   30.000
├── Gewölbe (sichtbar durch Tür)    20.000
└── Altarzone (bei offener Tür)     10.000

Skulpturen / Wasserspeier           40.000 Polygone

GESAMT STEPHANSDOM:                750.000 Polygone
```

---

#### BAROCKHAUS — 120.000 Polygone

```
Barockhaus Polygon-Aufschlüsselung:

Fassade                             50.000 Polygone
├── Rustika-Erdgeschoss             15.000  (Quadersteine als Relief)
├── Piano Nobile (Hauptgeschoss)    20.000  (Pilaster, Gesimse)
└── Attika / Dachzone               15.000  (Balustrade als Geometrie)

Fenster (12–16 Stück)               30.000 Polygone
├── Fenstereinfassung (Ohrenrahmung)15.000  (Barock-Ohren als 3D-Form)
├── Fensterglas (Blei-Segment)       8.000
└── Fensterläden                     7.000

Hauptportal / Türen                 15.000 Polygone
├── Portal-Bekrönung                 8.000  (Kartusche, Putten-Köpfe)
└── Türflügel (Kassetten)            7.000

Ornamentik / Stuckaturen            20.000 Polygone
├── Fassaden-Stuck (Ranken)         12.000
└── Dachgesims-Profil                8.000

Dach                                 5.000 Polygone

GESAMT BAROCKHAUS:                 120.000 Polygone
```

---

#### GESCHÄFT (Modernes Wiener Geschäft) — 80.000 Polygone

```
Glasfassade                         25.000 Polygone
├── Pfosten-Riegel-Konstruktion     12.000  (Aluminium-Profile als Geometrie)
├── Scheiben-Schichtung              8.000  (Isolierglas-Doppelscheibe)
└── Eingangsbereich (Schiebetür)     5.000

Innenraum (sichtbar durch Glas)     30.000 Polygone
├── Regale (4 Reihen)               15.000  (Fachregalböden als Geometrie)
├── Produkte / Merchandise          10.000  (vereinfachte Produktmeshes)
└── Kassenzonen / Theke              5.000

Fassadenbeschilderung                8.000 Polygone
├── Leuchtreklame (3D-Buchstaben)    6.000
└── Werbeplakat-Rahmen               2.000

Sonnenschutz / Markise              10.000 Polygone
├── Markisenstoff (mit Falten)       6.000
└── Mechanismus-Geometrie            4.000

Dach-Anschluss / Parapet             7.000 Polygone

GESAMT GESCHÄFT:                    80.000 Polygone
```

---

#### CAFÉ — 90.000 Polygone

```
Gebäude-Struktur                    25.000 Polygone
Außenbereich / Schanigarten         45.000 Polygone
├── Tische (8x à 2.000 Poly)        16.000
├── Stühle (24x à 1.500 Poly)       36.000  (Wiener Kaffeehausstuhl-Design)
└── Sonnenschirme (4x à 3.500 Poly) 14.000  (Rippen als Geometrie)

Verglasung / Schaufenster           12.000 Polygone
Beschilderung / Logos                5.000 Polygone
Dach-Details                         3.000 Polygone

GESAMT CAFÉ:                        90.000 Polygone
```

---

#### U-BAHN-EINGANG — 60.000 Polygone

```
Treppen-Anlage                      18.000 Polygone
├── Treppenstufen (24 Stufen)       10.000  (Trittkante als Profil-Extrusion)
├── Mittelpfosten-Geländer           5.000
└── Seitenwände (Kacheln)            3.000

Geländer-System                     15.000 Polygone
├── Handläufe (Edelstahl)            8.000  (Rundprofil mit Enden)
└── Füllstäbe                        7.000

Überdachung / Eingangs-Vordach      12.000 Polygone
├── Stahlkonstruktion                7.000
└── Verglasung (Sonnenschutz)        5.000

Beschilderung (U-Schild, Linien)     8.000 Polygone
├── Wiener Linien U-Schild           5.000  (3D-Buchstaben, Umrandung)
└── Linienangabe-Panels              3.000

Lichtmasten / Wegbeleuchtung         7.000 Polygone

GESAMT U-BAHN-EINGANG:             60.000 Polygone
```

---

### 1.3 FAHRZEUGE & AUSRÜSTUNG

#### POLIZEI-FAHRZEUG — 180.000 Polygone (Basis: VW Passat Variant)

```
Karosserie                          65.000 Polygone
├── Außenhaut (Dach, Kotflügel)     35.000  (Karosserie-Spaltmaße als Geometrie)
├── Türen (4x) mit Scharnieren      18.000
└── Stoßstangen / Spoiler           12.000

Räder & Fahrwerk (4x)              40.000 Polygone
├── Felge (Stahl, 5-Loch)           8.000 pro Rad = 32.000
└── Reifen (Continental-Profil)      2.000 pro Rad = 8.000

Innenraum (sichtbar)                30.000 Polygone
├── Armaturenbrett                  12.000
├── Sitze (4x)                       8.000
├── MDT-Terminal (Polizei-PC)        7.000
└── Lenkrad / Hebel                  3.000

Sonderausstattung                   30.000 Polygone
├── Dachbalken (LED-Blaulicht)      15.000  (einzelne LED-Module als Geometrie)
├── Frontgitter / Ramme              8.000
└── Antenne-Array                    7.000

Verglasung                          15.000 Polygone

GESAMT POLIZEI-FAHRZEUG:           180.000 Polygone
```

---

#### KAMERA-DROHNE — 60.000 Polygone

```
Drohnen-Körper (Hexacopter)        22.000 Polygone
├── Hauptgehäuse (Carbon-Look)      12.000
└── Arm-Struktur (6 Arme)          10.000

Propeller (6x)                     18.000 Polygone
├── Propeller-Blatt (je 1.500)      9.000
└── Motor-Gondel (je 1.500)         9.000

Kamera-Gimbal                      14.000 Polygone
├── 3-Achsen-Gimbal-Struktur         8.000
├── Kamera-Gehäuse                   4.000
└── Objektiv (Weitwinkel)            2.000

Sensoren & Elektronik               6.000 Polygone
├── GPS-Antenne                      2.000
├── Kollisionssensoren               2.000
└── Akku-Pack                        2.000

GESAMT KAMERA-DROHNE:              60.000 Polygone
```

---

### 1.4 UMWELT & STRASSEN-OBJEKTE

| Objekt | Polygone LOD-0 | Begründung |
|---|---|---|
| Straßen-Segment (20m) | 12.000 | Pflasterstein-Relief, Bordstein-Profil |
| Gehweg (20m) | 8.000 | Betonplatten-Fugen als Geometrie |
| Straßenlaterne (Wien-Stil) | 15.000 | Historische Auslegerleuchte, Ornamentmast |
| Platane / Stadtbaum | 25.000 | Procedural Branch + 8.000 Blatt-Geometrie |
| Parkbank (Wiener Stadtpark) | 12.000 | Gusseisen-Wangen, Holzleisten |
| Mülleimer (Wiener Stadtreinigung) | 8.000 | Pedalöffnung, Deckel, Öffnungen |
| Gullydeckel | 5.000 | Relief-Muster, Schrift als Geometrie |
| Verkehrszeichen + Mast | 6.000 | Schild-Reflektoren als Geometrie |
| Ampelanlage | 14.000 | Gehäuse, Linsen, Mastkonstruktion |
| Beton-Absperrung (Polizei) | 9.000 | Struktur-Beton-Optik |
| Palettenzaun (Demo) | 11.000 | Holzlatten-Geometrie, Nägel |
| Feuerwehr-Hydrant | 7.500 | Ventile, Kappenmutter |
| Plakatwand | 6.000 | Rahmen, Trägerkonstruktion |

---

### 1.5 SPAWN-MARKER & HUD

```
SpawnMarker — 5.000 Polygone
├── Boden-Ring (animiert)            2.500  (Tessellierter Kreis, 64-Poly-Ring)
├── Richtungs-Pfeile (3D)            1.500
└── Urgency-Indikator (Säule)        1.000

HUD-Panel — 2D-Overlay (0 3D-Polygone)
└── Gerendert als CSS/DOM-Overlay über WebGL-Canvas
    Ausnahme: 3D-Hologramm-HUD als Billboard-Quad = 200 Polygone
```

---

## ABSCHNITT 2 — GRAFIK-PIPELINE IMPLEMENTIERUNG

### 2.1 MATERIAL-SYSTEM (PBR — Physically Based Rendering)

**Jedes Asset verwendet einen vollständigen PBR-Material-Stack:**

```typescript
interface AAAMaterialConfig {
  // Pflicht-Maps (alle Assets)
  baseColorMap:        Texture;  // 4096x4096 PNG/KTX2
  normalMap:           Texture;  // 4096x4096 (Tangent-Space)
  metallicRoughnessMap:Texture;  // 4096x4096 (R=Metallic, G=Roughness)
  aoMap:               Texture;  // 4096x4096 (Ambient Occlusion)
  
  // Erweiterte Maps (NPC + Hero Assets)
  emissiveMap?:        Texture;  // LEDs, Leuchtstreifen, Augen
  transmissionMap?:    Texture;  // Glas, Visiere, Wasserflaschen
  thicknessMap?:       Texture;  // Subsurface Scattering für Haut/Wachs
  sheenMap?:           Texture;  // Stoffe (Velvet, Seide, Wolle)
  clearcoatMap?:       Texture;  // Lackierte Oberflächen, nasse Materialien
  
  // Haut-spezifisch (NPC-Gesichter)
  subsurfaceScatteringMap?: Texture; // SSS für realistische Haut
  
  // Texture-Auflösungen nach Asset-Klasse
  resolution: 'npc_face' | 'npc_body' | 'hero_building' | 'prop' | 'background';
}

// Auflösungs-Schema
const TEXTURE_RESOLUTION = {
  npc_face:       { base: 4096, normal: 4096, mrAO: 2048 },
  npc_body:       { base: 2048, normal: 2048, mrAO: 2048 },
  hero_building:  { base: 8192, normal: 4096, mrAO: 4096 }, // Stephansdom!
  prop:           { base: 1024, normal: 1024, mrAO: 512  },
  background:     { base: 512,  normal: 512,  mrAO: 256  },
};
```

### 2.2 MESH-ARCHITEKTUR — R3F IMPLEMENTIERUNG

```typescript
// NPC Mesh-Architektur (R3F)
import { useGLTF, useFBX } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

interface NPCMeshConfig {
  // LOD-System (ZWINGEND implementieren)
  lod0_distance: 0;     // 0–8m   → 200.000+ Polygone (Full Detail)
  lod1_distance: 8;     // 8–20m  → 80.000 Polygone   (High)
  lod2_distance: 20;    // 20–50m → 30.000 Polygone   (Medium)
  lod3_distance: 50;    // 50–100m → 8.000 Polygone   (Low)
  lod4_distance: 100;   // >100m  → Billboard Imposter (500 Polygone)
  
  // Skeleton — 120-Bone Rig
  skeleton: {
    spine_chain: 7;           // Hüfte bis Kopf
    shoulder_L_chain: 6;      // Schulter, Oberarm, Unterarm, Hand, Finger
    shoulder_R_chain: 6;
    finger_L: 15;             // je 3 Phalanges x 5 Finger
    finger_R: 15;
    leg_L_chain: 6;           // Hüfte, Oberschenkel, Schienbein, Fuss, Zehen
    leg_R_chain: 6;
    face_rig: 53;             // Facial Action Coding System (FACS) kompatibel
    total: 120;
  };
  
  // Morph Targets — Facial Expressions
  morphTargets: {
    brow_inner_up_L:    MorphTarget;
    brow_inner_up_R:    MorphTarget;
    brow_outer_up_L:    MorphTarget;
    // ... (alle FACS ARKits 52 Blendshapes)
    total: 52;
  };
}

// R3F Component Struktur
const NPCComponent: React.FC<NPCProps> = ({ type, position, emotionalState }) => {
  const { scene, animations } = useGLTF(`/assets/npcs/${type}/lod0.glb`);
  const clonedScene = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  
  return (
    <LOD>
      <mesh position={position} geometry={clonedScene.children[0].geometry} />
      {/* LOD-Ebenen automatisch verwaltet */}
    </LOD>
  );
};
```

### 2.3 SHADER-SYSTEM

**Pflicht-Shader für AAA-Niveau:**

```glsl
// 1. NPC SKIN SHADER — Subsurface Scattering
// Implementiert in: /src/shaders/skin/SkinShader.glsl

uniform sampler2D baseColorMap;
uniform sampler2D normalMap;
uniform sampler2D sssMap;        // Subsurface Scattering Map
uniform float sssStrength;       // 0.3–0.8 für Haut
uniform vec3 sssColor;           // rgb(255, 180, 140) Hautton

// Burley SSS Approximation
vec3 subsurfaceScattering(vec3 albedo, float sssAmount) {
  return mix(albedo, albedo * sssColor * 2.0, sssAmount * sssStrength);
}

// 2. CLOTH SHADER — Stoff-Simulation (vertex displacement)
// Implementiert in: /src/shaders/cloth/ClothShader.glsl
// Physikalische Faltenberechnung via GPU

// 3. WET SURFACE SHADER — Nasse Oberflächen (nach Regen)
// Erhöht Metallic auf 0.05, reduziert Roughness auf 0.1
// Aktiviert Clearcoat-Layer

// 4. CROWD SHADER — Instanced Crowd Rendering
// GPU-basierte Animation via Compute Shader
// Unterstützt 500+ gleichzeitige Instanzen

// 5. VOLUMETRIC LIGHT SHADER
// God Rays, Lichtstreuung in Nebel/Staub
// Implementiert via Raymaching (32 Steps)
```

### 2.4 BELEUCHTUNGS-SETUP

```typescript
// Wien-Spezifisches Beleuchtungs-Setup
const VIENNA_LIGHTING = {
  // Hauptlicht (Sonne)
  directionalLight: {
    color: '#FFF4E0',          // Warm-weißes Sonnenlicht
    intensity: 2.5,
    shadowMapSize: 4096,       // Ultra-Shadow-Quality
    shadowBias: -0.0005,
    shadowCascades: 4,         // Cascaded Shadow Maps
    position: [50, 100, 50],
  },
  
  // Ambiente IBL (Image Based Lighting)
  environmentMap: {
    source: 'vienna_city_hdr.hdr',  // 8K HDR EQUIRECTANGULAR
    intensity: 1.2,
  },
  
  // Straßenbeleuchtung (Wien-historisch)
  streetLamps: {
    count: 'dynamic',          // basierend auf Level-Design
    color: '#FFD080',          // Warm-Orange (historische Gaslampe)
    intensity: 3.0,
    range: 12.0,
    castShadows: true,
    shadowMapSize: 512,        // Pro-Lampe, daher kleiner
  },
  
  // Riot-Beleuchtung (Police Blue/Red Strobes)
  policeStrobes: {
    blueLight:  { color: '#0055FF', hz: 2 },
    redLight:   { color: '#FF1100', hz: 2.3 },
    blendMode:  'additive',
  },
  
  // Atmosphäre
  fog: {
    type: 'exponential',
    density: 0.008,
    color: '#8899AA',
    near: 50,
    far: 500,
  },
};
```

### 2.5 PERFORMANCE-ARCHITEKTUR

```typescript
// ZWINGEND: Diese Performance-Systeme müssen implementiert werden

// 1. LOD SYSTEM (automatisch)
import { Detailed } from '@react-three/drei';

// 2. GPU INSTANCING für Crowds
import { Instances, Instance } from '@react-three/drei';
// Max 500 NPCs gleichzeitig als Instances

// 3. FRUSTUM CULLING
// Three.js Built-in — sicherstellen dass aktiviert

// 4. OCCLUSION CULLING (Custom)
// Gebäude als Occluder registrieren
// NPCs hinter Gebäuden werden nicht gerendert

// 5. TEXTURE STREAMING
// KTX2 + Basis Universal Compressed Textures
// Progressives Loading: 256px → 512px → 1024px → 4096px

// 6. DEFERRED RENDERING (WebGL 2.0)
// G-Buffer: Position, Normal, Albedo, Material
// Licht-Pass separat von Geometry-Pass

// 7. TEMPORAL ANTI-ALIASING (TAA)
// 8-Sample Jitter Pattern
// Reprojection für Motion Blur

// 8. SCREEN SPACE AMBIENT OCCLUSION (SSAO)
// Radius: 0.5m, Samples: 16
// Blur: 4x4 Box Blur

// 9. SCREEN SPACE REFLECTIONS (SSR)
// Für nasse Straßen, Fahrzeug-Oberflächen
// Ray Steps: 64

// 10. BLOOM + HDR TONE MAPPING
// Threshold: 0.8, Strength: 0.4
// ACES Filmic Tone Mapping
```

---

## ABSCHNITT 3 — ASSET-PIPELINE & DATEI-STRUKTUR

### 3.1 ORDNERSTRUKTUR

```
/assets/
├── npcs/
│   ├── police/
│   │   ├── lod0.glb          (200.000+ Poly — Full PBR)
│   │   ├── lod1.glb          (80.000 Poly)
│   │   ├── lod2.glb          (30.000 Poly)
│   │   ├── lod3.glb          (8.000 Poly)
│   │   ├── imposter.png      (Billboard-Textur)
│   │   └── animations/
│   │       ├── idle.glb
│   │       ├── walk.glb
│   │       ├── run.glb
│   │       ├── patrol.glb
│   │       └── arrest.glb
│   ├── riot_police/
│   ├── sek/
│   ├── demonstrator/
│   │   └── [gleiche Struktur]
│   └── [alle NPC-Typen]
│
├── buildings/
│   ├── stephansdom/
│   │   ├── lod0.glb          (750.000 Poly — Hero Asset)
│   │   ├── lod1.glb          (250.000 Poly)
│   │   ├── lod2.glb          (80.000 Poly)
│   │   ├── textures/
│   │   │   ├── roof_basecolor_8k.ktx2
│   │   │   ├── facade_normal_4k.ktx2
│   │   │   └── stone_mr_4k.ktx2
│   │   └── interior.glb      (Innenraum separates Asset)
│   ├── barockhaus/
│   ├── geschaeft/
│   ├── cafe/
│   └── ubahn_eingang/
│
├── vehicles/
│   ├── police_car/
│   └── drone/
│
├── props/
│   ├── street_lamp/
│   ├── bench/
│   ├── trash_can/
│   ├── barrier/
│   └── [alle Straßenmöbel]
│
├── environment/
│   ├── road_tile.glb
│   ├── sidewalk_tile.glb
│   └── tree_001.glb
│
├── shaders/
│   ├── skin/SkinShader.glsl
│   ├── cloth/ClothShader.glsl
│   ├── wet/WetSurfaceShader.glsl
│   ├── crowd/CrowdShader.glsl
│   └── volumetric/VolumetricLightShader.glsl
│
└── hdr/
    └── vienna_city_8k.hdr    (IBL Environment Map)
```

### 3.2 GLTF-EXPORT-ANFORDERUNGEN

Alle Assets MÜSSEN diese GLTF-Spezifikationen erfüllen:
- **Format:** GLB (Binary GLTF 2.0)
- **Kompression:** Draco (für Geometrie), KTX2/Basis (für Texturen)
- **Skeleton:** Nur Joints, keine redundanten Nodes
- **Animation:** Retargeting-kompatibel (Mixamo-Standard-Skeleton)
- **Pivot:** World Origin = Fußpunkt des Objekts (Y=0)
- **Scale:** 1 Unit = 1 Meter
- **Orientation:** +Y = Up, +Z = Vorwärts

---

## ABSCHNITT 4 — NPC-SYSTEM IMPLEMENTIERUNG

### 4.1 NPC-INTERFACE (vollständig)

```typescript
import { Vector3, Quaternion, Color } from 'three';

type EmotionalState = 
  | 'CALM' | 'ANGRY' | 'FEARFUL' | 'EXCITED' | 'AGGRESSIVE' 
  | 'PANICKED' | 'DETERMINED' | 'SUSPICIOUS' | 'NEUTRAL';

type NPCBehavior = 
  | 'PATROL' | 'IDLE' | 'FOLLOW' | 'FLEE' | 'ATTACK' | 'PROTEST'
  | 'OBSERVE' | 'MEDIC_ASSIST' | 'REPORT' | 'CROWD';

type NPCMood = 
  | 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL' | 'HOSTILE' | 'SUPPORTIVE';

interface NPCInventoryItem {
  id: string;
  name: string;
  type: 'weapon' | 'tool' | 'medical' | 'communication' | 'protest_item';
  meshAttachPoint: 'hand_L' | 'hand_R' | 'back' | 'belt' | 'shoulder';
  meshAsset: string;  // Pfad zur GLB-Datei
}

interface NPCData {
  id: string;
  name: string;
  type: NPCType;  // Alle 16 Typen aus der Spezifikation
  position: Vector3;
  rotation: Quaternion;
  outfitColor: { r: number; g: number; b: number };  // RGB 0-255
  emotionalState: EmotionalState;
  mood: NPCMood;
  behavior: NPCBehavior;
  inventory: NPCInventoryItem[];
  
  // Erweiterte AAA-Properties
  locomotionSpeed: number;      // m/s
  detectionRadius: number;      // Wahrnehmungsradius in Metern
  aggressionLevel: number;      // 0.0–1.0
  loyaltyGroup: string;         // Zu welcher Fraktion gehört dieser NPC
  dialogTree: DialogNode[];     // Dialogsystem
  facialExpression: number[];   // FACS-Blendshape-Gewichte [0..1] für 52 Shapes
  animationState: AnimationStateMachine;
}
```

### 4.2 DIALOG-SYSTEM

```typescript
interface DialogNode {
  id: string;
  speaker: string;
  text: string;
  audioFile?: string;       // Synchronisiertes Audio
  lipSyncData?: number[];   // FACS-kompatible Lippenform-Daten pro Frame
  emotionChange?: EmotionalState;
  choices?: {
    text: string;
    nextNodeId: string;
    consequence?: GameEvent;
  }[];
  triggerCondition?: string;  // JavaScript expression
  duration: number;           // Millisekunden
}
```

---

## ABSCHNITT 5 — SPAWN-MARKER SYSTEM

```typescript
interface SpawnMarker {
  id: string;
  position: Vector3;
  radius: number;           // Spawn-Radius in Metern
  npcType: NPCType;
  maxInstances: number;     // Max gleichzeitige NPCs an diesem Punkt
  spawnInterval: number;    // Millisekunden zwischen Spawns
  urgencyLevel: 1 | 2 | 3; // 1=Niedrig(grün), 2=Mittel(gelb), 3=Hoch(rot)
  activeTimeWindows: {
    startTime: number;      // Sekunden seit Spielstart
    endTime: number;
  }[];
  
  // Visuelle Repräsentation (5.000 Poly)
  visual: {
    ringColor: Color;
    pulseSpeed: number;     // Hz
    indicatorHeight: number; // Meter
    urgencyIndicator: boolean;
  };
}
```

---

## ABSCHNITT 6 — HUD-PANEL SYSTEM

```typescript
// HUD ist CSS/DOM-basiert — KEIN 3D-Mesh außer Hologramm-Modus
interface HUDPanel {
  // Status-Panel (links unten)
  statusPanel: {
    missionTitle: string;
    missionObjective: string;
    timeRemaining: number;
    threatLevel: number;    // 0–5 (Sicherheitsstufe)
  };
  
  // Timeline (oben)
  timeline: {
    currentTime: string;
    events: TimelineEvent[];
    progressPercent: number;
  };
  
  // Telemetrie (rechts)
  telemetry: {
    npcCount: number;
    fpsCounter: number;
    polygonsRendered: number;
    drawCalls: number;
    memoryUsage: number;   // MB
  };
  
  // Kamera-Drohnen-Feed (Bild-in-Bild)
  droneView: {
    active: boolean;
    droneId: string;
    position: Vector3;
    rotation: Quaternion;
    zoom: number;           // 1x–10x
    renderTarget: WebGLRenderTarget; // Gerendert in separate RenderTarget
  };
  
  // Mini-Map
  miniMap: {
    radius: number;         // Sichtradius in Metern
    npcPositions: Map<string, Vector2>;
    playerPosition: Vector2;
    zoom: number;
  };
}
```

---

## ABSCHNITT 7 — KAMERA-DROHNEN SYSTEM

```typescript
interface CameraDrone {
  id: string;
  position: Vector3;
  rotation: Quaternion;
  velocity: Vector3;
  
  // Kamera-Properties
  camera: {
    fov: number;              // 20°–120° (Zoom)
    near: 0.1;
    far: 1000;
    renderTarget: WebGLRenderTarget;
    resolution: { width: 1920, height: 1080 };
    postProcessing: {
      vignette: boolean;
      filmGrain: number;
      colorGrading: 'documentary' | 'cinematic' | 'surveillance';
    };
  };
  
  // Bewegungssteuerung
  controls: {
    maxSpeed: number;         // m/s
    maxAltitude: number;      // Meter
    minAltitude: number;
    followTarget?: string;    // NPC-ID für Follow-Cam
    orbitTarget?: Vector3;
  };
  
  // Status
  batteryLevel: number;       // 0–100%
  signalStrength: number;     // 0–100%
  missionMode: 'surveillance' | 'follow' | 'cinematic' | 'free';
}
```

---

## ABSCHNITT 8 — RENDERING-OPTIMIERUNGEN PFLICHTLISTE

Diese Liste ist **vollständig abzuarbeiten** — jeder Punkt mit einem Commit zu belegen:

- [ ] **LOD-System** für alle Assets implementiert (5 Detailstufen)
- [ ] **GPU Instancing** für Crowds (>10 gleichzeitige gleiche NPC-Typen)
- [ ] **Frustum Culling** verifiziert aktiviert
- [ ] **Occlusion Culling** für alle Gebäude implementiert
- [ ] **KTX2-Kompression** für alle Texturen
- [ ] **Draco-Kompression** für alle GLB-Dateien
- [ ] **Deferred Rendering** (WebGL2 MRT — Multiple Render Targets)
- [ ] **Cascaded Shadow Maps** (4 Kaskaden)
- [ ] **SSAO** (Screen Space Ambient Occlusion)
- [ ] **TAA** (Temporal Anti-Aliasing)
- [ ] **Bloom + Lens Flare** (Post-Processing)
- [ ] **HDR Rendering** (ACES Tone Mapping)
- [ ] **SSR** (Screen Space Reflections) für nasse Straßen
- [ ] **Volumetrisches Licht** (God Rays vom Stephansdom)
- [ ] **Particle System** für Crowd-Dynamik (Staub, Rauch)
- [ ] **Physics LOD** — Physik nur für NPCs <30m aktiv
- [ ] **Web Workers** für AI/Pathfinding (kein Main-Thread Blocking)
- [ ] **Asset-Streaming** — Progressive GLB-Loading
- [ ] **Benchmark-Test** — Ziel: ≥60 FPS bei 50 NPCs, 10 Gebäuden (Desktop)
- [ ] **Mobile Fallback** — Auto-LOD für iOS/Android (30 FPS Ziel)

---

## ABSCHNITT 9 — QUALITÄTSSICHERUNG & ABNAHME-KRITERIEN

**Ein NPC gilt als AAA-konform wenn:**
1. LOD-0 Polygon-Count ≥ 200.000 (verifiziert via Three.js Inspector)
2. Alle 5 PBR-Maps vorhanden (BaseColor, Normal, MetallicRoughness, AO, Emissive falls nötig)
3. Skeleton mit 120 Bones vorhanden und korrekt gewichtet
4. Alle 52 FACS-Blendshapes implementiert
5. Animationsübergänge flüssig (keine Pops)
6. SSS-Shader für Gesichts-Haut aktiv
7. Outfit-Physik für Kleidungsteile implementiert

**Ein Gebäude gilt als AAA-konform wenn:**
1. Polygon-Count wie spezifiziert in Abschnitt 1.2 (±5% Toleranz)
2. 4K Texturen (Hero Assets 8K) in KTX2-Format
3. PBR-Materialien für alle Oberflächen
4. LOD-System mit mindestens 3 Detailstufen
5. Kollisions-Mesh vorhanden (vereinfacht, convex hull)
6. Lightmap-UV-Channel vorhanden (Channel 2)

**Performance-Abnahme (ZWINGEND):**
| Szenario | Ziel FPS | Messung |
|---|---|---|
| 50 NPCs + Stephansdom + 10 Gebäude (Desktop 1080p) | ≥60 FPS | Three.js Stats Panel |
| 20 NPCs + 5 Gebäude (Mobile, Safari iOS) | ≥30 FPS | Lighthouse Device |
| Volle Szene, Ultra-Quality (Desktop 4K) | ≥30 FPS | Native GPU |
| Drone-View + Hauptszene gleichzeitig | ≥45 FPS | Dual RenderTarget |

---

## ABSCHNITT 10 — KRITISCHE CONSTRAINTS (NICHT VERHANDELBAR)

1. **Stack ist unveränderlich:** React Native (Expo) + React 19 + R3F + Three.js + Expo Router. Kein Webpack. Kein Vite. Kein Next.js. Nur Expo.
2. **Cloud-Rendering:** Alle schweren Berechnungen laufen in Web Workers oder auf der GPU. Kein Main-Thread-Blocking.
3. **Zero Local GPU-Load** für Deployment auf Hugging Face Spaces — SSR für initiales HTML, WebGL läuft client-side.
4. **GLTF-only** für alle 3D-Assets — kein FBX, kein OBJ im Production Build.
5. **KTX2-only** für alle Texturen im Production Build — PNG/JPEG nur als Fallback.
6. **Three.js Version 0.170.0** — keine Version-Änderung ohne explizite Freigabe.
7. **Ports:** Backend 3005, WebSocket 8005, Debug 3001 — nicht ändern.
8. **Dokumentation:** Jedes neue System erhält eine `SYSTEM_NAME.md` in `/docs/`.
9. **Vor jeder Implementierung:** Vollständige Projektstruktur-Analyse unter `C:\Users\immer\Desktop\corona-control-project\`. Keine Annahmen treffen — Fakten aus dem Code lesen.
10. **Polygonzählung verifizieren:** Jeden NPC und jedes Hero-Asset nach Import mit `scene.traverse()` zählen und in `/docs/POLYGON_REPORT.md` dokumentieren.

---

## ANHANG — POLYGON-ÜBERSICHTSTABELLE

| Asset | LOD-0 Polygone | Textur-Res | Priority |
|---|---|---|---|
| POLICE NPC | 233.000 | 4K Face / 2K Body | CRITICAL |
| RIOT_POLICE NPC | 250.000 | 4K Face / 2K Body | CRITICAL |
| SEK NPC | 283.500 | 4K Face / 2K Body | CRITICAL |
| DEMONSTRATOR | 217.500 | 4K Face / 2K Body | HIGH |
| ORGANIZER | 219.000 | 4K Face / 2K Body | HIGH |
| KRAUSE (Hero) | 241.500 | 4K Face / 4K Body | CRITICAL |
| EXTREMIST | 220.500 | 4K Face / 2K Body | HIGH |
| RIOTER | 219.500 | 4K Face / 2K Body | HIGH |
| CIVILIAN | 208.000 | 4K Face / 2K Body | MEDIUM |
| TOURIST | 220.500 | 4K Face / 2K Body | MEDIUM |
| JOURNALIST | 230.500 | 4K Face / 2K Body | HIGH |
| MUSICIAN | 236.500 | 4K Face / 2K Body | MEDIUM |
| MEDIC | 225.500 | 4K Face / 2K Body | HIGH |
| FIREFIGHTER | 248.000 | 4K Face / 2K Body | HIGH |
| PRESS | 223.500 | 4K Face / 2K Body | MEDIUM |
| GOVERNMENT_AGENT | 232.500 | 4K Face / 2K Body | HIGH |
| **Stephansdom** | **750.000** | **8K** | **HERO** |
| Barockhaus | 120.000 | 4K | HIGH |
| Geschäft | 80.000 | 2K | MEDIUM |
| Café | 90.000 | 2K | MEDIUM |
| U-Bahn-Eingang | 60.000 | 2K | MEDIUM |
| Polizei-Fahrzeug | 180.000 | 4K | HIGH |
| Kamera-Drohne | 60.000 | 2K | MEDIUM |
| Straßenlaterne | 15.000 | 1K | LOW |
| Stadtbaum | 25.000 | 1K | LOW |
| SpawnMarker | 5.000 | 512 | SYSTEM |

---

*Dokument-Version: 1.0 | Erstellt für: GOD UNIVERSE MATRIXX | Stack: Expo + R3F + Three.js 0.170.0*
*Dieses Dokument ist der bindende technische Standard für alle AAA-Grafik-Implementierungen.*
