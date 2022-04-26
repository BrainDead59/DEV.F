# Quiz 

#### Nombre: Díaz Bryan
## Chapter 1: Into Programming

### Self-Evaluation

#### Section: Code

---

##### 1. What's a program?

> Es un conjunto de funciones, declaraciones, que permiten cumplir con un resultado mediante el uso lógica.

##### 2. What's a computer language?

> Es un conjunto de reglas semánticas y de sintaxis que permiten la implementación de diferentes tipos de datos, funciones y algoritmos.

##### 3. What's a variable?

> Es un espacio en memoria que se reserva para poder almacenar un valor.

##### 4. What's a statement?

> Una declaración es la definición del comportamiento que tendra nuestro programa, en cada una de las lineas 

##### 5. From the statement `a = b * 2` identify its parts _(literals, variables, operators)._

> a y b son variables, = y * son operadores de igualación y de multiplicación respectivamente.

##### 6. What's an expression?

> Es la forma en que definimos la interacción entre las variables.

##### 7. How many expressions can you indentify from the statement `a = b * 2;`?

> 3

##### 8. What's the difference between `interpreted` and `compiled` code?

> Un lenguaje interpretado se va ejecutando linea a linea en el momento que se ejecuta, el compilado necesita de un compilador para que se pueda ejecutar.

##### 9. Is JavaScript `interpreted` or `compiled`? Explain why.

> Es interpretado porque este se va ejecutando de arriba hacia abajo, cada una de las líneas.

#### Section: Try It Yourself

---

##### 10. Output Exercises.

Consider: `var a = 1;`

Write the code to:

###### 10.1. print `a` in the __console__

> console.log(a)

###### 10.2. show `a` in a __popup__

> window.alert(a)

##### 11. Input Exercises.

Code challenge:

Ask the user's name with a __prompt__ message `"Please, type your username"` and store it in a variable `username`, then log the value in the console.

Solution:

```js
var username=prompt("Please, type your username")
console.log(username)
```

#### Section: Operators

---

##### 12. Complete the sentence:

JavaScript has both u___ and b___ operators, and one special third operator

> No recuerdo

##### 13. Operators types.

Name the _types of operators_ you know, and give some __basic__ examples.

> Comparacion, igualdad, logicos
    a<b, a==c, a&&b

#### Section: Values & Types

---

##### 14. Name JavaScript built-in types aka as _primitive_ values.

> No recuerdo

##### 15. What's coercion in JS?

> Conversion entre los tipos de datos, como lo hacer Number en el prompt

##### 16. Explain the difference between `implicit` and `explicit` coercion in JS. Give examples.

> Number(prompt()), es explicita porque se esta indicando el tipo de dato, y el implicito es el que se da por default como prompt() da el tipo String por default

#### Section: Code Comments

---

##### 17. What are the two types of comments in JS? Give examples.

> //Hola
/* Hola */


##### 18. Why is it important to comment code?

> Para poder indicar que hace cada una de las secciones del código y que este sea mas comprensible para alguien que tenga que trabajar sobre este o realizar alguna modificación

#### Section Variables

---

##### 19. Does JavaScript use Static or Weak typing?

> Debido a que no se define el tipo de dato, JS es debil

##### 20. Describe `static typing` aka `type enforcement`.

> Son los lenguajes donde es necesario indicar el tipo de dato necesariamente, como en C++ o C

##### 21. Describe `weak typing` aka `dynamic typing`.

> Son los lenguajes donde no es necesario indicar el tipo de dato, como los es JS o Python

##### 22. Name some conventions to write constants in JS.

> Se pueden colocar con cons variable = function o value, se pueden asignar a valores y funciones.

#### Section: Blocks

---

##### 23. Is this valid code in JS?

```js
var amount = 100;

{
  amount = amount * 2;
  console.log(amount)
}
```

> Por lo que tengo entendio las llaves definen un bloque pero no los había visto así antes si una condicional, ciclo o función, pero creo que si funcionaria en JS

#### Section: Conditionals

---

##### 24. Write a block of code to validate if a variable `number` is less than `10` to log `one digit`, log `two digits` otherwise.

Solution:

```js
if(numer<10){
    console.log('one digit')
}else{
    console.log('two digits')
}
```

#### Section: Loops

---

##### 25. Write a block of code to log numbers from `0-9` using `while`, `do-while` and `for` loops.

**`while`** solution:

```js
// your code here
```

**`do-while`** solution:

```js
// your code here
```

**`for`** solution:

```js
// your code here
```

##### 26. What are the three clauses for a `for` loop?

> _your answer here_

#### Section: Functions

---

##### 27. What's a function?

> _your answer here_

##### 28. Write a function `sum` that receives two numbers as arguments and returns the sum of both.

Solution:

```js
// your code here
```

##### 29. What's `scope` in JS?

> _your answer here_

##### 30. Answer `true` or `false` for the following statements:

Consider:

```js
function outer() {
  var a = 1;

  function inner() {
    var b = 2;
  }

  inner();
}

outer();
```

###### 30.1. Does the `inner` function have access to the `outer` function scope?

> _your answer here_

###### 30.2. Does the `outer` function have access to the `inner` function scope?

> _your answer here_

#### Section: Challenges

---

##### 1.1 Create a function `calculateAreaOfACircle` that receives `radius` as parameter. Use a constant `PI` equal to `3.14159`. _Avoid the temptation of using the `Math`library._

Solution:

```js
// create the constat PI here


// create your function here


// Do NOT touch this code.
console.log('Expect area of a circle with radius = "3" to be "28.27431" ->', calculateAreaOfACircle(3) == 28.27431)
```