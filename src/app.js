class Person {
    constructor(n) {
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
let user;
user = new Person();
user.greet("Bonjour les amis: ");
