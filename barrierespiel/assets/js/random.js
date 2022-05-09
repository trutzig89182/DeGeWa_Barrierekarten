document.getElementById("ziehenButton").addEventListener("click", choosePics);
document.getElementById("altersgruppe").addEventListener("change", addActivityItem, false);

// loads picture paths into arrays
var werPix_a = new Array("images/a/Wer/1.png", "images/a/Wer/2.png", "images/a/Wer/3.png", "images/a/Wer/4.png", "images/a/Wer/5.png", "images/a/Wer/6.png", "images/a/Wer/7.png", "images/a/Wer/8.png", "images/a/Wer/9.png", "images/a/Wer/10.png", "images/a/Wer/11.png");
var woPix_a = new Array("images/a/Wo/1.png", "images/a/Wo/2.png", "images/a/Wo/3.png", "images/a/Wo/4.png", "images/a/Wo/5.png", "images/a/Wo/6.png", "images/a/Wo/7.png", "images/a/Wo/8.png", "images/a/Wo/9.png", "images/a/Wo/10.png");
var wasPix_a = new Array("images/a/Was/1.png", "images/a/Was/2.png", "images/a/Was/3.png", "images/a/Was/4.png", "images/a/Was/5.png", "images/a/Was/6.png", "images/a/Was/7.png", "images/a/Was/8.png", "images/a/Was/9.png", "images/a/Was/10.png");

var werPixName_a = new Array("Erziehungsberechtige:r im Schichtdienst", "Alleinerziehende:r Erziehungsberechtigte:r", "Gleichgeschlechtliche Erziehungsberechtigte", "Erziehungsberechtigte:r im Rollstuhl", "Eltern beide in Vollzeit", "Erwerbslose Erziehungsberechtigte", "Familie mit Migrationsgeschichte", "Mutter mit Kopftuch", "Elternteil mit geringen Deutschkenntnissen", "Eltern mit negativen Erfahrungen in Bildungsinstitutionen", "Psychisch erkrankte:r Erziehungsberechtigte:r");
var woPixName_a = new Array("Pädagogische Einrichtung", "Religiöses Gemeindezentraum", "Beratungsstelle für Familien", "Kulturverein", "Jugendamt", "Turnhalle", "Außengelände", "Gruppenraum", "Caféteria einer sozialen Einrichtung", "Stadtteilzentrum");
var wasPixName_a = new Array("Offenes Elternfrühstück", "Mutter-Kind-Turnen", "Weihnachtsfeier", "Elternnachmittag", "Elterngespräch", "Basteltag", "Aushang", "Eltern- oder Infobrief", "Informelles Elterngespräch", "Eingewöhnungs- oder Begleitungsphase");

var werPix_b = new Array("images/b/Wer/1.png");
var woPix_b = new Array("images/b/Wo/1.png");
var wasPix_b = new Array("images/b/Was/1.png");

var werPixName_b = new Array("GZ");
var woPixName_b = new Array("GZ");
var wasPixName_b = new Array("GZ");

var werPix_c = new Array("images/c/Wer/1.png");
var woPix_c = new Array("images/c/Wo/1.png");
var wasPix_c = new Array("images/c/Was/1.png");

var werPixName_c = new Array("GZ");
var woPixName_c = new Array("GZ");
var wasPixName_c = new Array("GZ");





function addActivityItem() {
  document.getElementById("myWerPicture").src = "images/deckkarten/Wer.png";
  document.getElementById("myWerPicture").alt = "Wer";
  document.getElementById("werCaption").innerHTML = "Wer";
  document.getElementById("myWoPicture").src = "images/deckkarten/Wo.png";
  document.getElementById("myWoPicture").alt = "Wo";
  document.getElementById("woCaption").innerHTML = "Wo";
  document.getElementById("myWasPicture").src = "images/deckkarten/Was.png";
  document.getElementById("myWasPicture").alt = "Was";
  document.getElementById("wasCaption").innerHTML = "Was";
}

// attributes random cards
function choosePics() {
    var altersgruppe = document.getElementById("altersgruppe").value;
    if (altersgruppe == "a") {
      var randomNum1 = Math.floor(Math.random() * werPix_a.length);
      document.getElementById("myWerPicture").src = werPix_a[randomNum1];
      document.getElementById("myWerPicture").alt = werPixName_a[randomNum1];
      document.getElementById("werCaption").innerHTML = werPixName_a[randomNum1];
      var randomNum2 = Math.floor(Math.random() * woPix_a.length);
      document.getElementById("myWoPicture").src = woPix_a[randomNum2];
      document.getElementById("myWoPicture").alt = woPixName_a[randomNum2];
      document.getElementById("woCaption").innerHTML = woPixName_a[randomNum2];
      var randomNum3 = Math.floor(Math.random() * wasPix_a.length);
      document.getElementById("myWasPicture").src = wasPix_a[randomNum3];
      document.getElementById("myWasPicture").alt = wasPixName_a[randomNum3];
      document.getElementById("wasCaption").innerHTML = wasPixName_a[randomNum3];
    };

    if (altersgruppe == "b") {
      var randomNum1 = Math.floor(Math.random() * werPix_b.length);
      document.getElementById("myWerPicture").src = werPix_b[randomNum1];
      document.getElementById("myWerPicture").alt = werPixName_b[randomNum1];
      document.getElementById("werCaption").innerHTML = werPixName_b[randomNum1];
      var randomNum2 = Math.floor(Math.random() * woPix_b.length);
      document.getElementById("myWoPicture").src = woPix_b[randomNum2];
      document.getElementById("myWoPicture").alt = woPixName_b[randomNum2];
      document.getElementById("woCaption").innerHTML = woPixName_b[randomNum2];
      var randomNum3 = Math.floor(Math.random() * wasPix_b.length);
      document.getElementById("myWasPicture").src = wasPix_b[randomNum3];
      document.getElementById("myWasPicture").alt = wasPixName_b[randomNum3];
      document.getElementById("wasCaption").innerHTML = wasPixName_b[randomNum3];
    };

    if (altersgruppe == "c") {
      var randomNum1 = Math.floor(Math.random() * werPix_c.length);
      document.getElementById("myWerPicture").src = werPix_c[randomNum1];
      document.getElementById("myWerPicture").alt = werPixName_c[randomNum1];
      document.getElementById("werCaption").innerHTML = werPixName_c[randomNum1];
      var randomNum2 = Math.floor(Math.random() * woPix_c.length);
      document.getElementById("myWoPicture").src = woPix_c[randomNum2];
      document.getElementById("myWoPicture").alt = woPixName_c[randomNum2];
      document.getElementById("woCaption").innerHTML = woPixName_c[randomNum2];
      var randomNum3 = Math.floor(Math.random() * wasPix_c.length);
      document.getElementById("myWasPicture").src = wasPix_c[randomNum3];
      document.getElementById("myWasPicture").alt = wasPixName_c[randomNum3];
      document.getElementById("wasCaption").innerHTML = wasPixName_c[randomNum3];
    };
}
