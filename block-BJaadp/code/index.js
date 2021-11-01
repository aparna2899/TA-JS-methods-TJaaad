let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// NOTE: Use reduce method whereever you can to solve this exercise:

// Find the average grade

let sum = persons.reduce((acc,cv) => {
  return acc + cv.grade;
},0);
let average = sum/persons.length;
console.log(average);

// Find the average grade of male

let male = persons.filter((person) => person.sex == 'M');
let sumMale = male.reduce((acc,cv) => {
  return acc + cv.grade;
},0);
let maleAvg = sumMale/male.length;
console.log(maleAvg);

// Find the average grade of female

let female = persons.filter((person) => person.sex == 'F');
let sumFemale = female.reduce((acc,cv) => {
  return acc + cv.grade;
},0);
let femaleAvg = sumFemale/female.length;
console.log(femaleAvg);

// Find the highest grade

let highest = 0;
let findHighest = persons.reduce((acc,cv) => {
  if(cv.grade > highest)
  highest = cv.grade;
  return highest;
},0)
console.log(highest);

// Find the highest grade in male

let highestMale = 0;
let findHighestInMale = male.reduce((acc,cv) => {
  if(cv.grade > highestMale)
  highestMale = cv.grade;
  return highestMale;
},0)
console.log(highestMale);

// Find the highest grade in female

let highestFemale = 0;
let findHighestInFemale = female.reduce((acc,cv) => {
  if(cv.grade > highestFemale)
  highestFemale = cv.grade;
  return highestFemale;
},0)
console.log(highestFemale);

// Find the highest grade for people whose name starts with 'J' or 'P'

let nameWithJandP = persons.filter((person) => person.name.charAt(0) == 'J' || person.name.charAt(0) == 'P');
let highestOfJandP = 0;
let findHighestOfJandP = nameWithJandP.reduce((acc,cv) => {
  if(cv.grade > highestOfJandP)
  highestOfJandP = cv.grade;
  return highestOfJandP;
},0)
console.log(highestOfJandP);

const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];


/* 

Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
that fruit has appeared in the array. Store it in new variable fruitsObj

Output: 
{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
*/

let fruitsObj = fruitBasket.reduce((pv, cv) => (pv[cv] = ++pv[cv] || 1, pv), {});
console.log(fruitsObj);

/* 

Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
that fruit appeared. Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()

Output: 

[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
*/

let fruitArray = fruitBasket.reduce((pv,cv) => (pv[cv] = ++pv[cv] || 1, pv),[]);
console.log(fruitArray)

const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

// Using reduce flat data array

let flatData = data.reduce((pv,cv) => {
  return pv.concat(cv);
},[]);
console.log(flatData);

const dataTwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11], 12],
];

// Using reduce flat dataTwo array

let flatTwoData = dataTwo.reduce((pv,cv) => {
  return pv.concat(cv.flat());
},[]);
console.log(flatTwoData);

/*

Create these functions which accepts a number value and returns a number value:
  - `increment` adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value 
  - `triple` triples the input 
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
*/

let increment = num => ++num;
let double = num => num * 2;
let decrement = num => --num;
let triple = num => num * 3;
let half = num => Math.round(num / 2);

let pipeline = [
  increment,
  double,
  decrement,
  decrement,
  double,
  triple,
  half,
  increment,
];


/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.

NOTE: Initial value will be passed to first function the output of that function will be the input to next function.

EXAMPLE:
  initialValue - 3
  increment(3) - return 4
  double(4) - return 8
  decrement(8) - return 7

  ...
*/


let pipelineAnswers = pipeline.reduce((a,b)=>{
  return a.concat(b(3));
},[])
console.log(pipelineAnswers);


let pipeline2 = [
  increment,
  half,
  double,
  decrement,
  decrement,
  triple,
  double,
  triple,
  half,
  increment,
  triple,
];

// Find the output using pipeline2 the initial value if 8

let pipeline2Answers = pipeline2.reduce((a,b) => {
  return result = a.concat(b(8));
},[])
console.log(pipeline2Answers);