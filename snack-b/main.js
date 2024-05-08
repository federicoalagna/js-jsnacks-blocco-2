'use strict'

function trovaIndice(array, elemento) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === elemento) {
            return i; 
        }
    }
    return -1; 
}


const array1 = [0, 1, 2, 3, 4, 5];
console.log(trovaIndice(array1, 3)); 

const array2 = ['a', 'b', 'c', 'd'];
console.log(trovaIndice(array2, 'e')); 