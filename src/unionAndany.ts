let subs:number | string = "1M";

let apiRequestStatus:'pending'|'success'|'error' = 'pending';

let airlineSeat:'aisle'|'window'|'middle' = "aisle";

const orders = ['12','10','5'];

let currentorder:string|undefined;

for(let order of orders){
    if(order==="10"){
        currentorder = order;
        break;
    }
    currentorder= '9';
}

console.log(currentorder);
