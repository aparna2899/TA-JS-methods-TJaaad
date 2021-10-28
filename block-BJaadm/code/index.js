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

// Create an array peopleName and store value of name key from persons array

let peopleName = persons.map((person) => person.name);

// Create an array peopleGrade and store the value of grade key from persons array

let peopleGrade = persons.map((person) => person.grade);

// Create an array peopleSex and store the value of sex key from persons array

let peopleSex = persons.map((person) => person.sex);

// Log the filtered named of people in peopleName that starts with 'J' or 'P'

let filteredName1 = peopleName.filter((name) => {
  return name.includes('J') || name.includes('P');
})
console.log(filteredName1);

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'

peopleName.forEach(element => {
  if(element.startsWith('A') || element.startsWith('C'))
  console.log(element,element.length);
});

// Log all the filtered male ('M') in persons array

console.log(persons.filter((person) => person.sex == 'M'));

// Log all the filtered female ('F') in persons array

console.log(persons.filter((person) => person.sex == 'F'));

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array

console.log(persons.filter((person) => person.sex == 'F' && (person.name.includes('C') || person.name.includes('J'))));

// Log all the even numbers from peopleGrade array

console.log(peopleGrade.filter((grade) => grade % 2 === 0));

// Find the first name that starts with 'J' in persons array and log the object

console.log(persons.filter((person) => person.name.startsWith('J')));

// Find the first name that starts with 'P' in persons array and log the object

console.log(persons.filter((person) => person.name.startsWith('P')));

// Find the first name that starts with 'J', grade is greater than 10 and is a female

console.log(persons.filter((person) => person.name.startsWith('J') && person.grade > 10 && person.sex == 'F'));

// Filter all the female from persons array and store in femalePersons array

let femalePersons = persons.filter((person) => person.sex == 'F');

// Filter all the male from persons array and store in malePersons array

let malePersons = persons.filter((person) => person.sex == 'M');

// Find the sum of all grades and store in gradeTotal

let grandTotal = peopleGrade.reduce((acc,cv) => acc + cv ,0);
console.log(grandTotal);

// Find the average grade

console.log(grandTotal/peopleGrade.length);

// Find the average grade of male

let sumMale = 0;
malePersons.forEach(element => {
  sumMale += element.grade;
});
console.log(sumMale / malePersons.length);

// Find the average grade of female

let sumFemale = 0;
femalePersons.forEach(element => {
  sumFemale += element.grade;
});
console.log(sumFemale / femalePersons.length);

// Find the highest grade

let highestNum = '0';
peopleGrade.forEach(element => {
  if(highestNum < element)
  highestNum = element;
});
console.log(highestNum);

// Find the highest grade in male

let highestNumMale = '0';
malePersons.forEach(element => {
  if(highestNumMale < element.grade)
  highestNumMale = element.grade;
});
console.log(highestNumMale);

// Find the highest grade in female

let highestNumFemale = '0';
femalePersons.forEach(element => {
  if(highestNumFemale < element.grade)
  highestNumFemale = element.grade;
});
console.log(highestNumFemale);

// Find the highest grade for people whose name starts with 'J' or 'P'

let highest = '0';
persons.forEach(element => {
  if((element.name.includes('J') || element.name.includes('P')) && (highest < element.grade))
  highest = element.grade;
});
console.log(highest);

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?

peopleGrade.sort((a,b) => a - b);
//Yes

// Sort the peopleGrade in descending order

peopleGrade.sort((a,b) => b - a);

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

[...peopleGrade].sort((a,b) => b - a);

// Sort the array peopelName in ascending `ABCD..Za....z`

peopleName.sort();

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array

[...peopleName].sort();
