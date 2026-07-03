// JavaScript Document

window.onload = function () {
	bildAnsichtKonv();
};


// Variablendeklaration;

//Variablen aus html übernommen
//--------------------------------------------------------------
var transkription = false;
var curSlide = '0';
var rectoVerso = 'v';
var addChar = '';
//--------------------------------------------------------------

var anzeigeModus = "";
//var curSlide = parent.curSlideX;
//var zoom = parent.zoomX;
//var rectoVerso = parent.rectoVersoX;
//var zusatz = "";
//var bildURL = "";
//var buch = 1;
//var addChar = "";


// Definieren des ersten existierenden Bildes
var firstPageDS = -3;


// Definieren des letzten existierenden Bildes
var lastPageDS = 41;

// Definieren des ersten paginierten Blatts
var firstPaginiert = -2;

// Definieren des letzten paginierten Blatts
var lastPaginiert = 40;

// Definieren des letzten Buchs
var lastbook = 13;


var lageTxt = ". Lage, ";
var lagenAngabe = "";
var blattTxt = "Bl. ";
var seitenAngabe = "";
var blattAngabe = "";
var buchAuswahl = 2;
var browser;
var os;
aktBuch = parent.aktBuch;
var oesz = unescape("%F6%DF");
var ae = unescape("%e4");


var addPage = new Map([]);
var ZPage = [];


// Aus html übernommen
//--------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("dropdown").addEventListener("mouseover", function () {
		Tip('Abschnitt wählen');
	});

	document.getElementById("dropdown").addEventListener("mouseout", function () {
		UnTip();
	});

	document.getElementById("buchMenu").addEventListener("change", function () {
		MM_jumpMenuParts();
	});
	document.getElementById("blatt").addEventListener("mouseover", function () {
		Tip('Blatt finden');
	});

	document.getElementById("blatt").addEventListener("mouseout", function () {
		UnTip();
	});

	document.getElementById("blattInput").addEventListener("keypress", function (event) {
		return submitenter(this, event);
	});

	document.getElementById("submitBlattImg").addEventListener("mouseover", function () {
		Tip('Blatt finden');
	});

	document.getElementById("submitBlattImg").addEventListener("mouseout", function () {
		UnTip();
	});

	document.getElementById("submitBlattImg").addEventListener("click", function () {
		checkSeitenEingabe();
	});

	document.getElementById("handschrift").addEventListener("mouseover", function () {
		Tip('Handschrift wählen');
	});

	document.getElementById("handschrift").addEventListener("mouseout", function () {
		UnTip();
	});

	document.getElementById("handMenu").addEventListener("change", function () {
		MM_jumpHandschrift();
	});
	document.getElementById("blaettern1").addEventListener("mouseover", function () {
		Tip('vorheriger Abschnitt');
	});

	document.getElementById("blaettern1").addEventListener("mouseout", function () {
		UnTip();
	});

	document.getElementById("blaettern1").addEventListener("click", function () {
		goPrevBook();
	});

	document.getElementById("blaettern2").addEventListener("mouseover", function () {
		Tip('zurückblättern');
	});

	document.getElementById("blaettern2").addEventListener("mouseout", function () {
		UnTip();
	});

	document.getElementById("blaettern2").addEventListener("click", function () {
		goPrevPage();
	});

	document.getElementById("blaettern3").addEventListener("mouseover", function () {
		Tip('weiterblättern');
	});

	document.getElementById("blaettern3").addEventListener("mouseout", function () {
		UnTip();
	});

	document.getElementById("blaettern3").addEventListener("click", function () {
		goNextPage();
	});

	document.getElementById("blaettern4").addEventListener("mouseover", function () {
		Tip('nächster Abschnitt');
	});

	document.getElementById("blaettern4").addEventListener("mouseout", function () {
		UnTip();
	});

	document.getElementById("blaettern4").addEventListener("click", function () {
		goNextBook();
	});

	document.getElementById("startseite-icon-button").addEventListener("mouseover", function () {
		Tip('Zur Startseite', 20, 10);
	});

	document.getElementById("startseite-icon-button").addEventListener("mouseout", function () {
		UnTip();
	});

});

