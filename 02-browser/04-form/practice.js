const fruits = [ "banana", "apple", "orange", "pineapple", "kiwi", ];

console.log(fruits.find((fruit) => fruit === "apple"));

const numbers = [1, 4, 5, 7, 2, 9, 3];

const numArray = numbers.filter((num) => num >= 5);
console.log(numArray);

const nums = [1, 2, 3, 4, 5];

const newNums = nums.map((num) => num * 10);
console.log(newNums);

const persons = [
  {
    name: "Kim",
    skills: ["JavaScript", "HTML", "CSS"],
  },
  {
    name: "Lee",
    skills: ["Java", "Python", "SQL"],
  },
  {
    name: "Park",
    skills: ["Java", "JavaScript", "CSS"],
  },
];

persons.forEach ((person) => {
  if(person.skills.find((skill) => skill === "Java")){
    return console.log(person.name);
  }
})

const havedSkill = persons.filter((person) => person.skills.includes("Java"));

console.log(havedSkill);

const people = [
  { name: "John", age: 28 },
  { name: "Jane", age: 24 },
  { name: "Mike", age: 30 },
];

const p = people.map((p) => p.name);
console.log(p);

const words = [
  "javascript",
  "python",
  "java",
  "c",
  "ruby",
  "rust",
];

const length5 = words.filter((word) => word.length >= 5);
console.log(length5);

const peoples = [
  { name: "John", age: 28 },
  { name: "Jane", age: 24 },
  { name: "Mike", age: 30 },
];

const peopleAge = peoples.filter((people) => people.age >= 25);
console.log(peopleAge);

const chars = [
  "a",
  "b",
  "c",
  "a",
  "d",
  "e",
  "f",
  "a",
];

const noA = chars.filter((char) =>  char !== "a");
console.log(noA);

const names = [
  "Jane",
  "John",
  "Jim",
  "Jill",
  "Jack",
];

console.log(names.findIndex((name) => name === "John"));