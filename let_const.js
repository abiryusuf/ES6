const name = "abir";
//name = "yusuf;" // I can not change the value with const keyword only array list can change the value. 
console.log(name);
const num = [6,7,8];
num[1] = 10;
console.log(num);

let sum = 0;
for (let i = 0; i < 10; i++) {
    sum = sum + i;
    //block scope 
    //can not access the "i" out side the loop if we use let keyword
    //console.log(i)
}
//console.log(i);

//template
const fName = "abir";
const lName = "yusuf";

console.log(`${fName} ${lName} I am from BD` )