// Funktion, um Tooltip anzuzeigen
function Tip(text, xDiff = 10, yDiff = -30) {
	var tooltip = document.createElement("div");
	tooltip.innerHTML = text;
	tooltip.className = "tooltip";
	document.body.appendChild(tooltip);

	document.addEventListener("mousemove", updateTooltipPosition);

	function updateTooltipPosition(event) {
		var x = event.clientX + xDiff;
		var y = event.clientY + yDiff;

		tooltip.style.left = x + 'px';
		tooltip.style.top = y + 'px';
	}
}

// Funktion, um Tooltip zu entfernen
function UnTip() {
	var tooltip = document.querySelector(".tooltip");
	if (tooltip) {
		tooltip.parentNode.removeChild(tooltip);
	}
}


//--------------------------------------------------------------

//Menu Abschnitte wählen
function MM_jumpMenuParts() {
	if (document.naviHSR.selectBook.value != "javascript:") {
		var temp = document.naviHSR.selectBook.value;
		rectoVerso = temp.substring(0, 1);
		addChar = '';
		curSlide = parseInt(temp.substring(1));
		if (isNaN(curSlide)) {
			addChar = temp.substring(1, 2);
			curSlide = parseInt(temp.substring(2));
		}
		document.naviHSR.selectBook.selectedIndex = 0;

		if (rectoVerso == "r") {
			if (addPage.has(parseInt(curSlide))) {
				if (addChar == "a") {
					curSlide--;
					addChar = "";
				} else {
					addChar = String.fromCodePoint(addChar.charCodeAt(0) - 1);
					if (addChar == "j") {
						addChar = "i";
					}
				}
			} else if (addChar == "Z") {
				addChar = "";
			} else {
				curSlide--;
				if ((ZPage.indexOf(parseInt(curSlide)) != -1)) {
					addChar = "Z";
				}
			}
			if ((addChar == "") && (addPage.has(parseInt(curSlide)))) {
				addChar = addPage.get(parseInt(curSlide));
			}
			rectoVerso = "v";
		}
		bildAnzeigeDS();

		window.localStorage.setItem('localStoreCurSlide', curSlide);
		window.localStorage.setItem('localStoreRectoVerso', rectoVerso);
		window.localStorage.setItem('localStoreAddChar', addChar);
	}
}


function MM_jumpHandschrift() {

	if (document.naviHSR.selectHand.value != "javascript:") {

		var temp = document.naviHSR.selectHand.value;
		document.naviHSR.selectHand.selectedIndex = 0;
		window.location.href = temp
	}
}

function goNextBook() {
	if (aktBuch < lastbook) {
		document.naviHSR.selectBook.selectedIndex = (++aktBuch + 1);
	} else { return; }

	var temp = document.naviHSR.selectBook.value;
	rectoVerso = temp.substring(0, 1);
	addChar = '';
	curSlide = parseInt(temp.substring(1));
	if (isNaN(curSlide)) {
		addChar = temp.substring(1, 2);
		curSlide = parseInt(temp.substring(2));
	}

	if (rectoVerso == "r") {
		if (addPage.has(parseInt(curSlide))) {
			if (addChar == "a") {
				curSlide--;
				addChar = "";
			} else {
				addChar = String.fromCodePoint(addChar.charCodeAt(0) - 1);
				if (addChar == "j") {
					addChar = "i";
				}
			}
		} else if (addChar == "Z") {
			addChar = "";
		} else {
			curSlide--;
			if ((ZPage.indexOf(parseInt(curSlide)) != -1)) {
				addChar = "Z";
			}
		}
		if ((addChar == "") && (addPage.has(parseInt(curSlide)))) {
			addChar = addPage.get(parseInt(curSlide));
		}
		rectoVerso = "v";
	}
	bildAnzeigeDS();
}


