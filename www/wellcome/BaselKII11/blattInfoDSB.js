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
		//case "-4": lagenNr=""; lagenSymb="blind"; lagenName=""; konkordanz=""; aktBuch =""; break;
		case "-3": lagenNr=""; lagenSymb="blind"; lagenName=""; konkordanz=""; aktBuch =""; break;
		case "-2": lagenNr=""; lagenSymb="blind"; lagenName=""; konkordanz=""; aktBuch =""; break;
		case "-1": lagenNr=""; lagenSymb="blind"; lagenName=""; konkordanz=""; aktBuch =""; break;

		case "0": lagenNr="1"; lagenSymb="L6_unio_s_quinternio_01r"; lagenName="Quinternio + Unio"; konkordanz="Bl. 1r–33v"; aktBuch = 0; break;
		case "1": lagenNr="1"; lagenSymb="L6_unio_s_quinternio_01v02r"; lagenName="Quinternio + Unio"; konkordanz="Bl. 1r–33v"; aktBuch = 0; break;
		case "2": lagenNr="1"; lagenSymb="L6_unio_s_quinternio_02v03r"; lagenName="Quinternio + Unio"; konkordanz="Bl. 1r–33v"; aktBuch = 0; break;
		case "3": lagenNr="1"; lagenSymb="L6_unio_s_quinternio_03v04r"; lagenName="Quinternio + Unio"; konkordanz="Bl. 1r–33v"; aktBuch = 0; break;
		case "4": lagenNr="1"; lagenSymb="L6_unio_s_quinternio_04v05r"; lagenName="Quinternio + Unio"; konkordanz="Bl. 1r–33v"; aktBuch = 0; break;
		case "5": lagenNr="1"; lagenSymb="L6_unio_s_quinternio_05v06r"; lagenName="Quinternio + Unio"; konkordanz="Bl. 1r–33v"; aktBuch = 0; break;
		case "6": lagenNr="1"; lagenSymb="L6_unio_s_quinternio_06v07r"; lagenName="Quinternio + Unio"; konkordanz="Bl. 1r–33v"; aktBuch = 0; break;
		case "7": lagenNr="1"; lagenSymb="L6_unio_s_quinternio_07v08r"; lagenName="Quinternio + Unio"; konkordanz="Bl. 1r–33v"; aktBuch = 0; break;
		case "8": lagenNr="1"; lagenSymb="L6_unio_s_quinternio_08v09r"; lagenName="Quinternio + Unio"; konkordanz="Bl. 1r–33v"; aktBuch = 0; break;
		case "9": lagenNr="1"; lagenSymb="L6_unio_s_quinternio_09v10r"; lagenName="Quinternio + Unio"; konkordanz="Bl. 1r–33v"; aktBuch = 0; break;
		case "10": lagenNr="1"; lagenSymb="L6_unio_s_quinternio_10v11r"; lagenName="Quinternio + Unio"; konkordanz="Bl. 1r–33v"; aktBuch = 0; break;
		case "11": lagenNr="1"; lagenSymb="L6_unio_s_quinternio_11v12r"; lagenName="Quinternio + Unio"; konkordanz="Bl. 1r–33v"; aktBuch = 0; break;
		case "12": lagenNr="1/2"; lagenSymb="L6_unio_s_quinternio_L5"; lagenName="Quint.+Unio/Quint."; konkordanz="Bl. 1r–33v"; aktBuch = 0; break;
		case "13": lagenNr="2"; lagenSymb="L5_01v02r"; lagenName="Quinternio"; konkordanz="Bl. 1r–33v"; aktBuch = 0; break;
		case "14": lagenNr="2"; lagenSymb="L5_02v03r"; lagenName="Quinternio"; konkordanz="Bl. 1r–33v"; aktBuch = 0; break;
		case "15": lagenNr="2"; lagenSymb="L5_03v04r"; lagenName="Quinternio"; konkordanz="Bl. 1r–33v"; aktBuch = 0; break;
		case "16": lagenNr="2"; lagenSymb="L5_04v05r"; lagenName="Quinternio"; konkordanz="Bl. 1r–33v"; aktBuch = 0; break;
		case "17": lagenNr="2"; lagenSymb="L5_05v06r"; lagenName="Quinternio"; konkordanz="Bl. 1r–33v"; aktBuch = 0; break;
		case "18": lagenNr="2"; lagenSymb="L5_06v07r"; lagenName="Quinternio"; konkordanz="Bl. 1r–33v"; aktBuch = 0; break;
		case "19": lagenNr="2"; lagenSymb="L5_07v08r"; lagenName="Quinternio"; konkordanz="Bl. 1r–33v"; aktBuch = 0; break;
		case "20": lagenNr="2"; lagenSymb="L5_08v09r"; lagenName="Quinternio"; konkordanz="Bl. 1r–33v"; aktBuch = 0; break;
		case "21": lagenNr="2"; lagenSymb="L5_09v10r"; lagenName="Quinternio"; konkordanz="Bl. 1r–33v"; aktBuch = 0; break;
		case "22": lagenNr="2/3"; lagenSymb="L5_L7_w1_12_sext_s_unio"; lagenName="Quint./Sext.+Unio"; konkordanz="Bl. 1r–33v"; aktBuch = 0; break;
		case "23": lagenNr="3"; lagenSymb="L7_w1_12_sext_s_unio_01v02r"; lagenName="Sexternio + Unio"; konkordanz="Bl. 1r–33v"; aktBuch = 0; break;
		case "24": lagenNr="3"; lagenSymb="L7_w1_12_sext_s_unio_02v03r"; lagenName="Sexternio + Unio"; konkordanz="Bl. 1r–33v"; aktBuch = 0; break;
		case "25": lagenNr="3"; lagenSymb="L7_w1_12_sext_s_unio_03v04r"; lagenName="Sexternio + Unio"; konkordanz="Bl. 1r–33v"; aktBuch = 0; break;
		case "26": lagenNr="3"; lagenSymb="L7_w1_12_sext_s_unio_04v05r"; lagenName="Sexternio + Unio"; konkordanz="Bl. 1r–33v"; aktBuch = 0; break;
		case "27": lagenNr="3"; lagenSymb="L7_w1_12_sext_s_unio_05v06r"; lagenName="Sexternio + Unio"; konkordanz="Bl. 1r–33v"; aktBuch = 0; break;
		case "28": lagenNr="3"; lagenSymb="L7_w1_12_sext_s_unio_06v07r"; lagenName="Sexternio + Unio"; konkordanz="Bl. 1r–33v"; aktBuch = 0; break;
		case "29": lagenNr="3"; lagenSymb="L7_w1_12_sext_s_unio_07v08r"; lagenName="Sexternio + Unio"; konkordanz="Bl. 1r–33v"; aktBuch = 0; break;
		case "30": lagenNr="3"; lagenSymb="L7_w1_12_sext_s_unio_08v09r"; lagenName="Sexternio + Unio"; konkordanz="Bl. 1r–33v"; aktBuch = 0; break;
		case "31": lagenNr="3"; lagenSymb="L7_w1_12_sext_s_unio_09v10r"; lagenName="Sexternio + Unio"; konkordanz="Bl. 1r–33v"; aktBuch = 0; break;
		case "32": lagenNr="3"; lagenSymb="L7_w1_12_sext_s_unio_10v11r"; lagenName="Sexternio + Unio"; konkordanz="Bl. 1r–33v"; aktBuch = 0; break;
		case "33": lagenNr="3"; lagenSymb="L7_w1_12_sext_s_unio_11v12r"; lagenName="Sexternio + Unio"; konkordanz="Bl. 1r–33v"; aktBuch = 0; break;
		case "34": lagenNr="3"; lagenSymb="L7_w1_12_sext_s_unio_12v13r"; lagenName="Sexternio + Unio"; konkordanz="Bl. 1r–33v"; aktBuch = 0; break;
		case "35": lagenNr="3"; lagenSymb="L7_w1_12_sext_s_unio_13v14r"; lagenName="Sexternio + Unio"; konkordanz="Bl. 1r–33v"; aktBuch = 0; break;
		case "36": lagenNr="3"; lagenSymb="L7_w1_12_sext_s_unio_14v"; lagenName="Sexternio + Unio"; konkordanz="Bl. 1r–33v"; aktBuch = 0; break;
		case "37": lagenNr=""; lagenSymb="blind"; lagenName=""; konkordanz=""; aktBuch =""; break;
		case "38": lagenNr=""; lagenSymb="blind"; lagenName=""; konkordanz=""; aktBuch =""; break;

		return;
	}
}