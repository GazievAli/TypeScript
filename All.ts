// BOOL
let isCompleted: boolean = true;

// INT
let numA: number = 120;
let numB: number = 200;
let result: number = numA + numB;

// STR
let nameStr: string = "Ali";
let sentence: string = `Hello, my name is ${ nameStr }!`;

// UNDEFIND AND NULL
const und: undefined = undefined;
const nul: null = null;

// VOID
const hello = (): void => {
    console.log("Hello, nice to see you!");
}

// ARRAY TYPE
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3]; // Generic Type

// Tuple Type
let x: [string, number];
x = ["hello", 12];

// ONE LINE
let y: [string, number] = ["goodbye", 42];

// ANY TYPE
let y1: [any, any] = ["goodbye", 30];
let y2: Array<any> = [10, "hello"];

// ANY TYPE FOR STRING
let notSure: any = false;

notSure = true;
notSure = 43;
notSure = "34";

// ENUM TYPE
enum Directions {
    Up,
    Down,
    Left,
    Right
}

Directions.Up; // 0
Directions.Down; // 1
Directions.Left; // 2
Directions.Right; // 3

// CUSTOM INDEX FOR ENUM ELEMENTS
enum DirectionsCustom {
    Up = 2,
    Down = 4,
    Left = 6,
    Right
}

DirectionsCustom.Up; // 2
DirectionsCustom.Down; // 4
DirectionsCustom.Left; // 6
DirectionsCustom.Right; // 7 (DirectionsCustom.Left + 1)

// NEVER TYPE
// (Not Result)  
const msg = "hello";
const error = (msg: string): never => {
    throw new Error(msg);
}

const infiniteLoop = (): never => {
    while(true) {}
}

// OBJECT TYPE
const create = (o: object | null): void => { };

// create(1); // Error
// create("42"); // Error
create({ obj: 1 });

// MYLTIPLE TYPES
let id: number | string;
id = 10;
id = "42";
// id = true; // Error

// TYPE
type Name = string;
let FirstName: Name;

FirstName = "4432";


// Simple class expample
class User {

};

// Class Types
class User2 {

    name: string;
    age: number;
    nickName: string;

};

// Class Types, Include constructor
class User3 {

    name: string;
    age: number;
    nickName: string;

    constructor(name: string, age: number, nickName: string) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
    }
}

const andrey = new User3("Andrey", 31, "Web");

// Class Types modificators
class User4 {

    public name: string;
    private nickName: string;
    protected age: number;
    readonly pass: number;

    constructor(name: string, age: number, nickName: string, pass: number) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
        this.pass = pass;
    }

}

const andrey2 = new User4("Andrey", 31, "Web", 123);

// publick - default type, opened for read and write
// private - closed type
// protected - Only heirs (наследники) have access (доступ)
// readonly - opened only for read

// Class Default Types
class User5 {

    public name: string;
    public nickName: string = "WebDev";
    public age: number = 20;

    constructor(name: string) {
        this.name = name;
    }

    getPass(): string {
        return `${this.nickName}${this.age}`;
    }

}

const user = new User5("Andrey");
user.getPass(); // WebDev20

// Minimalization of class properties
class User6 {

    constructor (
        public name: string,
        public age: number,
        public nickName: string,
        public pass: number
    ) {}

}

// Get access to private property
class User7 {

    private age: number = 20;

    constructor(public name: string) {}

    setAge(age: number) {
        this.age = age;
    }

    set myAge(age: number) {
        this.age = age;
    }

}

const andrey3 = new User7("Andrey");
andrey3.myAge = 31; // 31
andrey3.setAge(30); // 30


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
    console.log(constructor); // Result of call: class User {}
};

@logClass2
class User2 {
    constructor(public name: string, public age: number) {}
    public getPass(): string {
        return `${this.name}${this.age}`;
    }
}

