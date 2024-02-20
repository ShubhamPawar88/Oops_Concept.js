class Student
           {   
             constructor(id,name,marks)   //here id,name,marks are having block scope 
               {
                  this.id =id;   //here this.id,this,.name,this.marks are having global scope 
                  this.name  = name;
                  this.marks=marks;
              }
                printData(  ) 
               {
                  console.log("id of stud = "+this.id); 
                  console.log("name of stud = "+this.name);
                  console.log("marks of stud = "+this.marks);    
                }
              
           }
       let stud=new Student(101,"ram",889.9);   //object creation
       stud.printData(    );    //here, we are function with object name "stud" because this function printData() is a part of class Student