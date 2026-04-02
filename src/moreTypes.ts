let response: any = "43";

let numericLength: number = (response as string).length;

type Book = {
    name: string
}

let bookString = '{"name":"who moved my cheese"}';

let bookObject = JSON.parse(bookString) as Book

console.log(bookObject);


const inputElm = document.getElementById("username") as HTMLInputElement;

let value: any;
value = 'Ali';
value = [1, 3, 3]
value = 4.3
value.toUpperCase();


let newValue: unknown;

newValue = 'Abdul';
newValue = [1, 3, 3]
newValue = 4.3

if (typeof newValue === "string") {
    newValue.toUpperCase();
}

try {
   
} catch (error:any) {
if (error instanceof Error) {
    console.log(error.message);
    
}   
console.log("Error", error);
 
}

const data:unknown = "Abde Mustafa";

const strData:string = data as string;

type Role = "admin"| "user"

function redirectBasedOnRole(role:Role) {
    if (role==="admin") {
        console.log("Redirecting to admin Dashboard");
     return;   
    }
    if (role==="user") {
        console.log("Redirecting to user page");
        return
    }
    role;
}

function neverReturn():never {
    while (true) {
        
    }
}