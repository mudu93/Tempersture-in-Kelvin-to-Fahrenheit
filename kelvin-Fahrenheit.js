//kelvin set to 293 at the start
const kelvin = 293;

//subtract 273 from kelvin & store it in celsius
const celsius = kelvin - 273;

//fahrenheit calculations
let fahrenheit = celsius * (9 / 5) + 32;

//save above result to get tam sayi
fahrenheit = Math.floor(fahrenheit);

//show temp in the console
console.log('The temperature is ${fahrenheit} degrees in fahrenheit.');