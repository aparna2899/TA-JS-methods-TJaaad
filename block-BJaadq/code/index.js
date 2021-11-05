// NOTE: You can not use reduce methods to solve this exercise

let count = 0;
function countAllPeople() {
  for(let i = 0; i < got.houses.length; i++){  
    count += got.houses[i].people.length;
  }
return count;
}

function peopleByHouses() {
  let peopleByHousesObj = {houseName: [],size: []};
  for(let i = 0; i < got.houses.length; i++){  
    peopleByHousesObj.houseName[i] = got.houses[i].name;
    peopleByHousesObj.size[i] = got.houses[i].people.length;
}
return peopleByHousesObj;
}

function everyone() {
  let everyName = [];
  for(i=0;i<got.houses.length; i++){
     everyName += got.houses[i].people.map(a => a.name);    
  }
  return everyName;
}

function nameWithS() {
let nameS = [];
for(i=0;i<got.houses.length; i++){
  for(let j=0; j < got.houses[i].people.length; j++){
    if(got.houses[i].people[j].name.includes('s') || got.houses[i].people[j].name.includes('S'))
    nameS.push(got.houses[i].people[j].name);
    }  
  }
  return nameS;
}

function nameWithA() {
  let nameA = [];
for(i=0;i<got.houses.length; i++){
  for(let j=0; j < got.houses[i].people.length; j++){
    if(got.houses[i].people[j].name.includes('a') || got.houses[i].people[j].name.includes('A'))
    nameA.push(got.houses[i].people[j].name);
    }  
  }
  return nameA;
}

function surnameWithS() {
  let surnameS = [];
  for(i=0;i<got.houses.length; i++){
    for(let j=0; j < got.houses[i].people.length; j++){
      if(got.houses[i].people[j].name.includes('S'))
      surnameS.push(got.houses[i].people[j].name);
      }  
    }
    return surnameS;
}

function surnameWithA() {
  let surnameA = [];
  for(i=0;i<got.houses.length; i++){
    for(let j=0; j < got.houses[i].people.length; j++){
      if(got.houses[i].people[j].name.includes('A'))
      surnameA.push(got.houses[i].people[j].name);
      }  
    }
    return surnameA;
}

function peopleNameOfAllHouses() {
  let house = [];
  let members = [];
  for(i=0;i<got.houses.length; i++){
    house.push(got.houses[i].name)
    for(let j=0; j < got.houses[i].people.length; j++){
    members.push(got.houses[i].people[j].name);
    }
  }
  let houseWithMembers = {house,members};
  return houseWithMembers;
}

// Testing your result after writing your function
console.log(countAllPeople());
// Output should be 33

console.log(peopleByHouses());
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

console.log(everyone());
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(nameWithS(), 'with s');
// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

console.log(nameWithA());
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(surnameWithS(), 'surname with s');
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

console.log(surnameWithA());
// Output should be
// ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses());
// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}
