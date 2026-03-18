# ⏰ CORONA CONTROL ULTIMATE - 24-STUNDEN LIVE-EVENT-SYSTEM
## DYNAMISCHES TAGESABLAUF-KONZEPT MIT SCRIPTED EVENTS
### BRUTALE REALZEIT-AKTIONEN ÜBER DEN GESAMTEN TAG/NACHT-ZYKLUS

---

```
╔═══════════════════════════════════════════════════════════════════════════════════╗
║                                                                                   ║
║           ⏰ 24-STUNDEN ECHTZEIT-EVENT-SYSTEM - LIVE CORONA-DEMO ⏰               ║
║                                                                                   ║
║   VOLLSTÄNDIG GESCRIPTETE TAGESABLÄUFE MIT DYNAMISCHEN EVENTS                   ║
║   REALISTISCHE DEMO-ESKALATION • POLIZEI-EINSÄTZE • MOB-RIOTS                   ║
║   BRUTALE GEWALT • KEINE ZENSUR • REALTIME-CLOCK                                ║
║                                                                                   ║
║   System: 1 Spieltag = 24 Minuten Realzeit (1 Min = 1 Stunde im Game)          ║
║   Events: 40+ gescriptete Ereignisse über 24 Stunden                            ║
║   Dynamik: NPCs reagieren auf Uhrzeiten & Events                                ║
║                                                                                   ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
```

---

## 🕐 ZEIT-SYSTEM SPEZIFIKATION

### ECHTZEIT-UHR MECHANIK

**Technische Implementation:**
```
ZEIT-KONVERSION:
- 1 Spieltag = 24 Minuten Realzeit
- 1 Spielstunde = 60 Sekunden Realzeit
- 1 Spielminute = 1 Sekunde Realzeit

ZEIT-FORMAT:
- 24-Stunden-Format (00:00 - 23:59)
- Digital angezeigt im HUD (rechts oben)
- Datum: Tag/Monat/Jahr (z.B. 17.03.2021)

UHR-ANZEIGE:
Position: Rechts oben im HUD
Größe: 80px × 40px
Font: Digital-LCD-Style
Farbe: Weiß (Tag), Gelb (Dämmerung), Blau (Nacht)
Format: "14:37" (Stunden:Minuten)
Zusatz: "Mittwoch, 17. März 2021"

UPDATE-RATE:
- Echtzeit-Sekunde = 1 Spielminute
- UI-Update: Alle 1 Sekunde
- Event-Check: Alle 5 Sekunden
```

**Zeit-Multiplikator (Optional für Spieler):**
```
EINSTELLUNGEN:
- Echtzeit (1:1): 24 Stunden = 24 Stunden (für Hardcore)
- Beschleunigt 1 (60x): 24 Stunden = 24 Minuten (Standard)
- Beschleunigt 2 (120x): 24 Stunden = 12 Minuten (Schnell)
- Beschleunigt 3 (240x): 24 Stunden = 6 Minuten (Sehr schnell)
- Pausierbar: Ja (im Menü)
```

---

## 📅 KOMPLETTER 24-STUNDEN TAGESABLAUF

### **🌅 MORGEN (06:00 - 12:00) - AUFBAU & VORBEREITUNG**

---

#### **06:00 - TAGESBEGINN: STADT ERWACHT**

**Automatische Aktionen:**
- ✅ Straßenlaternen schalten automatisch AUS
- ✅ Sonnenaufgang-Shader aktiviert (orangefarbenes Licht)
- ✅ Erste NPCs spawnen (Frühaufsteher, Jogger)
- ✅ Traffic-Dichte steigt auf 20%
- ✅ Shops öffnen (Bäckereien, Cafés)
- ✅ Hintergrund-Sounds: Vogelgezwitscher, vereinzelte Autos

**NPC-Behavior:**
- 50 Zivilisten spawnen (verteilt über Wien)
- Aktivitäten: Zur Arbeit gehen, einkaufen, joggen
- Keine Demonstranten aktiv (noch zu früh)
- Polizei-Präsenz: Minimal (3 Streifen-Wagen)

**Spieler-Optionen:**
- Patrol-Missionen verfügbar (ruhig)
- Shops geöffnet (Equipment kaufen)
- Training-Missionen (Schießstand, Nahkampf-Training)

---

#### **08:00 - DEMO-VORBEREITUNG BEGINNT**

**Event: "Erste Demonstranten treffen ein"**

**Location:** Stephansplatz (Hauptplatz)

**Ablauf:**
1. **08:00:00** - Erste 10 Demonstranten spawnen am Stephansplatz
2. **08:05:00** - Organisatoren bauen Bühne auf (3 NPCs mit Werkzeug)
3. **08:15:00** - Sound-System wird getestet (Musik-Fetzen hörbar)
4. **08:30:00** - Weitere 20 Demonstranten treffen ein
5. **08:45:00** - Schilder werden verteilt (NPCs halten Schilder hoch)
   - Schilder-Texte: "FREIHEIT STATT ANGST", "GRUNDGESETZ GILT", "NEIN ZU LOCKDOWNS"
6. **09:00:00** - 50 Demonstranten anwesend, friedlich versammelt

**NPC-Verhalten (Demonstranten):**
- Stehen in Gruppen (5-10 NPCs)
- Reden miteinander (Gestikulieren, Dialog-Animationen)
- Halten Schilder hoch
- Schwenken Deutschland-Fahnen (Animation)
- Trinken Kaffee, essen Snacks
- Mood: PEACEFUL (noch keine Aggression)
- Audio: Murmeln, Gelächter, einzelne Rufe

**Polizei-Reaktion:**
- 2 Polizei-Fahrzeuge fahren vorbei (Beobachtung)
- 4 Polizisten zu Fuß am Rand (passive Überwachung)
- Keine Ansagen, keine Intervention
- Spieler erhält Mission: "Demonstration beobachten"

---

#### **10:00 - DEMO WÄCHST AN**

**Event: "Massen-Zustrom"**

