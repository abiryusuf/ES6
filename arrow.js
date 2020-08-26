
//expression function with single parameters
const doublet = function(num){
    return num * 2;
}
const result = doublet(5);
console.log("regular function", result);

// arrow function
const multi = num => num * 2;
const str = multi(2);
console.log("arrow function with single parameters", str);

// regular function with more them one parameters 
const add = function(num1, num2){
    return num1 + num2
}
console.log('regular function with more then one parameters', add(3, 5));

// arrow function
const adder = (x, y) => x + y;
console.log("arrow function with more then one parameters", adder(4, 5));

//single arrow function
const myFun = () => 5;
console.log("without parameters", myFun(5));
