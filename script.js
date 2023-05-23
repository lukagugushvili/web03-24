// #1
let array = [1, 2, 3, 4, 5];
console.log(array[0] + array[1] + array[2] + array[3] + array[4]);

// #2
let properties = ['luka', '19', 'rustavi'];

// #3
console.log(`my name is ${properties[0]} my age is ${properties[1]} addres ${properties[2]}`);

// #4
if (properties[1] >= 18) {
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