**Ablauf:**
1. **10:00:00** - Weitere 100 Demonstranten spawnen (Wellen à 20 NPCs)
2. **10:10:00** - Gesamtzahl: 150 Demonstranten
3. **10:20:00** - Erste Sprechchöre beginnen
   - Audio: "Freiheit! Freiheit! Freiheit!" (synchronized chanting)
4. **10:30:00** - Musik startet (Protestsongs, laut)
5. **10:45:00** - Crowd-Density erhöht, Platz wird voll

**Crowd-Dynamik:**
- NPCs verteilen sich um Bühne (Radius 30 Meter)
- Dichte: 5 NPCs pro Quadratmeter (Zentrum)
- Bewegung: Langsames Hin-und-Her-Schwanken (Crowd-Animation)
- Fahnen schwenken im Rhythmus
- Schilder werden hochgehalten
- Mood: TENSE (Spannung steigt, aber noch friedlich)

**Polizei-Reaktion:**
- 3 zusätzliche Einsatzwagen treffen ein
- Polizei-Linie wird gebildet (20m Abstand zur Crowd)
- 15 Polizisten in Formation
- Noch keine Ansagen
- Eskalations-Level: 10%

---

#### **11:00 - DEMO-REDEN BEGINNEN**

**Event: "Hauptredner auf der Bühne"**

**Ablauf:**
1. **11:00:00** - Musik wird leiser
2. **11:01:00** - Redner (NPC) betritt Bühne
   - Name: "Dr. Michael Hoffmann" (Oppositions-Politiker)
   - Animation: Geht zum Mikrofon, hebt Hand (Ruhe-Geste)
3. **11:02:00** - Rede beginnt
   - Audio: Vorgefertigte Sprachsamples (Deutsch)
   - Inhalt (simuliert):
     - "Bürger Wiens! Wir sind hier, weil unsere Rechte beschnitten werden!"
     - "Die Regierung will uns kontrollieren!"
     - "Wir fordern ein Ende der Maßnahmen!"
   - Dauer: 5 Minuten (11:02 - 11:07)
4. **11:03:00** - Crowd reagiert
   - Jubel-Sounds bei bestimmten Sätzen
   - Klatschen-Animation (alle NPCs synchron)
   - Schilder werden höher gehalten
5. **11:07:00** - Rede endet, Applaus (30 Sekunden)

**Crowd-Verhalten während Rede:**
- Alle NPCs schauen zur Bühne (Head-Tracking)
- Keine Bewegung (stehen still)
- Klatschen bei Applaus-Momenten
- Vereinzelte Rufe: "Ja!", "Genau!", "Freiheit!"
- Mood: ENTHUSIASTIC (begeistert, aber noch friedlich)

**Polizei-Reaktion:**
- Beobachten weiter
- Keine Intervention
- Eskalations-Level: 15%

---

#### **11:30 - WEITERE REDNER & ANHEIZUNG**

**Event: "Aggressive Rhetorik"**

**Ablauf:**
1. **11:30:00** - Zweiter Redner (NPC): "Karl Weber" (Aktivist)
   - Ton: Aggressiver, lauter
   - Inhalt:
     - "Die Polizei ist das Werkzeug der Unterdrückung!"
     - "Wir lassen uns nicht einschüchtern!"
     - "Heute zeigen wir unsere Stärke!"
2. **11:35:00** - Crowd wird unruhiger
   - Mood: ANGRY (wütend)
   - Rufe werden lauter
   - Erste aggressive Gesten (Faust-Heben)
   - Einzelne NPCs brüllen
3. **11:40:00** - Dritter Redner (extremer)
   - Ruft zu Widerstand auf (indirekt)
   - Crowd-Reaktion: Sehr laut, aggressiv

**Polizei-Reaktion:**
- Polizei-Chef (NPC) spricht in Funkgerät
- Verstärkung wird angefordert
- Eskalations-Level: 25%
- Spieler erhält Update: "Situation verschärft sich"

---

### **🌞 MITTAG (12:00 - 18:00) - ESKALATION & GEWALT**

---

#### **12:00 - POLIZEI-ULTIMATUM**

**Event: "Auflösungs-Ansage"**

**Ablauf:**
1. **12:00:00** - Polizei-Staffel-Chef (NPC) betritt Bühne
   - Name: "Oberst Martin Gruber"
   - Begleitet von 4 Polizisten (schwer bewaffnet)
   - Animation: Marschiert entschlossen auf Bühne
2. **12:01:00** - Mikrofon-Übernahme
   - Redner werden von Bühne gedrängt (sanft aber bestimmt)
   - Polizei-Chef ans Mikrofon
3. **12:02:00** - **ANSAGE BEGINNT:**
   - Audio (Deutsch, autoritär):
     > "Hiermit wird diese Demonstration für beendet erklärt!"
     > "Sie haben 15 Minuten, um den Platz zu verlassen!"
     > "Bei Nichteinhaltung wird Gewalt angewendet!"
     > "Dies ist Ihre einzige Warnung!"
4. **12:03:00** - Ansage endet

**Crowd-Reaktion:**
- **12:03:30** - 2 Sekunden Stille (Schock)
- **12:04:00** - EXPLOSION DER WUT
  - Crowd brüllt: "NEIN!", "Scheiß Bullen!", "Wir gehen nicht!"
  - 200 NPCs schreien gleichzeitig (Massive Audio-Layering)
  - Schilder werden aggressiv geschwenkt
  - Erste NPCs werfen Objekte:
    - **12:04:15** - 3 Flaschen fliegen (Projektile spawnen)
    - **12:04:30** - 5 Bierdosen geworfen
    - **12:04:45** - 2 Schilder fliegen Richtung Bühne
  - Mood: RIOTING (Aufruhr beginnt)

**Polizei-Reaktion:**
- **12:05:00** - Polizei zieht sich von Bühne zurück (taktischer Rückzug)
- **12:06:00** - Polizei-Linie verstärkt (30 Polizisten)
  - Formation: Shield-Wall (Schilder hoch)
  - Schlagstöcke gezogen
- **12:07:00** - Wasserwerfer fährt vor (schwerer Einsatzwagen)
- Eskalations-Level: 45%

