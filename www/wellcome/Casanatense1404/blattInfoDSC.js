/* Blattinformationen zu Doppelseiten
 * Hier muss etwas gerechnet werden: Jede Zeile entspricht einer Doppelseite, d.h. bei Zeile
 * <case "3": lagenNr=""; ...> befinden wir uns auf der dritten Doppelseite gerechnet von der ersten dargestellten Bild
 * Beispiel:
 * 		case "9": lagenNr="1/2"; lagenSymb="L5_L6"; lagenName="Quint./Sext."; konkordanz="12r–96v"; aktBuch = 1; imgDescr = false; break;
 * resultiert in:
 * 
 * Lagenbeschreibung: "1/2. Lage, Quint./Sext."
*/

function blattInfoDS(blatt) {
	switch(blatt) {
			
		case "-3": lagenNr=""; lagenSymb="blind"; lagenName=""; konkordanz=""; aktBuch = 0; imgDescr = false; break;
		case "-2": lagenNr=""; lagenSymb="L8_w1_16_01r"; lagenName="Oktonio – 1 Bl."; konkordanz=""; aktBuch = 0; imgDescr = false; break;
		case "-1": lagenNr="1"; lagenSymb="L8_w1_16_01v02r"; lagenName="Oktonio – 1 Bl."; konkordanz=""; aktBuch = 0; imgDescr = false; break;
		case "0": lagenNr="1"; lagenSymb="L8_w1_16_02v03r"; lagenName="Oktonio – 1 Bl."; konkordanz=""; aktBuch = 1; imgDescr = false; break;
		case "1": lagenNr="1"; lagenSymb="L8_w1_16_03v04r"; lagenName="Oktonio – 1 Bl."; konkordanz="Bl. 1v–2r"; aktBuch = 2; imgDescr = false; break;
		case "2": lagenNr="1"; lagenSymb="L8_w1_16_04v05r"; lagenName="Oktonio – 1 Bl."; konkordanz="Bl. 2v–4r"; aktBuch = 3; imgDescr = false; break;
		case "3": lagenNr="1"; lagenSymb="L8_w1_16_05v06r"; lagenName="Oktonio – 1 Bl."; konkordanz="Bl. 2v–4r"; aktBuch = 3; imgDescr = false; break;
		case "4": lagenNr="1"; lagenSymb="L8_w1_16_06v07r"; lagenName="Oktonio – 1 Bl."; konkordanz="Bl. 4v–7r"; aktBuch = 4; imgDescr = false; break;
		case "5": lagenNr="1"; lagenSymb="L8_w1_16_07v08r"; lagenName="Oktonio – 1 Bl."; konkordanz="Bl. 4v–7r"; aktBuch = 4; imgDescr = false; break;
		case "6": lagenNr="1"; lagenSymb="L8_w1_16_08v09r"; lagenName="Oktonio – 1 Bl."; konkordanz="Bl. 4v–7r"; aktBuch = 4; imgDescr = false; break;
		case "7": lagenNr="1"; lagenSymb="L8_w1_16_09v10r"; lagenName="Oktonio – 1 Bl."; konkordanz="Bl. 7v–13r"; aktBuch = 5; imgDescr = false; break;
		case "8": lagenNr="1"; lagenSymb="L8_w1_16_10v11r"; lagenName="Oktonio – 1 Bl."; konkordanz="Bl. 7v–13r"; aktBuch = 5; imgDescr = false; break;
		case "9": lagenNr="1"; lagenSymb="L8_w1_16_11v12r"; lagenName="Oktonio – 1 Bl."; konkordanz="Bl. 7v–13r"; aktBuch = 5; imgDescr = false; break;
		case "10": lagenNr="1"; lagenSymb="L8_w1_16_12v13r"; lagenName="Oktonio – 1 Bl."; konkordanz="Bl. 7v–13r"; aktBuch = 5; imgDescr = false; break;
		case "11": lagenNr="1"; lagenSymb="L8_w1_16_13v14r"; lagenName="Oktonio – 1 Bl."; konkordanz="Bl. 7v–13r"; aktBuch = 5; imgDescr = false; break;
		case "12": lagenNr="1"; lagenSymb="L8_w1_16_14v15r"; lagenName="Oktonio – 1 Bl."; konkordanz="Bl. 7v–13r"; aktBuch = 5; imgDescr = false; break;
		case "13": lagenNr="1/2"; lagenSymb="L8_w1_16_L7_unio_pg_sext"; lagenName="Okton./Unio+Sext."; konkordanz="Bl. 13v–15r"; aktBuch = 6; imgDescr = false; break;
		case "14": lagenNr="2"; lagenSymb="L7_unio_pg_sext_01v02r"; lagenName="Unio + Sexternio"; konkordanz="Bl. 13v–15r"; aktBuch = 6; imgDescr = false; break;
		case "15": lagenNr="2"; lagenSymb="L7_unio_pg_sext_02v03r"; lagenName="Unio + Sexternio"; konkordanz="Bl. 15v–26r"; aktBuch = 7; imgDescr = false; break;
		case "16": lagenNr="2"; lagenSymb="L7_unio_pg_sext_03v04r"; lagenName="Unio + Sexternio"; konkordanz="Bl. 15v–26r"; aktBuch = 7; imgDescr = false; break;
		case "17": lagenNr="2"; lagenSymb="L7_unio_pg_sext_04v05r"; lagenName="Unio + Sexternio"; konkordanz="Bl. 15v–26r"; aktBuch = 7; imgDescr = false; break;
		case "18": lagenNr="2"; lagenSymb="L7_unio_pg_sext_05v06r"; lagenName="Unio + Sexternio"; konkordanz="Bl. 15v–26r"; aktBuch = 7; imgDescr = false; break;
		case "19": lagenNr="2"; lagenSymb="L7_unio_pg_sext_06v07r"; lagenName="Unio + Sexternio"; konkordanz="Bl. 15v–26r"; aktBuch = 7; imgDescr = false; break;
		case "20": lagenNr="2"; lagenSymb="L7_unio_pg_sext_07v08r"; lagenName="Unio + Sexternio"; konkordanz="Bl. 15v–26r"; aktBuch = 7; imgDescr = false; break;
		case "21": lagenNr="2"; lagenSymb="L7_unio_pg_sext_08v09r"; lagenName="Unio + Sexternio"; konkordanz="Bl. 15v–26r"; aktBuch = 7; imgDescr = false; break;
		case "22": lagenNr="2"; lagenSymb="L7_unio_pg_sext_09v10r"; lagenName="Unio + Sexternio"; konkordanz="Bl. 15v–26r"; aktBuch = 7; imgDescr = false; break;
		case "23": lagenNr="2"; lagenSymb="L7_unio_pg_sext_10v11r"; lagenName="Unio + Sexternio"; konkordanz="Bl. 15v–26r"; aktBuch = 7; imgDescr = false; break;
		case "24": lagenNr="2"; lagenSymb="L7_unio_pg_sext_11v12r"; lagenName="Unio + Sexternio"; konkordanz="Bl. 15v–26r"; aktBuch = 7; imgDescr = false; break;
		case "25": lagenNr="2"; lagenSymb="L7_unio_pg_sext_12v13r"; lagenName="Unio + Sexternio"; konkordanz="Bl. 15v–26r"; aktBuch = 7; imgDescr = false; break;
		case "26": lagenNr="2"; lagenSymb="L7_unio_pg_sext_13v14r"; lagenName="Unio + Sexternio"; konkordanz="Bl. 26v–27r"; aktBuch = 8; imgDescr = false; break;
		case "27": lagenNr="2/3"; lagenSymb="L7_unio_pg_sext_L5"; lagenName="Unio+Sext./Quint."; konkordanz="Bl. 28r–30r"; aktBuch = 10; imgDescr = false; break;
		case "28": lagenNr="3"; lagenSymb="L5_01v02r"; lagenName="Quinternio"; konkordanz="Bl. 28r–30r"; aktBuch = 10; imgDescr = false; break;
		case "29": lagenNr="3"; lagenSymb="L5_02v03r"; lagenName="Quinternio"; konkordanz="Bl. 28r–30r"; aktBuch = 10; imgDescr = false; break;
		case "30": lagenNr="3"; lagenSymb="L5_03v04r"; lagenName="Quinternio"; konkordanz="Bl. 30v–32r"; aktBuch = 11; imgDescr = false; break;
		case "31": lagenNr="3"; lagenSymb="L5_04v05r"; lagenName="Quinternio"; konkordanz="Bl. 30v–32r"; aktBuch = 11; imgDescr = false; break;
		case "32": lagenNr="3"; lagenSymb="L5_05v06r"; lagenName="Quinternio"; konkordanz="Bl. 32v–35r"; aktBuch = 12; imgDescr = false; break;
		case "33": lagenNr="3"; lagenSymb="L5_06v07r"; lagenName="Quinternio"; konkordanz="Bl. 32v–35r"; aktBuch = 12; imgDescr = false; break;
		case "34": lagenNr="3"; lagenSymb="L5_07v08r"; lagenName="Quinternio"; konkordanz="Bl. 32v–35r"; aktBuch = 12; imgDescr = false; break;
		case "35": lagenNr="3"; lagenSymb="L5_08v09r"; lagenName="Quinternio"; konkordanz="Bl. 35v–40r"; aktBuch = 13; imgDescr = false; break;
		case "36": lagenNr="3"; lagenSymb="L5_09v10r"; lagenName="Quinternio"; konkordanz="Bl. 35v–40r"; aktBuch = 13; imgDescr = false; break;
		case "37": lagenNr="3/4"; lagenSymb="L5_L1_m1_1"; lagenName="Quint./Unio+1Bl."; konkordanz="Bl. 35v–40r"; aktBuch = 13; imgDescr = false; break;
		case "38": lagenNr="4"; lagenSymb="L1_m1_1_01v02r"; lagenName="Unio + 1 Bl."; konkordanz="Bl. 35v–40r"; aktBuch = 13; imgDescr = false; break;
		case "39": lagenNr="4"; lagenSymb="L1_m1_1_02v03r"; lagenName="Unio + 1 Bl."; konkordanz="Bl. 35v–40r"; aktBuch = 13; imgDescr = false; break;
		case "40": lagenNr="4"; lagenSymb="L1_m1_1_03v"; lagenName="Unio + 1 Bl."; konkordanz=""; aktBuch = 13; imgDescr = false; break;
		case "41": lagenNr="4"; lagenSymb="blind"; lagenName=""; konkordanz=""; aktBuch = 13; imgDescr = false; break;

		return;
	}
}