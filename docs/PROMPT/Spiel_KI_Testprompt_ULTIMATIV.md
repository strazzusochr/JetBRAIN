# Universeller KI-Testprompt zur vollständigen 100%-Validierung eines Spiels

## Grundprinzip
Dieser Prompt verpflichtet die KI dazu, das gesamte Spiel **vom Projektstart bis zum aktuellen Entwicklungsstand** vollständig, objektiv und beweisbar zu überprüfen.  
Ziel ist es, **lückenlos nachzuweisen**, dass **alle geplanten, implementierten und erzeugten Inhalte** exakt nach Plan umgesetzt wurden und fehlerfrei funktionieren.

**Wichtig:**  
Alles, was **nicht zu 100 % überprüfbar, reproduzierbar und belegbar ist**, gilt als **nicht korrekt implementiert**.  
Die KI hat den Testprozess **automatisch so lange zu wiederholen**, bis entweder:
- 100 % aller Prüfungen bestanden sind  
oder  
- eindeutig dokumentiert ist, was nicht beweisbar funktioniert.

---

## 1. Vollständigkeitsprüfung des Projekts

### 1.1 Abgleich Soll vs. Ist
- Vergleiche alle:
  - Design-Dokumente
  - Feature-Listen
  - Aufgaben / TODOs
  - Kommentare und Planungsvorgaben
- **Jedes geplante Element muss existieren**
- **Jedes existierende Element muss geplant gewesen sein**
- Abweichungen sind vollständig zu dokumentieren

---

## 2. Funktionale Tests

### 2.1 Unit-Tests
- Teste jede einzelne Funktion, Methode, Klasse und jedes Script isoliert
- Prüfe:
  - korrekte Rückgabewerte
  - Fehlerbehandlung
  - Grenz- und Extremfälle
- Keine Funktion darf ungetestet bleiben

### 2.2 Integrationstests
- Überprüfe das Zusammenspiel:
  - Gameplay-Systeme
  - KI-Systeme
  - Physik
  - Audio
  - UI
- Stelle sicher, dass alle Abhängigkeiten korrekt funktionieren

### 2.3 End-to-End-Tests
- Simuliere vollständige Spielabläufe:
  - vom Startbildschirm
  - bis zu allen möglichen Endzuständen
- Teste:
  - Speicherstände
  - Ladeprozesse
  - Neustarts
  - Abbrüche
- Kein Spielzustand darf zu Fehlern führen

---

## 3. KI-gestützte Tests (verpflichtend)

- Setze autonome KI-Agenten ein, um:
  - unerwartetes Spielerhalten zu simulieren
  - Extrem- und Stresssituationen zu erzeugen
  - unlogische oder kreative Spielweisen zu testen
- Alle KI-Tests müssen:
  - reproduzierbar sein
  - automatisch wiederholt werden
- Tests laufen so lange, bis **keine neuen Fehler mehr auftreten**

---

## 4. Grafik-, Welt- und Objektprüfung (kritisch)

### 4.1 Existenz & Einbindung aller Grafiken
- Überprüfe **jede erstellte Grafik und jedes Modell**, ob es:
  - im Spiel enthalten ist
  - korrekt geladen wird
  - tatsächlich verwendet wird
- Dies umfasst unter anderem:
  - Fahrzeuge (z. B. Autos)
  - NPCs
  - Gebäude
  - Vegetation
  - Requisiten
  - UI-Grafiken
  - Effekte
- **Nicht verwendete Assets sind als Fehler zu markieren**

### 4.2 Einzelobjektprüfung (für jedes Objekt)
Für **jedes einzelne Objekt in der Spielwelt**:
- Name / ID
- Typ (NPC, Fahrzeug, Umweltobjekt, UI etc.)
- Position, Rotation, Skalierung
- Materialien & Texturen
- Shader
- Beleuchtung
- Sichtbarkeit in allen relevanten Ansichten
- Reaktion auf Spielzustände

### 4.3 Polygon- & Geometrieanalyse
- Ermittle für **jedes einzelne generierte oder importierte Objekt**:
  - exakte Polygonanzahl
  - Mesh-Struktur
  - LOD-Stufen (falls vorhanden)
- Stelle die Polygonanzahl **transparent und tabellarisch** dar
- Vergleiche sie mit:
  - Performance-Zielen
  - Design-Vorgaben
- Nicht erklärbare Abweichungen gelten als Fehler

---

## 5. Performance- & Stabilitätstests

- Teste:
  - Framerate
  - Speicherverbrauch
  - Ladezeiten
  - Streaming-Verhalten der Welt
- Simuliere:
  - lange Spielzeiten
  - hohe Objektanzahl
  - maximale KI-Aktivität
- Kein Performanceproblem darf unbegründet akzeptiert werden

---

## 6. Beweisführung (ohne Ausnahme)

Für **jedes getestete Element**:
- Beschreibung des Tests
- Testmethode
- Erwartetes Ergebnis
- Tatsächliches Ergebnis
- Reproduzierbarkeit
- Beweise:
  - Logs
  - Screenshots
  - Messwerte
  - Testläufe

**Kann ein Punkt nicht eindeutig bewiesen werden, gilt er als nicht bestanden.**

---

## 7. Automatische Wiederholung & Selbstkorrektur

- Die KI:
  - analysiert Testergebnisse
  - identifiziert Fehler
  - wiederholt Tests automatisch
- Der Prozess endet **erst**, wenn:
  - 100 % aller Punkte bestanden sind
  - oder eine vollständige Fehlerliste vorliegt

---

## 8. Abschluss- & Nachweisdokument (Pflicht)

Erstelle ein **separates Abschlussdokument**, das enthält:
- vollständige Testübersicht
- Liste aller geprüften Objekte (inkl. Polygonanzahl)
- Status jedes einzelnen Tests
- alle Beweise
- offene oder nicht lösbare Punkte
- eine eindeutige Aussage:

**„Das Spiel ist / ist nicht zu 100 % nach Plan implementiert und funktionsfähig.“**

Ohne dieses Dokument gilt der gesamte Prüfprozess als **nicht abgeschlossen**.