// Property Decorator
const logProperty = (target: Object, propertyKey: string | symbol) => {
    console.log(propertyKey); // Result of call: "secret"
};

class User3 {

    @logProperty
    secret: number;

    constructor(public name: string, public age: number, secret: number) {
        this.secret = secret;
    }
    public getPass(): string {
        return `${this.name}${this.age}`;
    }
}

// Method Decorator
const logMethod = (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDecorator
) => {
    console.log(propertyKey); // Result of call: "getPass"
};

class User4 {

    constructor(public name: string, public age: number) {}
    @logMethod
    public getPass(): string {
        return `${this.name}${this.age}`;
    }
}

// GET / SET Decorator
const logSet = (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDecorator
) => {
    console.log(propertyKey); // Result of call: "maAge"
};

class User4 {

    constructor(public name: string, public age: number) {}
    @logSet
    set myAge(age: number) {
        this.age = age;
    }
}

// Factory Decorator
function Factory(value: any) { // Factory
    return function (target: any) { // Decorator
        console.log(target); // Decorator logic
    }
}

// Applyng Factory Decorator
const enumerable = (value: boolean) => {
    return (
        target: any,
        propertyKey: string | symbol,
        descriptor: PropertyDecorator
    ) => {
        descriptor.enumerable = value;
    }
}

class User5 {
    constructor(public name: string, public age: number) {}
    @enumerable(false)
    public getPass(): string {
        return `${this.name}${this.age}`;
    }
}

// // Decorator Composition syntax
// // One line
// @f @g x

// // Multy lines
// @f
// @g
// x

// Example of two factory decorators
const first = () => {
    console.log("first() completing");
    return(target: any, propertyKey: string | symbol, descriptor: PropertyDecorator) => {
        console.log("first() called");
    };
}

const second = () => {
    console.log("second() completing");
    return(target: any, propertyKey: string | symbol, descriptor: PropertyDecorator) => {
        console.log("second() called");
    };
}

// Apply and call two factory decorators
class User6 {
    constructor(public name: string, public age: number) {}

    @first()
    @second()
    public getPass(): string {
        return `${this.name}${this.age}`
    }
}

// Call results
// first() completing   // Factory 1 
// second() completing  // Factory 2
// second() called      // Decorator 2
// first() called       // Decorator 1


// Simple example
enum Directions {
    Up,
    Down,
    Left,
    Right
}

Directions.Up; // 0
Directions.Down; // 1
Directions.Left; // 2
Directions.Right; // 3

// Reverse Enum
Directions[0] // "UP"
Directions[1] // "DOWN"
Directions[2] // "LEFT"
Directions[3] // "RIGHT"

// Custom Index
enum Example {
    One = 2,
    Two = 3,
    Three = 8,
    Four = 11
}

Example.One; // 2
Example.Two; // 4
Example[8]; // "Three"
Example[11]; // "Four"

// Custom Name For Keys
enum links {
    youtube = "https://youtube.com/",
    vk = "https://vk.com/",
    faceBook = "http://facebook.com"
}

// Using
links.vk; // "https://vk.com/"
links.youtube; // "https://youtube.com/"
links.faceBook; // "http://facebook.com"

// Compiled Code 
// "use strict";
// var links;
// (function (links) {
//     links["youtube"] = "https://youtube.com/";
//     links["faceBook"] = "http://facebook.com";
//     links["vk"] = "https://vk.com/";
// })(links || (links = {}));

// Const Enum
const enum linksContst {
    youtube = "https://youtube.com/",
    vk = "https://vk.com/",
    faceBook = "http://facebook.com"
}

const arr = [linksContst.vk, linksContst.youtube];


// Function example
const createPassword1 = (name, age) => `${name}${age}`;
createPassword1("Jack", 32); // "Jack32"

// Arguments Type
const createPassword2 = (name: string, age: number) => `${name}${age}`;
createPassword2("Jack", 32); // "Jack32"

