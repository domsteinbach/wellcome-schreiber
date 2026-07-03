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
		case "0": lagenNr="1"; lagenSymb="L6_w4_1_2_3_4_05r"; lagenName="Sexternio – 4 Bll."; konkordanz="Bl. 1r–18r"; aktBuch = 0; break;
		case "1": lagenNr="1"; lagenSymb="L6_w4_1_2_3_4_05v06r"; lagenName="Sexternio – 4 Bll."; konkordanz="Bl. 1r–18r"; aktBuch = 0; break;
		case "2": lagenNr="1"; lagenSymb="L6_w4_1_2_3_4_06v07r"; lagenName="Sexternio – 4 Bll."; konkordanz="Bl. 1r–18r"; aktBuch = 0; break;
		case "3": lagenNr="1"; lagenSymb="L6_w4_1_2_3_4_07v08r"; lagenName="Sexternio – 4 Bll."; konkordanz="Bl. 1r–18r"; aktBuch = 0; break;
		case "4": lagenNr="1"; lagenSymb="L6_w4_1_2_3_4_08v09r"; lagenName="Sexternio – 4 Bll."; konkordanz="Bl. 1r–18r"; aktBuch = 0; break;
		case "5": lagenNr="1"; lagenSymb="L6_w4_1_2_3_4_09v10r"; lagenName="Sexternio – 4 Bll."; konkordanz="Bl. 1r–18r"; aktBuch = 0; break;
		case "6": lagenNr="1"; lagenSymb="L6_w4_1_2_3_4_10v11r"; lagenName="Sexternio – 4 Bll."; konkordanz="Bl. 1r–18r"; aktBuch = 0; break;
		case "7": lagenNr="1"; lagenSymb="L6_w4_1_2_3_4_11v12r"; lagenName="Sexternio – 4 Bll."; konkordanz="Bl. 1r–18r"; aktBuch = 0; break;
		case "8": lagenNr="1/2"; lagenSymb="L6_w4_1_2_3_4_L3"; lagenName="Sexternio/Ternio"; konkordanz="Bl. 1r–18r"; aktBuch = 0; break;
		case "9": lagenNr="2"; lagenSymb="L3_01v02r"; lagenName="Ternio"; konkordanz="Bl. 1r–18r"; aktBuch = 0; break;
		case "10": lagenNr="2"; lagenSymb="L3_02v03r"; lagenName="Ternio"; konkordanz="Bl. 1r–18r"; aktBuch = 0; break;
		case "11": lagenNr="2"; lagenSymb="L3_03v04r"; lagenName="Ternio"; konkordanz="Bl. 1r–18r"; aktBuch = 0; break;
		case "12": lagenNr="2"; lagenSymb="L3_04v05r"; lagenName="Ternio"; konkordanz="Bl. 1r–18r"; aktBuch = 0; break;
		case "13": lagenNr="2"; lagenSymb="L3_05v06r"; lagenName="Ternio"; konkordanz="Bl. 1r–18r"; aktBuch = 0; break;
		case "14": lagenNr="2/3"; lagenSymb="L3_L1"; lagenName="Ternio/Unio"; konkordanz="Bl. 1r–18r"; aktBuch = 0; break;
		case "15": lagenNr="3"; lagenSymb="L1_01v02r"; lagenName="Unio"; konkordanz="Bl. 1r–18r"; aktBuch = 0; break;
		case "16": lagenNr="3/4"; lagenSymb="L1_L1"; lagenName="Unio/Unio"; konkordanz="Bl. 1r–18r"; aktBuch = 0; break;
		case "17": lagenNr="4"; lagenSymb="L1_01v02r"; lagenName="Unio"; konkordanz="Bl. 1r–18r"; aktBuch = 0; break;
		case "18": lagenNr=""; lagenSymb="blind"; lagenName=""; konkordanz="Bl. 1r–18r"; aktBuch = 0; break;
		return;
	}
}