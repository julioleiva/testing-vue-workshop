## Test-Driven Development (TDD)

El Desarrollo Guiado por Pruebas (TDD) es una metodología de desarrollo de software que se basa en repetir un ciclo corto de desarrollo. Primero, el desarrollador escribe una prueba automatizada que define una mejora de la funcionalidad o un nuevo requisito. Luego produce el código mínimo necesario para pasar esa prueba, y finalmente refina el código nuevo para cumplir con los estándares.

El TDD promueve la escritura de código simple, claro y que cumpla con los requisitos, además de ayudar a reducir el tiempo de depuración y aumentar la calidad del software.

## RED-GREEN-REFACTOR

Vamos a poner un ejemplo de la última pata de la metodología: el refactor. Y para ello vamos a ver qué debilidades puede tener una de nuestras funcionalidad `filterProductsByPrice`

Uno de los escenarios comunes que podrían romper esta función es si se pasa un valor no numérico o `undefined` para `maxPrice`, o si la lista de productos incluye un producto con un precio que no es un número. En estos casos, la comparación de los precios en el filtro fallará.

Veamos una situación en la que se pasa un valor no numérico para `maxPrice`:

```javascript
// filterProductsByPrice.js
function filterProductsByPrice(products, maxPrice) {
  return products.filter(product => product.price < maxPrice);
}

// test/filterProductsByPrice.test.js
import filterProductsByPrice from '../filterProductsByPrice';

test('throws an error when maxPrice is not a number', () => {
  const products = [
    { name: 'Apple', price: 1.00 },
    { name: 'Orange', price: 0.50 },
    { name: 'Banana', price: 0.25 },
  ];

  expect(() => filterProductsByPrice(products, 'one hundred')).toThrow(TypeError);
});
```

En este caso, estamos verificando que se lanza un error cuando `maxPrice` no es un número. Si ejecutas este test, debería fallar, ya que la función `filterProductsByPrice` actualmente no maneja este caso.

Esto demuestra la importancia de las pruebas unitarias. En este caso, una prueba unitaria nos ayudó a identificar un escenario en el que nuestra función podría fallar. Para hacer que la prueba pase, necesitamos actualizar nuestra función para manejar adecuadamente el caso en el que `maxPrice` no es un número.

Si deseas extender la robustez de tu función, podrías añadir controles adicionales al comienzo de tu función para validar los inputs:

```javascript
// filterProductsByPrice.js
function filterProductsByPrice(products, maxPrice) {
  if (typeof maxPrice !== 'number') {
    throw new TypeError('maxPrice must be a number');
  }
  if (!Array.isArray(products)) {
    throw new TypeError('products must be an array');
  }
  return products.filter(product => product.price < maxPrice);
}
```

Con estas comprobaciones adicionales, ahora tu función lanzará un error cuando se le pasen argumentos no válidos, lo cual es un comportamiento más seguro y predecible. Y si vuelves a ejecutar tu prueba unitaria, ahora debería pasar.