let n = 1;
for (let i=1; i<=4; i++){
    let row = "";
    for(let j=0; j<i; j++){
        row += n++ +" ";
    }
    console.log(row);
}
