// console.log("javascript funziona");


var nomeUtente = prompt("Inserire il tuo nome");
// console.log("nome utente: ", nomeUtente);


var cognomeUtente = prompt("Inserire il tuo cognome");
// console.log("cognome utente: ", cognomeUtente);

var colorePrefUtente = prompt("inserire il tuo colore preferito");
// console.log("colore preferito dell' utente: ", colorePrefUtente);

var passwordRandom = nomeUtente + cognomeUtente + colorePrefUtente + "19";
// console.log("password generata: ", passwordRandom);

// output
document.getElementById('nome-utente').innerHTML = nomeUtente;
document.getElementById('cognome-utente').innerHTML = cognomeUtente;
document.getElementById('password').innerHTML = passwordRandom;
