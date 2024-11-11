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