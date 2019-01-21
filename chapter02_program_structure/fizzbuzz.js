for (let number = 0; number <= 100; number++) {
    let res = ""
    if (number % 3 === 0) res += "Fizz"
    if (number % 5 === 0) res += "Buzz"
    console.log(res || number)
}