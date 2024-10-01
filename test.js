
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("dos dolares son 293.8 yen", function() {
    const { fromDollarToYen } = require('./app.js');
    
    // Primero convertimos 2 dólares a yenes,  primero convierto dólares a euros y luego a yenes.
    const yen = fromDollarToYen(2); 
    // 1 dólar es 156.5 yenes, 
    const expected = 2 * (1 / 1.07) * 156.5;
 // Hago la prueba 
 expect(yen).toBeCloseTo(expected); 
});

test("156.5 Yen son 0.87 Pund", function(){
    const {fromYenToPound} = require('./app.js'); 
    const pound = fromYenToPound(2); 
    //si 156.5 Yen son 0.87 pound, entonces 313 Yen son 1.74 Pound (multiplico ambos por 2)
    const expected = 2 * 0.87;
    expect(fromYenToPound(313)).toBe(1.74);
});