const nameArray: string[] = ["Alice", "Bob", "Charlie"];
const priceArray: number[] = [10, 20, 30];
const isHotArray: boolean[] = [true, false, true];

type TeaType = "Green" | "Black" | "Oolong";
const teaTypes: TeaType[] = ["Green", "Black", "Oolong"];

const array:Array<string> = ["Alice", "Bob", "Charlie",];
const priceArray2:Array<number> = [10, 20, 30,];
const isHotArray2:Array<boolean> = [true, false, true];

type User = {
    name: string;
    age: number;
}
const users: User[] = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];

type Product = {
    id: number;
    name: string;
    price: number;
}
const products: Product[] = [
    { id: 1, name: "Tea", price: 10 },
    { id: 2, name: "Coffee", price: 20 },
    { id: 3, name: "Juice", price: 15 }
];  

const table:number[][]= [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

type Matrix = number[][];
const matrix: Matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let userInfo:[string, number,boolean?] ;
userInfo = ["Alice", 30, true];
userInfo = ["Bob", 25]; // valid, since the boolean is optional

type UserInfo = [string, number, boolean?];
let userInfo2: UserInfo;
userInfo2 = ["Charlie", 35, false];
userInfo2 = ["Dave", 40]; // valid, since the boolean is optional

type ProductInfo = [number, string, number];
const productInfo: ProductInfo = [1, "Tea", 10];    

const location:readonly [number, number] = [40.7128, -74.0060]; // New York City coordinates
// location[0] = 41.0000; // error: Cannot assign to '0' because it is a read-only property.
// location[1] = -75.0000; // error: Cannot assign to '1' because it is a read-only property.

type Location = readonly [number, number];
const location2: Location = [34.0522, -118.2437]; // Los Angeles coordinates
// location2[0] = 35.0000; // error: Cannot assign to '0' because it is a read-only property.
// location2[1] = -119.0000; // error: Cannot assign to '1' because it is a read-only property.

const tupleArray: [number, string][] = [
    [1, "Alice"],
    [2, "Bob"],
    [3, "Charlie"]
];

type UserTuple = [number, string];
const userTuples: UserTuple[] = [
    [1, "Alice"],
    [2, "Bob"],
    [3, "Charlie"]
];

const matrixOfTuples: [number, string][][] = [
    [
        [1, "Alice"],
        [2, "Bob"]
    ],
    [
        [3, "Charlie"],
        [4, "Dave"]
    ]
];

type MatrixOfTuples = [number, string][][];
const matrixOfUserTuples: MatrixOfTuples = [
    [
        [1, "Alice"],
        [2, "Bob"]
    ],
    [
        [3, "Charlie"],
        [4, "Dave"]
    ]
];

const chaiItems:[name:string, price:number] = ["Masala Chai", 100];
// chaiItems[0] = "Green Tea"; // error: Cannot assign to '0' because it is a read-only property.
// chaiItems[1] = 80; // error: Cannot assign to '1' because it is a read-only property.

type ChaiItem = [name: string, price: number];
const chaiItem: ChaiItem = ["Lemon Tea", 90];
// chaiItem[0] = "Oolong Tea"; // error: Cannot assign to '0' because it is a read-only property.
// chaiItem[1] = 85; // error: Cannot assign to '1' because it is a read-only property.
chaiItem.push("extra"); // error: Property 'push' does not exist on type 'ChaiItem'. Did you mean to write 'chaiItem[0]' or 'chaiItem[1]'?

enum TeaFlavor {
    Green = "Green",
    Black = "Black",
    Oolong = "Oolong"
}
const teaFlavorArray: TeaFlavor[] = [TeaFlavor.Green, TeaFlavor.Black, TeaFlavor.Oolong];

type TeaFlavorType = "Green" | "Black" | "Oolong";
const teaFlavorTypeArray: TeaFlavorType[] = ["Green", "Black", "Oolong"];

enum CoffeeSize {
    Small ,
    Medium,
    Large
}

const size = CoffeeSize.Small; // size is of type CoffeeSize and has the value CoffeeSize.Small (which is 0)
const sizeName = CoffeeSize[size]; // sizeName is of type string and has the value "Small"

type CoffeeSizeType = "Small" | "Medium" | "Large";
const coffeeSizeType: CoffeeSizeType = "Medium"; // valid, since "Medium" is one of the allowed string literals 

enum Status {
    Pending =100,
    Served, //101
    Completed //102
}

// enum ki value Capital letter me hi hoti hai but ye mandatory nahi hai, aap chaho to small letter me bhi likh sakte ho, but industry practice hai;

enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}

function makeColor(type: Color){
    console.log(`Making color: ${type}`);
}

makeColor(Color.Red); // valid, since Color.Red is a valid member of the Color enum
// makeColor("RED"); // error: Argument of type '"RED"' is not assignable to parameter of type 'Color'. Did you mean to use 'Color.Red'?

type ColorType = "RED" | "GREEN" | "BLUE";
function makeColorType(type: ColorType){
    console.log(`Making color: ${type}`);
}

makeColorType("RED"); // valid, since "RED" is one of the allowed string literals
// makeColorType(Color.Red); // error: Argument of type 'Color.Red' is not assignable to parameter of type 'ColorType'. Did you mean to use '"RED"'?    

enum RandomEnum {
    ID=1,
    NAME="AM",

}

const enum Sugars{
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

const s = Sugars.LOW; // s is of type number and has the value 1
// const sName = Sugars[s]; // error: Cannot access an enum member using a computed name. Did you mean to use 'Sugars.LOW' instead of 's'?

let t:[number, string] = [1, "Tea"];
t.push("extra");

// t.push("extra"); // error: Property 'push' does not exist on type '[number, string]'. Did you mean to write 't[0]' or 't[1]'?

type TeaTuple = [number, string];
let teaTuple: TeaTuple = [1, "Green Tea"];
// teaTuple.push("extra"); // error: Property 'push' does not exist on type 'TeaTuple'. Did you mean to write 'teaTuple[0]' or 'teaTuple[1]'?

teaTuple.push("Abdul");
