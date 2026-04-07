function makeWebsite(type:string, url:string){
    console.log(`Making ${url} urls of ${type}`);
    
}

makeWebsite("blog","www.example.com"); // valid, since both arguments are of type string
// makeWebsite("blog", 123); // error: Argument of type 'number' is not assignable to parameter of type 'string'.

type MakeWebsiteType = (type:string, url:string) => void;

const makeWebsiteFunc: MakeWebsiteType = (type, url) => {
    console.log(`Making ${url} urls of ${type}`);
}

makeWebsiteFunc("blog","www.example.com"); // valid, since both arguments are of type string
// makeWebsiteFunc("blog", 123); // error: Argument of type 'number' is not assignable to parameter of type 'string'.   

function getChaiPrice():number{
    return 100;
}

const chaiPrice = getChaiPrice(); // chaiPrice is of type number and has the value 100

console.log(`The price of chai is ${chaiPrice}`); // The price of chai is 100

function getTeaFlavor(flavor: string) {
   if (!flavor) return null;
   return flavor;

}

const teaFlavor = getTeaFlavor("Masala"); // teaFlavor is of type string and has the value "Masala"
const noFlavor = getTeaFlavor(""); // noFlavor is of type null and has the value null

function logChai():void{
    console.log("Logging chai details...");
}
console.log(`The flavor of tea is ${teaFlavor}`); // The flavor of tea is Masala
console.log(`The flavor of tea is ${noFlavor}`); // The flavor of tea is null

logChai(); // Logging chai details...

function orderChai(type?:string):string{
    if(type){
        return `Ordering a ${type} chai`;
    }
    return "Ordering a chai";
}
// optional parameter ko end me likha  jata hai

function orderTea(type:string = "Green"):string{
    return `Ordering a ${type} tea`;
}
// default parameter ko bhi end me likha jata hai

console.log(orderChai("Masala")); // Ordering a Masala chai
console.log(orderChai()); // Ordering a chai

console.log(orderTea()); // Ordering a Green tea
console.log(orderTea("Lemon")); // Ordering a Lemon tea 

function createTea(order:{
    type:string;
    sugar:number;
    size:"small" | "medium" | "large";
}):number{
    return 100;
}

function createChai(order:{
    type:string;
    sugar:number;
    size:"small" | "medium" | "large";
}):string{
    return order.type;
}
