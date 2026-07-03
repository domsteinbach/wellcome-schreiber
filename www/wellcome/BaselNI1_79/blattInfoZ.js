/* Blatt-Informationen für Einzelseiten. Beispiel:
 * - lagenNr: Nummer in Anführungszeichen ohne Punkt: "5". Wird in der Beschreibung unterhalb des Lagensymbols verwendet: "5. Lage, Sexternio"
 * - lagenSym: Der Name des Bildes des Lagensymbols ohne die Formatangabe/Endung. Bezieht die Bilder aus /hssfaks/Lagensymbole/Einzelseite/[lagenSym].gif
 * - lagenname: Der Fachbegiff der Lage wie "Quinternio". Wird in der Beschreibung unterhalb des Lagensymbols verwendet: "1. Lage, Quinternio"
 * 
 * Getestet werden kann , indem die Webseite komplett neu geladen wird (refresh) und die entsprechende Seite aufgerufen wird
*/
function blattInfo(blatt) {
	switch(blatt) {
		case "0r": lagenNr=""; lagenSymb="blind"; lagenName=""; konkordanz=""; schreiber=""; aktBuch = 0; alt = ""; break;
		case "0v": lagenNr=""; lagenSymb="blind"; lagenName=""; konkordanz=""; schreiber=""; aktBuch = 0; alt = ""; break;
		case "1r": lagenNr=""; lagenSymb="blind"; lagenName=""; konkordanz=""; schreiber=""; aktBuch = 0; alt = ""; break;
		case "1v": lagenNr=""; lagenSymb="blind"; lagenName=""; konkordanz=""; schreiber=""; aktBuch = 0; alt = ""; break;
		return;
	}
}