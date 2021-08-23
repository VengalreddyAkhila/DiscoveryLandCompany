// function myFunction() {
//   var drpdwn = document.getElementsByClassName("nav-link");
//   if (drpdwn.style.display === "block") {
//       document.getElementById("nav-items").style.display = "flex";
//       drpdwn.style.display = "none";
//   } else {
//       document.getElementById("nav-items").style.display = "none";
//       drpdwn.style.display = "block";
//   }
// }

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}