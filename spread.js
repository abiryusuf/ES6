
//Spread operator allows an iterable to expand in places where 0+ arguments are expected.
const num1 = 700;
const num2 = 800;
const num3 = 600;


const max = Math.max(num2, num1, num3);
console.log(max);

const maxNumber = [num3, num2, num1]
console.log("spread operator", Math.max(...maxNumber));


function spreadOperator(x, y, z){
    const maxNumber = [x, y, z];
    return Math.max(...maxNumber);
}

const result = spreadOperator(4,6,2);
console.log("max number", result);