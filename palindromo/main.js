//Chiedere all’utente di inserire una parola 
//Creare una funzione per capire se la parola inserita è palindroma

let parola = prompt("Inserisci la stringa da verificare:");

function controlloPalindroma (stringa) {
    //rimuovo eventuali spazi
    stringa = stringa.replaceAll(" ", "");

    //inverto la stringa
    let invertiStringa = stringa.split('').reverse('').join('');

    //controllo con l'if
    /* if (stringa == invertiStringa) {
        alert("La stringa inserita è palindroma");
    } else {
        alert("La stringa inserita non è palindroma");
    } */

    //provo controllo tramite switch
    switch (stringa == invertiStringa) {
        case true:
            alert("La parola è palindroma");
            break;
        case false:
            alert("La parola non è palindroma");
            break;
    }
}

//richiamo funzione
controlloPalindroma(parola);