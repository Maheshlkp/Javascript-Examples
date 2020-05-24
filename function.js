//define a function
function increaseScore(currentScore){
var newScore=2*currentScore;
return newScore;
}

console.log(increaseScore(5));

//assigning to a variable
var newHighScore= function(currentScore){
    var newHighScore=2*currentScore;
    return newHighScore;
}

document.getElementById("test").innerHTML=newHighScore(7);

var newHighScore=function(currentScore){
    return(console.log(2*currentScore))
}(2);

var newHighScore=function(currentScore){
    return(console.log(this),
    console.log(arguments))
}(2);

