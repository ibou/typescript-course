type Combinable = number | string;
function combine(
    input1: Combinable,
    input2: Combinable
) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combineAges = combine(5, 4);
console.log("Age...", combineAges);

const combineNames = combine('Bar', 'ry');
console.log("combineNames...", combineNames);

type User = { name: string; age: number };
 
function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}

const user: User = { name: 'Mahmad', age: 30 }; // this works!
// console.log(greet(user));
console.log(isOlder(user, 56));

