console.log("exportng module");
export const lastname = "okolie";

class Person {
  constructor(name, age, ) {
    this.name = name;
    this.age = age;
    this.height =[];
  }
}

class person extends Person {
  
  constructor(name, age, height) {
    super(name, age, height);
    this.height=[]
  };
  calcage (){
    console.log(`my name is ${this.name}`)
  }
    
}


const james = new person("james", 23, "50ft");
const martha = new person("martha", 34, "5.6ft");
console.log(james.calcage());
// console.log(martha);