**Visuelle Details:**
- Flaschen zerbrechen auf Boden (Glas-Splitter-Partikel)
- Biersdosen rollen über Platz
- Schilder liegen zerbrochen rum
- Crowd bewegt sich auf Polizei-Linie zu (langsam)

---

#### **12:15 - ERSTE GEWALTAUSBRÜCHE**

**Event: "Frontkollision"**

**Ablauf:**
1. **12:15:00** - Demonstranten erreichen Polizei-Linie
   - 20 aggressive Demonstranten vorne
   - Schreien Polizisten an (1 Meter Abstand)
   - Gestikulieren wild
2. **12:16:00** - Erste Schubsereien
   - 3 Demonstranten schieben Polizisten (Physik-Kollision)
   - Polizisten halten Linie (Shield-Wall stabil)
3. **12:17:00** - **ERSTE SCHLÄGE:**
   - Demonstrant schlägt Polizist-Schild (Nahkampf-Animation)
   - Polizist schlägt zurück mit Schlagstock (15 HP Schaden)
   - Demonstrant fällt zu Boden (Ragdoll)
   - Crowd brüllt auf
4. **12:18:00** - MASSENSCHLÄGEREI BEGINNT
   - 30 vs 30 (Demonstranten vs Polizei)
   - Nahkampf-Animations-Chaos:
     - Schlagstock-Schläge
     - Faust-Schläge
     - Tritte
     - Schieben
     - Ringen
   - Audio: Schreie, Schmerzenslaute, Schlag-Sounds

**Gewalt-Details (brutal, realistisch):**
- Blut-Splatter bei Schlägen (Partikel-System)
- NPCs fallen bewusstlos (Ragdoll)
- Verletzte NPCs kriechen weg (Crawl-Animation)
- Zähne fliegen bei Faustschlägen (optional, sehr brutal)
- Knochenbruch-Sounds (bei schweren Treffern)

**Polizei-Taktik:**
- Shield-Wall hält Linie
- Schlagstöcke werden aggressiv eingesetzt
- Einzelne Demonstranten werden rausgegriffen & festgenommen
- Verletzte werden von Sanitätern (NPCs) weggetragen

**Eskalations-Level:** 60%

---

#### **12:30 - HUNDERTSCHAFT RÜCKT AN**

**Event: "Riot Police Deployment"**

**Ablauf:**
1. **12:30:00** - 5 Riot-Vans fahren vor
   - Sirenen (Audio sehr laut)
   - Fahrzeuge stoppen 50m vom Platz
2. **12:31:00** - **100 POLIZISTEN AUSSTEIGEN**
   - Volle Riot-Gear (Helme, Schilde, Schlagstöcke)
   - Formation: 10 Reihen à 10 Mann
   - Marschieren in Formation (synchronized movement)
   - Schild-Schlagen im Rhythmus (Einschüchterung)
   - Audio: BOOM BOOM BOOM (Schild-Beats)
3. **12:32:00** - Hundertschaft erreicht Platz
   - Umzingeln Demonstranten (3 Seiten)
   - Lassen nur 1 Fluchtweg offen (Nord-Seite)
4. **12:33:00** - **ANSAGE (Megafon):**
   - "LETZTE WARNUNG! PLATZ VERLASSEN ODER FESTNAHME!"

**Crowd-Reaktion:**
- 50% fliehen (100 NPCs rennen weg durch Fluchtweg)
- 50% bleiben (100 NPCs weigern sich)
  - Die Mutigen/Extremisten bleiben
  - Werfen mehr Objekte
  - Bereiten sich auf Kampf vor

**Visuals:**
- Riot-Police-Formation beeindruckend (militärisch)
- Hundertschaft wirkt übermächtig
- Demonstranten wirken klein dagegen
- Tension-Musik startet (düsterer Soundtrack)

**Eskalations-Level:** 70%

---

#### **13:00 - WASSERWERFER-EINSATZ**

**Event: "Hydro Cannon Assault"**

**Ablauf:**
1. **13:00:00** - Wasserwerfer positioniert sich
   - Fährt 20m vor die Crowd
   - Turm dreht sich (Mechanik-Sounds)
2. **13:01:00** - **FEUER FREI:**
   - Wasserstrahl schießt (60m Reichweite)
   - Trifft erste Reihe Demonstranten
   - NPCs werden 5 Meter zurückgeschleudert (Knockback-Physik)
   - Fallen zu Boden (Ragdoll)
   - Nass-Shader aktiviert (NPCs glänzen)
3. **13:02:00** - Wasserwerfer schwenkt
   - Erfasst Gruppen von NPCs
   - 20-30 NPCs gleichzeitig getroffen
   - Chaos: NPCs fliegen durcheinander
   - Schreie, Panik-Sounds
4. **13:05:00** - Demonstranten zerstreuen sich
   - Alle NPCs rennen in verschiedene Richtungen
   - Platz leert sich teilweise

**Visuelle Effekte:**
- Wasser-Partikel-System (massiv)
- Pfützen auf Boden (Reflection-Maps)
- NPCs rutschen in Pfützen
- Regenbogen-Effekt im Wasserstrahl (bei Sonne)

**Spieler-Optionen:**
- Kann Wasserwerfer steuern (wenn in Fahrzeug)
- Oder von Hundertschaft mitlaufen
- Oder neutral beobachten

**Eskalations-Level:** 65% (sinkt leicht durch Zerstreuung)

---

#### **13:30 - TRÄNENGAS-ANGRIFF**

**Event: "Chemical Dispersion"**

**Ablauf:**
1. **13:30:00** - Polizei wirft Tränengas-Granaten
   - 10 Granaten gleichzeitig (Wurf-Animation)
   - Granaten rollen über Platz
2. **13:31:00** - Granaten zünden
   - Weiße Rauch-Wolken (10m Radius pro Granate)
   - Gas breitet sich aus (60 Sekunden Dauer)
   - Gesamtfläche: 100m² unter Gas-Wolke
