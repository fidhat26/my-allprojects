let a = 5;
for (let i = 0; i < a; i++){
    let row = "";
    for (let j = 0; j < i; j++){
        row += " ";
    }
    for(let j = 0; j < 2*(a-i)-1; j++){
        if(i===0 || j===0 || j===2*(a-i)-2){
            row += "*";
        }else{
            row += " ";
        }
    }
    console.log(row);
}