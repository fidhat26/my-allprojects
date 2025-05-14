
let n = 5;
let result  = [];
for(let i = 1; i <= n; i++){
    if(i % 3  == 0 && i % 5 == 0){
        result.push('fizzbuzz');
    }
    else if(i % 3 == 0){
        result.push('fizz'); 
    }
    else if(i % 5 == 0){
        result.push('buzz');
    }
    else{
        result.push(i);
    }
}
console.log('The result is' , result);
