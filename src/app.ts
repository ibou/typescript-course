

interface Named {
    readonly name?: string;
    outputName?: string;
}
interface Greetable extends Named {
    greet(phrase: string): void
}

class Person implements Greetable {

    name?: string;
    age: 42;

    constructor(n?: string) {
        this.name = n;
    }
    outputName?: string;
    greet(phrase: string) {
        console.log(phrase + " " + this.name);
    }

}
let user: Greetable;

user = new Person("FEE");
user.greet("Bonjour les amis: ");

