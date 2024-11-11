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