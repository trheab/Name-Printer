var container = document.getElementById("container");
var expandButton = document.querySelector(".expand-button");
var outputContainer = document.getElementById("outputContainer");
var optionsContainer = document.querySelector(".container .options");
var sweepButton = document.querySelector(".container .sweep-button");

function openModal() {
  var myModal = new bootstrap.Modal(document.getElementById('myModal'));
  myModal.show();
}

function expandContainer() {
  container.classList.add("container-expanded");
  expandButton.classList.add("expand-button-hidden");
}

function toggleOptions() {
  optionsContainer.classList.toggle("open");
  sweepButton.classList.toggle("open");
}

const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
});

function run() {
  var output = "";
  var option1 = document.getElementById("field1").value || "Scheels";
  var option2 = document.getElementById("field2").value || ".com";

  for (var i = minLines; i <= maxLines; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output += option1 + " " + option2 + "<br>";
    } else if (i % 3 === 0) {
      output += option1 + "<br>";
    } else if (i % 5 === 0) {
      output += option2 + "<br>";
    } else {
      output += i + "<br>";
    }
  }

  outputContainer.innerHTML = output;
  outputContainer.classList.add("show");
}

function reset() {
  outputContainer.innerHTML = "";
  outputContainer.classList.remove("show");
  document.getElementById("field1").value = "";
  document.getElementById("field2").value = "";
  document.getElementById("field3").value = "";
  document.getElementById("field4").value = "";
  minLines = 1;
  maxLines = 100;
}

function applyCustomText(field) {
  var inputValue = document.getElementById(field).value;
  var selectionStart = document.getElementById(field).selectionStart;
  var selectionEnd = document.getElementById(field).selectionEnd;

  if (selectionStart === selectionEnd) {
    document.getElementById(field).value = inputValue;
  } else {
    var currentValue = document.getElementById(field).value;
    var updatedValue =
      currentValue.substring(0, selectionStart) +
      inputValue +
      currentValue.substring(selectionEnd);
    document.getElementById(field).value = updatedValue;
  }
}

function setMinLines(value) {
  minLines = parseInt(value);
}

function setMaxLines(value) {
  maxLines = parseInt(value);
}

var minLines = 1;
var maxLines = 100;


  function expandContainerAndOpenModal() {
    expandContainer();
    openModal();
  }

