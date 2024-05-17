// Funzione per generare un numero casuale compreso tra min e max
function generaNumeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Array di squadre di calcio con nomi e proprietà inizializzate a 0 
const squadre = [
    {nome: 'Juventus', puntiFatti: 0, falliSubiti: 0},
    {nome: 'Milan', puntiFatti: 0, falliSubiti: 0},
    {nome: 'Inter', puntiFatti: 0, falliSubiti: 0},
    {nome: 'Roma', puntiFatti: 0, falliSubiti: 0},
    {nome: 'Napoli', puntiFatti: 0, falliSubiti: 0},
];

// Genera numeri casuali per i punti fatti e i falli subiti per ogni squadra
squadre.forEach(squadra => {
    squadra.puntiFatti = generaNumeroCasuale(0, 100);
    squadra.falliSubiti = generaNumeroCasuale(0, 50);
});

// Creazione di un nuovo array con nomi e falli subiti
const squadreNomiFalli = squadre.map(squadra => {
    return {nome: squadra.nome, falliSubiti: squadra.falliSubiti};
});

// Stampa tutte le informazioni a schermo
document.body.innerHTML += "<h2>Informazioni complete sulle squadre:</h2>";
squadre.forEach(squadra => {
    document.body.innerHTML += `<p>${squadra.nome} - Punti Fatti: ${squadra.puntiFatti}, Falli Subiti: ${squadra.falliSubiti}</p>`;
});

document.body.innerHTML += "<h2>Array con nomi e falli subiti:</h2>";
squadreNomiFalli.forEach(squadra => {
    document.body.innerHTML += `<p>${squadra.nome} - Falli Subiti: ${squadra.falliSubiti}</p>`;
});

// Stampa tutte le informazioni in console
console.log("Informazioni complete selle squadre:");
console.table(squadre);
console.log("Array con nomi e falli subiti:");
console.table(squadreNomiFalli);