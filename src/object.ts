const chai = {
    name:"Masala Chai",
    price: 100,
    isHot: true
}
// {
//     name:string;
//     price:number;
//     isHot:boolean;
// }

let tea:{
    name:string;
    price:number;
    isHot:boolean;
} ;
tea = {
    name:"Green Tea",
    price: 80,
    isHot: false
}

type Tea = {
    name:string;
    price:number;
    ingredients:string[];
}

const myTea:Tea = {
    name:"Lemon Tea",
    price: 90,
    ingredients:["lemon","tea leaves","sugar"]
}

type Cup ={size:string};

let smallCup:Cup = {size:"200ml"};
let largeCup:Cup = {size:"500ml", material:"ceramic"}; // error: Object literal may only specify known properties, and 'material' does not exist in type 'Cup'. Did you mean to write 'size'?
smallCup = largeCup; // error: Type '{ size: string; material: string; }' is not assignable to type 'Cup'. Object literal may only specify known properties, and 'material' does not exist in type 'Cup'. Did you mean to write 'size'?

type Brew = {brewtime:number};

const coffee = {
    brewtime: 5,
    flavor: "strong"
}

const teaBrew:Brew = coffee; // error: Type '{ brewtime: number; flavor: string; }' is not assignable to type 'Brew'. Object literal may only specify known properties, and 'flavor' does not exist in type 'Brew'. Did you mean to write 'brewtime'?

type User ={
    name:string;
    age:number;
}
const u:User={
    name:"Alice",
    age: 30,

}

type Item = {
    id:number;
    name:string;
    price:number;
}
type Address = {
    street:string;
    city:string;
    country:string;
}
type Order = {
    item:Item;
    quantity:number;
    address:Address;
}

const myOrder:Order = {
    item:{
        id:1,
        name:"Tea",
        price: 100
    },
    quantity: 2,
    address:{
        street:"123 Main St",
        city:"Anytown",
        country:"USA"
    }
}

type Point = {
    x:number;
    y:number;
}

const UpdatePoint = (update:Partial<Point>) => {
    console.log("Update Point",update);
}
UpdatePoint({y:10}); // Partial allows us to pass only some of the properties of Point, making them optional. In this case, we can update just the x coordinate without needing to provide the y coordinate.
UpdatePoint({x:5}); // Partial allows us to pass only some of the properties of Point, making them optional. In this case, we can update just the y coordinate without needing to provide the x coordinate.
UpdatePoint({x:5,y:10}); // Partial allows us to pass only some of the properties of Point, making them optional. In this case, we can update both the x and y coordinates.
UpdatePoint({}); // Partial allows us to pass only some of the properties of Point, making them optional. In this case, we can choose not to update any coordinates.

type ChaiOrder = {
    flavor?:string;
    quantity?:number;
}

const placeOrder = (order:Required<ChaiOrder>) => {
    console.log("Order placed",order);
}
placeOrder({flavor:"Masala",quantity:2}); // Required makes all properties of ChaiOrder required, so we must provide both flavor and quantity when placing an order.
placeOrder({flavor:"Green"}); // Error: Property 'quantity' is missing in type '{ flavor: string; }' but required in type 'Required<ChaiOrder>'.
placeOrder({quantity:1}); // Error: Property 'flavor' is missing in type '{ quantity: number; }' but required in type 'Required<ChaiOrder>'.
placeOrder({}); // Error    : Property 'flavor' is missing in type '{}' but required in type 'Required<ChaiOrder>'.

type ReadonlyPoint = {
    readonly x:number;
    readonly y:number;
}

const myPoint:ReadonlyPoint = {x:5,y:10};
myPoint.x = 20; // Error: Cannot assign to 'x' because it is a read-only property. The Readonly utility type makes all properties of ReadonlyPoint read-only, so we cannot modify the x or y coordinates after they have been set.
myPoint.y = 15; // Error: Cannot assign to 'y' because it is a read-only property. The Readonly utility type makes all properties of ReadonlyPoint read-only, so we cannot modify the x or y coordinates after they have been set.      

type PickChai = {
    flavor:string;
    quantity:number;
    price:number;
}
type PickFlavorAndQuantity = Pick<PickChai,"flavor"|"quantity">; // Pick allows us to create a new type by selecting specific properties from an existing type. In this case, we create a new type that includes only the flavor and quantity properties from PickChai.

const myOrder2:PickFlavorAndQuantity = {
    flavor:"Masala",
    quantity: 2
}

type OmitPrice = Omit<PickChai,"price">; // Omit allows us to create a new type by excluding specific properties from an existing type. In this case, we create a new type that includes all properties from PickChai except for price.

const myOrder3:OmitPrice = {
    flavor:"Green",
    quantity: 1,
}
const myOrder4:OmitPrice = {
    flavor:"Green",
    quantity: 1,
    price: 80 // Error: Object literal may only specify known properties, and 'price' does not exist in type 'OmitPrice'. Did you mean to write 'flavor' or 'quantity'?
}