// Multyple Argument Types
const createPassword3 = (name: string, age: (number | string)) => `${name}${age}`;
createPassword3("Jack", 32); // "Jack32"
createPassword3("Jack", "32"); // "Jack32"

// Default Arguments
const createPassword4 = (name: string = "Max", age: (number | string) = 20) => {
    `${name}${age}`;
}
createPassword4("Jack", 32); // "Jack32"
createPassword4("Jack", "32"); // "Jack32"
createPassword4(); // "Max20"

// Function with optional argument "age"
const createPassword5 = (name: string, age?: number) => `${name}${age}`;

// Rest
const createSkills = (name, ...skills) => {
    `${name}, My skills are ${skills.join()}`;
}

// Rest Type
const createSkills2 = (name: string, ...skills: Array<string>) => {
    `${name}, My skills are ${skills.join()}`;
}

createSkills2("jack", "js", "css", "html"); // "Jack, My skills are js, css, html"

// Returned type is string
const createPasswordFinall = (name: string, age: (number | string)): string => `${name}${age}`;

// Returned type is number
const sum = (first: number, second: number): number => first + second;

// Returned type is object
const createEmptyObject = (): object => ({});

// VOID
const hello = (): void => console.log("Hello, nice to see you!");

// NEVER TYPE
// (Not Result) (error / infinity)  
const msg = "hello";
const error = (msg: string): never => {
    throw new Error(msg);
}

const infiniteLoop = (): never => {
    while(true) {}
}

// Describe function type
let myFunc: (firstArg: string) => void;

function oldFunc(name: string): void {
    alert(`Hello ${name}, nice to meet you!`)
};

myFunc = oldFunc;

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


// Simple interface example
interface User {
    readonly name: string,
    age?: number,
}

const Amir: User = {
    name: "Amir",
    age: 31
}

const Max: User = {
    name: "Max"
}

// Amir.name = 43; // Error

const Stepan: User = {
    name: "Stepan",
    age: 31,
    // nickName: "web" // error
}

// Interface extension
interface User1 {
    name: string,
    age: 31,
    [propName: string]: any;
}

const Amir2: User1 = {
    name: "Amir",
    age: 31,
    nickName: "web",
    test: false
}

// Class Interface
interface User3 {
    name: string,
    age: number,
    getPass(): string,
};

class Amir3 implements User3 {
    name: string = "Amir";
    age: number = 31;
    getPass(): string {
        return `${this.name}${this.age}`
    }
}

// Create Class based on multyple interfaces
interface User4 {
    name: string,
    age: number,
};

interface Pass {
    getPass(): string;
};

class Amir4 implements User4, Pass {
    name: string = "Amir";
    age: number = 31;

    getPass(): string {
        return `${this.name}${this.age}`;
    }
}

// Interface extends
interface User5 {
    name: string,
    age: number,
};

interface Admin extends User5 {
    getPass(): string,
};

class Amir5 implements Admin {
    name: string = "Amir";
    age: number = 31;

    getPass(): string {
        return `${this.name}${this.age}`;
    }
}


// Just example of functionality
const SECRET: string = "123321";
const PI: number = 3.14;

const getPass = (name: string, age: number): string => `${name}${age}`;
const isEmpty = <T>(data: T): boolean => !data;

// Define namespace
namespace Utils {

    export const SECRET: string = "123321";
    const PI: number = 3.14;

    export const getPass = (name: string, age: number): string => `${name}${age}`;
    export const isEmpty = <T>(data: T): boolean => !data;

};

const myPass = Utils.getPass("Amir", 21); // Amir21
const isSecret = Utils.isEmpty(Utils.SECRET); // false

// const PI: number = 3; // no errors

// Import/Export (ES6 Moduls)
// File "Utils.ts"
export const SECRET1: string = "12345";
export const getPass1 = (name: string, age: number): string => `${name}${age}`;

