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