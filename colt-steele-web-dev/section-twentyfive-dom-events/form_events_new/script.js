const form = document.querySelector("#shelterForm");
const input = document.getElementById("catName");
const list = document.getElementById("cats");

form.addEventListener("submit", function (e) {
  // Prevents form from immediately being submitted
  e.preventDefault();

  // Creates a list element and sets its value to the input value
  const catName = input.value;
  const newLI = document.createElement("LI");
  newLI.innerText = catName;
  list.append(newLI);
  input.value = "";
});
