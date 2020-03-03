var clicks = 0;
var tekst = "Herhaling: ";
var tonen = "";
function toonTekst() {
  clicks += 1;
  tonen += tekst + clicks + "<br>";
  document.getElementById("tekst").innerHTML = tonen;
}
