document.getElementById("clipboard_button").addEventListener("click", getLueckentextToClipboard);

function getLueckentextToClipboard() {
  // get text from inputs
  var copyTextAktivitaet = document.getElementById("aktivitaet").value;
  var copyTextElterntyp = document.getElementById("elterntyp").value;
  var copyTextLoesung = document.getElementById("loesung").value;
  // try composing complete text and calling copyToClipboard
  var complete_text = "Für die " + copyTextAktivitaet + " wollen wir die Teilhabe von Eltern, die " + copyTextElterntyp + ", erleichtern und werden darum " + copyTextLoesung + ".";
  copyToClipboard(complete_text);
}

function copyToClipboard(text) {
  try{
    var dummy = document. createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    //testText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(dummy);
    var confirmationtext = "Erfolgreich in Zwischenablage kopiert.\n\nFügen Sie den Text über »Bearbeiten → Einfügen« oder die Tastenkombination »Str + v« in das gewünsche Programm ein.";
    normalAlert(confirmationtext);
  } catch (error) {
    var errortext = "Konnte nicht in Zwischenablage kopiert werden. Bitte kopieren Sie ihr Vorhaben manuell.";
    console.error(errortext);
    normalAlert(errortext);
  }
}

function normalAlert(alert_text) {
  alert(alert_text);
}
