/* The destructuring assignment syntax is a JavaScript expression 
that makes it possible to unpack values from arrays, or properties 
from objects, into distinct variables.*/
// or I can get value from array list or object by declaring a variable with curly brackets 

const info = {
    firstName: "Abir",
    lastName: "Yusuf",
    phone: 83938933,
    age: 30,
    job: "Web developer",
}
const { phone } = info;
console.log(phone);
// const name = info.firstName;
// const last_Name = info.lastName;

//console.log(`${name} ${last_Name}`)
//console.log(info.firstName);

// Array
let friends = ["Asad", "Bodi", "Didar", "Naim", "Jewel" ];

let [friendName, ...restFriends] = friends;

console.log(friendName, restFriends);

// object
const objects = {
    name: "yusuf",
    contact: {
        cell: 38382838,
        email: "abir@gmail.com"
    }
}

const { cell }  = objects.contact;

console.log(cell);