"use strict"

// Creo un prompt che chieda i chilometri da percorrere creando una variabile trasformandola in numero
const km = Number(prompt("Dichiarare numero di Km da percorrere"));

// Creo un prompt che chieda l'età del passeggero creando una variabile trasformandola in numero
const eta = Number(prompt("Dichiarare età in anni"));

// Creo variabile dell' elemento html
let currentText = document.getElementById('risultato').innerHTML;

// Se i dati inseriti dall'utente sono realmente numeri
if (!isNaN(km) && !isNaN(eta)) {

    // Se il numero dell'età è un numero intero
    if (Number.isInteger(eta)) {

        // Creo variabili di numeri per i calcoli degli sconti
        const scontoMinore = Number(20);
        const scontoNonno = Number(40);

        // Creo variabili di numeri per il calcolo del costo del biglietto
        const costoBiglietto = Number(0.21)

        // Definisco una variabile per fare il primo calcolo del costo del biglietto intero basandosi sul prezzo al chilometro
        let prezzoBiglietto = km * costoBiglietto;

        // Se il valore di età è inferiore a 18 modifico la variabile del prezzo del biglietto e applico lo sconto del 20%
        if (eta < 18) {
            prezzoBiglietto = Number(prezzoBiglietto - (prezzoBiglietto / 100 * scontoMinore));
            document.getElementById('risultato').innerHTML = (`Utente minorenne: Il costo del biglietto è di: ${prezzoBiglietto.toFixed(2)} €`);
            console.log(`Utente minorenne: Il costo del biglietto è di: ${prezzoBiglietto.toFixed(2)} €`);
        }

        // Se il valore di età è superiore a 65 modifico la variabile del prezzo del biglietto e applico lo sconto dell 40%
        else if (eta > 65) {
            prezzoBiglietto = Number(prezzoBiglietto - (prezzoBiglietto / 100 * scontoNonno));
            document.getElementById('risultato').innerHTML = (`Utente oltre i 65 anni: Il costo del biglietto è di: ${prezzoBiglietto.toFixed(2)} €`);
            console.log(`Utente oltre i 65 anni: Il costo del biglietto è di: ${prezzoBiglietto.toFixed(2)} €`);
        }

        // Stampo prezzo del biglietto in forma umana (con massimo due decimali, per indicare centesimi sul prezzo) con sconti solo se applicabili
        else {
            console.log(`Il costo del biglietto è di: ${prezzoBiglietto.toFixed(2)} €`);
            document.getElementById('risultato').innerHTML = (`Il costo del biglietto è di: ${prezzoBiglietto.toFixed(2)} €`);
        }
    }

    // Altrimenti esce questo avviso
    else {
        console.log("L'età deve essere un numero intero!");
        document.getElementById('risultato').innerHTML = ("L'età deve essere un numero intero!");
    }
}

// Altrimenti esce questo avviso cattivissimo
else {
    console.log("PUOI INSERIRE SOLO NUMERI!!");
    document.getElementById('risultato').innerHTML = ("PUOI INSERIRE SOLO NUMERI!!");
}