// File "Customers.ts"
// import { getPass, Secret } from "./Utils"
const myPass1 = getPass1(SECRET1, 32)


// Simple OBJ Example
let user = {
    name: "Yauhen",
    age: 30
};

// Object type using any
let user2: any = {
    name: "Yauhen",
    age: 30
};

// Define object type
let user3: { name: string, age: number } = {
    name: "Yauhen",
    age: 30
};

// 2 Object with the same types
// (bad code!!!!)
let user4: { name: string, age: number, nickName: string } = {
    name: "Yauhen",
    age: 30,
    nickName: "Web"
};

let admin: { name: string, age: number, nickName: string } = {
    name: "Max",
    age: 20,
    nickName: "Back"
};

// Using Type For Objects Structure
// (good code!!!!)
type Person = { name: string, age: (number | string), nickName: string};

let user5: Person = {
    name: "Yauhen",
    age: 30,
    nickName: "Web"
}

let admin2: Person = {
    name: "Max",
    age: 20,
    nickName: "Back"
};

// 2 object with almost the same structure
type Person2 = {
    name: string,
    age: (number | string),
    nickName?: string,
    getPass?: () => string
};

let user6: Person2 = {
    name: "Yauhen",
    age: 30,
    nickName: "Web"
}

let admin3: Person2 = {
    name: "Max",
    age: 20,
    getPass(): string {
        return `${this.name}${this.age}`;
    }
};

// Readonly<T>
interface User {
    name: string;
}

const user: Readonly<User> = {
    name: "Amir"
};

// user.name = "Max"; // Error

// Required<T>
interface Props {
    a?: number;
    b?: string;
};

const obj: Props = { a: 5 }; // OK
// const obj2: Required<Props> = { a: 5 }; // Error
const obj3: Required<Props> = { a: 10, b: "3" } // Correct

// Record<K, T>
interface PageInfo {
    title: string;
}

type Page = "home" | "about" | "contact";

const x: Record<Page, PageInfo> = {
    about: { title: "about" },
    contact: { title: "contact" },
    home: { title: "home" }
}

// Pick<T, K>
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
    title: "Clean room",
    completed: false
}

// Omit
interface Todo2 {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview2 = Omit<Todo2, "description">;

const todo2: TodoPreview = {
    title: "Clean room",
    completed: false
}

// Exclude<T, U>
type T0 = Exclude<"a" | "b" | "c", "a">;                        // "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;                  // "c"
type T2 = Exclude<string | number | (() => void), Function>;    // string | number

// Extract<T, U>
type T0_ = Extract<"a" | "b" | "c", "a" | "f">;                  // "a"
type T1_ = Extract<string | number | (() => void), Function>;    // () => void

// NonNullable<T>
type T0__ = NonNullable<string | number | undefined>;           // string | number
type T1__ = NonNullable<string[] | null | undefined>;           // string[]

// ReturnType<T>
declare function f1(): { a: number, b: string };

type _T0 = ReturnType<() => string>;                                // string
type _T1 = ReturnType<(s: string) => void>;                         // void
type _T2 = ReturnType<(<T>() => T)>;                                // {}
type _T3 = ReturnType<(<T extends X, X extends number[]> () => T)>; // number[]
type _T4 = ReturnType<typeof f1>;                                   // { a: number, b: string }
type _T5 = ReturnType<any>;                                         // any
type _T6 = ReturnType<never>;                                       // any
// type _T7 = ReturnType<string>;                                      // Error
// type _T8 = ReturnType<Function>;                                    // Error

// InstanceType<T>
class C {
    x = 0;
    y = 0;
}

type _T0__ = InstanceType<typeof C>;   // C
type _T1__ = InstanceType<any>;        // any
type _T2__ = InstanceType<never>;      // any
// type _T3__ = InstanceType<string>;     // Error
// type _T4__ = InstanceType<Function>;   // Error

// finall!