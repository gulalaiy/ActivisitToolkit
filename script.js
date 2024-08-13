/* .js files add interaction to your website */
// Facts
var factList = [
  "Approximately 30,000 species per year, about three per hour, are being driven to extinction.",
  "Habitat destruction is the primary cause of wildlife extinction worldwide.",
  "People kill more than 100 million sharks throughout the world each year — often illegally to make shark-fin soup.",
  "Wildlife trafficking is the fourth most profitable criminal enterprise globally.",
  "Four percent of the mammals living in the world at present are wild animals. Thirty-six percent are human beings and 60 percent are farm animals.",
  "There were once dozens of rhinoceros species. Now only five remain.",
  "It’s been estimated that plastic pollution kills 100,000 marine mammals every year.",
  "Nearly 90% of the world’s wild flowering plant species depend, entirely, or at least in part, on animal pollination, along with more than 75% of the world’s food crops and 35% of global agricultural land."
];


var fact = document.getElementById("fact");
var button = document.getElementById("myButton");
var count = 0;

// Listening for button clicks
if (myButton) {
button.addEventListener("click", displayFact)
}

// Function for displaying facts
function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
    
}