// Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.

function add(num1, num2 = 3){
    // if(num2 === undefined){
    //     num2 = 0;
    // }
    //or
    //num2 = 0 || 20;
    return num1 + num2;
}

console.log(add(8));

function mul(x, y = 4){
    // if(y === undefined){
    //     y = 0;
    // }
    // y = 0 || 3

    return x * y;
}
const result = mul(4);
console.log(result);