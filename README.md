# Introducción a NodeJS

## Requisitos


1. Realiza un fork del repositorio `https://github.com/rgarciamvm/node-jest.git`
2. Clona el repositorio a tu PC desde **TU USUARIO**
3. Realiza el ejercicio, en este caso practicarás con objetos y clases.

4. Una vez completado lanza los siguientes comandos:

```
git add .
git commit -m "done"
git push

```
## Testing

Este ejercicio se ha de completar mediante tests. Para los que no hayan tenido oportunidad de practicar con ellos, se acompaña una breve introducción al testing.

### Qué es el testing

El testing es un proceso por el cual se ejecuta una aplicación para validar y verificar que se cumplen todos los requisitos técnicos, de negocio y de funcionamiento de un software.

El testing es un proceso, no una única actividad. Por tanto, el diseño de tests durante las fases iniciales del desarrollo de un producto puede ayudar a prevenir deficiencias en el código o en el propio diseño del producto.

En este ejercicio, se han creaado todos los test necesarios para obtener la solución, y se han de ejecutar todos ellos para construir el código que cumpla con los requisitos.

Los tests probarán que el código funciona en cualquier situación en las que se prevé que lo haga. También nos servirá para el diseño o la implementación de nuevas funcionalidades, de manera que los cambios que se hagan al código no rompan lo que ya está funcionando.

### Testing con Jest

![](https://imgur.com/axvuIwT.png)



[Jest](https://jestjs.io/es-ES/) es un framework creado por Facebook y mantenido por la comunidad con apoyo de Facebook. Es fácil de instalar y no requiere de una configuración muy compleja para poder añadirlo en nuestros proyectos.

### Preconfiguración

Instala los packages npm:

```bash
npm install
```

## Estructura del proyecto:


```
starter-code/
├── test
│   └── sample.test.js
|   └── sortedList.test.js
└─ package.json
└─ index.js
```
Trabajaremos con el fichero `index.js`. Escribiremos la implementación de nuestra clase `SortedList`.

La carpeta `test` contiene todos los tests que se ejecutarán con Jest.

### Ejecución de los tests

Para correr los tests ejecutamos: `npm test`.

```
$ npm test

> introduccion-node@1.0.0 test
> node --experimental-vm-modules node_modules/jest/bin/jest.js

(node:58423) ExperimentalWarning: VM Modules is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
 PASS  test/sortedList.test.js
  SortedList
    Constructor
      ✓ should create an empty SortedList (1 ms)
      ✓ should have a property items
      ✓ should have a property length
    #add(x)
      ✓ should add a single value to SortedList (1 ms)
      ✓ should add a second value to SortedList, sorted (1 ms)
      ✓ should add a third value to SortedList, sorted (5 ms)
    #get(i)
      ✓ should return an OutOfBounds error if there is no element in that position (4 ms)
      ✓ should return the element in that position (18 ms)
    #max()
      ✓ should return an EmptyList error if there is no element in the list (1 ms)
      ✓ should return the max element in the list
    #min()
      ✓ should return an EmptyList exception if there is no element in the list (1 ms)
      ✓ should return the min element in the list
    #average()
      ✓ should return an EmptySortedList exception if there are no elements (1 ms)
      ✓ should return the average of elements in the array (1 ms)
    sum()
      ✓ should return a EmptySortedList exception if there are no elements in the list
      ✓ should add(sum) all elements of the array if there are elements in the list

 PASS  test/sample.test.js
  Sample Test
    ✓ should test that true === true (1 ms)

Test Suites: 2 passed, 2 total
Tests:       17 passed, 17 total
Snapshots:   0 total
Time:        0.317 s, estimated 1 s
Ran all test suites.
```


## SortedList Class

Hay que crear una clase que mantenga una lista ordenada de números, en orden ascendente.

La clase tendrá los siguientes métodos:

### Constructor

`new SortedList` debería crear un nuevo objeto de la clase `SortedList`.

El objeto tendría las propiedades `items` y `length`.

- `items` debe ser un array.
- `length` debe contener el número de elementos de ese array.

### Add

El método `add(x)` añade `x` al array `items` y lo ordena.

### Get

Este método obtiene el `n-esimo` valor de la lista.
En este caso necesitarás también la propiedad `length` que te proporciona el tamaño de la lista.

### Max

El método `max()` devuelve el valor más alto del array.

### Min
El método `min()` devuelve el menor valor de la lista.

### Average

El método `average()` devuelve el valor medio del array.

### Sum

El método `sum()` devuelve la suma de todos los valores.
