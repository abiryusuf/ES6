// Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.

function add(num1 = 4, num2 = 3){
    // if(num2 === undefined){
    //     num2 = 0;
    // }
    //num2 = 0 || 20;
    return num1 + num2;
}

console.log(add(8));