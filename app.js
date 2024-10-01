// Definimos la función sum
const sum = (a, b) => {
    return a + b;
}

// Declaramos la función fromEuroToDollar
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen =  function(valueInDollar) {
    let valueInYen =  valueInDollar * (1 / 1.07) * 156.5;
    return valueInYen;
    }
  
const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * (0.87 / 156.5) 
    return valueInPound;
}
   
    

// Exportamos las funciones
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };