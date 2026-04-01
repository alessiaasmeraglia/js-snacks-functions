/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function contaVocali(stringa) {
    let count = 0;
    const vocali = "aeiouAEIOU";

    for (let i=0; i<stringa.length; i++) {
        if (vocali.includes(stringa[i])) {
            count++;
        }
    }

    return count;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(contaVocali(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)

/*const word = 'javascript';

// Dichiara la funzione qui.
const contaVocali = (stringa) => {
    const vocali = "aeiouAEIOU";
    return stringa.split("").filter(lettera => vocali.includes(lettera)).length;
};

// Invoca la funzione qui e stampa il risultato in console
console.log(contaVocali(word));*/