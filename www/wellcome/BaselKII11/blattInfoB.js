/* Blatt-Informationen für Einzelseiten. Beispiel:
 * - lagenNr: Nummer in Anführungszeichen ohne Punkt: "5". Wird in der Beschreibung unterhalb des Lagensymbols verwendet: "5. Lage, Sexternio"
 * - lagenSym: Der Name des Bildes des Lagensymbols ohne die Formatangabe/Endung. Bezieht die Bilder aus /hssfaks/Lagensymbole/Einzelseite/[lagenSym].gif
 * - lagenname: Der Fachbegiff der Lage wie "Quinternio". Wird in der Beschreibung unterhalb des Lagensymbols verwendet: "1. Lage, Quinternio"
 * 
 * Getestet werden kann , indem die Webseite komplett neu geladen wird (refresh) und die entsprechende Seite aufgerufen wird
*/
function blattInfo(blatt) {
	switch (blatt) {
		
		case "-3r": lagenNr = ""; lagenSymb = "blind"; lagenName = ""; konkordanz = "Einband vorne aussen";aktBuch =""; break;
		case "-3v": lagenNr = ""; lagenSymb = "blind"; lagenName = ""; konkordanz = "Einband vorne innen";aktBuch =""; break;
		case "-2r": lagenNr = ""; lagenSymb = "blind"; lagenName = ""; konkordanz = "";aktBuch =""; break;
		case "-2v": lagenNr = ""; lagenSymb = "blind"; lagenName = ""; konkordanz = "";aktBuch =""; break;
		case "-1r": lagenNr = ""; lagenSymb = "blind"; lagenName = ""; konkordanz = "";aktBuch =""; break;
		case "-1v": lagenNr = ""; lagenSymb = "blind"; lagenName = ""; konkordanz = "";aktBuch =""; break;
		case "0r": lagenNr = ""; lagenSymb = "blind"; lagenName = ""; konkordanz = "";aktBuch =""; break;
		case "0v": lagenNr = ""; lagenSymb = "blind"; lagenName = ""; konkordanz = "";aktBuch =""; break;
	
		case "1r": lagenNr = "1"; lagenSymb = "L6p_unio_s_quinternio_01r"; lagenName = "Quinternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "1v": lagenNr = "1"; lagenSymb = "L6p_unio_s_quinternio_01v"; lagenName = "Quinternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "2r": lagenNr = "1"; lagenSymb = "L6p_unio_s_quinternio_02r"; lagenName = "Quinternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "2v": lagenNr = "1"; lagenSymb = "L6p_unio_s_quinternio_02v"; lagenName = "Quinternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "3r": lagenNr = "1"; lagenSymb = "L6p_unio_s_quinternio_03r"; lagenName = "Quinternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "3v": lagenNr = "1"; lagenSymb = "L6p_unio_s_quinternio_03v"; lagenName = "Quinternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "4r": lagenNr = "1"; lagenSymb = "L6p_unio_s_quinternio_04r"; lagenName = "Quinternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "4v": lagenNr = "1"; lagenSymb = "L6p_unio_s_quinternio_04v"; lagenName = "Quinternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "5r": lagenNr = "1"; lagenSymb = "L6p_unio_s_quinternio_05r"; lagenName = "Quinternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "5v": lagenNr = "1"; lagenSymb = "L6p_unio_s_quinternio_05v"; lagenName = "Quinternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "6r": lagenNr = "1"; lagenSymb = "L6p_unio_s_quinternio_06r"; lagenName = "Quinternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "6v": lagenNr = "1"; lagenSymb = "L6p_unio_s_quinternio_06v"; lagenName = "Quinternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "7r": lagenNr = "1"; lagenSymb = "L6p_unio_s_quinternio_07r"; lagenName = "Quinternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "7v": lagenNr = "1"; lagenSymb = "L6p_unio_s_quinternio_07v"; lagenName = "Quinternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "8r": lagenNr = "1"; lagenSymb = "L6p_unio_s_quinternio_08r"; lagenName = "Quinternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "8v": lagenNr = "1"; lagenSymb = "L6p_unio_s_quinternio_08v"; lagenName = "Quinternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "9r": lagenNr = "1"; lagenSymb = "L6p_unio_s_quinternio_09r"; lagenName = "Quinternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "9v": lagenNr = "1"; lagenSymb = "L6p_unio_s_quinternio_09v"; lagenName = "Quinternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "10r": lagenNr = "1"; lagenSymb = "L6p_unio_s_quinternio_10r"; lagenName = "Quinternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "10v": lagenNr = "1"; lagenSymb = "L6p_unio_s_quinternio_10v"; lagenName = "Quinternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "11r": lagenNr = "1"; lagenSymb = "L6p_unio_s_quinternio_11r"; lagenName = "Quinternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "11v": lagenNr = "1"; lagenSymb = "L6p_unio_s_quinternio_11v"; lagenName = "Quinternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "12r": lagenNr = "1"; lagenSymb = "L6p_unio_s_quinternio_12r"; lagenName = "Quinternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "12v": lagenNr = "1"; lagenSymb = "L6p_unio_s_quinternio_12v"; lagenName = "Quinternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "13r": lagenNr = "2"; lagenSymb = "L5p_01r"; lagenName = "Quinternio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "13v": lagenNr = "2"; lagenSymb = "L5p_01v"; lagenName = "Quinternio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "14r": lagenNr = "2"; lagenSymb = "L5p_02r"; lagenName = "Quinternio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "14v": lagenNr = "2"; lagenSymb = "L5p_02v"; lagenName = "Quinternio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "15r": lagenNr = "2"; lagenSymb = "L5p_03r"; lagenName = "Quinternio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "15v": lagenNr = "2"; lagenSymb = "L5p_03v"; lagenName = "Quinternio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "16r": lagenNr = "2"; lagenSymb = "L5p_04r"; lagenName = "Quinternio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "16v": lagenNr = "2"; lagenSymb = "L5p_04v"; lagenName = "Quinternio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "17r": lagenNr = "2"; lagenSymb = "L5p_05r"; lagenName = "Quinternio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "17v": lagenNr = "2"; lagenSymb = "L5p_05v"; lagenName = "Quinternio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "18r": lagenNr = "2"; lagenSymb = "L5p_06r"; lagenName = "Quinternio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "18v": lagenNr = "2"; lagenSymb = "L5p_06v"; lagenName = "Quinternio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "19r": lagenNr = "2"; lagenSymb = "L5p_07r"; lagenName = "Quinternio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "19v": lagenNr = "2"; lagenSymb = "L5p_07v"; lagenName = "Quinternio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "20r": lagenNr = "2"; lagenSymb = "L5p_08r"; lagenName = "Quinternio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "20v": lagenNr = "2"; lagenSymb = "L5p_08v"; lagenName = "Quinternio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "21r": lagenNr = "2"; lagenSymb = "L5p_09r"; lagenName = "Quinternio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "21v": lagenNr = "2"; lagenSymb = "L5p_09v"; lagenName = "Quinternio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "22r": lagenNr = "2"; lagenSymb = "L5p_10r"; lagenName = "Quinternio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "22v": lagenNr = "2"; lagenSymb = "L5p_10v"; lagenName = "Quinternio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "23r": lagenNr = "3"; lagenSymb = "L7p_w1_12_sext_s_unio_01r"; lagenName = "Sexternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "23v": lagenNr = "3"; lagenSymb = "L7p_w1_12_sext_s_unio_01v"; lagenName = "Sexternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "24r": lagenNr = "3"; lagenSymb = "L7p_w1_12_sext_s_unio_02r"; lagenName = "Sexternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "24v": lagenNr = "3"; lagenSymb = "L7p_w1_12_sext_s_unio_02v"; lagenName = "Sexternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "25r": lagenNr = "3"; lagenSymb = "L7p_w1_12_sext_s_unio_03r"; lagenName = "Sexternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "25v": lagenNr = "3"; lagenSymb = "L7p_w1_12_sext_s_unio_03v"; lagenName = "Sexternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "26r": lagenNr = "3"; lagenSymb = "L7p_w1_12_sext_s_unio_04r"; lagenName = "Sexternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "26v": lagenNr = "3"; lagenSymb = "L7p_w1_12_sext_s_unio_04v"; lagenName = "Sexternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "27r": lagenNr = "3"; lagenSymb = "L7p_w1_12_sext_s_unio_05r"; lagenName = "Sexternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "27v": lagenNr = "3"; lagenSymb = "L7p_w1_12_sext_s_unio_05v"; lagenName = "Sexternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "28r": lagenNr = "3"; lagenSymb = "L7p_w1_12_sext_s_unio_06r"; lagenName = "Sexternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "28v": lagenNr = "3"; lagenSymb = "L7p_w1_12_sext_s_unio_06v"; lagenName = "Sexternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "29r": lagenNr = "3"; lagenSymb = "L7p_w1_12_sext_s_unio_07r"; lagenName = "Sexternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "29v": lagenNr = "3"; lagenSymb = "L7p_w1_12_sext_s_unio_07v"; lagenName = "Sexternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "30r": lagenNr = "3"; lagenSymb = "L7p_w1_12_sext_s_unio_08r"; lagenName = "Sexternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "30v": lagenNr = "3"; lagenSymb = "L7p_w1_12_sext_s_unio_08v"; lagenName = "Sexternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "31r": lagenNr = "3"; lagenSymb = "L7p_w1_12_sext_s_unio_09r"; lagenName = "Sexternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "31v": lagenNr = "3"; lagenSymb = "L7p_w1_12_sext_s_unio_09v"; lagenName = "Sexternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "32r": lagenNr = "3"; lagenSymb = "L7p_w1_12_sext_s_unio_10r"; lagenName = "Sexternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "32v": lagenNr = "3"; lagenSymb = "L7p_w1_12_sext_s_unio_10v"; lagenName = "Sexternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "33r": lagenNr = "3"; lagenSymb = "L7p_w1_12_sext_s_unio_11r"; lagenName = "Sexternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "33v": lagenNr = "3"; lagenSymb = "L7p_w1_12_sext_s_unio_11v"; lagenName = "Sexternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "34r": lagenNr = "3"; lagenSymb = "L7p_w1_12_sext_s_unio_12r"; lagenName = "Sexternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "34v": lagenNr = "3"; lagenSymb = "L7p_w1_12_sext_s_unio_12v"; lagenName = "Sexternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "35r": lagenNr = "3"; lagenSymb = "L7p_w1_12_sext_s_unio_13r"; lagenName = "Sexternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "35v": lagenNr = "3"; lagenSymb = "L7p_w1_12_sext_s_unio_13v"; lagenName = "Sexternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "36r": lagenNr = "3"; lagenSymb = "L7p_w1_12_sext_s_unio_14r"; lagenName = "Sexternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "36v": lagenNr = "3"; lagenSymb = "L7p_w1_12_sext_s_unio_14v"; lagenName = "Sexternio + Unio"; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "37r": lagenNr = ""; lagenSymb = "blind"; lagenName = ""; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "37v": lagenNr = ""; lagenSymb = "blind"; lagenName = ""; konkordanz = "Bl. 1r–33v";aktBuch = 0; break;
		case "38r": lagenNr = ""; lagenSymb = "blind"; lagenName = ""; konkordanz = "Einband hinten innen";aktBuch = 0; break;
		case "38v": lagenNr = ""; lagenSymb = "blind"; lagenName = ""; konkordanz = "Einband hinten aussen";aktBuch = 0; break;
		case "39r": lagenNr = ""; lagenSymb = "blind"; lagenName = ""; konkordanz = "Einband Rücken";aktBuch = 0; break;


			return;
	}
}