// // Simple OBJ Example
// let user = {
//     name: "Yauhen",
//     age: 30
// };

// // Object type using any
// let user2: any = {
//     name: "Yauhen",
//     age: 30
// };

// // Define object type
// let user3: { name: string, age: number } = {
//     name: "Yauhen",
//     age: 30
// };

// // 2 Object with the same types
// // (bad code!!!!)
// let user4: { name: string, age: number, nickName: string } = {
//     name: "Yauhen",
//     age: 30,
//     nickName: "Web"
// };

// let admin: { name: string, age: number, nickName: string } = {
//     name: "Max",
//     age: 20,
//     nickName: "Back"
// };

// // Using Type For Objects Structure
// // (good code!!!!)
// type Person = { name: string, age: (number | string), nickName: string};

// let user5: Person = {
//     name: "Yauhen",
//     age: 30,
//     nickName: "Web"
// }

// let admin2: Person = {
//     name: "Max",
//     age: 20,
//     nickName: "Back"
// };

// // 2 object with almost the same structure
// type Person2 = {
//     name: string,
//     age: (number | string),
//     nickName?: string,
//     getPass?: () => string
// };

// let user6: Person2 = {
//     name: "Yauhen",
//     age: 30,
//     nickName: "Web"
// }

// let admin3: Person2 = {
//     name: "Max",
//     age: 20,
//     getPass(): string {
//         return `${this.name}${this.age}`;
//     }
// };