function goPrevBook() {
	if (aktBuch > 0) {
		document.naviHSR.selectBook.selectedIndex = (--aktBuch + 1);
	} else if ((aktBuch == 1) || (curSlide > 1)) {
		document.naviHSR.selectBook.selectedIndex = (aktBuch + 1);
	} else {
		return;
	}

	var temp = document.naviHSR.selectBook.value;
	rectoVerso = temp.substring(0, 1);
	addChar = '';
	curSlide = parseInt(temp.substring(1));
	if (isNaN(curSlide)) {
		addChar = temp.substring(1, 2);
		curSlide = parseInt(temp.substring(2));
	}

	if (rectoVerso == "r") {
		if (addPage.has(parseInt(curSlide))) {
			if (addChar == "a") {
				curSlide--;
				addChar = "";
			} else {
				addChar = String.fromCodePoint(addChar.charCodeAt(0) - 1);
				if (addChar == "j") {
					addChar = "i";
				}
			}
		} else if (addChar == "Z") {
			addChar = "";
		} else {
			curSlide--;
			if ((ZPage.indexOf(parseInt(curSlide)) != -1)) {
				addChar = "Z";
			}
		}
		if ((addChar == "") && (addPage.has(parseInt(curSlide)))) {
			addChar = addPage.get(parseInt(curSlide));
		}
		rectoVerso = "v";
	}
	bildAnzeigeDS();
}


function submitenter(myfield, e) {
	var keycode;
	if (window.event) keycode = window.event.keyCode;
	else if (e) keycode = e.which;
	else return true;

	if (keycode == 13) {
		if (myfield.name == "Blatt") {
			checkSeitenEingabe();
			if (e.preventDefault) e.preventDefault();
			return false;
		}
	}

	return true;
}


function goNextPage() {
	if (curSlide < lastPageDS) {
		curSlide++;
		window.localStorage.setItem('localStoreCurSlide', curSlide);
		window.localStorage.setItem('localStoreAddChar', addChar);
		//window.localStorage.setItem('localStoreRectoVerso', rectoVerso);
		curSlide = nexSlide;
		addChar = nexChar;
		bildAnzeigeDS();
	}
}


function goPrevPage() {
	if (curSlide === firstPageDS.toString()) {
		return;
	}
	curSlide--;
	window.localStorage.setItem('localStoreCurSlide', curSlide);
	bildAnzeigeDS();
}


