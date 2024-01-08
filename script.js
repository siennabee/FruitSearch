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

// testing to see if key inputs work:
// input.addEventListener("keydown", function (event) {
//   console.log("You pressed a key.");
// });

//filters for fruits that match the str
function search(str) {
  return fruit.filter((val) => {
    let lowerCaseVal = val.toLowerCase();
    return lowerCaseVal.includes(str);
  });
}

//fruit array gets filtered based on user input value and then get displayed as suggestions below search bar
function searchHandler(e) {
  let userInput = input.value;
  const results = search(userInput.toLowerCase());
  showSuggestions(results, userInput);
}

//only shows the top 10 results
function showSuggestions(result, inputVal) {
  const topTenResults = result.slice(0, 10);
  clearSuggestion();
  if (inputVal !== "") {
    //won't display suggestions when user input is empty
    input.className = "hasSuggestions";
    suggestions.className = "hasSuggestions";
    for (let fruit of topTenResults) {
      const li = document.createElement("li");
      li.innerHTML = boldText(fruit, inputVal);
      suggestions.append(li);
    }
  }
}

// makes the first instance of the text that matches the fruit array bold
function boldText(str, subStr) {
  let lowerCaseStr = str.toLowerCase();
  let subStrIndex = lowerCaseStr.indexOf(subStr.toLowerCase());
  if (subStrIndex === 0) {
    //if the first letter matches, it should be uppercase
    return (
      "<b>" +
      subStr[0].toUpperCase() +
      subStr.slice(1).toLowerCase() +
      "</b>" +
      str.slice(subStrIndex + subStr.length)
    );
  }
  return (
    str.slice(0, subStrIndex) +
    "<b>" +
    subStr.toLowerCase() +
    "</b>" +
    str.slice(subStrIndex + subStr.length)
  );
}

function clearSuggestion() {
  input.className = "";
  suggestions.className = "";
  suggestions.innerHTML = "";
}

//click event where the suggestion that is clicked on get displayed on search box. rest of the suggestions are cleared
function useSuggestion(e) {
  if (e.target.tagName === "B") {
    input.value = e.target.parentElement.innerText;
  } else {
    input.value = e.target.innerText;
  }
  clearSuggestion();
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
