/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

console.log("\nexercise 1°\n");
const pets = ["dog", "cat", "hamster", "redfish"];
for (i = 0; i < pets.length; i++) {
    console.log("l'elemento numero %d è %s", i + 1, pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

console.log("\n\nexercise 2°\n");
console.log("pets: ", pets);
let orderedArray1 = [];
for (i = 0; i < pets.length; i++) {
    orderedArray1[i] = pets[i];
}
orderedArray1.sort();
console.log("original: ", pets);
console.log("resolution: ", orderedArray1);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log("\n\nexercise 3°\n");
let orderedArray2 = [];
for (i = 0; i < pets.length; i++) {
    orderedArray2[i] = pets[i];
}
orderedArray2.reverse();
console.log("original: ", pets);
console.log("resolution: ", orderedArray2);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

console.log("\n\nexercise 4°\n");
arrayShiftPushed = [];
for (i = 0; i < pets.length; i++) {
    arrayShiftPushed[i] = pets[i];
}
arrayShiftPushed.push(arrayShiftPushed.shift());
console.log("original: ", pets);
console.log("resolution: ", arrayShiftPushed);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
    {
        brand: "Ford",
        model: "Fiesta",
        color: "red",
        trims: ["titanium", "st", "active"],
    },
    {
        brand: "Peugeot",
        model: "208",
        color: "blue",
        trims: ["allure", "GT"],
    },
    {
        brand: "Volkswagen",
        model: "Polo",
        color: "black",
        trims: ["life", "style", "r-line"],
    },
];

console.log("\n\nexercise 5°\n");
let carsEx5 = [];
let licensePlate = ["1ferg53", "2fdfgg5", "3gdfg23"];
for (i = 0; i < cars.length; i++) {
    carsEx5[i] = cars[i];
    carsEx5[i].licensePlate = licensePlate[i];
}

console.log("original: ", cars); //you can comment for better visualization
console.log("resolution: ", carsEx5);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

console.log("\n\nexercise 6°\n");
let carsEx6 = [];
const pandaCar = {
    brand: "Fiat",
    model: "Panda",
    color: "red",
    trims: ["4x4", "super", "eternal"],
};

for (i = 0; i < cars.length; i++) {
    carsEx6[i] = cars[i];
}
carsEx6.push(pandaCar);
for (i = 0; i < carsEx6.length; i++) {
    const newTrims = carsEx6[i].trims.slice();
    newTrims.pop();
    carsEx6[i].trims = newTrims;
}
console.log(carsEx6);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

console.log("\n\nexercise 7°\n");
const justTrims = [];
const carsEx7 = [...cars];
for (i = 0; i < carsEx7.length; i++) {
    const newTrims = carsEx6[i].trims.slice();
    justTrims[i] = newTrims.shift();
}
console.log("justTrims è: ", justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

console.log("\n\nexercise 8°\n");
for (i = 0; i < cars.length; i++) {
    const colorVal = cars[i].color;
    if (Array.from(colorVal)[0] === "b") {
        console.log("Fizz");
    } else {
        console.log("Buzz");
    }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/

console.log("\n\nexercise 9°\n");

const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];
let j = 0;
while (numericArray[j] !== 32) {
    console.log(numericArray[j]);
    j++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
// const charactersArray = ["g", "n", "u", "z", "d"];
// const alfabeticPosition = [];
// for (i = 0; charactersArray.length; i++) {
//     switch (true) {
//         case charactersArray[i] === "g":
//             alfabeticPosition[i] = parseInt("g");
//             break;
//         case charactersArray[i] === "n":
//             alfabeticPosition[i] = parseInt("n");
//         case charactersArray[i] === "u":
//             alfabeticPosition[i] = parseInt("n");
//         case charactersArray[i] === "z":
//             alfabeticPosition[i] = parseInt("n");
//         case charactersArray[i] === "d":
//             alfabeticPosition[i] = parseInt("n");
//         default:
//             console.log("not matched")
//     }
// }
// console.log(alfabeticArray);
