var myString="I will get master in web development";
console.log(myString.length);
console.log(myString.indexOf('master'));
console.log(myString.lastIndexOf('get'));
console.log(myString.replace("get","defenitely"));
console.log(myString.slice(6,9));
console.log(myString.toLocaleLowerCase());
console.log(myString.toLocaleUpperCase());
console.log(myString.substring(3,9));   //(start,end)
console.log(myString.toString("master"));


var name1= "mahi";
var name2= new String("mahi");

if(name1===name2){
    console.log("Resukt is true");
}
else{
    console.log("Result is false");
}