//Stabiliamo se la somma dei due numeri, del utente e del computer, è pari o dispari (usando una funzione)

//Generiamo i dati delle variabili
let scelta = prompt("Pari o Dispari");
let numeroUtente = prompt("scegli un numero da 1 a 5");
console.log(numeroUtente);
let numeroComputer = Math.floor(Math.random() * (6 - 1) + 1);
console.log(numeroComputer);

//Eseguo la somma
let somma = parseInt(numeroUtente) + parseInt(numeroComputer);
console.log("La somma è " + somma);

//Creo funzione per determinare chi ha vinto
function pariDispari (numero, scelta) {
    var condizione = "";
    //Verifico se l'argomento è PARI o DISPARI
    if (numero % 2 == 0) {
        condizione = "pari";
        console.log("La somma è PARI");
    } else {
        condizione = "dispari";
        console.log("La somma è DISPARI");
    }
    //Controllo chi ha vinto
    if (scelta == condizione) {
        alert("Ha vinto l'utente");
    } else {
        alert("Ha vinto il computer");
    }
}

//Richiamo la funzione
pariDispari(somma, scelta);