function checkSeitenEingabe() {

	var curSlideAlt = curSlide;
	var rectoVersoAlt = rectoVerso;
	var seitenEingabe = document.naviHSR.Blatt.value;

	if (seitenEingabe == "0" || seitenEingabe == "" || isNaN(parseInt(seitenEingabe))) { document.naviHSR.Blatt.value = ""; return }

	while (seitenEingabe.charAt(0) == "0") { //Führende 0'en abschneiden
		seitenEingabe = seitenEingabe.substring(1, seitenEingabe.length);
	}

	var temp = seitenEingabe.charAt(seitenEingabe.length - 1);

	if (temp == "r" || temp == "v") {
		addChar = ""
		curSlide = seitenEingabe.substring(0, seitenEingabe.length - 1);
		rectoVerso = seitenEingabe.substring(seitenEingabe.length - 1, seitenEingabe.length);
		if (isNaN(curSlide)) {
			addChar = seitenEingabe.substring(seitenEingabe.length - 2, seitenEingabe.length - 1);
			curSlide = seitenEingabe.substring(0, seitenEingabe.length - 2);
		}
	} else if ((seitenEingabe.charCodeAt(seitenEingabe.length - 1) > 47) && (seitenEingabe.charCodeAt(seitenEingabe.length - 1) < 58)) {
		curSlide = seitenEingabe;
		rectoVerso = "r";
		addChar = ""
	} else { alert("Bitte geben Sie eine gültige Blattanzeige ein."); return; }


		if (rectoVerso == "r") {
		if (addPage.has(parseInt(curSlide))) {
			if (addChar == "a") {
				curSlide--;
				addChar = "";
			} else {
				addChar = String.fromCodePoint(addChar.charCodeAt(0) - 1);
				if (addChar == "j") {
					addChar = "i";
				}
			}
		} else if (addChar == "Z") {
			addChar = "";
		} else {
			curSlide--;
			if ((ZPage.indexOf(parseInt(curSlide)) != -1)) {
				addChar = "Z";
			}
		}
		if ((addChar == "") && (addPage.has(parseInt(curSlide)))) {
			addChar = addPage.get(parseInt(curSlide));
		}
		rectoVerso = "v";
	}

	document.naviHSR.Blatt.value = "";
	if ((curSlide > (firstPaginiert - 2)) && (curSlide < lastPaginiert)) {
		bildAnzeigeDS();
	} else {

		alert("Das erste paginierte Blatt der Handschrift ist Bl. " + firstPaginiert + ", das letzte paginierte Blatt ist Bl." + lastPaginiert + ". Die Vorsatzblätter und die Buchdeckel können Sie von dort aus über die Buttons \"zurück-\" bzw. \"weiterblättern\" erreichen."); curSlide = curSlideAlt; rectoVerso = rectoVersoAlt;

	}
	document.naviHSR.Blatt.value = "";
}


