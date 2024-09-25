function receivesAFunction(callback){
    return callback();
}
console.log(receivesAFunction(function(){return 'I was called back'}));

function returnsANamedFunction(){
    function namedFunction(){
        return('My Name')
    } 
    return namedFunction;
} 
function returnsAnAnonymousFunction(){
     return function (){
        return 'Anonymous'

    }
    
}












// returnsANamedFunction()