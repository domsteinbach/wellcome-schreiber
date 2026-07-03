/* Blatt-Informationen für Einzelseiten. Beispiel:
 * - lagenNr: Nummer in Anführungszeichen ohne Punkt: "5". Wird in der Beschreibung unterhalb des Lagensymbols verwendet: "5. Lage, Sexternio"
 * - lagenSym: Der Name des Bildes des Lagensymbols ohne die Formatangabe/Endung. Bezieht die Bilder aus /hssfaks/Lagensymbole/Einzelseite/[lagenSym].gif
 * - lagenname: Der Fachbegiff der Lage wie "Quinternio". Wird in der Beschreibung unterhalb des Lagensymbols verwendet: "1. Lage, Quinternio"
 * 
 * Getestet werden kann , indem die Webseite komplett neu geladen wird (refresh) und die entsprechende Seite aufgerufen wird
*/
function blattInfo(blatt) {
	switch(blatt) {
		
		case "0v": lagenNr=""; lagenSymb="blind"; lagenName=""; konkordanz=""; schreiber=""; aktBuch =""; alt = ""; break;
		case "1r": lagenNr="1"; lagenSymb="L6p_w4_1_2_3_4_05r"; lagenName="Sexternio – 4 Bll."; konkordanz="Bl. 1r–18r"; schreiber=""; aktBuch = 0; alt = ""; break;
		case "1v": lagenNr="1"; lagenSymb="L6p_w4_1_2_3_4_05v"; lagenName="Sexternio – 4 Bll."; konkordanz="Bl. 1r–18r"; schreiber=""; aktBuch = 0; alt = ""; break;
		case "2r": lagenNr="1"; lagenSymb="L6p_w4_1_2_3_4_06r"; lagenName="Sexternio – 4 Bll."; konkordanz="Bl. 1r–18r"; schreiber=""; aktBuch = 0; alt = ""; break;
		case "2v": lagenNr="1"; lagenSymb="L6p_w4_1_2_3_4_06v"; lagenName="Sexternio – 4 Bll."; konkordanz="Bl. 1r–18r"; schreiber=""; aktBuch = 0; alt = ""; break;
		case "3r": lagenNr="1"; lagenSymb="L6p_w4_1_2_3_4_07r"; lagenName="Sexternio – 4 Bll."; konkordanz="Bl. 1r–18r"; schreiber=""; aktBuch = 0; alt = ""; break;
		case "3v": lagenNr="1"; lagenSymb="L6p_w4_1_2_3_4_07v"; lagenName="Sexternio – 4 Bll."; konkordanz="Bl. 1r–18r"; schreiber=""; aktBuch = 0; alt = ""; break;
		case "4r": lagenNr="1"; lagenSymb="L6p_w4_1_2_3_4_08r"; lagenName="Sexternio – 4 Bll."; konkordanz="Bl. 1r–18r"; schreiber=""; aktBuch = 0; alt = ""; break;
		case "4v": lagenNr="1"; lagenSymb="L6p_w4_1_2_3_4_08v"; lagenName="Sexternio – 4 Bll."; konkordanz="Bl. 1r–18r"; schreiber=""; aktBuch = 0; alt = ""; break;
		case "5r": lagenNr="1"; lagenSymb="L6p_w4_1_2_3_4_09r"; lagenName="Sexternio – 4 Bll."; konkordanz="Bl. 1r–18r"; schreiber=""; aktBuch = 0; alt = ""; break;
		case "5v": lagenNr="1"; lagenSymb="L6p_w4_1_2_3_4_09v"; lagenName="Sexternio – 4 Bll."; konkordanz="Bl. 1r–18r"; schreiber=""; aktBuch = 0; alt = ""; break;
		case "6r": lagenNr="1"; lagenSymb="L6p_w4_1_2_3_4_10r"; lagenName="Sexternio – 4 Bll."; konkordanz="Bl. 1r–18r"; schreiber=""; aktBuch = 0; alt = ""; break;
		case "6v": lagenNr="1"; lagenSymb="L6p_w4_1_2_3_4_10v"; lagenName="Sexternio – 4 Bll."; konkordanz="Bl. 1r–18r"; schreiber=""; aktBuch = 0; alt = ""; break;
		case "7r": lagenNr="1"; lagenSymb="L6p_w4_1_2_3_4_11r"; lagenName="Sexternio – 4 Bll."; konkordanz="Bl. 1r–18r"; schreiber=""; aktBuch = 0; alt = ""; break;
		case "7v": lagenNr="1"; lagenSymb="L6p_w4_1_2_3_4_11v"; lagenName="Sexternio – 4 Bll."; konkordanz="Bl. 1r–18r"; schreiber=""; aktBuch = 0; alt = ""; break;
		case "8r": lagenNr="1"; lagenSymb="L6p_w4_1_2_3_4_12r"; lagenName="Sexternio – 4 Bll."; konkordanz="Bl. 1r–18r"; schreiber=""; aktBuch = 0; alt = ""; break;
		case "8v": lagenNr="1"; lagenSymb="L6p_w4_1_2_3_4_12v"; lagenName="Sexternio – 4 Bll."; konkordanz="Bl. 1r–18r"; schreiber=""; aktBuch = 0; alt = ""; break;
		case "9r": lagenNr="2"; lagenSymb="L3p_01r"; lagenName="Ternio"; konkordanz="Bl. 1r–18r"; schreiber=""; aktBuch = 0; alt = ""; break;
		case "9v": lagenNr="2"; lagenSymb="L3p_01v"; lagenName="Ternio"; konkordanz="Bl. 1r–18r"; schreiber=""; aktBuch = 0; alt = ""; break;
		case "10r": lagenNr="2"; lagenSymb="L3p_02r"; lagenName="Ternio"; konkordanz="Bl. 1r–18r"; schreiber=""; aktBuch = 0; alt = ""; break;
		case "10v": lagenNr="2"; lagenSymb="L3p_02v"; lagenName="Ternio"; konkordanz="Bl. 1r–18r"; schreiber=""; aktBuch = 0; alt = ""; break;
		case "11r": lagenNr="2"; lagenSymb="L3p_03r"; lagenName="Ternio"; konkordanz="Bl. 1r–18r"; schreiber=""; aktBuch = 0; alt = ""; break;
		case "11v": lagenNr="2"; lagenSymb="L3p_03v"; lagenName="Ternio"; konkordanz="Bl. 1r–18r"; schreiber=""; aktBuch = 0; alt = ""; break;
		case "12r": lagenNr="2"; lagenSymb="L3p_04r"; lagenName="Ternio"; konkordanz="Bl. 1r–18r"; schreiber=""; aktBuch = 0; alt = ""; break;
		case "12v": lagenNr="2"; lagenSymb="L3p_04v"; lagenName="Ternio"; konkordanz="Bl. 1r–18r"; schreiber=""; aktBuch = 0; alt = ""; break;
		case "13r": lagenNr="2"; lagenSymb="L3p_05r"; lagenName="Ternio"; konkordanz="Bl. 1r–18r"; schreiber=""; aktBuch = 0; alt = ""; break;
		case "13v": lagenNr="2"; lagenSymb="L3p_05v"; lagenName="Ternio"; konkordanz="Bl. 1r–18r"; schreiber=""; aktBuch = 0; alt = ""; break;
		case "14r": lagenNr="2"; lagenSymb="L3p_06r"; lagenName="Ternio"; konkordanz="Bl. 1r–18r"; schreiber=""; aktBuch = 0; alt = ""; break;
		case "14v": lagenNr="2"; lagenSymb="L3p_06v"; lagenName="Ternio"; konkordanz="Bl. 1r–18r"; schreiber=""; aktBuch = 0; alt = ""; break;
		case "15r": lagenNr="3"; lagenSymb="L1p_01r"; lagenName="Unio"; konkordanz="Bl. 1r–18r"; schreiber=""; aktBuch = 0; alt = ""; break;
		case "15v": lagenNr="3"; lagenSymb="L1p_01v"; lagenName="Unio"; konkordanz="Bl. 1r–18r"; schreiber=""; aktBuch = 0; alt = ""; break;
		case "16r": lagenNr="3"; lagenSymb="L1p_02r"; lagenName="Unio"; konkordanz="Bl. 1r–18r"; schreiber=""; aktBuch = 0; alt = ""; break;
		case "16v": lagenNr="3"; lagenSymb="L1p_02v"; lagenName="Unio"; konkordanz="Bl. 1r–18r"; schreiber=""; aktBuch = 0; alt = ""; break;
		case "17r": lagenNr="4"; lagenSymb="L1p_01r"; lagenName="Unio"; konkordanz="Bl. 1r–18r"; schreiber=""; aktBuch = 0; alt = ""; break;
		case "17v": lagenNr="4"; lagenSymb="L1p_01v"; lagenName="Unio"; konkordanz="Bl. 1r–18r"; schreiber=""; aktBuch = 0; alt = ""; break;
		case "18r": lagenNr="4"; lagenSymb="L1p_02r"; lagenName="Unio"; konkordanz="Bl. 1r–18r"; schreiber=""; aktBuch = 0; alt = ""; break;
		return;
	}
}