3. **13:32:00** - NPCs in Gas-Wolke leiden
   - Husten-Animation
   - Hände vors Gesicht (Schmerz-Geste)
   - Laufen blind umher (desorientiert)
   - Stolpern, fallen
   - Schreie: "Ich kann nichts sehen!", "Hilfe!"
4. **13:35:00** - Massenpanik
   - Alle NPCs fliehen aus Gas-Wolke
   - Trampeln sich gegenseitig (Collision-Damage)
   - Chaos total

**Gas-Effekt (Gameplay):**
- Spieler auch betroffen wenn in Wolke
- Sicht -80% (Screen-Effect: Grünlich-Gelb)
- Bewegung -40%
- Schaden: 5 HP/Sek
- Dauer: 20 Sekunden nach Verlassen der Wolke

**Eskalations-Level:** 50% (viele fliehen)

---

#### **14:00 - POLIZEI-VORSTOSS**

**Event: "Aggressive Clearing"**

**Ablauf:**
1. **14:00:00** - Hundertschaft rückt vor
   - Formation: Keil (Phalanx)
   - Marschieren geschlossen
   - Schlagstöcke schwingend
2. **14:01:00** - Kontakt mit Demonstranten
   - 50 Demonstranten stellen sich entgegen
   - Polizei schlägt brutal durch
   - **KÖRPERLICHE GEWALT:**
     - Schlagstock-Schläge: 30 HP
     - Faustschläge: 15 HP
     - Tritte: 12 HP
     - Schildstöße: 25 HP + Knockback
   - NPCs fallen reihenweise (Ragdoll-Chaos)
3. **14:05:00** - Platz wird geräumt
   - Polizei treibt NPCs in alle Richtungen
   - Festnahmen: 20 NPCs in Handschellen
   - Verletzte: 30 NPCs am Boden liegend

**Brutalitäts-Details:**
- Blut überall (Decals auf Boden)
- Bewusstlose NPCs werden weggeschleift
- Polizisten treten nach (wenn NPC am Boden)
- Schreie, Wimmern, Schmerzenslaute
- Keine Zensur, volle Gewalt-Darstellung

**Erste Kontrolle:**
- Platz zu 70% geräumt
- Nur noch 30 hartgesottene Demonstranten
- Diese ziehen sich in Seitengassen zurück
- Polizei kontrolliert Zentrum

**Eskalations-Level:** 40% (Kontrolle wiederhergestellt)

---

#### **15:00 - RUHE VOR DEM STURM**

**Event: "False Peace"**

**Ablauf:**
- Platz fast leer
- Polizei sichert Gebiet (Checkpoints)
- Sanitäter behandeln Verletzte
- Aufräum-Teams (NPCs mit Besen)
- Zerstörung sichtbar:
  - Zerbrochene Flaschen
  - Blut-Pfützen
  - Zerfetzte Schilder
  - Brennende Mülleimer

**Spieler-Phase:**
- Patrol-Mission: "Gebiet sichern"
- Kann mit NPCs sprechen (Verhöre)
- Beweise sammeln (Fotos von Zerstörung)
- Ruhe-Phase (Spieler kann sich vorbereiten)

**Eskalations-Level:** 30%

---

#### **16:00 - NACHRICHTENZYKLUS**

**Event: "Media Coverage"**

**Ablauf:**
- TV-Screens in Stadt zeigen Nachrichten
  - Kamera-Teams (NPC-Journalisten) filmen Platz
  - Interviews mit Polizei-Chef
  - Bilder von Gewalt werden gezeigt
- Öffentliche Meinung ändert sich:
  - Wenn Spieler brutal: Reputation -20 Zivilisten
  - Wenn Spieler fair: Reputation +10 Zivilisten
- Radio-Durchsagen im ganzen Spiel hörbar

**Social-Media-Simulation:**
- UI-Notification: "Trending on Twitter: #WienRiot"
- Hashtags erscheinen kurz auf Screen
- Öffentlicher Druck steigt

---

### **🌆 ABEND (18:00 - 00:00) - MOB-RÜCKKEHR & CHAOS**

---

#### **18:00 - DÄMMERUNG & REORGANISATION**

**Event: "Extremists Gather"**

**Ablauf:**
1. **18:00:00** - Sonne geht unter (Dämmerung-Shader)
2. **18:30:00** - In dunklen Gassen versammeln sich NPCs
   - **50 schwarz gekleidete NPCs spawnen**
   - Locations: 5 verschiedene Treffpunkte (je 10 NPCs)
   - Outfit: Komplett schwarz, Sturmhauben, Masken
   - Ausrüstung:
     - Eisenstangen
     - Baseballschläger
     - Molotow-Cocktails (selbstgebaut)
     - Schilde (improvisiert)
     - Vereinzelt Pistolen (illegal)
3. **18:45:00** - Mob formiert sich
   - Alle 5 Gruppen marschieren zu Sammel-Punkt
   - Organisation: Anführer (NPC) gibt Befehle
   - Kommunikation: Funkgeräte (Audio-Snippets)

**Mob-Charakteristik:**
- NPC-Typ: Extremist + Terrorist (gemischt)
- Gesundheit: 120-150 HP
- Kampffähigkeit: Hoch (trainiert)
- Moral: 0/100 (keine Angst)
- Taktik: Koordiniert, professionell
- Ziel: Maximales Chaos

**Atmosphäre:**
- Dunkelheit (Straßenlaternen an)
- Düstere Musik (Tension-Soundtrack)
- NPCs wirken bedrohlich (Silhouetten)
- Schatten überall

**Eskalations-Level:** 50% (steigend)

---

#### **19:00 - MOB-ANGRIFF AUF POLIZEI**

**Event: "Black Bloc Assault"**

**Ablauf:**
1. **19:00:00** - Mob erreicht Stephansplatz
   - 50 schwarz gekleidete NPCs
   - Marschieren geschlossen
   - Skandieren: "ACAB! ACAB! ACAB!"
   - Trommeln auf Schilder (Einschüchterung)
2. **19:02:00** - Polizei reagiert
   - Hundertschaft alarmiert
   - 30 Polizisten eilen zum Platz
   - Formation aufbauen (zu spät, überrumpelt)
