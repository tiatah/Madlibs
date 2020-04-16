function voila() {
  var storyDiv = document.getElementById("name");
  var body = document.getElementById("body").value;
  var fluid = document.getElementById("fluid").value;
  var substance = document.getElementById("substance").value;
  storyDiv.innerHTML =
    name +
    " is sick with the" +
    body +
    " flu " +
    " Drink more " +
    fluid +
    "and take" +
    substance +
    "as needed.";
}

var voila = document.getElementById("voila_button");
voila_Button.addEventListener("click", voila);
