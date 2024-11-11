// // Simple class example
// class User {
//     constructor(public name: string, public age: number) {}
//     public getPass(): string {
//         return `${this.name}${this.age}`;
//     }
// }

// // Base structure of Decorator
// const logClass = () => {};

// // Class Decorator
// const logClass2 = (constructor: Function) => {
//     console.log(constructor); // Result of call: class User {}
// };

// @logClass2
// class User2 {
//     constructor(public name: string, public age: number) {}
//     public getPass(): string {
//         return `${this.name}${this.age}`;
//     }
// }

// // Property Decorator
// const logProperty = (target: Object, propertyKey: string | symbol) => {
//     console.log(propertyKey); // Result of call: "secret"
// };

// class User3 {

//     @logProperty
//     secret: number;

//     constructor(public name: string, public age: number, secret: number) {
//         this.secret = secret;
//     }
//     public getPass(): string {
//         return `${this.name}${this.age}`;
//     }
// }

// // Method Decorator
// const logMethod = (
//     target: Object,
//     propertyKey: string | symbol,
//     descriptor: PropertyDecorator
// ) => {
//     console.log(propertyKey); // Result of call: "getPass"
// };

// class User4 {

//     constructor(public name: string, public age: number) {}
//     @logMethod
//     public getPass(): string {
//         return `${this.name}${this.age}`;
//     }
// }

// // GET / SET Decorator
// const logSet = (
//     target: Object,
//     propertyKey: string | symbol,
//     descriptor: PropertyDecorator
// ) => {
//     console.log(propertyKey); // Result of call: "maAge"
// };

// class User4 {

//     constructor(public name: string, public age: number) {}
//     @logSet
//     set myAge(age: number) {
//         this.age = age;
//     }
// }

// // Factory Decorator
// function Factory(value: any) { // Factory
//     return function (target: any) { // Decorator
//         console.log(target); // Decorator logic
//     }
// }

// // Applyng Factory Decorator
// const enumerable = (value: boolean) => {
//     return (
//         target: any,
//         propertyKey: string | symbol,
//         descriptor: PropertyDecorator
//     ) => {
//         descriptor.enumerable = value;
//     }
// }

// class User5 {
//     constructor(public name: string, public age: number) {}
//     @enumerable(false)
//     public getPass(): string {
//         return `${this.name}${this.age}`;
//     }
// }

// // // Decorator Composition syntax
// // // One line
// // @f @g x

// // // Multy lines
// // @f
// // @g
// // x

// // Example of two factory decorators
// const first = () => {
//     console.log("first() completing");
//     return(target: any, propertyKey: string | symbol, descriptor: PropertyDecorator) => {
//         console.log("first() called");
//     };
// }

// const second = () => {
//     console.log("second() completing");
//     return(target: any, propertyKey: string | symbol, descriptor: PropertyDecorator) => {
//         console.log("second() called");
//     };
// }

// // Apply and call two factory decorators
// class User6 {
//     constructor(public name: string, public age: number) {}

//     @first()
//     @second()
//     public getPass(): string {
//         return `${this.name}${this.age}`
//     }
// }

// // Call results
// // first() completing   // Factory 1 
// // second() completing  // Factory 2
// // second() called      // Decorator 2
// // first() called       // Decorator 1