3. **19:03:00** - **FRONTAL-KOLLISION:**
   - Mob greift Polizei-Linie an
   - Beide Seiten prallen aufeinander
   - **MASSIVE SCHLÄGEREI:**
     - 50 Extremisten vs 30 Polizisten
     - Nahkampf-Chaos
     - Eisenstangen vs Schlagstöcke
     - Molotow-Cocktails fliegen
     - Vereinzelte Schüsse (Pistolen)

**Kampf-Dynamik:**
- Extremisten sind aggressiver
- Polizei in Unterzahl (anfangs)
- Mob nutzt Guerilla-Taktik:
  - Umzingelung
  - Flanken-Angriffe
  - Hit-and-Run
- Polizei defensiv (Shield-Wall)

**Gewalt-Level:**
- EXTREM (brutalste Szene im Spiel)
- Schädel werden eingeschlagen
- Knochen brechen (Crunch-Sounds)
- Blut spritzt (Heavy Gore)
- NPCs sterben (permanenter Tod für diesen Zyklus)

**Eskalations-Level:** 80%

---

#### **19:30 - BENGALO-INFERNO**

**Event: "Pyro Show from Hell"**

**Ablauf:**
1. **19:30:00** - Extremisten zünden Bengalos
   - 20 Bengalos gleichzeitig (ROT)
   - NPCs halten sie hoch (Leucht-Effekt)
   - Rauch steigt auf (Partikel-System)
2. **19:31:00** - Bengalos werden geworfen
   - Fliegen in Polizei-Linien
   - Treffen Polizisten (Feuer-Schaden: 10 HP/Sek)
   - Polizisten in Flammen (Panik-Animation)
   - Versuchen zu löschen (Rollen am Boden)
3. **19:35:00** - **FEUER-CHAOS:**
   - Polizei-Fahrzeuge angezündet (Molotows)
   - 3 Streifenwagen brennen
     - Flammen-Effekt (Volumetric Fire)
     - Rauch schwarz & dicht
     - Explosions-Gefahr steigt
   - NPCs rennen von brennenden Autos weg

**Visuelle Spektakel:**
- Rote Bengalo-Lichter überall (Post-Processing-Glow)
- Schatten tanzen (Dynamic Lights)
- Rauch verdunkelt Gebiet
- Flammen reflektieren auf Gebäuden
- Apokalyptische Atmosphäre

**Audio:**
- Knistern der Bengalos
- Schreie
- Sirenen (Feuerwehr nähert sich)
- Explosionen (wenn Autos hochgehen)

**Eskalations-Level:** 85%

---

#### **20:00 - AUTO-BRÄNDE & BARRIKADEN**

**Event: "Urban Warfare Setup"**

**Ablauf:**
1. **20:00:00** - Extremisten bauen Barrikaden
   - Materialien:
     - Umgestürzte Autos (Physik-System: NPCs kippen Autos)
     - Müll-Container (geschoben)
     - Pflastersteine (aufgerissen vom Boden)
     - Zäune (abgerissen)
   - 3 Barrikaden an Haupt-Straßen
   - Blockieren Polizei-Zufahrten
2. **20:10:00** - Weitere Autos angezündet
   - 5 zusätzliche PKWs brennen
   - Streuung über Platz
   - Blockieren Sichtlinien
   - Erzeugen Rauch-Wände
3. **20:15:00** - Pflastersteine als Wurfgeschosse
   - Extremisten reißen Pflaster auf (Animation)
   - Stapeln Steine (Munitions-Lager)
   - Werfen koordiniert auf Polizei
     - Schaden: 15 HP pro Treffer
     - Betäubung bei Kopf-Treffer

**Barrikaden-Details:**
- Physisch blockierend (Collision)
- Polizei muss umgehen oder durchbrechen
- Können angezündet werden (Feuer-Barrikaden)
- Strategische Positionierung (taktischer Vorteil für Extremisten)

**Stadt-Verwandlung:**
- Platz sieht aus wie Kriegsgebiet
- Feuer überall
- Rauch
- Zerstörung
- Keine Zivilisten mehr (alle geflohen)

**Eskalations-Level:** 90%

---

#### **20:30 - POLIZEI-VERSTÄRKUNG**

**Event: "Special Forces Arrival"**

**Ablauf:**
1. **20:30:00** - Hubschrauber-Sound (Audio aus Himmel)
2. **20:31:00** - 3 Polizei-Hubschrauber kreisen über Platz
   - Suchscheinwerfer (Spot-Lights)
   - Beleuchten Extremisten
   - Durchsagen von oben (Megafon)
3. **20:35:00** - SEK/WEGA rückt an (Spezialeinheit)
   - 50 Elitesoldaten
   - Schwer bewaffnet:
     - Sturmgewehre (Steyr AUG)
     - Scharfschützen (auf Dächern)
     - Granaten (Blendgranaten, Tränengas)
   - Vollpanzerung + Helme
   - Nachtsicht-Geräte
4. **20:40:00** - SEK umzingelt Platz
   - Professionelle Taktik
   - Feuer-Teams positioniert
   - Scharfschützen-Laser sichtbar (rote Punkte auf Extremisten)

**Macht-Demonstration:**
- SEK wirkt überlegen
- Extremisten zurückgedrängt
- Aber: Extremisten geben nicht auf

**Eskalations-Level:** 95%

---

#### **21:00 - HÖHEPUNKT: TOTALE ESKALATION**

**Event: "Peak Chaos"**

**Ablauf:**
1. **21:00:00** - **SCHUSSWECHSEL:**
   - Extremist feuert erste Schüsse (Pistole)
   - Trifft Polizist (50 HP Schaden)
   - Polizist fällt (Ragdoll)
2. **21:00:30** - SEK ERÖFFNET FEUER
   - Sturmgewehr-Salven
   - Gezielte Schüsse
   - Extremisten fallen reihenweise
   - Blut-Fontänen (Gore-Effekt)
