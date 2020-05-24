//multiple arguments
var multiplier=function(){
    var result=1;
    for(var i=arguments.length-1;i>=0;i--){
        result *=arguments[i];
    }
    return result;
}

console.log(multiplier(2,5));


//call and apply methods

var sampleEx=function(work){
    console.log(work);
    console.log(this.benchpress);
}

sampleEx("pushups")
var excersise={benchpress:"5setsperday",
squats:"3perday"}
sampleEx.call(excersise,excersise.squats);
sampleEx.apply(excersise,["jumps","chest","biseps"]);