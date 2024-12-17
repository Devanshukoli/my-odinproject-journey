function favoriteAnimal(animal) {
  return animal + " is my favorite animal!"
}

console.log(favoriteAnimal('Goat'))

// add7 function.
function add7(num) {
  return num + 7;
}

console.log(add7(4))

// multiply function
function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 5))

// capitalize function
function capitalize(str) {
  return str.split(' ').map(char => char[0].toUpperCase() + char.slice(1)).join(' ');
}

console.log(capitalize('devanshu'))

// lastletter function
function lastletter(letter) {
  return letter[letter.length - 1];
}

console.log(lastletter('bhavesh'))
