// // Just example of functionality
// const SECRET: string = "123321";
// const PI: number = 3.14;

// const getPass = (name: string, age: number): string => `${name}${age}`;
// const isEmpty = <T>(data: T): boolean => !data;

// // Define namespace
// namespace Utils {

//     export const SECRET: string = "123321";
//     const PI: number = 3.14;

//     export const getPass = (name: string, age: number): string => `${name}${age}`;
//     export const isEmpty = <T>(data: T): boolean => !data;

// };

// const myPass = Utils.getPass("Amir", 21); // Amir21
// const isSecret = Utils.isEmpty(Utils.SECRET); // false

// // const PI: number = 3; // no errors

// // Import/Export (ES6 Moduls)
// // File "Utils.ts"
// export const SECRET1: string = "12345";
// export const getPass1 = (name: string, age: number): string => `${name}${age}`;

// // File "Customers.ts"
// // import { getPass, Secret } from "./Utils"
// const myPass1 = getPass1(SECRET1, 32)