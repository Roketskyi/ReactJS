const people = [
    { name: 'Роман', age: 12, money: 5000 },
    { name: 'Андрій', age: 20, money: 12000 },
    { name: 'Іван', age: 35, money: 3000 },
    { name: 'Дмитро', age: 27, money: 3500 },
    { name: 'Віктор', age: 17, money: 4200 },
    { name: 'Тарас', age: 28, money: 10000 }
];

const newObj = people.reduce((acc, curr) => {
    acc.allNames = (acc.allNames || "") + curr.name[0]
   
    if (acc.allAge) {
        acc.allAge += curr.age;
    } else {
        acc.allAge = curr.age;
    }

    acc.allMoney = (acc.allMoney || 0) + curr.money;
    return acc;
}, {})

console.log(newObj)