var carDetails={
    name:"Merc Benz",
    model:"C300",
    featues: function(a){
        return("need all properties",
        console.log(this.name))
    },
    reviews:[
        {mahesh:"Its better vehicle with all features"},
        {kevin:"Classic look with modern style"}
    ]
}

carDetails.featues(8000);
carDetails.reviews;

document.getElementById("test").innerHTML=carDetails.reviews;


//constructor example
var sbiBank=function(){   //define properties
    var accountName,accountType,locations;
}
accountHolder=new sbiBank;
    accountHolder.accountName="Saving Account";
    accountHolder.accountType="home LoAN";

    console.log(accountHolder.accountType)

    customer1=new sbiBank();
    customer1.accountName="Checking account";
    customer1.locations="Hyderabad";

console.log(customer1.locations);
console.log(customer1.accountName);