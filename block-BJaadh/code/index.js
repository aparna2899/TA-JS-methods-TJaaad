// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/


// - Find the index of `101` in numbers

console.log(numbers.indexOf(101));

// - Find the last index of `9` in numbers

console.log(numbers.lastIndexOf(9));

// - Convert value of strings array into a sentance like "This is a collection of words"

console.log(strings.join(' '));

// - Add two new words in the strings array "called" and "sentance"

console.log(strings.push("called","sentance"));


// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"

console.log(strings.join(' '));

// - Remove the first word in the array (strings)

delete strings[0];
console.log(strings);

// - Find all the words that contain 'is' use string method 'includes'
  
strings.forEach(element => {
  if(element.includes('is'))
  console.log(element);
});

// - Find all the words that contain 'is' use string method 'indexOf'

strings.forEach(element => {
  if(element.indexOf('is') != -1)
  console.log(element);
});

// - Check if all the numbers in numbers array are divisible by three use array method (every)

isDivisibleByThree = (num) => num % 3 == 0;
console.log(numbers.every(isDivisibleByThree)) ;

// -  Sort Array from smallest to largest

let clonedArray = [...numbers];
clonedArray.sort(function(a,b){
  return a - b;
});
console.log(clonedArray)

// - Remove the last word in strings

strings.pop();

// - Find largest number in numbers

let largestNum = 0;
numbers.forEach(element => {
  if(largestNum < element)
  largestNum = element;
})
console.log(largestNum);

// - Find longest string in strings

let longestStr = '';
strings.forEach(element => {
  if(longestStr.length < element.length)
  longestStr = element;
})
console.log(longestStr);


// - Find all the even numbers

console.log(numbers.filter(num => num % 2 === 0));

// - Find all the odd numbers

console.log(numbers.filter(num => num % 2 != 0));

// - Place a new word at the start of the array use (unshift)

strings.unshift('new word');

// - Make a subset of numbers array [18,9,7,11]

console.log(numbers.slice(3,7));

// - Make a subset of strings array ['a','collection']

console.log(strings.slice(3,5));

// - Replace 12 & 18 with 1221 and 1881

numbers.splice(1,1,1221);
numbers.splice(3,1,1881);


// - Replace words in strings array with the length of the word
 
strings.forEach(element => {
  element = element.length;
})

// - Find the sum of the length of words using above question

let sum = 0;
strings.forEach(element => {
  element = element.length;
  sum += element;
})
console.log(sum)

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'

customers.forEach(element => {
  if(element.firstname.includes('J',0))
  console.log(element.firstname);
});

// - Create new array with only first name

let firstName = [];
customers.forEach(element => {
  firstName.push(element.firstname);
});
console.log(firstName);

// - Create new array with all the full names (ex: "Joe Blogs")

let fullName = [];
customers.forEach(element => {
  fullName.push(element.firstname.concat(' ',element.lastname));
});
console.log(fullName);

// - Sort the array created above alphabetically

console.log(fullName.sort());

// - Create a new array that contains only user who has at least one vowel in the firstname.
 
let newArray = [];
customers.forEach(element => {
if(element.firstname.includes('a') || element.firstname.includes('e') || element.firstname.includes('i') || element.firstname.includes('o') || element.firstname.includes('u')) 
newArray.push(element);
});
console.log(newArray)

