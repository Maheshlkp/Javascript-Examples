var newList=document.createElement("li");
newList.innerHTML="I was added byJS";

document.getElementById("change").appendChild(newList);

document.getElementById("test").innerHTML="Changed by script"