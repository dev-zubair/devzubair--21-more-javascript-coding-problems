const phones = [
    {name: 'sumsung s5', price: 45000, camera: 10, storage: 32},
    {name: 'Nokia N95', price: 25000, camera: 20, storage: 32},
    {name: 'Oppo f1', price: 22000, camera: 12, storage: 32},
    {name: 'HTC', price: 5000, camera: 15, storage: 32},
    {name: 'Shaomi A1', price: 4000, camera: 13, storage: 32},
    {name: 'Walton', price: 3000, camera: 10, storage: 32}
];

let cheapest = phones [0];
for(const phone of phones){
    //compare phone price
    if(phone.price < cheapest.price){
        cheapest = phone;
    }
}
console.log(cheapest);