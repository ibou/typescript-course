"use strict";
const hobbies = ['sport', 'lecture', 'natation', 'javelo'];
const activitiesHobbies = ['kacking'];
activitiesHobbies.push(...hobbies);
const person = {
    name: 'Ibra',
    age: 11
};
const copiedPerson = Object.assign({}, person);
const add = (...numbers) => {
    return numbers.reduce((a, b) => {
        return a + b;
    }, 0);
};
const addedNumbers = add(2, 3, 4);
const [hobby0, hobby1, ...tt] = hobbies;
console.log(hobbies);
console.log("hobby splitted: ", hobby0, hobby1, ...tt);
const { name: fname } = person;
console.log(fname, Object.assign({}, person));
