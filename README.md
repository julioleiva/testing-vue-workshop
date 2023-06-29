## Taller de unit testing con JS impartido el 28 de junio:
Además de este README, a lo largo del proyecto podréis encontrar otros más específicos:

1. [TDD](https://github.com/julioleiva/testing-vue-workshop/blob/master/src/TDD/README.md) (Explicación del paradigma TDD con ejemplos prácticos)
2. [Tesing App.vue](https://github.com/julioleiva/testing-vue-workshop/blob/master/src/__tests__/README.md) (Testeando Router + Pinia)
3. [Testeando composables](https://github.com/julioleiva/testing-vue-workshop/blob/master/src/composables/__tests__/README.md) (Testeo de llamadas fetch + hook beforeEach + nextTick)
4. [Testeando Stores](https://github.com/julioleiva/testing-vue-workshop/blob/master/src/stores/__tests__/README.md)(Cómo testear un store creado con Pinia)

---


# Pruebas en JavaScript, con un enfoque en el testing de componentes en Vue3

## Introducción al Unit Testing

El _Unit Testing_ o pruebas unitarias, es un nivel de las pruebas de software donde se prueban las unidades más pequeñas de código por separado. Las "unidades" suelen ser funciones, métodos o componentes individuales de un programa.

Las pruebas unitarias son fundamentales para asegurar que cada pieza de tu código funcione como se espera. Además, permiten a los desarrolladores hacer cambios en el código con confianza, sabiendo que si algo se rompe, las pruebas lo detectarán.

## Tipos de Pruebas de Software

Además de las pruebas unitarias, hay varios otros tipos de pruebas que puedes realizar en tu código:

1. **Pruebas de integración**: Estas pruebas toman unidades individuales de código y las combinan para asegurar que trabajen juntas como se espera.

2. **Pruebas de regresión**: Estas pruebas se aseguran de que los cambios en el código no causen problemas con las funcionalidades que ya existían.

3. **Pruebas de aceptación del usuario (UAT)**: Estas pruebas se llevan a cabo con la finalidad de verificar si el sistema cumple o no con los requisitos del usuario.

## Roles y responsabilidades

1. **QATester (Quality Assurance Tester)**: Un QATester es responsable de garantizar la calidad del software antes de que se entregue al usuario final. Esto implica una variedad de tareas, incluyendo la creación y ejecución de planes de prueba, la identificación y documentación de defectos, y la colaboración con los desarrolladores para solucionar problemas. Los QATesters también pueden estar involucrados en la revisión de los requisitos del software para asegurarse de que son claros y testables. El tipo de pruebas que realizan los QATesters puede variar, pero a menudo incluye pruebas funcionales, pruebas de regresión, pruebas de usabilidad y pruebas de aceptación del usuario.

2. **Developer**: Los desarrolladores son responsables de escribir el código que implementa las funcionalidades del software. Como parte de sus responsabilidades de prueba, los desarrolladores a menudo realizan pruebas unitarias en su propio código para asegurarse de que cada componente individual del software funciona como se espera. También pueden estar involucrados en pruebas de integración para asegurarse de que los componentes del software funcionan correctamente juntos.

3. **e2e tester (End-to-End Tester)**: Un e2e tester se centra en las pruebas de extremo a extremo, que evalúan el funcionamiento del sistema completo, desde el principio hasta el final, para asegurarse de que el flujo de trabajo completo del sistema funciona como se espera. Esto puede implicar interactuar con el software de la misma manera que lo haría un usuario final, y verificar que el software se comporte correctamente en respuesta a estas interacciones.

4. **Integration tester**: Un Integration tester se centra en las pruebas de integración, que verifican que los diferentes componentes del software funcionan correctamente juntos. Esto puede implicar probar la interacción entre diferentes partes del software, como módulos o servicios, o entre el software y otros sistemas o servicios externos. Las pruebas de integración pueden ayudar a identificar problemas que no se detectan en las pruebas unitarias, como problemas de comunicación entre componentes o problemas con servicios externos.

# Vitest: Un marco de pruebas unitarias increíblemente rápido

Si has oído hablar de Vite, probablemente también has oído hablar de Vitest, el marco de pruebas unitarias rápido construido a partir de él. En este artículo, vamos a explorar qué es Vitest, cómo usarlo y por qué puede ser el próximo marco de pruebas para tus aplicaciones.

## ¿Qué es Vitest?

Antes de entrar en Vitest, notemos que Vite es una herramienta de construcción que permite inicios de servidor más rápidos y actualizaciones gracias a su método nativo basado en ESM para servir código bajo demanda. 

Por lo tanto, Vitest es el marco de pruebas unitarias construido sobre Vite y es un excelente marco de pruebas unitarias con muchas características modernas como:

- Pruebas de componentes para Vue, React, Svelte, Lit y más.
- Soporte para TypeScript y JSX listo para usar.
- ESM primero, espera de nivel superior.
- Trabajadores multihilo.
- Filtrado, tiempos de espera, concurrente para suite y pruebas.
- Pruebas de instantáneas compatibles con Jest.
- Chai incorporado para afirmaciones + APIs compatibles con Jest expect.
- Diseñado con una API compatible con Jest.

Comencemos con un ejemplo sencillo de cómo usar Vitest en un proyecto impulsado por Vite.

## Ejemplo de uso: escribir pruebas unitarias en Vitest

```js
import { describe, it, assert } from 'vitest';

describe('Math.sqrt() test', () => {
  it('SQRT4', () => {
    assert.equal(Math.sqrt(4), 2);
  });

  it('SQRT144', () => {
    assert.equal(Math.sqrt(144), 12);
  });

  it('SQRT2', () => {
    assert.equal(Math.sqrt(2), Math.SQRT2);
  });
});
```

## Extensión Vitest VS Code
Para acelerar las pruebas y facilitar la depuración, existe una extensión de VS Code para Vitest disponible en el [Marketplace](https://marketplace.visualstudio.com/items?itemName=ZixuanChen.vitest-explorer).

Esta extensión puede ayudar a:

1. filtrar pruebas por estado,
2. depurar más fácilmente,
3. inspeccionar la salida de la consola,
4. volver a ejecutar pruebas más rápido.

## Vitest vs Otros marcos de pruebas

Vitest se compara a menudo con Jest, otro popular marco de pruebas. Esto se debe a que está construido sobre Jest, lo que lo convierte en una versión más moderna y mejorada. Además, ofrece compatibilidad con la mayoría de las bibliotecas y APIs del ecosistema de Jest, lo que facilita la migración siguiendo su guía oficial aquí.

Al igual que otros marcos de pruebas ampliamente utilizados como Mocha y Jasmine, Vitest sigue un patrón simple de describe-it-assert o describe-it-expect. La ventaja de usar Vitest sobre ellos es que es rápido de configurar y no requiere la instalación de una biblioteca de aserciones separada.

La ventaja más conveniente de usar Vitest es que requiere una configuración mínima y puede ser utilizado con cualquier empaquetador. Puedes definir la configuración para tus entornos de desarrollo, construcción y pruebas como un solo pipeline bajo vite.config.js.

Un ejemplo simple sería configurar un entorno Jest y Babel para una aplicación React. A menudo, necesitarías instalar paquetes adicionales además de los que vienen con CRA:

- babel-jest,
- @babel/core,
- @babel/preset-env,
- @babel/preset-react,
- @babel/preset-typescript,
- @types/jest.

Después de eso, necesitarías un jest.config.js y un babel.config.js para completar la configuración.

Con Vitest, no tienes que instalar esas dependencias extra. Todo lo que necesitas es un archivo vite.config.js o vitest.config.js.


## Cobertura de los test y flujo de trabajo

La cobertura de las pruebas es una medida cuantitativa que muestra qué porcentaje de nuestro código está siendo probado. Nos ayuda a identificar las partes de nuestro código que no han sido probadas y, por lo tanto, podrían contener errores no detectados. Aunque no es recomendable buscar una cobertura del 100% (ya que algunas partes del código pueden ser difíciles de probar o no justificar los costos de las pruebas), tener una cobertura alta puede aumentar la confianza en la calidad y la fiabilidad del código.

Por ejemplo, si tenemos una cobertura del 70%, significa que el 70% de nuestro código está cubierto por pruebas unitarias. Este nivel de cobertura indica que gran parte de nuestro código ha sido probado y validado.

En un flujo de trabajo de Integración Continua (CI, por sus siglas en inglés), se ejecutan automáticamente pruebas unitarias cada vez que se hace un commit a la base de código. Esto permite detectar y corregir errores más rápidamente. Además, las herramientas de CI a menudo incluyen una manera de medir la cobertura de las pruebas y pueden fallar una build si la cobertura cae por debajo de un cierto umbral.

Supongamos que tenemos un proyecto con las siguientes pruebas y código:

```javascript
// calculator.js
export default class Calculator {
  add(a, b) {
    return a + b;
  }
  
  subtract(a, b) {
    return a - b;
  }
  
  multiply(a, b) {
    return a * b;
  }
  
  divide(a, b) {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }
}

// calculator.test.js
import Calculator from '../calculator';

test('adds two numbers', () => {
  const calculator = new Calculator();
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtracts two numbers', () => {
  const calculator = new Calculator();
  expect(calculator.subtract(3, 2)).toBe(1);
});
```

En este caso, estamos probando los métodos add y subtract, pero no multiply y divide. Si cada método tiene aproximadamente la misma cantidad de código, entonces nuestra cobertura de pruebas es del 50% (2 de 4 métodos están probados). Para llegar al 70% de cobertura, necesitaríamos añadir pruebas para al menos uno de los métodos que falta.
## EL FICHERO VITEST.CONFIG.JS

Este es un archivo de configuración para Vitest, una herramienta de pruebas unitarias para Vite. Aquí está el desglose de las partes clave:

1. `import { fileURLToPath } from 'node:url'`: Importa una utilidad de Node.js para convertir una URL de archivo en una ruta de archivo.

2. `import { mergeConfig } from 'vite'`: Importa una función de Vite para combinar dos configuraciones en una.

3. `import { configDefaults, defineConfig } from 'vitest/config'`: Importa dos utilidades de Vitest. `configDefaults` es el objeto de configuración por defecto de Vitest y `defineConfig` es una función para definir una configuración personalizada.

4. `import viteConfig from './vite.config'`: Importa la configuración existente de Vite de tu proyecto.

5. `export default mergeConfig(...)`: Exporta la configuración combinada de Vitest y Vite.

Ahora vamos a desglosar la sección `defineConfig`:

- `test`: Define la configuración para las pruebas de Vitest.
  - `environment: 'jsdom'`: Define que el entorno de pruebas será 'jsdom', que es una implementación de JavaScript del modelo de objetos de documento (DOM) estándar de la web.
  - `exclude: [...configDefaults.exclude, 'e2e/*']`: Excluye ciertos archivos o directorios de las pruebas. Aquí, se está excluyendo el directorio 'e2e' y cualquier otro archivo o directorio excluido por defecto en la configuración de Vitest.
  - `root: fileURLToPath(new URL('./', import.meta.url))`: Define la raíz del directorio de pruebas. Aquí, se está utilizando el directorio del archivo de configuración actual como raíz.
  - `transformMode: { web: [/\.[jt]sx$/] }`: Configura Vitest para transformar archivos con extensiones .jsx y .tsx cuando se están ejecutando pruebas en un entorno web.
  - `coverage: { provider: 'v8', reporter: ['text', 'json', 'html'] }`: Configura la cobertura de código para usar el proveedor 'v8' y emitir informes en formato de texto, JSON y HTML.

Por último, la configuración personalizada se combina con la configuración existente de Vite utilizando `mergeConfig`, y se exporta el resultado. Esto permite a Vitest utilizar la configuración existente de Vite y añadir su propia configuración adicional para las pruebas.


## ENLACES DE INTERÉS


- [Vitest: A Unit Test Framework](https://uploadcare.com/blog/vitest-unit-test-framework/)


- [How to Mock Fetch API with Vitest](https://runthatline.com/how-to-mock-fetch-api-with-vitest/)

- [Start Testing with Vitest: Beginner's Guide](https://vueschool.io/articles/vuejs-tutorials/start-testing-with-vitest-beginners-guide/)

- [Getting Started with Vitest](https://medium.com/vue-mastery/getting-started-with-vitest-4897d153b41f)

- [Vitest Documentation](https://vitest.dev/)


- [Vue Test Utils: What is Vue Test Utils?](https://test-utils.vuejs.org/guide/#what-is-vue-test-utils)

