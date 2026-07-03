/* Blatt-Informationen für Einzelseiten. Beispiel:
 * - lagenNr: Nummer in Anführungszeichen ohne Punkt: "5". Wird in der Beschreibung unterhalb des Lagensymbols verwendet: "5. Lage, Sexternio"
 * - lagenSym: Der Name des Bildes des Lagensymbols ohne die Formatangabe/Endung. Bezieht die Bilder aus /hssfaks/Lagensymbole/Einzelseite/[lagenSym].gif
 * - lagenname: Der Fachbegiff der Lage wie "Quinternio". Wird in der Beschreibung unterhalb des Lagensymbols verwendet: "1. Lage, Quinternio"
 * 
 * Getestet werden kann , indem die Webseite komplett neu geladen wird (refresh) und die entsprechende Seite aufgerufen wird
*/
function blattInfo(blatt) {
	switch(blatt) {
		/*case "-3r": lagenNr=""; lagenSymb="blind"; lagenName=""; konkordanz="";aktBuch = 0; alt = ""; break;
		case "-3v": lagenNr=""; lagenSymb="blind"; lagenName=""; konkordanz="";aktBuch = 0; alt = ""; break;
		case "-2r": lagenNr="1"; lagenSymb="blind"; lagenName="Oktonio – 1 Bl."; konkordanz="";aktBuch = 0; alt = ""; break;
		*/
		case "-2r": lagenNr="1"; lagenSymb="blind"; lagenName=""; konkordanz="";aktBuch = 0; alt = ""; break;
		case "-2v": lagenNr="1"; lagenSymb="blind"; lagenName=""; konkordanz="";aktBuch = 0; alt = ""; break;
		case "-1r": lagenNr="1"; lagenSymb="L8p_w1_16_01r"; lagenName="Oktonio – 1 Bl."; konkordanz="";aktBuch = 0; alt = ""; break;
		case "-1v": lagenNr="1"; lagenSymb="L8p_w1_16_01v"; lagenName="Oktonio – 1 Bl."; konkordanz="";aktBuch = 0; alt = ""; break;

    	case "0r": lagenNr="1"; lagenSymb="L8p_w1_16_02r"; lagenName="Oktonio – 1 Bl."; konkordanz="";aktBuch = 0; alt = ""; break;
		case "0v": lagenNr="1"; lagenSymb="L8p_w1_16_02v"; lagenName="Oktonio – 1 Bl."; konkordanz="";aktBuch = 0; alt = ""; break;
		case "1r": lagenNr="1"; lagenSymb="L8p_w1_16_03r"; lagenName="Oktonio – 1 Bl."; konkordanz="Bl. 1r";aktBuch = 1; alt = ""; break;
		case "1v": lagenNr="1"; lagenSymb="L8p_w1_16_03v"; lagenName="Oktonio – 1 Bl."; konkordanz="Bl. 1v–2r";aktBuch = 2; alt = ""; break;
		case "2r": lagenNr="1"; lagenSymb="L8p_w1_16_04r"; lagenName="Oktonio – 1 Bl."; konkordanz="Bl. 1v–2r";aktBuch = 2; alt = ""; break;
		case "2v": lagenNr="1"; lagenSymb="L8p_w1_16_04v"; lagenName="Oktonio – 1 Bl."; konkordanz="Bl. 2v–4r";aktBuch = 3; alt = ""; break;
		case "3r": lagenNr="1"; lagenSymb="L8p_w1_16_05r"; lagenName="Oktonio – 1 Bl."; konkordanz="Bl. 2v–4r";aktBuch = 3; alt = ""; break;
		case "3v": lagenNr="1"; lagenSymb="L8p_w1_16_05v"; lagenName="Oktonio – 1 Bl."; konkordanz="Bl. 2v–4r";aktBuch = 3; alt = ""; break;
		case "4r": lagenNr="1"; lagenSymb="L8p_w1_16_06r"; lagenName="Oktonio – 1 Bl."; konkordanz="Bl. 2v–4r";aktBuch = 3; alt = ""; break;
		case "4v": lagenNr="1"; lagenSymb="L8p_w1_16_06v"; lagenName="Oktonio – 1 Bl."; konkordanz="Bl. 4v–7r";aktBuch = 4; alt = ""; break;
		case "5r": lagenNr="1"; lagenSymb="L8p_w1_16_07r"; lagenName="Oktonio – 1 Bl."; konkordanz="Bl. 4v–7r";aktBuch = 4; alt = ""; break;
		case "5v": lagenNr="1"; lagenSymb="L8p_w1_16_07v"; lagenName="Oktonio – 1 Bl."; konkordanz="Bl. 4v–7r";aktBuch = 4; alt = ""; break;
		case "6r": lagenNr="1"; lagenSymb="L8p_w1_16_08r"; lagenName="Oktonio – 1 Bl."; konkordanz="Bl. 4v–7r";aktBuch = 4; alt = ""; break;
		case "6v": lagenNr="1"; lagenSymb="L8p_w1_16_08v"; lagenName="Oktonio – 1 Bl."; konkordanz="Bl. 4v–7r";aktBuch = 4; alt = ""; break;
		case "7r": lagenNr="1"; lagenSymb="L8p_w1_16_09r"; lagenName="Oktonio – 1 Bl."; konkordanz="Bl. 4v–7r";aktBuch = 4; alt = ""; break;
		case "7v": lagenNr="1"; lagenSymb="L8p_w1_16_09v"; lagenName="Oktonio – 1 Bl."; konkordanz="Bl. 7v–13r";aktBuch = 5; alt = ""; break;
		case "8r": lagenNr="1"; lagenSymb="L8p_w1_16_10r"; lagenName="Oktonio – 1 Bl."; konkordanz="Bl. 7v–13r";aktBuch = 5; alt = ""; break;
		case "8v": lagenNr="1"; lagenSymb="L8p_w1_16_10v"; lagenName="Oktonio – 1 Bl."; konkordanz="Bl. 7v–13r";aktBuch = 5; alt = ""; break;
		case "9r": lagenNr="1"; lagenSymb="L8p_w1_16_11r"; lagenName="Oktonio – 1 Bl."; konkordanz="Bl. 7v–13r";aktBuch = 5; alt = ""; break;
		case "9v": lagenNr="1"; lagenSymb="L8p_w1_16_11v"; lagenName="Oktonio – 1 Bl."; konkordanz="Bl. 7v–13r";aktBuch = 5; alt = ""; break;
		case "10r": lagenNr="1"; lagenSymb="L8p_w1_16_12r"; lagenName="Oktonio – 1 Bl."; konkordanz="Bl. 7v–13r";aktBuch = 5; alt = ""; break;
		case "10v": lagenNr="1"; lagenSymb="L8p_w1_16_12v"; lagenName="Oktonio – 1 Bl."; konkordanz="Bl. 7v–13r";aktBuch = 5; alt = ""; break;
		case "11r": lagenNr="1"; lagenSymb="L8p_w1_16_13r"; lagenName="Oktonio – 1 Bl."; konkordanz="Bl. 7v–13r";aktBuch = 5; alt = ""; break;
		case "11v": lagenNr="1"; lagenSymb="L8p_w1_16_13v"; lagenName="Oktonio – 1 Bl."; konkordanz="Bl. 7v–13r";aktBuch = 5; alt = ""; break;
		case "12r": lagenNr="1"; lagenSymb="L8p_w1_16_14r"; lagenName="Oktonio – 1 Bl."; konkordanz="Bl. 7v–13r";aktBuch = 5; alt = ""; break;
		case "12v": lagenNr="1"; lagenSymb="L8p_w1_16_14v"; lagenName="Oktonio – 1 Bl."; konkordanz="Bl. 7v–13r";aktBuch = 5; alt = ""; break;
		case "13r": lagenNr="1"; lagenSymb="L8p_w1_16_15r"; lagenName="Oktonio – 1 Bl."; konkordanz="Bl. 7v–13r";aktBuch = 5; alt = ""; break;
		case "13v": lagenNr="1"; lagenSymb="L8p_w1_16_15v"; lagenName="Oktonio – 1 Bl."; konkordanz="Bl. 13v–15r";aktBuch = 6; alt = ""; break;
		case "14r": lagenNr="2"; lagenSymb="L7p_unio_pg_sext_01r"; lagenName="Unio + Sexternio"; konkordanz="Bl. 13v–15r";aktBuch = 6; alt = ""; break;
		case "14v": lagenNr="2"; lagenSymb="L7p_unio_pg_sext_01v"; lagenName="Unio + Sexternio"; konkordanz="Bl. 13v–15r";aktBuch = 6; alt = ""; break;
		case "15r": lagenNr="2"; lagenSymb="L7p_unio_pg_sext_02r"; lagenName="Unio + Sexternio"; konkordanz="Bl. 13v–15r";aktBuch = 6; alt = ""; break;
		case "15v": lagenNr="2"; lagenSymb="L7p_unio_pg_sext_02v"; lagenName="Unio + Sexternio"; konkordanz="Bl. 15v–26r";aktBuch = 7; alt = ""; break;
		case "16r": lagenNr="2"; lagenSymb="L7p_unio_pg_sext_03r"; lagenName="Unio + Sexternio"; konkordanz="Bl. 15v–26r";aktBuch = 7; alt = ""; break;
		case "16v": lagenNr="2"; lagenSymb="L7p_unio_pg_sext_03v"; lagenName="Unio + Sexternio"; konkordanz="Bl. 15v–26r";aktBuch = 7; alt = ""; break;
		case "17r": lagenNr="2"; lagenSymb="L7p_unio_pg_sext_04r"; lagenName="Unio + Sexternio"; konkordanz="Bl. 15v–26r";aktBuch = 7; alt = ""; break;
		case "17v": lagenNr="2"; lagenSymb="L7p_unio_pg_sext_04v"; lagenName="Unio + Sexternio"; konkordanz="Bl. 15v–26r";aktBuch = 7; alt = ""; break;
		case "18r": lagenNr="2"; lagenSymb="L7p_unio_pg_sext_05r"; lagenName="Unio + Sexternio"; konkordanz="Bl. 15v–26r";aktBuch = 7; alt = ""; break;
		case "18v": lagenNr="2"; lagenSymb="L7p_unio_pg_sext_05v"; lagenName="Unio + Sexternio"; konkordanz="Bl. 15v–26r";aktBuch = 7; alt = ""; break;
		case "19r": lagenNr="2"; lagenSymb="L7p_unio_pg_sext_06r"; lagenName="Unio + Sexternio"; konkordanz="Bl. 15v–26r";aktBuch = 7; alt = ""; break;
		case "19v": lagenNr="2"; lagenSymb="L7p_unio_pg_sext_06v"; lagenName="Unio + Sexternio"; konkordanz="Bl. 15v–26r";aktBuch = 7; alt = ""; break;
		case "20r": lagenNr="2"; lagenSymb="L7p_unio_pg_sext_07r"; lagenName="Unio + Sexternio"; konkordanz="Bl. 15v–26r";aktBuch = 7; alt = ""; break;
		case "20v": lagenNr="2"; lagenSymb="L7p_unio_pg_sext_07v"; lagenName="Unio + Sexternio"; konkordanz="Bl. 15v–26r";aktBuch = 7; alt = ""; break;
		case "21r": lagenNr="2"; lagenSymb="L7p_unio_pg_sext_08r"; lagenName="Unio + Sexternio"; konkordanz="Bl. 15v–26r";aktBuch = 7; alt = ""; break;
		case "21v": lagenNr="2"; lagenSymb="L7p_unio_pg_sext_08v"; lagenName="Unio + Sexternio"; konkordanz="Bl. 15v–26r";aktBuch = 7; alt = ""; break;
		case "22r": lagenNr="2"; lagenSymb="L7p_unio_pg_sext_09r"; lagenName="Unio + Sexternio"; konkordanz="Bl. 15v–26r";aktBuch = 7; alt = ""; break;
		case "22v": lagenNr="2"; lagenSymb="L7p_unio_pg_sext_09v"; lagenName="Unio + Sexternio"; konkordanz="Bl. 15v–26r";aktBuch = 7; alt = ""; break;
		case "23r": lagenNr="2"; lagenSymb="L7p_unio_pg_sext_10r"; lagenName="Unio + Sexternio"; konkordanz="Bl. 15v–26r";aktBuch = 7; alt = ""; break;
		case "23v": lagenNr="2"; lagenSymb="L7p_unio_pg_sext_10v"; lagenName="Unio + Sexternio"; konkordanz="Bl. 15v–26r";aktBuch = 7; alt = ""; break;
		case "24r": lagenNr="2"; lagenSymb="L7p_unio_pg_sext_11r"; lagenName="Unio + Sexternio"; konkordanz="Bl. 15v–26r";aktBuch = 7; alt = ""; break;
		case "24v": lagenNr="2"; lagenSymb="L7p_unio_pg_sext_11v"; lagenName="Unio + Sexternio"; konkordanz="Bl. 15v–26r";aktBuch = 7; alt = ""; break;
		case "25r": lagenNr="2"; lagenSymb="L7p_unio_pg_sext_12r"; lagenName="Unio + Sexternio"; konkordanz="Bl. 15v–26r";aktBuch = 7; alt = ""; break;
		case "25v": lagenNr="2"; lagenSymb="L7p_unio_pg_sext_12v"; lagenName="Unio + Sexternio"; konkordanz="Bl. 15v–26r";aktBuch = 7; alt = ""; break;
		case "26r": lagenNr="2"; lagenSymb="L7p_unio_pg_sext_13r"; lagenName="Unio + Sexternio"; konkordanz="Bl. 15v–26r";aktBuch = 7; alt = ""; break;
		case "26v": lagenNr="2"; lagenSymb="L7p_unio_pg_sext_13v"; lagenName="Unio + Sexternio"; konkordanz="Bl. 26v–27r";aktBuch = 8; alt = ""; break;
		case "27r": lagenNr="2"; lagenSymb="L7p_unio_pg_sext_14r"; lagenName="Unio + Sexternio"; konkordanz="Bl. 26v–27r";aktBuch = 8; alt = ""; break;
		case "27v": lagenNr="2"; lagenSymb="L7p_unio_pg_sext_14v"; lagenName="Unio + Sexternio"; konkordanz="Bl. 27v";aktBuch = 9; alt = ""; break;
		case "28r": lagenNr="3"; lagenSymb="L5p_01r"; lagenName="Quinternio"; konkordanz="Bl. 28r–30r";aktBuch = 10; alt = ""; break;
		case "28v": lagenNr="3"; lagenSymb="L5p_01v"; lagenName="Quinternio"; konkordanz="Bl. 28r–30r";aktBuch = 10; alt = ""; break;
		case "29r": lagenNr="3"; lagenSymb="L5p_02r"; lagenName="Quinternio"; konkordanz="Bl. 28r–30r";aktBuch = 10; alt = ""; break;
		case "29v": lagenNr="3"; lagenSymb="L5p_02v"; lagenName="Quinternio"; konkordanz="Bl. 28r–30r";aktBuch = 10; alt = ""; break;
		case "30r": lagenNr="3"; lagenSymb="L5p_03r"; lagenName="Quinternio"; konkordanz="Bl. 28r–30r";aktBuch = 10; alt = ""; break;
		case "30v": lagenNr="3"; lagenSymb="L5p_03v"; lagenName="Quinternio"; konkordanz="Bl. 30v–32r";aktBuch = 11; alt = ""; break;
		case "31r": lagenNr="3"; lagenSymb="L5p_04r"; lagenName="Quinternio"; konkordanz="Bl. 30v–32r";aktBuch = 11; alt = ""; break;
		case "31v": lagenNr="3"; lagenSymb="L5p_04v"; lagenName="Quinternio"; konkordanz="Bl. 30v–32r";aktBuch = 11; alt = ""; break;
		case "32r": lagenNr="3"; lagenSymb="L5p_05r"; lagenName="Quinternio"; konkordanz="Bl. 30v–32r";aktBuch = 11; alt = ""; break;
		case "32v": lagenNr="3"; lagenSymb="L5p_05v"; lagenName="Quinternio"; konkordanz="Bl. 32v–35r";aktBuch = 12; alt = ""; break;
		case "33r": lagenNr="3"; lagenSymb="L5p_06r"; lagenName="Quinternio"; konkordanz="Bl. 32v–35r";aktBuch = 12; alt = ""; break;
		case "33v": lagenNr="3"; lagenSymb="L5p_06v"; lagenName="Quinternio"; konkordanz="Bl. 32v–35r";aktBuch = 12; alt = ""; break;
		case "34r": lagenNr="3"; lagenSymb="L5p_07r"; lagenName="Quinternio"; konkordanz="Bl. 32v–35r";aktBuch = 12; alt = ""; break;
		case "34v": lagenNr="3"; lagenSymb="L5p_07v"; lagenName="Quinternio"; konkordanz="Bl. 32v–35r";aktBuch = 12; alt = ""; break;
		case "35r": lagenNr="3"; lagenSymb="L5p_08r"; lagenName="Quinternio"; konkordanz="Bl. 32v–35r";aktBuch = 12; alt = ""; break;
		case "35v": lagenNr="3"; lagenSymb="L5p_08v"; lagenName="Quinternio"; konkordanz="Bl. 35v–40r";aktBuch = 13; alt = ""; break;
		case "36r": lagenNr="3"; lagenSymb="L5p_09r"; lagenName="Quinternio"; konkordanz="Bl. 35v–40r";aktBuch = 13; alt = ""; break;
		case "36v": lagenNr="3"; lagenSymb="L5p_09v"; lagenName="Quinternio"; konkordanz="Bl. 35v–40r";aktBuch = 13; alt = ""; break;
		case "37r": lagenNr="3"; lagenSymb="L5p_10r"; lagenName="Quinternio"; konkordanz="Bl. 35v–40r";aktBuch = 13; alt = ""; break;
		case "37v": lagenNr="3"; lagenSymb="L5p_10v"; lagenName="Quinternio"; konkordanz="Bl. 35v–40r";aktBuch = 13; alt = ""; break;
		case "38r": lagenNr="4"; lagenSymb="L1p_m1_1_01r"; lagenName="Unio + 1 Bl."; konkordanz="Bl. 35v–40r";aktBuch = 13; alt = ""; break;
		case "38v": lagenNr="4"; lagenSymb="L1p_m1_1_01v"; lagenName="Unio + 1 Bl."; konkordanz="Bl. 35v–40r";aktBuch = 13; alt = ""; break;
		case "39r": lagenNr="4"; lagenSymb="L1p_m1_1_02r"; lagenName="Unio + 1 Bl."; konkordanz="Bl. 35v–40r";aktBuch = 13; alt = ""; break;
		case "39v": lagenNr="4"; lagenSymb="L1p_m1_1_02v"; lagenName="Unio + 1 Bl."; konkordanz="Bl. 35v–40r";aktBuch = 13; alt = ""; break;
		case "40r": lagenNr="4"; lagenSymb="L1p_m1_1_03r"; lagenName="Unio + 1 Bl."; konkordanz="Bl. 35v–40r";aktBuch = 13; alt = ""; break;
		case "40v": lagenNr="4"; lagenSymb="L1p_m1_1_03v"; lagenName="Unio + 1 Bl."; konkordanz="";aktBuch = 13; alt = ""; break;
		case "41r": lagenNr="4"; lagenSymb="blind"; lagenName=""; konkordanz="";aktBuch = 13; alt = ""; break;
		case "41v": lagenNr="4"; lagenSymb="blind"; lagenName=""; konkordanz="";aktBuch = 13; alt = ""; break;
		return;
	}
}