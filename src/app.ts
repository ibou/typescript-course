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
// console.log(extractAndConvert({name: "Ibrah", age:45}, "age"));

class DataStorage<T extends number | string | boolean | object> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1 && typeof item !== 'object') {
            return;
        }

        if (typeof item !== 'object') {
            this.data.splice(this.data.indexOf(item), 1);
            return;
        }
        this.data = this.data.filter(obj => (obj.name !== item.name) 
    }

    getItems() {
        return [...this.data];
    }

}

const textStorage = new DataStorage<string>();
textStorage.addItem("Karl");
textStorage.addItem("Marx");
textStorage.addItem("Lentillea");
// console.log(textStorage.getItems());
textStorage.removeItem("Marx");
console.log(textStorage.getItems());

const numStorage = new DataStorage<number>();

numStorage.addItem(2);
numStorage.addItem(3);
numStorage.addItem(4);
numStorage.removeItem(3);
console.log(numStorage.getItems());

const objectStorage = new DataStorage<object>();

objectStorage.addItem({ age: 34 });
objectStorage.addItem({ name: "Kali" });
objectStorage.addItem({ name: "Manu" });
objectStorage.addItem({ name: "Lyli" });
objectStorage.removeItem({ name: "Manu" });
objectStorage.removeItem({ name: "Kali" });
console.log(objectStorage.getItems());


interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(
    title: string,
    description: string,
    date: Date,
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'Laure'];
names.push("Manuel");
// names.pop();

console.log(names);
