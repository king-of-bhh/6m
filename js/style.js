var myVar;

function time() {
  myVar = setTimeout(showPage, 5000);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("text").style.display = "block";
}
