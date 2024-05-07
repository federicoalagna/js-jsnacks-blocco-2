'use strict'

let array1 = [1, 2, 3, 4,];
console.log("Array1:", array1);

let array2 = [5, 6,];
console.log("Array2:", array2);

while (array1.length > array2.length) {
    let randomElement = Math.floor(Math.random() * 30);
    array2.push(randomElement);
  }

console.log("Array1 dopo dell'aggiunta di elementi casuali:", array1);
console.log("Array2 dopo dell'aggiunta di elementi casuali:", array2);