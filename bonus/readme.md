<!-- chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9. Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer. Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari. -->

definisco una variabile con il valore di un prompt che chiede pari o dispari pari/dispari <!-- sceltaUtente -->

definisco una variabile con un valore di prompt 1-9 - numerico numero dell'utente (1/9) <!-- numeroUtente -->

utente può scrivere solo pari o dispari

    <!-- utente può inserire solo numeri -->
    -SE (!isNaN(numeroUtente)) {

        <!-- utente può inserire solo numeri interi -->
        -SE (Number.isInteger(numeroUtente)){

            <!-- utente può inserire solo numeri da 1 a 9 -->
            -SE (numeroUtente > 1 && numeroUtente < 9){

                definisco una variabile con un valore randomico tra 1 e 9 (valore del computer) <!-- numeroComputer -->

                definisco una variabile con la somma di numeroUtente + numeroComputer = numeroTotale <!-- numeroTotale -->

                definisco una variabile che ci dice se il valore totaleNumero è pari o dispari <!-- risultatoPariDispari -->

                stabilisco chi ha vinto

            }
            ELSE stampa messaggio "solo 1-9"

        }
        ELSE stampa messaggio "solo numero intero"

    }
    ELSE stampa messaggio "solo numeri"

ELSE stampa messaggio "solo pari dispari"