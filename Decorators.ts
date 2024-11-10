// Simple class example
class User {
    constructor(public name: string, public age: number) {}
    public getPass(): string {
        return `${this.name}${this.age}`;
    }
}

// Base structure of Decorator
const logClass = () => {};

// Class Decorator
const logClass2 = (constructor: Function) => {
    console.log(constructor);
};

@logClass2
class User2 {
    constructor(public name: string, public age: number) {}
    public getPass(): string {
        return `${this.name}${this.age}`;
    }
}