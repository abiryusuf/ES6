class Students {
    // constructor allows to access the class property or 
    //I can say it's  key of class that allows to access the class property. 
    constructor(studentID, studentName){
        this.id = studentID;
        this.name = studentName;
        this.subject = "computer science" //by default 
    }
}

const student1 = new Students(1, "abir");
const student2  = new Students(2, "yusuf");

console.log(student1, student2);