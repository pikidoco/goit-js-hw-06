//Scrieți un script care pentru fiecare element al matricei ingredients:

//Va crea un element <li> separat. Asigurați-vă că folosiți metoda document.createElement().
//Adăugați numele ingredientului ca conținut text.
//Adăugați clasa item la element.
//Apoi va insera toate elementele <li> dintr-o singură operație în lista ul#ingredients.

//Codul HTML conține o listă goală ul#ingredients.

//<ul id="ingredients"></ul>

//În fișierul JavaScript se află o matrice cu următoarele șiruri.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById("ingredients");
ingredients.forEach(ingredient => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");
  ingredientsList.appendChild(listItem);
});
