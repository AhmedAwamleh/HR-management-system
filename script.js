
const allEmployee= [];

function Employee(EmployeeID,FullName,Department,Level,Image){
 
  this.EmployeeID=EmployeeID
  
  this.FullName=FullName
    
  this.Department=Department

  this.Level=Level

  this.Image=Image

  
 
  allEmployee.push(this);

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min};

}
Employee.prototype.Salary=function(){

    (this.Level == "Senior")?this.Salary=getRndInteger(1500,2000):
    (this.Level==="Mid-Senior")?this.Salary=getRndInteger(1000,1500):
     this.Salary=getRndInteger(500,1000);
    
     allEmployee.push(this.Salary);

}

Employee.prototype.Nameandsalary=function(){
    console.log(`${this.FullName}; ${this.Salary} jd \n`);
    document.write(`<p>${this.FullName}; ${this.Salary} jd\n</p>`);

}



const GhaziSamer=new Employee(1000,"GhaziSamer","Administration","Senior","image/Ghazi.jpg")
const GhazLana=new Employee(1001,"LanaAli","Finance","Senior","image/Ghazi.jpg")
const TamaraAyoub=new Employee(1002,"TamaraAyoub","Marketing","Senior","image/Ghazi.jpg")
const SafiWalid=new Employee(1003,"SafiWalid","Administration","Mid-Senior","image/Ghazi.jpg")
const OmarZaid=new Employee(1004,"OmarZaid","Development","Senior","image/Ghazi.jpg")
const RanaSaleh=new Employee(1005,"RanaSaleh","Development","Junior","image/Ghazi.jpg")
const HadiAhmad=new Employee(1006,"HadiAhmad","Finance","Mid-Senior","image/Ghazi.jpg")

for(let i=0;i<allEmployee.length;i++){
    allEmployee[i].Nameandsalary();
   
    allEmployee[i].Salary();

}
