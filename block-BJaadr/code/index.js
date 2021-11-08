// NOTE: You can only use the (reduce) array method to solve this exercise:

function countAllPeople() {
  let count = 0;
  let totalCount = got.houses.reduce((a,b)=> {
    count += b.people.length;
    return count;
  },0)
  console.log(totalCount);
}

function peopleByHouses() {
  got.houses.forEach((element) => {   
    let house = {houseName: [], houseMembers: []};
    house.houseName = element.name;
    house.houseMembers = element.people.reduce((a,b)=>{
      return house.houseMembers.push(b.name);
    },0);
    console.log(house)
  });
}

function everyone() {
  let house = [];
  got.houses.forEach((element) => {   
    house = element.people.reduce((a,b)=>{
        house.push(b.name);
       return house;
    },0);  
  });
  return house;
}

function nameWithS() {
  let house = [];
  got.houses.forEach((element) => {   
    house = element.people.reduce((a,b)=>{
      if(b.name.includes('s') || b.name.includes('S'))
        house.push(b.name);
       return house;
    },0);  
  });
  return house;
}

function nameWithA() {
  let house = [];
  got.houses.forEach((element) => {   
    house = element.people.reduce((a,b)=>{
      if(b.name.includes('a') || b.name.includes('A'))
        house.push(b.name);
       return house;
    },0);  
  });
  return house;
}

function surnameWithS() {
  let house = [];
  got.houses.forEach((element) => {   
    house = element.people.reduce((a,b)=>{
      if(b.name.includes('S',1))
        house.push(b.name);
       return house;
    },0);  
  });
  return house;
}

function surnameWithA() {
  let house = [];
  got.houses.forEach((element) => {   
    house = element.people.reduce((a,b)=>{
      if(b.name.includes('A',1))
        house.push(b.name);
       return house;
    },0);  
  });
  return house;
}

function peopleNameOfAllHouses() {
  got.houses.forEach((element) => {   
    let house = {houseName: [], houseMembers: []};
    house.houseName = element.name;
    house.houseMembers = element.people.reduce((a,b)=>{
       house.houseMembers.push(b.name);
      return house.houseMembers;
    },0);
    console.log(house)
  });
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