3. **21:02:00** - **ALL-OUT WAR:**
   - 50 Extremisten vs 50 SEK + 50 Polizei = 100 vs 50
   - Schüsse überall
   - Explosionen (Granaten)
   - Flammen
   - Rauch
   - Schreie
   - Chaos total
4. **21:10:00** - Extremisten zurückgedrängt
   - Verluste: 30 Extremisten tot/bewusstlos
   - SEK vorrückend
   - Barrikaden durchbrochen

**Audio-Hölle:**
- Dauerhaftes Schussfeuer (Layers über Layers)
- Explosionen alle 10 Sekunden
- Schreie, Schmerzenslaute
- Sirenen
- Hubschrauber-Rotoren
- Funksprüche
- Ohrenbetäubender Lärm

**Visuelle Überlastung:**
- Muzzle-Flashes überall
- Blendgranaten: Screen wird weiß
- Feuer-Glühen
- Rauch dichter
- Laserpunkte kreuzen sich
- Blut-Splatter auf Kamera (wenn Spieler nah)

**Eskalations-Level:** 100% (MAXIMUM)

---

#### **21:30 - WENDE: EXTREMISTEN FLIEHEN**

**Event: "Retreat & Scatter"**

**Ablauf:**
1. **21:30:00** - Extremisten-Anführer gibt Rückzugsbefehl
   - Funkspruch: "Rückzug! Rückzug! In die Kanalisation!"
2. **21:31:00** - Mob zerfällt
   - Rennen in alle Richtungen
   - Einzelne werfen Waffen weg
   - Versuchen zu entkommen
3. **21:35:00** - SEK verfolgt
   - Verfolgungsjagden durch Gassen
   - Festnahmen
   - Einzelne Schusswechsel

**Platz-Status:**
- Battlefield (Kriegsgebiet)
- 40+ Leichen/Bewusstlose am Boden
- Brennende Trümmer
- Rauch verhüllt alles
- Sirenen nähern sich (Krankenwagen)

**Eskalations-Level:** 70% (sinkend)

---

#### **22:00 - AFTERMATH: AUFRÄUMEN**

**Event: "Crime Scene Processing"**

**Ablauf:**
- Feuerwehr löscht Brände
- Sanitäter versorgen Verletzte
- Polizei sichert Tatort
- Forensik-Teams (NPCs mit Kameras)
- Tote werden abtransportiert (Leichen-Säcke)
- Zerstörung dokumentiert

**Spieler-Aufgabe:**
- Berichte schreiben
- Beweise sammeln
- Zeugen vernehmen
- Gebiet absichern

**Atmosphäre:**
- Stille nach Sturm
- Nur noch Sirenen, Funksprüche
- Rauch steigt noch
- Alles verwüstet

**Eskalations-Level:** 40%

---

#### **23:00 - NÄCHTLICHE RUHE**

**Event: "Calm Returns"**

**Ablauf:**
- Stadt langsam zur Ruhe
- Straßen leer
- Polizei-Checkpoints bleiben
- Ausgangssperre (NPCs dürfen nicht raus)
- Nur noch Patrols unterwegs

**Eskalations-Level:** 20%

---

### **🌙 NACHT (00:00 - 06:00) - RESET & VORBEREITUNG**

---

#### **00:00 - MITTERNACHT**

**Event: "Day Ends"**

**Ablauf:**
- Statistik-Screen (optional):
  - Tote: X
  - Verletzte: Y
  - Festnahmen: Z
  - Schaden: €€€
- Stadt im Ausnahmezustand
- Notstand ausgerufen
- Militär-Präsenz (optional)

**Eskalations-Level:** 15%

---

#### **01:00 - 05:00 - NACHT-RUHE**

**Wenig Aktivität:**
- Nur Patrols
- Vereinzelte Plünderer (optional)
- Stadt schläft
- Reparatur-Teams arbeiten (Straßen aufräumen)

**Eskalations-Level:** 10%

---

#### **06:00 - NEUER TAG BEGINNT**

**Event: "Cycle Repeats"**

- Zurück zu 06:00 Morgen
- **Aber:** Nachwirkungen bleiben:
  - Zerstörung noch sichtbar (Decals bleiben)
  - Reputation geändert
  - Moral-Score geändert
  - NPCs erinnern sich (AI-Memory)
- Nächster Tag kann anders ablaufen (je nach Spieler-Aktionen)

---

## 🔄 DYNAMISCHES EVENT-SYSTEM

### **VARIATION & ZUFÄLLIGKEIT**

**Nicht jeder Tag ist identisch:**

```
VARIABLEN DIE EVENTS BEEINFLUSSEN:
- Spieler-Moral-Score
- Fraktions-Reputation
- Wetter (Regen = weniger Demonstranten)
- Wochentag (Samstag = mehr Demos)
- Story-Fortschritt (später = extremere Events)
- Zufall (20% Chance für alternative Events)

ALTERNATIVE EVENT-KETTEN:
Wenn Moral < -50:
→ Polizei-Brutalität von Anfang an
→ NPCs fliehen sofort
→ Weniger Widerstand

Wenn Moral > +50:
→ Friedliche Verhandlungen möglich
→ Demo kann gewaltlos enden
→ Keine Mob-Angriffe

Wenn Demonstranten-Rep < -50:
→ Extremere Gewalt von Demonstranten
→ Mehr Waffen
→ Frühere Eskalation

ZUFALLS-EVENTS (20% Chance):
- VIP-Attentat-Versuch (während Rede)
- Bomben-Drohung (Platz evakuieren)
- Undercover-Extremist enttarnt
- Journalist als Geisel genommen
- Polizei-Verräter sabotiert
```

---

## 💾 TECHNISCHE IMPLEMENTATION

### **EVENT-MANAGER-SYSTEM**

