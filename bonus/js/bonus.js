"use strict"

// definisco una variabile con il valore di un prompt che chiede pari o dispari
const sceltaUtente = prompt('pari o dispari?');

// definisco una variabile con un valore di prompt 1-9
const numeroUtente = Number(prompt('Scegli un numero da 1 a 9'));

// utente può inserire solo numeri
if (!isNaN(numeroUtente)) {

    // utente può inserire solo numeri interi
    if (Number.isInteger(numeroUtente)){

        // utente può inserire solo numeri da 1 a 9
        if ((numeroUtente >= 1) && (numeroUtente <= 9)){

            // definisco una variabile con un valore randomico tra 1 e 9
            const numeroComputer = Math.floor(Math.random()*9);

            // definisco una variabile con la somma di numeroUtente + numeroComputer = numeroTotale
            const numeroTotale = (numeroUtente + numeroComputer);

            // definisco una variabile che ci dice se il valore numeroTotale è pari o dispari
            let risultatoPariDispari;
            if (numeroTotale % 2 === 0){
                risultatoPariDispari = 'pari';
            }
            else {
                risultatoPariDispari = 'dispari';
            }


        
        }
        // Altrimenti esce questo avviso
        else {
            document.getElementById('messaggio').innerHTML = ("Puoi inserire solo un numero da 1 a 9 compresi");
        }

    }
    // Altrimenti esce questo avviso
    else {
        document.getElementById('messaggio').innerHTML = ("Il numero inserito deve essere un numero intero!");
    }

}
// Altrimenti esce questo avviso cattivissimo
else {
    document.getElementById('messaggio').innerHTML = ("PUOI INSERIRE SOLO NUMERI!!");
}

