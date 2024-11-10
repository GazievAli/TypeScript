// Simple Class example
class User {
    constructor(public name: string, public age: number) {}
}

const amir = new User("Amir", 18);

// Class with static property
class User2 {
    static secret = 12345; // Static property 
    constructor(public name: string, public age: number) {}
    getPass(): string {
        return `${this.name}${User2.secret}`;
    }
}

const amir2 = new User2("Amir", 18);
amir2.getPass(); // Amir12345

// Class example
class User3 {

    private nickName: string = "web";
    static secret = 12345;

    constructor(public name: string, public age: number) {}

    getPass(): string {
        return `${this.name}${User2.secret}`;
    }

}

class Amir extends User3 {
    name: string = "Amir";

    constructor(age: number) {
        super(name, age);
    }
}

const max = new User3("Max", 20);
const amir3 = new Amir(21);

// Personal method in inherited class
class Amir2 extends User3 {
    name: string = "Amir";

    constructor(age: number) {
        super(name, age);
    }

    getPass(): string {
        return `${this.age}${this.name}${User3.secret}`
    }
}

const amir4 = new Amir2(32);
amir4.getPass(); // 32Amir12345

// Abstrect class example
abstract class User4 {
    constructor(public name: string, public age: number) {}

    greet(): void {
        console.log(this.name);
    }

    abstract getPass(): string;
}

class Maxim extends User4 {
    name: string = "Maxim";
    constructor(age: number) {
        super(name, age);
    }
    getPass(): string {
        return `${this.age}${this.name}`;
    }
}