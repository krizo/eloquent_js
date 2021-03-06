## Chapter 2 - Program structure

##### Conditionals

```javascript
let num = Number(prompt("Pick a number"));

if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}
```

##### while loops

```javascript
let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}
```

##### do...while loops

```javascript
let yourName;
do {
yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);
```

##### for loops

```javascript
for (let line = "#"; line.length < 8; line+= "#") {
    console.log(line);
}
```

##### dispatching value with switch 

```javascript
switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}
```

## Chapter 3 - Functions

### Defining a function

##### Declaration notation
```javascript
function square(x) {
  return x * x;
}
```

##### Function as variable
```javascript
const power = function(base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

console.log(power(2, 10));
```

##### Arrow functions

The arrow comes after the list of parameters and is followed by the function’s body. 
It expresses something like “this input (the parameters) produces this result (the body)”.

```javascript
const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
```

##### Function's optional parameters

```javascript
function power(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}

console.log(power(4));
// → 16
console.log(power(2, 6));
// → 64
```

##### Closure

Being able to reference a specific instance of a local binding in an enclosing scope—is called closure. A function that references bindings from local scopes around it is called a closure. This behavior not only frees you from having to worry about lifetimes of bindings but also makes it possible to use function values in some creative ways.
```javascript
function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));
// → 10
```

A good mental model is to think of function values as containing both the code in their body and the environment in which they are created. When called, the function body sees the environment in which it was created, not the environment in which it is called.


