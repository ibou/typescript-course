var e1 = {
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
    console.log("Name: " + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Date: ' + emp.startDate);
    }
}
printEmplyeeInformation({ name: 'Ibrahima', startDate: new Date() });
