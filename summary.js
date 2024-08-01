var skyColor = 'white';

var phones = ['iphone', 'shaomu', 'lg', 'htc']
phones[3] = 'walton';

// check an element not exists in an array
if(phones.indexOf('oppo') == -1){
    console.log('opps! amir khan oppo is missing');
}

// checking weathe lg is available or not
if(phones.indexOf('oppo') != -1){
    console.log('lg is available now');
}


// loop
var num = 0;
while(num <= 10){
    num++;

}

for(var i = 0; i <= phones.length; i++){

}

// function
function addThreeNumbers(number1, number2, number3){
    var total = number1 + number2 + number3;
    return total;
}
addThreeNumbers(87, 41, 56);
// object
var microphone = {
    brand: 'blue yeti',
    price: 120,
    color: 'black'
}
