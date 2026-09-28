/*let tab = [12, 5, 19, 3, 27, 8, 14];
function bubbleSort(tab) {
    for (i = 0; i < tab.length; i++) {
        for (j = 0; j < tab.length - i; j++) {
            if (tab[j] > tab[j + 1]) {
                let temp = tab[j]
                tab[j] = tab[j + 1]
                tab[j + 1] = temp
            }
        }
    }
    return tab
}
console.log(bubbleSort(tab))*/



function bubbleSortByArrayLength(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      // Compare the lengths of the arrays inside the objects
      if (arr[i].myValues.length > arr[i + 1].myValues.length) {
        // Swap the objects
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

// Test data
const data = [
    {
	    cin : "AB123456",
	    nom : "Boushaba",
	    prenom : "Soufiane",
	    partiPolitique : "Indépendant",
	    age: 40,
	    electeurs: ["LA984515", "JA985181"]
    },
    {
	    cin : "HA416768",
	    nom : "Abounacer",
	    prenom : "Aymane",
	    partiPolitique : "Gamers",
	    age: 18,
	    electeurs: ["KA4645168"]
    }
];

console.log(bubbleSortByArrayLength(data));