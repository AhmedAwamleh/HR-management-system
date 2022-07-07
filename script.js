const allEmployees=[];
//for(let i=0; i<allEmployees.length;i++);

console.log(allEmployees);

function Employeeinfo(employeeId, fullName, department, level, imageUrl) {
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    allEmployees.push(this)
}

const ghaziSamer = new Employeeinfo (1000, "Ghazi Samer", "Administration", "Senior  ");
const lanaAli = new Employeeinfo (1001, "Lana Ali", "Finance", "Senior  ");
const tamaraAyoub = new Employeeinfo (1002, "Tamara Ayoub", "Marketing", "Senior  ");
const safiWalid = new Employeeinfo (1003, "Safi Walid", "Administration", "Mid-Senior  ");
const omarZaid = new Employeeinfo (1004, "Omar Zaid", "Development", "Senior  ");
const ranaSaleh = new Employeeinfo (1005, "Rana Saleh", "Development", "Junior  ");
const hadiAhmad = new Employeeinfo (1006, "Hadi Ahmad", "Finance", "Mid-Senior  ");
console.log(allEmployees);


Employeeinfo.prototype.salary= function() {

    if (this.level == "senior") {
        this.salary = Math.floor((Math.random() * 500) + 1500); 
    allEmployees.push(this.salary)

    } else if (this.level.toLowerCase() == "mid-senior") {
        this.salary = Math.floor((Math.random() * 500) + 1000); 
     allEmployees.push(this.salary)

    } else if (this.level.toLowerCase() == "junior") {
        this.salary = Math.floor((Math.random() * 500) + 500); 
     allEmployees.push(this.salary)

}}




Employeeinfo.prototype.netSalary= function () {

    this.netSalary = Math.floor(this.salary - (this.salary / 1.75));
    allEmployees.push(this.netSalary);
       
} 

for (let i = 0; i <= allEmployees.length; i++) {
    allEmployees[i].salary();
    allEmployees[i].netSalary();
   }