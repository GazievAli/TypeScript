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