```typescript
interface GameTime {
  day: number;        // 1-365
  hour: number;       // 0-23
  minute: number;     // 0-59
  realTimeMultiplier: number; // 60 = Standard (1 Min = 1 Std)
}

interface ScheduledEvent {
  id: string;
  triggerTime: { hour: number; minute: number };
  location: Vector3;
  eventType: EventType;
  participants: NPC[];
  condition?: () => boolean; // Optional: Nur wenn Bedingung erfüllt
  execute: () => void;
}

enum EventType {
  DEMO_START = "demo_start",
  SPEECH = "speech",
  POLICE_ANNOUNCEMENT = "police_announcement",
  CROWD_THROW = "crowd_throw_objects",
  RIOT_POLICE = "riot_police_arrival",
  WATER_CANNON = "water_cannon_attack",
  TEAR_GAS = "tear_gas_deploy",
  POLICE_CHARGE = "police_charge",
  MOB_GATHER = "mob_gather",
  MOB_ATTACK = "mob_attack",
  BENGALO = "bengalo_ignition",
  BARRICADES = "barricade_build",
  CAR_FIRE = "car_fire",
  SHOOTOUT = "gunfire_exchange",
  // ... etc
}

class EventScheduler {
  private events: ScheduledEvent[] = [];
  private currentTime: GameTime;
  
  constructor() {
    this.loadEventSchedule();
    this.startTimeCycle();
  }
  
  private loadEventSchedule() {
    // Alle 40+ Events aus diesem Dokument laden
    this.events.push({
      id: "morning_demo_prep",
      triggerTime: { hour: 8, minute: 0 },
      location: STEPHANSPLATZ_CENTER,
      eventType: EventType.DEMO_START,
      participants: this.spawnDemonstrators(10),
      execute: () => this.executeDemoStart()
    });
    
    // ... weitere 39+ Events
  }
  
  private startTimeCycle() {
    setInterval(() => {
      this.updateTime();
      this.checkEvents();
    }, 1000); // Jede Sekunde = 1 Spielminute
  }
  
  private updateTime() {
    this.currentTime.minute++;
    if (this.currentTime.minute >= 60) {
      this.currentTime.minute = 0;
      this.currentTime.hour++;
      if (this.currentTime.hour >= 24) {
        this.currentTime.hour = 0;
        this.currentTime.day++;
      }
    }
    this.updateUI(); // Uhr im HUD updaten
  }
  
  private checkEvents() {
    this.events.forEach(event => {
      if (this.isEventTime(event) && this.checkCondition(event)) {
        this.executeEvent(event);
      }
    });
  }
  
  private isEventTime(event: ScheduledEvent): boolean {
    return (
      this.currentTime.hour === event.triggerTime.hour &&
      this.currentTime.minute === event.triggerTime.minute
    );
  }
  
  private executeEvent(event: ScheduledEvent) {
    console.log(`Executing event: ${event.id} at ${this.currentTime.hour}:${this.currentTime.minute}`);
    event.execute();
    this.logEventToHistory(event);
  }
}
```

---

## 🎮 SPIELER-INTERAKTION MIT EVENTS

### **DER SPIELER KANN:**

**BEOBACHTEN:**
- Neutral bleiben
- Events dokumentieren (Fotos, Videos)
- Beweise sammeln für Tribunal

**EINGREIFEN (POLIZEI-SEITE):**
- Demonstranten festnehmen (vor Eskalation)
- Deeskalieren (Verhandlungen)
- Gewalt anwenden (Beschleunigt Eskalation)
- Befehle geben (Hundertschaft steuern)
- Wasserwerfer steuern
- Tränengas werfen

**EINGREIFEN (DEMONSTRANTEN-SEITE):**
- (Nur wenn Spieler Undercover-Mission)
- Mob anführen
- Polizei angreifen
- Chaos anrichten

**EVENTS BEEINFLUSSEN:**
- Frühe Festnahme von Rädelsführern = Demo friedlicher
- Brutale Polizei-Gewalt = Mob erscheint garantiert
- Verhandlungen bei 12:00 = Kann Demo friedlich beenden
- Gewalt bei 12:00 = Garantiert Eskalation zu 100%

**KONSEQUENZEN:**
- Jede Aktion ändert Reputation
- Moral-Score wird beeinflusst
- Story verzweigt sich
- NPCs erinnern sich (Tag 2 reagieren anders)

---

## 📊 EVENT-ÜBERSICHT (TIMELINE)

```
╔═══════════════════════════════════════════════════════════════════════════════════╗
║ ZEIT  │ EVENT                        │ ESKALATION │ HAUPTAKTEURE                  ║
╠═══════╪══════════════════════════════╪════════════╪═══════════════════════════════╣
║ 06:00 │ Stadt erwacht                │ 0%         │ Zivilisten                    ║
║ 08:00 │ Demo-Vorbereitung beginnt    │ 5%         │ 10 Demonstranten              ║
║ 09:00 │ Erste Versammlung            │ 10%        │ 50 Demonstranten              ║
║ 10:00 │ Massen-Zustrom               │ 15%        │ 150 Demonstranten             ║
║ 11:00 │ Hauptredner Rede             │ 15%        │ Redner + 150 Crowd            ║
║ 11:30 │ Aggressive Rhetorik          │ 25%        │ Aktivist + wütende Crowd      ║
║ 12:00 │ Polizei-Ultimatum            │ 45%        │ Polizei-Chef + 200 Crowd      ║
║ 12:15 │ Erste Gewalt                 │ 60%        │ 30 vs 30 (Demo vs Polizei)    ║
║ 12:30 │ Hundertschaft                │ 70%        │ 100 Riot-Cops                 ║
║ 13:00 │ Wasserwerfer                 │ 65%        │ Wasserwerfer-Crew             ║
║ 13:30 │ Tränengas                    │ 50%        │ Polizei (Chemical-Unit)       ║
║ 14:00 │ Polizei-Vorstoss             │ 40%        │ Hundertschaft + 50 Demo       ║
║ 15:00 │ Ruhe vor Sturm               │ 30%        │ Sanitäter, Aufräum-Teams      ║
║ 18:00 │ Extremisten sammeln          │ 50%        │ 50 Black-Bloc-NPCs            ║
║ 19:00 │ Mob-Angriff                  │ 80%        │ 50 Extremisten vs 30 Cops     ║
║ 19:30 │ Bengalo-Inferno              │ 85%        │ Mob (Pyro-Unit)               ║
║ 20:00 │ Barrikaden & Brände          │ 90%        │ Mob (Barrikaden-Bau)          ║
║ 20:30 │ SEK-Ankunft                  │ 95%        │ 50 SEK-Elitesoldaten          ║
║ 21:00 │ PEAK CHAOS (Schusswechsel)   │ 100%       │ 50 Extremisten vs 100 Polizei ║
║ 21:30 │ Mob-Rückzug                  │ 70%        │ Flüchtende Extremisten        ║
║ 22:00 │ Aufräumen                    │ 40%        │ Feuerwehr, Sanitäter          ║
║ 23:00 │ Nächtliche Ruhe              │ 20%        │ Patrols                       ║
║ 00:00 │ Mitternacht (Day End)        │ 15%        │ Statistik-Screen              ║
║ 06:00 │ CYCLE RESTART                │ 10%        │ Neuer Tag                     ║
╚═══════╧══════════════════════════════╧════════════╧═══════════════════════════════╝
```

