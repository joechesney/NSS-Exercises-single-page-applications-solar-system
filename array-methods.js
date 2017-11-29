var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
const el = document.getElementById("planets");
planets.forEach(function (elem){
    el.innerHTML += `${elem} `; // adds each element of the array
});
el.innerHTML += "<br>";
// Use the map method to create a new array where the first letter of each planet is capitalized
let CapitalPlanets = planets.map(function(elem){
    el.innerHTML+= elem.charAt(0).toUpperCase() + elem.slice(1) + " "; //capitalizes the first letter, then adds the rest of the string
    return elem.charAt(0).toUpperCase() + elem.slice(1) + " ";
})
console.log(CapitalPlanets);
// Use the filter method to create a new array that contains planets with the letter 'e'
let planetsWithE = planets.filter(function(elem){
    if (elem.indexOf("e") !== -1){ //checks that an index of 'e' is true
        return elem;
    }
});
console.log(planetsWithE);

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

let wordsSentence = words.reduce((total, elem) => total += " " + elem);

el.innerHTML += "<br>" + wordsSentence + ".";