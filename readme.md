<!-- CALCOLO DEL PREZZO DEL BIGLIETTO DEL TRENO -->

<!-- Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca. -->

Creo un prompt che chieda i chilometri da percorrere creando una variabile trasformandola in numero

Creo un prompt che chieda l'età del passeggero creando una variabile trasformandola in numero

Creo variabile dell' elemento html su cui stampare

Se i dati inseriti dall'utente sono realmente numeri:

    Se il numero dell'età è un numero intero:

        -Creo un prompt che chieda i chilometri da percorrere creando una variabile trasformandola in numero

        -Creo un prompt che chieda l'età del passeggero creando una variabile trasformandola in numero

        -Creo variabili di numeri per i calcoli degli sconti 

        -Definisco una variabile per fare il primo calcolo del costo del biglietto intero basandosi sul prezzo al chilometro

            -Se il valore di età è inferiore a 18 modifico la variabile del prezzo del biglietto e stampo il prezzo scontato del 20%

            -Se il valore di età è superiore a 65 modifico la variabile del prezzo del biglietto e stampo il prezzo scontato dell 40%

        -Stampo prezzo del biglietto in forma umana (con massimo due decimali, per indicare centesimi sul prezzo) con sconti solo se applicabili

    Altrimenti esce un avviso

Altrimenti esce un avviso cattivissimo