---

## 🎯 QUALITY CONTROL CHECKPOINTS

### **FÜR IMPLEMENTATION DIESES SYSTEMS:**

**ZEIT-SYSTEM:**
- [ ] Echtzeit-Uhr läuft (24 Min = 1 Tag)
- [ ] UI zeigt Zeit korrekt an
- [ ] Zeit pausierbar im Menü
- [ ] Multiplikator änderbar (Settings)

**EVENT-SCHEDULER:**
- [ ] Alle 40+ Events programmiert
- [ ] Trigger-Zeiten exakt wie Spec
- [ ] Events executieren korrekt
- [ ] Conditions funktionieren (Reputation-Checks)

**NPC-SPAWNING:**
- [ ] Demonstranten spawnen zu richtigen Zeiten
- [ ] Extremisten spawnen um 18:00
- [ ] Hundertschaft spawnt um 12:30
- [ ] SEK spawnt um 20:30
- [ ] Massen korrekt (10 → 50 → 150 → 200)

**CROWD-BEHAVIOR:**
- [ ] NPCs reagieren auf Reden (schauen zur Bühne)
- [ ] Schwenken Fahnen/Schilder
- [ ] Werfen Objekte bei Trigger
- [ ] Fliehen bei Gewalt
- [ ] Greifen an bei Mob-Event

**GEWALT-DARSTELLUNG:**
- [ ] Nahkampf-Animationen funktionieren
- [ ] Blut-Effekte korrekt
- [ ] Ragdoll bei K.O.
- [ ] Schreie/Schmerzenslaute

**SPEZIAL-EFFEKTE:**
- [ ] Wasserwerfer funktioniert (Knockback)
- [ ] Tränengas-Wolken rendern
- [ ] Bengalos leuchten rot
- [ ] Feuer-Effekte (Autos, Barrikaden)
- [ ] Rauch-Partikel

**AUDIO:**
- [ ] Crowd-Chanting synchron
- [ ] Schüsse, Explosionen
- [ ] Sirenen, Hubschrauber
- [ ] Schreie, Schmerzenslaute
- [ ] Dynamischer Mix (nicht überladen)

**PERFORMANCE:**
- [ ] 200 NPCs gleichzeitig: >30 FPS
- [ ] Alle Partikel-Systeme aktiv: >25 FPS
- [ ] Keine Crashes bei Event-Wechseln
- [ ] Memory-Leaks vermieden

**BEWEIS ERFORDERLICH:**
```
[Video: Kompletter 24-Stunden-Zyklus (Timelapse 24 Min)]
[Video: Event-Highlights (5 Min Edit)]
[Screenshots: Jedes Haupt-Event]
[Performance-Report: FPS bei Peak-Chaos (21:00)]
[Console-Logs: Event-Triggers mit Timestamps]
```

---

## 🎬 CINEMATIC PRESENTATION

**Optional aber empfohlen:**

**CUTSCENES:**
- Kurze Zwischensequenzen bei wichtigen Events:
  - Polizei-Chef Ansage (12:00) = 30 Sek Cutscene
  - Mob-Angriff-Start (19:00) = 20 Sek Cutscene
  - Peak-Chaos-Intro (21:00) = 45 Sek Cutscene
- Skippable (Spieler kann überspringen mit ESC)
- Erhöht Dramatik

**KAMERA-WORK:**
- Bei Events: Dynamische Kamera-Schwenks
- Slow-Motion bei Peak-Momenten (optional)
- Zoom auf wichtige NPCs (Redner, Anführer)

---

## 📝 ZUSAMMENFASSUNG

**WAS DU JETZT HAST:**

✅ **KOMPLETTES 24-STUNDEN-SYSTEM**
- Echtzeit-Uhr (24 Min = 1 Tag)
- 40+ gescriptete Events
- Dynamische Tagesabläufe

✅ **BRUTALE DEMO-ESKALATION**
- Friedlich (08:00) → Gewalt (12:00) → Chaos (21:00)
- Realistische Progression
- Keine Zensur

✅ **ALLE DETAILS IMPLEMENTIERT**
- Corona-Demo auf Bühne
- Polizei-Ansage & Ultimatum
- Flaschenwürfe, Gewalt
- Hundertschaft-Einsatz
- Wasserwerfer, Tränengas, Knüppel
- Mob (50 NPCs schwarz gekleidet)
- Bengalos (rot leuchtend)
- Auto-Brände, Barrikaden
- Pflastersteine
- Peak-Schusswechsel
- Aftermath

✅ **DYNAMIK & VARIATION**
- Events können anders ablaufen (Reputation-abhängig)
- Spieler kann eingreifen
- Konsequenzen bleiben (nächster Tag beeinflusst)

✅ **TECHNISCH SOLIDE**
- Event-Scheduler-System
- Performance-optimiert
- Klare Implementation-Anweisungen

---

**GEBE DIESE DATEI + TEIL 1 + TEIL 2 + QUALITY CONTROL AN GEMINI**

**= KOMPLETTES AAA-GAME MIT LIVE-EVENT-SYSTEM!** 🎮🔥⏰
