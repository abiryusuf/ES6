//this: reference the current object's property 
let person ={
    firstName: "Abir",
    lastName: "Yusuf",
    address: "NY",
    salary: 10000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    getCharge: function(amount, tips, tax){
        //If I put only salary, it won't affect person object's salary because i did not mention by this key word
        console.log(this);
        this.salary = this.salary - amount + tips - tax;
        return this.salary;
    }
}
// const res = person.getFullName();
// console.log(res);

// person.getCharge(300);
// console.log(person.salary);


const secondPerson = {
    firstName: "Arafat",
    lastName: "hossen",
    address: "NY",
    salary: 8000
}


//bind: 
//when we need to use one object method from another object, we can use bind function.

// const str = person.getCharge.bind(secondPerson);
// str(3000);
// str(2000)

// call

person.getCharge.call(secondPerson, 3000, 200, 100);
console.log(secondPerson.salary);