
//  ----- MODAL WINDOW ------ //
// Get the modal
var modal1 = document.getElementById("modalChapter1");
var modal2 = document.getElementById("modalChapter2");

// Get the button that opens the modal
var btn1 = document.getElementById("openModalChapter1");
var btn2 = document.getElementById("openModalChapter2");

// Get the <span> element that closes the modal
var closeModalX = document.getElementsByClassName("close");
var closeModalLink = document.getElementsByClassName("closeLink");
// When the user clicks the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
  modal1.style.animationName ="fadeinModalWindow";
  modal1.style.animationDuration = "0.5s";
}
btn2.onclick = function() {
  modal2.style.display = "block";
  modal2.style.animationName ="fadeinModalWindow";
  modal2.style.animationDuration = "0.5s";
}

// When the user clicks on <span> (x), close the modal
/*
closeModalX[0].onclick = function() {
  modal1.style.display = "none";
}
closeModalX[1].onclick = function() {
  modal2.style.display = "none";
}
closeModalLink[0].onclick = function(){
  modal1.style.display = "none";
}
closeModalLink[1].onclick = function(){
  modal2.style.display = "none";
}
*/
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
// ----COLLAPSIBLE NAV -----
var navButton = document.getElementById("collapsible");
var navCollapsible = document.getElementsByClassName("collapsibleNav")[0];

navButton.addEventListener("click", function() {
   var content = this.nextElementSibling;
   if (content.style.display === "block") {
     content.style.display = "none";
   } else {
     content.style.display = "block";
     content.style.animationName ="slideCollapsibleNav";
     content.style.animationDuration = "0.2s";
   }
 });
