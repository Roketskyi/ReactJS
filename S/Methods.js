const people = [
    { name: 'Роман', age: 12, money: 5000 },
    { name: 'Андрій', age: 20, money: 12000 },
    { name: 'Іван', age: 35, money: 3000 },
    { name: 'Дмитро', age: 27, money: 3500 },
    { name: 'Віктор', age: 17, money: 4200 },
    { name: 'Тарас', age: 28, money: 10000 }
];

//.some()
const someFirst = people.some(person => person === 'Іван'); // false
const someSecond = people.some(person => person.name === 'Іван'); // true

console.log(`.some() = ${someSecond}`); // .some() = true


//.reduce()
const reduceTest = people.reduce((total, person) => (total + person.money / 100), 0);

console.log(`.reduce() = ${reduceTest}`); // .reduce() = 377


//.every()
const everyFirst = people.every(person => person.age > 17); // false
const everySecond = people.every(person => person.age > 10); // true

console.log(`.every() = ${everySecond}`); // .every() = true


//.map()
const mapTest = people.map(person => person.age * 2);

console.log(`.map() = [${mapTest}]`); // .map() = [24,40,70,54,34,56]


//.flat()
const flatTest = [1, [25, 12], [13, 21], [5, 30], 8]; // [1, [25, 12], [13, 21], [5, 30], 8]

console.log(`.flat() = [${flatTest.flat()}]`); // .flat() = [1, 25, 12, 13, 21, 5, 30, 8]


//.filter()
const filterTest = people.filter(person => person.name === 'Дмитро');

console.log(filterTest); // [ { name: 'Дмитро', age: 27, money: 3500 } ]


//.forEach()
const forEachTest = people.forEach(person => console.log(person.name)); // Роман, Андрій, Іван...


//.findIndex()
const findIndexTest = people.findIndex(person => person.age === 17);

console.log(`.findIndex() = ${findIndexTest}`); // .findIndex() = 4


//.find()
const findTest = people.find(person => person.money === 3000);

console.log(findTest); // { name: 'Іван', age: 35, money: 3000 }


//.sort()
const sortTest = people.sort((a, b) => a.age - b.age);

console.log(sortTest);


//.concat()
const concatFirst = [2, 5, 8, 9, 10];
const concatSecond = [20, 30, 40, 50];

console.log(`.concat() = [${concatFirst.concat(concatSecond)}]`); // .concat() = [2,5,8,9,10,20,30,40,50]


//.reverse()
const reverseTest = people.reverse(person => person.age);

console.log(reverseTest);
