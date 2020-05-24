var counter=(function(){
var addOne=0;
return function(){
    return addOne+=1;

}
})();

console.log(counter())