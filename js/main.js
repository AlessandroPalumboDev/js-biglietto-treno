"use strict"

// Creo un prompt che chieda i chilometri da percorrere creando una variabile trasformandola in numero
const km = Number(prompt("Dichiarare numero di Km da percorrere"));

// Creo un prompt che chieda l'età del passeggero creando una variabile trasformandola in numero
const eta = Number(prompt("Dichiarare età in anni"));

// Se i dati inseriti dall'utente sono realmente numeri
if (!isNaN(km) && !isNaN(eta)) {

    // Se il numero dell'età è un numero intero
    if (Number.isInteger(eta)) {
    } 






    



    // Altrimenti esce questo avviso
    else {
        console.log("L'età deve essere un numero intero!");
    }

}    
    // Altrimenti esce questo avviso cattivissimo
else {
    console.log("PUOI INSERIRE SOLO NUMERI!!");
}
