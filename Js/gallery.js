function myFunction() {
  var drpdwn = document.getElementsByClassName("nav-link");
  if (drpdwn.style.display === "block") {
      document.getElementById("nav-items").style.display = "flex";
      drpdwn.style.display = "none";
  } else {
      document.getElementById("nav-items").style.display = "none";
      drpdwn.style.display = "block";
  }
}