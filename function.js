//  (-- .- .... .. -.. ..- .-..) 
// Using function
function checkAge(maleAge) {
    if (maleAge >= 21) {
        console.log("You eligible for marriage!!!");
    } else {
        console.log("You are not eligible for marriage try next year!!!");
    }
}

checkAge(25);

function multiTable(num) {
    for (let i = 1; i <= 10; i++) {
        let res = num * i;
        console.log(`${num} x ${i} = ${res}`);
    }
}
multiTable(5);

// Using Arrays
function sumArray(numbers) {
    let total = 0;
    for(let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

let nums = [15, 50, 35];
console.log(sumArray(nums));

// Using Objects
function profilePrint(user) {
    return `${user.name} is ${user.age} years old and lives in ${user.city}.`;
}

const person = {
    name: "Mahidul",
    age: 22,
    city: "Dhaka"
};

console.log(profilePrint(person));

function findAdult(person) {
    if (person.age >= 18) {
        return `${person.name} is an adult`;
    } else {
        return `${person.name} is a minor`;
    }
}

const user1 = {
    name: "Mahidul",
    age: 22
};

const user2 = {
    name: "Hehe",
    age: 16
};

console.log(findAdult(user1));
console.log(findAdult(user2));

