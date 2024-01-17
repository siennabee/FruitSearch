const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

//filters for fruits that match the str
function search(str) {
  //if there is nothing in the search bar, the suggestions list will not be displayed
  if (str === "") {
    return [];
  }
  return fruit.filter((val) => {
    let lowerCaseVal = val.toLowerCase();
    return lowerCaseVal.includes(str);
  });
}

//fruit array gets filtered based on user input value and then get displayed as suggestions below search bar
function searchHandler() {
  const results = search(input.value.toLowerCase());
  showSuggestions(results, input.value);
}

function showSuggestions(results, query) {
  suggestions.innerHTML = "";

  if (results.length > 0) {
    for (i = 0; i < results.length; i++) {
      let item = results[i];
      // highlight first string match
      // the "i" flag modifier is used to perform case-insensitive matching in the string
      const match = item.match(new RegExp(query, "i"));
      item = item.replace(match[0], `<b>${match[0]}</b>`);

      suggestions.innerHTML += `<li>${item}</li>`;
    }
    input.classList.add("hasSuggestions");
    suggestions.classList.add("hasSuggestions");
  } else {
    results = [];
    suggestions.innerHTML = "";
    suggestions.classList.remove("hasSuggestions");
    input.classList.remove("hasSuggestions");
  }
}

// set the value of input to the selected suggestion
function useSuggestion(e) {
  input.value = e.target.innerText;
  input.focus();
  // clear or close the suggestion list
  suggestions.innerHTML = "";
  suggestions.classList.remove("hasSuggestions");
  //removes the class so that the input goes back to being rounded
  input.classList.remove("hasSuggestions");
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
