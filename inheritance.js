class Parent {
    constructor(id, name){
        // this.fatherID =id;
        // this.fatherName = name;
        this.fatherName = "Mashuk";
    }
}



class Child extends Parent{
    constructor(id, name) {
        super();
        this.ID = id
        this.name = name;
        
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}


const str = new Child(01, "Abir");
console.log(str)
