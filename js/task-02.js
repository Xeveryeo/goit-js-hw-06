const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ul = document.getElementById("ingredients");

for (let ingredient of ingredients) {
  let li = document.createElement("li");
  li.classList.add("item");
  li.innerText = ingredient;
  ul.appendChild(li);
}