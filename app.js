function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineAges = combine(5, 4);
console.log("Age...", combineAges);
var combineNames = combine('Bar', 'ry');
console.log("combineNames...", combineNames);
function greet(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
var user = { name: 'Mahmad', age: 30 }; // this works!
// console.log(greet(user));
console.log(isOlder(user, 56));
