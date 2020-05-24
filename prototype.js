var sellCar=function(){
    return("I want to sell my car");
}

var sbiBank=function(){   //define properties
    var accountName,accountType,locations;
}

sbiBank.prototype.sellCar=sellCar;  //access above properties using prototype
accountHolder=new sbiBank;
    accountHolder.accountName="Saving Account";
    accountHolder.accountType="home LoAN";

accountHolder.sellCar();

    console.log(accountHolder.sellCar());

    customer1=new sbiBank();
    customer1.accountName="Checking account";
    customer1.locations="Hyderabad";

console.log(customer1.locations);
console.log(customer1.accountName);