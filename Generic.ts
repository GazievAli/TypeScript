// Example of using "any"
const getter = (data: any): any => data;

getter(10); // 10
getter("test"); // "test"

getter(10).length; // undefind
getter("test").length; // 4

// Using of generic type
// ES6
const getter2 = <T>(data: T): T => data;

// ES5
function getter3<T>(data: T): T {
    return data;
}

// getter2(10).length; // error
getter2("test").length; // 4

// getter2<number>(10).length; // error
getter2<string>("test").length; // 4

// Array generic type
const list: Array<number> = [1, 2, 4];

// Simple class example
class User {
    constructor(public name: string, public age: number) {}
    public getPass(): string {
        return `${this.name}${this.age}`
    }
}

// Generic class
class UserGeneric<T> {
    constructor(public name: T, public age: T) {}
    public getPass(): string {
        return `${this.name}${this.age}`
    }
}

const max = new UserGeneric("Max", "31"); // string, string
const alex = new UserGeneric(123, 134);   // number, number

max.getPass(); // "Max31"
alex.getPass(); // "123134"

// Multyple generic types
class UserGenericMulty<T, K> {
    constructor(public name: T, public age: K) {}
    public getPass(): string {
        return `${this.name}${this.age}`
    }
}

const yan = new UserGenericMulty("Yan", "31"); // string, string
const max2 = new UserGenericMulty(123, 32);    // number, number
const leo = new UserGenericMulty("Leo", 22);   // string, number

yan.getPass(); // "Yan31"
max2.getPass(); // "12332"
leo.getPass(); // "Leo22"

// Specify generic type "K" with key-word "extends"
class UserGenericMultyExtend<T, K extends number> {
    constructor(public name: T, public age: K) {}
    public getPass(): string {
        return `${this.name}${this.age}`
    }
    public getSecret(): number {
        return this.age**2;
    }
}

const nico = new UserGenericMultyExtend("Nico", 32);
// const sten = new UserGenericMultyExtend("Sten", "32"); // Error

nico.getSecret(); // 1024
