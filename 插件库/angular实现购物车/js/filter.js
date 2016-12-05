angular.module('ourfilter', []).filter("slice",function(){
    return function(obj,num1,num2){
        return obj.slice(num1,num2)
    }
});