var computer = {
    processor: 'intel-i5',
    storage: '156gb',
    color: 'silver',
    price: 29000,
}
// console.log(computer);
// console.log(computer.processor);
var computerPrice = computer.price;

// set a object properties value
computer.price = 22000;
// console.log(computer);

// console.log(computerPrice);


// different ways to set a value an object property
var priceProperty = "price";
var storageProperty = 'storage'

computer.price = 22000;
computer["price"] = 23000;
computer[priceProperty] = 19000;

computer[storageProperty] = '512gb'



console.log(computer);