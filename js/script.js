const age = parseInt(prompt('Quanti anni hai ?'));
const distance = parseFloat(prompt('Quanti chilometri vuoi percorrere ?'));
let price = (distance * 0.21).toFixed(2);

if (!isNaN(age) && !isNaN(distance)) {
    document.getElementById('full_price').innerHTML = `Prezzo biglietto intero: ${price}€`;
    if (age < 18) {
        price = (price * 0.8).toFixed(2);
        document.getElementById('price').innerHTML = `20% di sconto per gli under 18, prezzo finale: ${price}€`;
    } else if (age > 65) {
        price = (price * 0.6).toFixed(2);
        document.getElementById('price').innerHTML = `40% di sconto per gli over 65, prezzo finale: ${price}€`;
    } else {
        document.getElementById('price').innerHTML = `Tra i 18 e i 65 anni il prezzo è di: ${price}€`;
    }
} else {
    document.getElementById('price').innerHTML = `Non hai inserito dei valori numerici`;
}