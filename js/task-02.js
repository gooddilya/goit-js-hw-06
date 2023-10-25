const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listItems = [];
const ingredientsList =
  document.getElementById("ingredients");
ingredients.forEach((ingredient) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add("item");
  listItems.push(ingredientItem);
});
ingredientsList.append(...listItems);