function bildAnzeigeDS() {
	var curSlideStr = curSlide += '';

	nexSlide = curSlide
	nexChar = addChar
	if (addPage.has(parseInt(nexSlide))) {
		if (addPage.get(parseInt(nexSlide)) == nexChar) {
			nexSlide++;
			nexChar = "";
		} else {
			nexChar = String.fromCodePoint(nexChar.charCodeAt(0) + 1);
			if (nexChar == "j") {
				nexChar = "k";
			}
		}
	} else if ((nexChar == "") && (ZPage.indexOf(parseInt(nexSlide)) != -1)) {
		nexChar = "Z";
	} else {
		nexSlide++;
		nexChar = ""
	}
	if ((nexChar == "") && (addPage.has(parseInt(nexSlide)))) {
		nexChar = "a";
	}

	var curSlideStr = curSlide += '';
	switch (curSlideStr.length) {
		case 1: var zusatzv = "00"; break;
		case 2: var zusatzv = "0"; break;
		default: var zusatzv = ""; break;
	}

	var nexSlideStr = nexSlide += '';
	switch (nexSlideStr.length) {
		case 1: var zusatzr = "00"; break;
		case 2: var zusatzr = "0"; break;
		default: var zusatzr = ""; break;
	}

	var tempv = "Casanatense_Ms1404_" + zusatzv + curSlide + addChar + 'v';
	var tempr = "Casanatense_Ms1404_" + zusatzr + nexSlide + nexChar + 'r';
	var bildURLv = "50/" + tempv + ".jpg";
	var bildURLr = "50/" + tempr + ".jpg";
	switch (curSlide) {

		case "-3":  
			bildURLv = "50/transparent.png";
			bildURLr = "50/Casanatense_Ms1404_000_Einband_vorne_aussen.jpg"; break;
		case "-2":
			bildURLv = "50/Casanatense_Ms1404_000_Einband_vorne_innen.jpg";
			bildURLr = "50/Casanatense_Ms1404_000_Ir.jpg"; break;
		case "-1":
			bildURLv = "50/Casanatense_Ms1404_000_Iv.jpg";
			bildURLr = "50/Casanatense_Ms1404_000_IIr.jpg"; break;
		case "0":
			bildURLv = "50/Casanatense_Ms1404_000_IIv.jpg";
			bildURLr = "50/Casanatense_Ms1404_001r.jpg"; break;
		case "41":
			bildURLv = "50/Casanatense_Ms1404_000_Einband_hinten.jpg";
			bildURLr = "transparent.png"; break;
		/*case "-1":  
			bildURLv = "50/Wellcome49_00Einband_vorne_innen.jpg";
			bildURLr = "50/Wellcome49_000r.jpg"; break;
		case "70":  
			bildURLv = "50/Wellcome49_070v.jpg";
			bildURLr = "50/Wellcome49_00Einband_hinten_innen.jpg"; break;
		case "71":  
			bildURLv = "50/Wellcome49_00Einband_hinten_aussen.jpg";
			bildURLr = "Wellcome49_00Einband_Ruecken.jpg"; break;*/
		default: break;


	}
	//alert("bildURLv: " + bildURLv + "bildURLr: " + bildURLr);

	var blatt = curSlide + addChar + "v";
	blattInfo(blatt); // Info Verso
	var schreibv = schreiber

	blatt = nexSlide + nexChar + "r";
	blattInfo(blatt); // Info Recto
	var schreibr = schreiber

	if (schreibv == schreibr) {
		schreiber = schreibv
	}
	else {
		schreiber = schreibv + " / " + schreibr
	}

	blatt = curSlide + addChar + "";
	blattInfoDS(blatt); //Info Recto/Verso
	var lageTxt = ". Lage, ";
	if (lagenNr != '') {
		lagenNr = lagenNr + lageTxt;
	}

	switch (curSlide) {

		case "-3": seitenAngabe = "Einband vorne außen"; lagenAngabe = ""; temp = "R000"; buchAuswahl = 0; break;
		case "-2": seitenAngabe = "Einband v.i. / Bl. Ir"; lagenAngabe = "1. Lage, Oktonio – 1 Bl."; temp = "R000"; buchAuswahl = 0; break;
		case "-1": seitenAngabe = "Bl. Iv / Bl. IIr"; lagenAngabe = "1. Lage, Oktonio – 1 Bl."; temp = "R000"; buchAuswahl = 0; break;
		case "0":  seitenAngabe = "Bl. IIv / Bl. 1r"; lagenAngabe = "1. Lage, Oktonio – 1 Bl."; konkordanz = "Bl. 1r"; temp = "R000"; buchAuswahl = aktBuch + 1; break;
		case "40": seitenAngabe = "Bl. 40v"; lagenAngabe = "4. Lage, Unio + 1 Bl."; buchAuswahl = aktBuch; break;
		case "41": seitenAngabe = "Einband hinten außen"; lagenAngabe = ""; buchAuswahl = aktBuch; break;
		//case "0": seitenAngabe = "Vorsatzbl. / Bl. Ir"; lagenAngabe = ""; buchAuswahl = 0; break;
		//case "1": seitenAngabe = "Bl. Iv / Bl. " + curSlide + "r"; lagenAngabe = lagenNr + lageTxt + lagenName; buchAuswahl = 2; break;
		//case "181": seitenAngabe = "Bl. " + (curSlide-1) + "v / Vorsatzbl."; lagenAngabe = ""; buchAuswahl = aktBuch + 1; break;
		//case "182": seitenAngabe = "Vorsatzbl. / Buchdeckel"; lagenAngabe = ""; buchAuswahl = 0; break;
		//case "183": seitenAngabe = "Buchdeckel außen"; lagenAngabe = ""; buchAuswahl = 18; break;
		//case "-1": seitenAngabe = "Buchdeckel / Vorsatzbl."; lagenAngabe = ""; bildURL = "../RBilder/50/Rvs001.jpg"; buchAuswahl = 0; break;
		//case "-2": seitenAngabe = "Buchdeckel vorne"; lagenAngabe = ""; bildURL = "../RBilder/50/Rvs002.jpg"; buchAuswahl = 1; break;
		//case "-1": seitenAngabe = ""; lagenAngabe = lagenNr + lagenName; buchAuswahl = aktBuch + 1; break;
		//case "0": seitenAngabe = "Vorsatzblatt_v"+ " / " + nexSlide + nexChar + "r"; lagenAngabe = lagenNr + lagenName; buchAuswahl = aktBuch + 1; break;
		//case "72": seitenAngabe = "Bl. " + curSlide + addChar + "v / Einband hinten innen"; lagenAngabe = lagenNr + lagenName; buchAuswahl = aktBuch + 1; break;
		//case "73": seitenAngabe = "Einband hinten aussen / Einband Ruecken"; lagenAngabe = lagenNr + lagenName; buchAuswahl = aktBuch + 1; break;

		default: seitenAngabe = "Bl. " + curSlide + addChar + "v / " + nexSlide + nexChar + "r"; lagenAngabe = lagenNr + lagenName; buchAuswahl = aktBuch + 1; break;

	}

	document.getElementById('blattAnzeige').innerHTML = seitenAngabe;
	document.getElementById('versAnzeige').innerHTML = konkordanz;
	document.getElementById('schreibAnzeige').innerHTML = schreiber;
	window.document.ImgLagensymbol.src = "../Lagensymbole/Doppelseite/" + lagenSymb + ".gif";
	document.getElementById('lagenAnzeige').innerHTML = lagenAngabe;
	document.naviHSR.selectBook.selectedIndex = buchAuswahl;
	renderSpread('osdSpread', bildURLv, bildURLr);


	window.defaultStatus = "Berner Parzival-Handschrift, " + seitenAngabe + "  |  Bildgr" + oesz + "e: " + zoom + "%"; return true;
}


