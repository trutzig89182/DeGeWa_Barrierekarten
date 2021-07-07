document.getElementById("ziehenButton").addEventListener("click", choosePics);

// loads picture paths into arrays
var werPix = new Array("images/Wer/1.png", "images/Wer/2.png", "images/Wer/3.png", "images/Wer/4.png", "images/Wer/5.png", "images/Wer/6.png", "images/Wer/7.png", "images/Wer/8.png", "images/Wer/9.png", "images/Wer/10.png", "images/Wer/11.png");
var woPix = new Array("images/Wo/1.png", "images/Wo/2.png", "images/Wo/3.png", "images/Wo/4.png", "images/Wo/5.png", "images/Wo/6.png", "images/Wo/7.png", "images/Wo/8.png", "images/Wo/9.png", "images/Wo/10.png");
var wasPix = new Array("images/Was/1.png", "images/Was/2.png", "images/Was/3.png", "images/Was/4.png", "images/Was/5.png", "images/Was/6.png", "images/Was/7.png", "images/Was/8.png", "images/Was/9.png", "images/Was/10.png");



// attributes random cards
function choosePics() {
     var randomNum1 = Math.floor(Math.random() * werPix.length);
     document.getElementById("myWerPicture").src = werPix[randomNum1];
     var randomNum2 = Math.floor(Math.random() * woPix.length);
     document.getElementById("myWoPicture").src = woPix[randomNum2];
     var randomNum3 = Math.floor(Math.random() * wasPix.length);
     document.getElementById("myWasPicture").src = wasPix[randomNum3];
}
