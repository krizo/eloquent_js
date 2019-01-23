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
