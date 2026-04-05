// function makeChai(order:{type:string;sugar:number; strong:boolean}) {
//     console.log(order);
// }

type ChaiOrder = {
    type:string;
    sugar:number;
    strong:boolean;
}

function makeChai(order:ChaiOrder) {
    console.log(order);
}


function serveChai(order:ChaiOrder) {
    console.log(order);
    
}

type TeaRecipe = {
    water:number;
    milk:number
}

class MasalaChai implements TeaRecipe{
    water = 100;
    milk = 50;
}

// type CupSize = "small"|"large";
interface CupSize {
    size: "small"|"large";
}

class Chai implements CupSize{
    size: "small"|"large" = "small";

}

// type Response = {ok:true} |{ok:false;};
interface Response {
    ok: boolean;
}
// class myResponse implements Response{
//     ok: boolean = true;
    
// }

type TeaType = "green"|"black"|"masala"; //literal type

function orderChai(t:TeaType){
    console.log(t);
}

type BaseChai = {teaLeaves:number};
type ExtraChai = {masala:number};

type FullChai = BaseChai & ExtraChai; // dono ka hona mandatroy hai 

const cup:FullChai = {
    teaLeaves: 10,
    masala: 5
}

type User = {
    username:string;
    bio?:string;
}

const u1:User = {
    username:"john_doe"
}

const u2:User = {
    username:"jane_doe",
    bio:"I love chai!"
}

type config = {
    readonly apiKey:string;
    timeout:number;
}

const myConfig:config = {
    apiKey:"123456",
    timeout:5000
}

// myConfig.apiKey = "654321"; // Error: Cannot assign to 'apiKey' because it is a read-only property.

myConfig.timeout = 3000; // Allowed: timeout is not read-only