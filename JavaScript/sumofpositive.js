let a = [1, -2, 3, 4, 5];
let sum = 0;
for ( let i = 0; i < a.length ; i++){
    if (a[i] > 0){
        sum = sum + a[i];
    }
}
console.log('The sum is ' , sum);