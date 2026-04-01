/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function filterNames(arrayNomi, lettera) {
    return arrayNomi.filter(function(el) {
        return el.toLowerCase().startsWith(lettera.toLowerCase());
    });
}


// Invoca la funzione qui e stampa il risultato in console

console.log(filterNames(names, "a"));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

/* 
// Arrow function
function filterNames(arrayNomi, lettera) {
    return arrayNomi.filter(el => 
        el.toLowerCase().startsWith(lettera.toLowerCase())
    );
}

console.log(filterNames(names, "a"));

 */