'use strict'

function stampa(array) {

    //--uso uno spazio vuoto a cui concateno il contenuto dell'array
    let risultato = '';
    
    for (let i = 0; i < array.length; i++) {
        risultato += array[i];
        if (i < array.length - 1) {
            risultato += ', ';
        }
    }

    //--è l'ultimo elemento quindi stampo senza la virgola
    return risultato;
}


const array1 = [1, 2, 3, 4, 5];
console.log(stampa(array1)); 
