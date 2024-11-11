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