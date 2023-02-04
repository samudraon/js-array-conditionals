var numbers = [45, 21, 56, 89, 94]
// use push to add element to an array as the last element array
// numbers.push(41);
// console.log(numbers);

var singer = ['balam', 'kalam', 'gelam']
singer.unshift('atiq', 'robin')
console.log(singer);
// singer.push('ailam');
console.log(singer);
// remove first element form an array
numbers.shift();
console.log(numbers);
// use pop to get out from array
singer.pop();
// console.log(singer);

var fruits = ['Apple', 'Banana', 'Orange'];
var element = fruits.indexOf('Banana');
console.log(element);

fruits[1] = 'Mango';
console.log(fruits);

fruits.pop();
fruits.push('Watermelon');
console.log(fruits);