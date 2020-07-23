// const names: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve('This is done! ')
//     }, 2000);
// });
// promise
// .then(data=>{
//     console.log("data herer", data);

// }) 

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}
// const mergedObj = merge({ name: 'Ibr' }, { age: 44 }) as {name: string, age: number};
const mergedObj = merge({ name: 'Ibr', hobbies: ['sports'] }, { age: 44 });
mergedObj.age = 33

//###
interface Lengthy {
    length: number | string;
}
function countAndDescribe<S extends Lengthy>(element: S): [S, string] {
    let descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    } else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements.`;
    }

    return [element, descriptionText];
}

// console.log(countAndDescribe("Hi, we are the world"));
// console.log(countAndDescribe(["Hi, we are the world", "ARR"]));
// console.log(countAndDescribe([{ name: "Hi, we " }, { name: "Hi, we " }, { name: "FR" }]));


function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {

    return 'Value: ' + obj[key];
}

console.log(extractAndConvert({name: "Ibrah", age:45}, "age"));
