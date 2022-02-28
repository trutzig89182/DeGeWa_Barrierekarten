document.getElementById("ziehenButton").addEventListener("click", choosePics);
document.getElementById("altersgruppe").addEventListener("change", addActivityItem, false);

// loads picture paths into arrays
var werPix = new Array("images/Wer/1.png", "images/Wer/2.png", "images/Wer/3.png", "images/Wer/4.png", "images/Wer/5.png", "images/Wer/6.png", "images/Wer/7.png", "images/Wer/8.png", "images/Wer/9.png", "images/Wer/10.png", "images/Wer/11.png");
var woPix = new Array("images/Wo/1.png", "images/Wo/2.png", "images/Wo/3.png", "images/Wo/4.png", "images/Wo/5.png", "images/Wo/6.png", "images/Wo/7.png", "images/Wo/8.png", "images/Wo/9.png", "images/Wo/10.png");
var wasPix = new Array("images/Was/1.png", "images/Was/2.png", "images/Was/3.png", "images/Was/4.png", "images/Was/5.png", "images/Was/6.png", "images/Was/7.png", "images/Was/8.png", "images/Was/9.png", "images/Was/10.png");

var werPixName = new Array("Erziehungsberechtige:r im Schichtdienst", "Alleinerziehende:r Erziehungsberechtigte:r", "Gleichgeschlechtliche Erziehungsberechtigte", "Erziehungsberechtigte:r im Rollstuhl", "Eltern beide in Vollzeit", "Erwerbslose Erziehungsberechtigte", "Familie mit Migrationsgeschichte", "Mutter mit Kopftuch", "Elternteil mit geringen Deutschkenntnissen", "Eltern mit negativen Erfahrungen in Bildungsinstitutionen", "Psychisch erkrankte:r Erziehungsberechtigte:r");
var woPixName = new Array("Pädagogische Einrichtung", "Religiöses Gemeindezentraum", "Beratungsstelle für Familien", "Kulturverein", "Jugendamt", "Turnhalle", "Außengelände", "Gruppenraum", "Caféteria einer sozialen Einrichtung", "Stadtteilzentrum");
var wasPixName = new Array("Offenes Elternfrühstück", "Mutter-Kind-Turnen", "Weihnachtsfeier", "Elternnachmittag", "Elterngespräch", "Basteltag", "Aushang", "Eltern- oder Infobrief", "Informelles Elterngespräch", "Eingewöhnungs- oder Begleitungsphase");


function addActivityItem() {
  document.getElementById("myWerPicture").src = "images/Wer/Wer.png";
  document.getElementById("myWerPicture").alt = "Wer";
  document.getElementById("werCaption").innerHTML = "Wer";
  document.getElementById("myWoPicture").src = "images/Wo/Wo.png";
  document.getElementById("myWoPicture").alt = "Wo";
  document.getElementById("woCaption").innerHTML = "Wo";
  document.getElementById("myWasPicture").src = "images/Was/Was.png";
  document.getElementById("myWasPicture").alt = "Was";
  document.getElementById("wasCaption").innerHTML = "Was";
}

// attributes random cards
function choosePics() {
    var altersgruppe = document.getElementById("altersgruppe").value;
    if (altersgruppe == "1") {
      var randomNum1 = Math.floor(Math.random() * werPix.length);
      document.getElementById("myWerPicture").src = werPix[randomNum1];
      document.getElementById("myWerPicture").alt = werPixName[randomNum1];
      document.getElementById("werCaption").innerHTML = werPixName[randomNum1];
      var randomNum2 = Math.floor(Math.random() * woPix.length);
      document.getElementById("myWoPicture").src = woPix[randomNum2];
      document.getElementById("myWoPicture").alt = woPixName[randomNum2];
      document.getElementById("woCaption").innerHTML = woPixName[randomNum2];
      var randomNum3 = Math.floor(Math.random() * wasPix.length);
      document.getElementById("myWasPicture").src = wasPix[randomNum3];
      document.getElementById("myWasPicture").alt = wasPixName[randomNum3];
      document.getElementById("wasCaption").innerHTML = wasPixName[randomNum3];
    };
    if (altersgruppe == "2") {
    }
    if (altersgruppe == "3") {
    }
}