function bildAnsichtKonv() {

	// Prüfen auf Parameter

	var strHref = window.location.href;
	// wenn Parameter für Seite angegeben werden
	if (strHref.indexOf("?") > -1) {
		//alert("parameter");
		var strQueryString = strHref.substr(strHref.indexOf("?") + 1).toLowerCase();
		var aQueryString = strQueryString.split("&");
		var strQueryBlatt = aQueryString[0];
		var strQueryGroesse = aQueryString[1];
		var strQueryAnsicht = aQueryString[2];

		for (i = 0; i < 2; i++) {
			if (strQueryBlatt.charAt(0) == "0") {
				strQueryBlatt = strQueryBlatt.substring(1, strQueryBlatt.length);
			}
		}
		addChar = ""
		curSlide = strQueryBlatt.substring(0, strQueryBlatt.length - 1);
		rectoVerso = strQueryBlatt.substring(strQueryBlatt.length - 1, strQueryBlatt.length);
		zoom = Number(strQueryGroesse);
		if (isNaN(curSlide)) {
			addChar = strQueryBlatt.substring(strQueryBlatt.length - 2, strQueryBlatt.length - 1);
			curSlide = strQueryBlatt.substring(0, strQueryBlatt.length - 2);
		}
		if (isNaN(strQueryGroesse)) {
			zoom = 100;
		} else {
			zoom = Number(strQueryGroesse);
		}
		if (zoom == 50 && rectoVerso == "v") {
			curSlide = ++curSlide;
		}
		//alert("curSlide: " + curSlide + " rectoVerso: " + rectoVerso + " zoom: " + zoom);
		/*if (strQueryAnsicht == "cod") {
			window.RImage.location.href = "image_konv.html";
			window.frames["navigation"].location.href = "navigation_konv.html";
			ansicht = "konv";
		} else {
			window.RImage.location.href = "image_miniatur.html";
			window.navigation.location.href = "navigation_miniaturen.html";
			ansicht = "miniatur";
		}*/
	}

	//alert("curSlide: " + curSlide + ", ansicht: " + ansicht + ", zoomStufe: " + zoom + ", rectoVerso: " + rectoVerso);
		//alert("doppelseitig");
	bildAnzeigeDS();
}

