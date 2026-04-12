function wrapInArray<T>(value: T): T[] {
    return [value];
}

// Example usage:
const wrappedNumber = wrapInArray(42); // wrappedNumber is of type number[]
const wrappedString = wrapInArray("Hello"); // wrappedString is of type string[]

interface Pair<T, U> {
    first: T;
    second: U;
}

// const pair: Pair<string, number> = {
//     first: "Age",
//     second: 30
// };

function identity<T>(arg: T): T {
    return arg;
}

const result1 = identity(123); // result1 is of type number
const result2 = identity("Hello"); // result2 is of type string

function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}

const loggedArray = loggingIdentity([1, 2, 3]); // loggedArray is of type number[]  

function pair<T, U>(first: T, second: U):[T, U] {
    return [first, second];
}
pair("Hello", 42); // Returns a tuple of type [string, number]

interface Box<T> {
    content: T;
}

const stringBox: Box<string> = { content: "Hello" };
const numberBox: Box<number> = { content: 123 };

function getContent<T>(box: Box<T>): T {
    return box.content;
} 

interface ApiPromise<T> {
    status: number,
    data: T
}

const res: ApiPromise<{ flavor: string }> = {
    status: 200,
    data: { flavor: "Masala" }
}   
