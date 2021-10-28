let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.

let str = '';
function findLongestWord(arr){
 for (let word of arr) {
  if(word.length > str.length)
    str = word;
 }
 console.log(str);
}
findLongestWord(words);

// - Convert the above array "words" into an array of length of word instead of word.
 
newWords = [...words];
function convert(str){
  str = str.length;
  return str;
}
newWords = newWords.map(convert);
console.log(newWords)

// - Create a new array that only contains word with atleast one vowel.

let newArray = [];
words.forEach(element => {
if(element.includes('a') || element.includes('e') || element.includes('i') || element.includes('o') || element.includes('u')) 
newArray.push(element);
});
console.log(newArray);

// - Find the index of the word "rhythm"

console.log(words.indexOf("rhythm"))

// - Create a new array that contians words not starting with vowel.

let noVowelsAtStart = [];
words.forEach(element => {
  if(element.charAt(0) != 'a' && element.charAt(0) != 'e' && element.charAt(0) != 'i' && element.charAt(0) != 'o' && element.charAt(0) != 'u') 
  noVowelsAtStart.push(element);
  });
console.log(noVowelsAtStart);

// - Create a new array that contianse words not ending with vowel

let noVowelsAtEnd = [];
words.forEach(element => {
  if(element.charAt(element.length-1) != 'a' && element.charAt(element.length-1) != 'e' && element.charAt(element.length-1) != 'i' && element.charAt(element.length-1) != 'o' && element.charAt(element.length-1) != 'u') 
  noVowelsAtEnd.push(element);
  });
console.log(noVowelsAtEnd);

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers

let sum = 0;
function sumArray(numbers){
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}
console.log(sumArray(numbers));

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]

function multipleOfThree(num){
  return num % 3 == 0
}
console.log(numbers.filter(multipleOfThree));

// - Create a new array that contains only even numbers

function even(num){
  return num % 2 == 0
}
console.log(numbers.filter(even));

// - Create  a new array that contains only odd numbers.

function odd(num){
  return num % 2 != 0
}
console.log(numbers.filter(odd));

// - Create a new array that should have true for even number and false for odd numbers.

function findEvenAndOdd(num){
  return (num % 2 == 0) ? true : false;
}
console.log(numbers.map(findEvenAndOdd));

// - Sort the above number in assending order.

function sortArray(a, b) {
  return a - b;
}
console.log(numbers.sort(sortArray));

// - Does sort mutate the original array?

//Yes

// - Find the sum of the numbers in the array.

function add(accumulator,currentValue){
  return accumulator + currentValue;
}
console.log(numbers.reduce(add,0));

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

function averageNumbers(numArray){
  return sum / numbers.length;
}
console.log(averageNumbers(numbers));

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

let sumOfWords = 0, wordLength;
function averageWordLength(stringArray){
 for (let str of stringArray) {
   sumOfWords += str.length; 
 }
 wordLength = sumOfWords / stringArray.length;
 return wordLength;
}
console.log(averageWordLength(strings));