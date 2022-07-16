
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
 

const cardInfo =document.getElementById("card");

//Employee.prototype.Nameandsalary=function(){
    //console.log(`${this.FullName}; ${this.salary} ;${this.Image}jd \n`);


//pE1.textContent=(`${this.FullName}:${this.Level}:${this.EmployeeID}`)

//cardinfo.appendChild(pE1);

    //document.write(`<p>${this.FullName}; ${this.salary};this net salary ${this.netsalary}jd ${this.Image} \n</p>`);

//}
Employee.prototype.infoCard = function () {
    const cardImg = document.createElement("img");
    const cardParent = document.createElement("div");
    const infoParent = document.createElement("div");
    const cardInfo1 = document.createElement("p");
    const cardInfo2 = document.createElement("p");
    const cardInfo3 = document.createElement("p");
       cardParent.classList.add("card");
       cardImg.src = this.Image;
       cardImg.alt=`${this.fullName}`;
       cardImg.classList.add("image");
   

       infoParent.classList.add("info");
   
       cardInfo1.textContent = `Name: ${this.fullName} - ID: ${this.EmployeeID}`;
       cardInfo2.textContent = `Department: ${this.Department} - Level: ${this.Level}`;
       cardInfo3.textContent = `Salary: ${this.netsalary}`;
       
       cardParent.appendChild(cardImg);
       infoParent.appendChild(cardInfo1);
       infoParent.appendChild(cardInfo2);
       infoParent.appendChild(cardInfo3);
   
   
   cardParent.appendChild(infoParent);
   
   document.body.appendChild(cardParent);   
    
   }



const ghaziSamer = new Employee (1000, "Ghazi Samer", "Administration", "Senior", "<Image src=image/Ghazi.jpg>");
const lanaAli = new Employee (1001, "Lana Ali", "Finance", "Senior","<Image src=image/Lana.jpg>");
const tamaraAyoub = new Employee (1002, "Tamara Ayoub", "Marketing", "Senior","<Image src=image/Tamara.jpg>");
const safiWalid = new Employee (1003, "Safi Walid", "Administration", "Mid-Senior","<Image src=image/Safi.jpg>");
const omarZaid = new Employee (1004, "Omar Zaid", "Development", "Senior","<Image src=image/Omar.jpg>");
const hadiAhmad = new Employee (1006, "Hadi Ahmad", "Finance", "Mid-Senior","<Image src=image/Hadi.jpg>");



function getRndIntegar(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;}

for (let i = 0; i < allEmployee.length; i++) {
    
console.log(allEmployee[i]);
    allEmployee[i].salary();
    allEmployee[i].netsalary();
    allEmployee[i].infoCard();
    
    
}


