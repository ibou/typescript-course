"use strict";
const e1 = {
    name: "Ibrah",
    privileges: ['create-server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmplyeeInformation(emp) {
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
    loadCargo(amount) {
        console.log('Loading cargo ...', amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicule(vehicule) {
    vehicule.drive();
    if (vehicule instanceof Truck) {
        vehicule.loadCargo(1000);
    }
}
useVehicule(v1);
useVehicule(v2);
function moveAnimal(animal) {
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
