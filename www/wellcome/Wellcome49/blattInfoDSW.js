/* Blattinformationen zu Doppelseiten
 * Hier muss etwas gerechnet werden: Jede Zeile entspricht einer Doppelseite, d.h. bei Zeile
 * <case "3": lagenNr=""; ...> befinden wir uns auf der dritten Doppelseite gerechnet von der ersten dargestellten Bild
 * Beispiel:
 * 		case "9": lagenNr="1/2"; lagenSymb="L5_L6"; lagenName="Quint./Sext."; konkordanz="12r–96v"; aktBuch = 1; break;
 * resultiert in:
 * 
 * Lagenbeschreibung: "1/2. Lage, Quint./Sext."
*/

function blattInfoDS(blatt) {
	switch(blatt) {
		case "-1": lagenNr=""; lagenSymb="blind"; lagenName=""; konkordanz="Einband"; aktBuch = 0; break;
		case "0": lagenNr=""; lagenSymb="L6_01r"; lagenName=""; konkordanz="Vorsatzblatt"; aktBuch = 0; break;
		case "1": lagenNr="1"; lagenSymb="L6_01v02r"; lagenName="Sexternio"; konkordanz="Bl. 1r–2r"; aktBuch = 0; break; 
		case "2": lagenNr="1"; lagenSymb="L6_02v03r"; lagenName="Sexternio"; konkordanz="Bl. 2v–28v"; aktBuch = 1; break;
		case "3": lagenNr="1"; lagenSymb="L6_03v04r"; lagenName="Sexternio"; konkordanz="Bl. 2v–28v"; aktBuch = 1; break;
		case "4": lagenNr="1"; lagenSymb="L6_04v05r"; lagenName="Sexternio"; konkordanz="Bl. 2v–28v"; aktBuch = 1; break;
		case "5": lagenNr="1"; lagenSymb="L6_05v06r"; lagenName="Sexternio"; konkordanz="Bl. 2v–28v"; aktBuch = 1; break;
		case "6": lagenNr="1"; lagenSymb="L6_06v07r"; lagenName="Sexternio"; konkordanz="Bl. 2v–28v"; aktBuch = 1; break;
		case "7": lagenNr="1"; lagenSymb="L6_07v08r"; lagenName="Sexternio"; konkordanz="Bl. 2v–28v"; aktBuch = 1; break;
		case "8": lagenNr="1"; lagenSymb="L6_08v09r"; lagenName="Sexternio"; konkordanz="Bl. 2v–28v"; aktBuch = 1; break;
		case "9": lagenNr="1"; lagenSymb="L6_09v10r"; lagenName="Sexternio"; konkordanz="Bl. 2v–28v"; aktBuch = 1; break;
		case "10": lagenNr="1"; lagenSymb="L6_10v11r"; lagenName="Sexternio"; konkordanz="Bl. 2v–28v"; aktBuch = 1; break;
		case "11": lagenNr="1"; lagenSymb="L6_11v12r"; lagenName="Sexternio"; konkordanz="Bl. 2v–28v"; aktBuch = 1; break;
		case "12": lagenNr="1/2"; lagenSymb="L6_L5"; lagenName="Sext./Quint."; konkordanz="Bl. 2v–28v"; aktBuch = 1; break;
		case "13": lagenNr="2"; lagenSymb="L5_01v02r"; lagenName="Quinternio"; konkordanz="Bl. 2v–28v"; aktBuch = 1; break;
		case "14": lagenNr="2"; lagenSymb="L5_02v03r"; lagenName="Quinternio"; konkordanz="Bl. 2v–28v"; aktBuch = 1; break;
		case "15": lagenNr="2"; lagenSymb="L5_03v04r"; lagenName="Quinternio"; konkordanz="Bl. 2v–28v"; aktBuch = 1; break;
		case "16": lagenNr="2"; lagenSymb="L5_04v05r"; lagenName="Quinternio"; konkordanz="Bl. 2v–28v"; aktBuch = 1; break;
		case "17": lagenNr="2"; lagenSymb="L5_05v06r"; lagenName="Quinternio"; konkordanz="Bl. 2v–28v"; aktBuch = 1; break;
		case "18": lagenNr="2"; lagenSymb="L5_06v07r"; lagenName="Quinternio"; konkordanz="Bl. 2v–28v"; aktBuch = 1; break;
		case "19": lagenNr="2"; lagenSymb="L5_07v08r"; lagenName="Quinternio"; konkordanz="Bl. 2v–28v"; aktBuch = 1; break;
		case "20": lagenNr="2"; lagenSymb="L5_08v09r"; lagenName="Quinternio"; konkordanz="Bl. 2v–28v"; aktBuch = 1; break;
		case "21": lagenNr="2"; lagenSymb="L5_09v10r"; lagenName="Quinternio"; konkordanz="Bl. 2v–28v"; aktBuch = 1; break;
		case "22": lagenNr="2/3"; lagenSymb="L5_L6_w1_5"; lagenName="Quint./Sext."; konkordanz="Bl. 2v–28v"; aktBuch = 1; break;
		case "23": lagenNr="3"; lagenSymb="L6_w1_5_01v02r"; lagenName="Sexternio – 1 Bl."; konkordanz="Bl. 2v–28v"; aktBuch = 1; break;
		case "24": lagenNr="3"; lagenSymb="L6_w1_5_02v03r"; lagenName="Sexternio – 1 Bl."; konkordanz="Bl. 2v–28v"; aktBuch = 1; break;
		case "25": lagenNr="3"; lagenSymb="L6_w1_5_03v04r"; lagenName="Sexternio – 1 Bl."; konkordanz="Bl. 2v–28v"; aktBuch = 1; break;
		case "26": lagenNr="3"; lagenSymb="L6_w1_5_04v06r"; lagenName="Sexternio – 1 Bl."; konkordanz="Bl. 2v–28v"; aktBuch = 1; break;
		case "27": lagenNr="3"; lagenSymb="L6_w1_5_06v07r"; lagenName="Sexternio – 1 Bl."; konkordanz="Bl. 2v–28v"; aktBuch = 1; break;
		case "28": lagenNr="3"; lagenSymb="L6_w1_5_07v08r"; lagenName="Sexternio – 1 Bl."; konkordanz="Bl. 29r–31r"; aktBuch = 2; break;
		case "29": lagenNr="3"; lagenSymb="L6_w1_5_08v09r"; lagenName="Sexternio – 1 Bl."; konkordanz="Bl. 29r–31r"; aktBuch = 2; break;
		case "30": lagenNr="3"; lagenSymb="L6_w1_5_09v10r"; lagenName="Sexternio – 1 Bl."; konkordanz="Bl. 29r–31r"; aktBuch = 2; break;
		case "31": lagenNr="3"; lagenSymb="L6_w1_5_10v11r"; lagenName="Sexternio – 1 Bl."; konkordanz="Bl. 31v–32r"; aktBuch = 3; break;
		case "32": lagenNr="3"; lagenSymb="L6_w1_5_11v12r"; lagenName="Sexternio – 1 Bl."; konkordanz="Bl. 32v–33v"; aktBuch = 4; break;
		case "33": lagenNr="3/4"; lagenSymb="L6_w1_5_L6"; lagenName="Sext./Sext."; konkordanz="Bl. 34r–45v"; aktBuch = 5; break;
		case "34": lagenNr="4"; lagenSymb="L6_01v02r"; lagenName="Sexternio"; konkordanz="Bl. 34r–45v"; aktBuch = 5; break;
		case "35": lagenNr="4"; lagenSymb="L6_02v03r"; lagenName="Sexternio"; konkordanz="Bl. 34r–45v"; aktBuch = 5; break;
		case "36": lagenNr="4"; lagenSymb="L6_03v04r"; lagenName="Sexternio"; konkordanz="Bl. 34r–45v"; aktBuch = 5; break;
		case "37": lagenNr="4"; lagenSymb="L6_04v05r"; lagenName="Sexternio"; konkordanz="Bl. 34r–45v"; aktBuch = 5; break;
		case "38": lagenNr="4"; lagenSymb="L6_05v06r"; lagenName="Sexternio"; konkordanz="Bl. 34r–45v"; aktBuch = 5; break;
		case "39": lagenNr="4"; lagenSymb="L6_06v07r"; lagenName="Sexternio"; konkordanz="Bl. 34r–45v"; aktBuch = 5; break;
		case "40": lagenNr="4"; lagenSymb="L6_07v08r"; lagenName="Sexternio"; konkordanz="Bl. 34r–45v"; aktBuch = 5; break;
		case "41": lagenNr="4"; lagenSymb="L6_08v09r"; lagenName="Sexternio"; konkordanz="Bl. 34r–45v"; aktBuch = 5; break;
		case "42": lagenNr="4"; lagenSymb="L6_09v10r"; lagenName="Sexternio"; konkordanz="Bl. 34r–45v"; aktBuch = 5; break;
		case "43": lagenNr="4"; lagenSymb="L6_10v11r"; lagenName="Sexternio"; konkordanz="Bl. 34r–45v"; aktBuch = 5; break;
		case "44": lagenNr="4"; lagenSymb="L6_11v12r"; lagenName="Sexternio"; konkordanz="Bl. 34r–45v"; aktBuch = 5; break;
		case "45": lagenNr="4/5"; lagenSymb="L6_L6"; lagenName="Sext./Sext."; konkordanz="Bl. 46r–47r"; aktBuch = 6; break;
		case "46": lagenNr="5"; lagenSymb="L6_01v02r"; lagenName="Sexternio"; konkordanz="Bl. 46r–47r"; aktBuch = 6; break;
		case "47": lagenNr="5"; lagenSymb="L6_02v03r"; lagenName="Sexternio"; konkordanz="Bl. 47v–50v"; aktBuch = 7; break;
		case "48": lagenNr="5"; lagenSymb="L6_03v04r"; lagenName="Sexternio"; konkordanz="Bl. 47v–50v"; aktBuch = 7; break;
		case "49": lagenNr="5"; lagenSymb="L6_04v05r"; lagenName="Sexternio"; konkordanz="Bl. 47v–50v"; aktBuch = 7; break;
		case "50": lagenNr="5"; lagenSymb="L6_05v06r"; lagenName="Sexternio"; konkordanz="Bl. 50v–52r"; aktBuch = 8; break;
		case "51": lagenNr="5"; lagenSymb="L6_06v07r"; lagenName="Sexternio"; konkordanz="Bl. 50v–52r"; aktBuch = 8; break;
		case "52": lagenNr="5"; lagenSymb="L6_07v08r"; lagenName="Sexternio"; konkordanz="Bl. 52v–56r"; aktBuch = 9; break;
		case "53": lagenNr="5"; lagenSymb="L6_08v09r"; lagenName="Sexternio"; konkordanz="Bl. 52v–56r"; aktBuch = 9; break;
		case "54": lagenNr="5"; lagenSymb="L6_09v10r"; lagenName="Sexternio"; konkordanz="Bl. 52v–56r"; aktBuch = 9; break;
		case "55": lagenNr="5"; lagenSymb="L6_10v11r"; lagenName="Sexternio"; konkordanz="Bl. 56r–61r"; aktBuch = 10; break;
		case "56": lagenNr="5"; lagenSymb="L6_11v12r"; lagenName="Sexternio"; konkordanz="Bl. 56r–61r"; aktBuch = 10; break;
		case "57": lagenNr="5/6"; lagenSymb="L6_L6"; lagenName="Sext./Sext."; konkordanz="Bl. 56r–61r"; aktBuch = 10; break;
		case "58": lagenNr="6"; lagenSymb="L6_01v02r"; lagenName="Sexternio"; konkordanz="Bl. 56r–61r"; aktBuch = 10; break;
		case "59": lagenNr="6"; lagenSymb="L6_02v03r"; lagenName="Sexternio"; konkordanz="Bl. 56r–61r"; aktBuch = 10; break;
		case "60": lagenNr="6"; lagenSymb="L6_03v04r"; lagenName="Sexternio"; konkordanz="Bl. 56r–61r"; aktBuch = 10; break;
		case "61": lagenNr="6"; lagenSymb="L6_04v05r"; lagenName="Sexternio"; konkordanz="Bl. 61v–62r"; aktBuch = 11; break;
		case "62": lagenNr="6"; lagenSymb="L6_05v06r"; lagenName="Sexternio"; konkordanz="Bl. 62v–69r"; aktBuch = 12; break;
		case "63": lagenNr="6"; lagenSymb="L6_06v07r"; lagenName="Sexternio"; konkordanz="Bl. 62v–69r"; aktBuch = 12; break;
		case "64": lagenNr="6"; lagenSymb="L6_07v08r"; lagenName="Sexternio"; konkordanz="Bl. 62v–69r"; aktBuch = 12; break;
		case "65": lagenNr="6"; lagenSymb="L6_08v09r"; lagenName="Sexternio"; konkordanz="Bl. 62v–69r"; aktBuch = 12; break;
		case "66": lagenNr="6"; lagenSymb="L6_09v10r"; lagenName="Sexternio"; konkordanz="Bl. 62v–69r"; aktBuch = 12; break;
		case "67": lagenNr="6"; lagenSymb="L6_10v11r"; lagenName="Sexternio"; konkordanz="Bl. 62v–69r"; aktBuch = 12; break;
		case "68": lagenNr="6"; lagenSymb="L6_11v12r"; lagenName="Sexternio"; konkordanz="Bl. 62v–69r"; aktBuch = 12; break;
		case "69": lagenNr="6"; lagenSymb="L6_12v"; lagenName="Sexternio"; konkordanz="Bl. 69v"; aktBuch = 13; break;
		case "70": lagenNr=""; lagenSymb="blind"; lagenName=""; konkordanz=""; aktBuch = 0; break;
		case "71": lagenNr=""; lagenSymb="blind"; lagenName=""; konkordanz="Einband hinten innen"; aktBuch = 0; break;
		case "72": lagenNr=""; lagenSymb="blind"; lagenName=""; konkordanz="Einband hinten aussen"; aktBuch = 0; break;
		return;
	}
}