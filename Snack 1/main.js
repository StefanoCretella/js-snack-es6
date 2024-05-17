// Funzione per generare un peso casuale tra 1 a 16
function generaPesoCasuale() {
    return Math.floor(Math.random() * 16) + 1;
}

// Array degli oggetti che descrivono le bici da corsa con pesi casuali
const biciclette = [
    { nome: 'Bianchi', peso: generaPesoCasuale() },
    { nome: 'Trek', peso: generaPesoCasuale() },
    { nome: 'Cannondale', peso: generaPesoCasuale() },
    { nome: 'Specialized', peso: generaPesoCasuale() },
];

// Funzione per trovare la bici con il peso minore
function trovaBiciLeggera(biciArray) {
    return biciArray.reduce((biciLeggera, biciAttuale) => {
        return biciAttuale.peso < biciLeggera.peso ? biciAttuale : biciLeggera;
    });
}

// Trova la bici leggera 
const biciLeggera = trovaBiciLeggera(biciclette);

// Stampa a schermo il nome della bici con rispettivo peso minore 
const outputDiv = document.getElementById('bici-leggera');
outputDiv.innerHTML = `<p>La bici più leggera è la <strong>${biciLeggera.nome}</strong> con un peso di <strong>${biciLeggera.peso} kg</strong>.</p>`;

// Stampa in console il nome della bici con rispettivo peso minore 
console.log(`La bici più leggera è la ${biciLeggera.nome} con un peso di ${biciLeggera.peso} kg.`);

// Stampa tutte le bici e i loro pesi a schermo e in console
biciclette.forEach(bici => {
    const p = document.createElement('p');
    p.textContent = `Bici: ${bici.nome}, Peso: ${bici.peso} kg`;
    outputDiv.appendChild(p);

    // Stampa nella console il nome della bici con rispettivo peso minore 
    console.log(`Bici: ${bici.nome}, Peso: ${bici.peso} kg`);
});