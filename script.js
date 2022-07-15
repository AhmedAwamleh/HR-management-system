
const allEmployee = [];

function Employee(EmployeeID,FullName,Department,Level,Image){
 
  this.EmployeeID=EmployeeID;
  
  this.FullName=FullName;
    
  this.Department=Department;

  this.Level=Level;

  this.Image=Image;


  allEmployee.push(this);
}



Employee.prototype.salary = function () {
    (this.Level.toLowerCase() === "Senior") ? this.salary =  getRndIntegar(1500, 2000):
        (this.Level.toLowerCase() === "Mid-Senior") ? this.salary =  getRndIntegar(100,1500) :
            this.salary =  getRndIntegar(500, 1000)

}

Employee.prototype.netsalary = function () {
    this.netsalary = Math.floor(this.salary - (this.salary * 0.075));
}



 


Employee.prototype.Nameandsalary=function(){
    console.log(`${this.FullName}; ${this.salary} jd \n`);
    document.write(`<p>${this.FullName}; ${this.salary};this net salary    ${this.netsalary} jd\n</p>`);

}


const GhaziSamer=new Employee("1000","GhaziSamer","Administration","Senior","image/Ghazi.jpg")
const GhazLana=new Employee("1001","LanaAli","Finance","Senior","image/Ghazi.jpg")
const TamaraAyoub=new Employee("1002","TamaraAyoub","Marketing","Senior","image/Ghazi.jpg")
const SafiWalid=new Employee("1003","SafiWalid","Administration","Mid-Senior","image/Ghazi.jpg")
const OmarZaid=new Employee("1004","OmarZaid","Development","Senior","image/Ghazi.jpg")
const RanaSaleh=new Employee("1005","RanaSaleh","Development","Junior","image/Ghazi.jpg")
const HadiAhmad=new Employee("1006","HadiAhmad","Finance","Mid-Senior","image/Ghazi.jpg")



function getRndIntegar(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;}

for (let i = 0; i < allEmployee.length; i++) {
    
console.log(allEmployee[i]);
    allEmployee[i].salary();
    allEmployee[i].netsalary();
    allEmployee[i].Nameandsalary();
}

