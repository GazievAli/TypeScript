// // Simple interface example
// interface User {
//     readonly name: string,
//     age?: number,
// }

// const Amir: User = {
//     name: "Amir",
//     age: 31
// }

// const Max: User = {
//     name: "Max"
// }

// // Amir.name = 43; // Error

// const Stepan: User = {
//     name: "Stepan",
//     age: 31,
//     // nickName: "web" // error
// }

// // Interface extension
// interface User1 {
//     name: string,
//     age: 31,
//     [propName: string]: any;
// }

// const Amir2: User1 = {
//     name: "Amir",
//     age: 31,
//     nickName: "web",
//     test: false
// }

// // Class Interface
// interface User3 {
//     name: string,
//     age: number,
//     getPass(): string,
// };

// class Amir3 implements User3 {
//     name: string = "Amir";
//     age: number = 31;
//     getPass(): string {
//         return `${this.name}${this.age}`
//     }
// }

// // Create Class based on multyple interfaces
// interface User4 {
//     name: string,
//     age: number,
// };

// interface Pass {
//     getPass(): string;
// };

// class Amir4 implements User4, Pass {
//     name: string = "Amir";
//     age: number = 31;

//     getPass(): string {
//         return `${this.name}${this.age}`;
//     }
// }

// // Interface extends
// interface User5 {
//     name: string,
//     age: number,
// };

// interface Admin extends User5 {
//     getPass(): string,
// };

// class Amir5 implements Admin {
//     name: string = "Amir";
//     age: number = 31;

//     getPass(): string {
//         return `${this.name}${this.age}`;
//     }
// }