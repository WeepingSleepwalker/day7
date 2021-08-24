function printOdds(){
    for(var i=0; i < 21; i++){
        if (i % 2 == 1){
            console.log(i);
        } 
    }
}
printOdds();


// decreasing from 100 by multiples of 3
function multi3 (){
    for (var i=100; i > 0; i--){
        if (i % 3 == 0){
            console.log(i);
        }
    }
}
multi3();

function addUp (){
    var sum = 0;
    for(var i = 1; i < 101; i++){
        sum = sum + i;
        console.log(sum);
        }
}
addUp();