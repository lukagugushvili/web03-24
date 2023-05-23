// #1
let array = [1, 2, 3, 4, 5];
console.log(array[0] + array[1] + array[2] + array[3] + array[4]);

// #2
let personInfo = [
    person1 = {
        firstName: 'luka',
        age: 19,
        address: 'rustavi'
    },
    person2 = {
        firstName: 'levani',
        age: 20,
        address: 'rustavi'
    },
    person2 = {
        firstName: 'nika',
        age: 21,
        address: 'tbilisi'
    },
];

// #3
console.log(`my name is ${personInfo[0].firstName} my age is ${array[0]} addres ${personInfo[2].address}`);

// #4
if (personInfo[1].age >= 18) {
    console.log("I am a teenager")
}
else {
    console.log("I am an adult")
}

// #5
let array2 = [1, 2, 3, 4, 9]
for (let i in array2) {
    console.log(array2[i]);
}

// #6
const currentDay = new Date().getDay();
currentDay