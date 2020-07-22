type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: "Ibrah",
    privileges: ['create-server'],
    startDate: new Date()
};


type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable | Numeric;


function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmplyee = Employee | Admin;

function printEmplyeeInformation(emp: UnknownEmplyee) {
    console.log("Name::: " + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges::: ' + emp.privileges);
    }

    if ('startDate' in emp) {
        console.log('Date::: ' + emp.startDate);
    }
}

printEmplyeeInformation({ name: 'Ibrahima', startDate: new Date(), privileges: ['create-server'] });

class Car {
    drive() {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck...');
    }

    loadCargo(amount: number) {
        console.log('Loading cargo ...', amount);
    }
}

type Vehicule = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicule(vehicule: Vehicule) {
    vehicule.drive();
    if (vehicule instanceof Truck) {
        vehicule.loadCargo(1000)
    }
}

useVehicule(v1);
useVehicule(v2);

interface Bird {
    type: 'bird'
    flyingSpeed: number;
}
interface Horse {
    type: 'horse'
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {

    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving speedest: ", speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 2500 });
moveAnimal({ type: 'horse', runningSpeed: 2100 });