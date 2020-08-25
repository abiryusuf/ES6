class Parent {
    constructor(id, name){
        // this.fatherID =id;
        // this.fatherName = name;
        this.fatherName = "Mashuk";
    }
}



class Child extends Parent{
    constructor(name) {
        super();
        this.name = name;
        
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}


const str = new Child("Abir");
console.log(str)
