var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  // var y = document.getElementsByClassName("img-text");
  if (n > x.length) {slideIndex = 1}
  // if(n > y.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  // if(n < 1) {slideIndex = y.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  // for(i = 0; i < y.length; i++){
  //   y[i].style.display = "none";
  // }
  x[slideIndex-1].style.display = "block";
  // y[slideIndex-1].style.display = "block";
}