// feet to miles convert function

function feetToMile(feet){
     var miles = feet / 5280;
     return miles;
 }
 var firstItemResult = feetToMile(1);
 console.log(firstItemResult);

 var secondItemResult = feetToMile(17);
 console.log(secondItemResult);

 var thirdItemResult = feetToMile(50);
 console.log(thirdItemResult);


// woodCalculator 

function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalCount = chairCount + tableCount + bedCount;
    return totalCount;
}
var firstMan = woodCalculator(1, 1, 1);
console.log(firstMan);


// brickCalculator

function brickCalculator(level){
    height = 0;
    if(level > 20){
        height +=  ((level - 20)*10);
        level =  20;
    }   
    if(level > 10){
        height +=  ((level - 10)*12);
        level = 10;
    }
    height += (level * 15);
    var totalbrick = height * 1000;
    return totalbrick;
}
var totalbrick = brickCalculator(10);
console.log(totalbrick);

// tinyFriend 

function tinyFriend(name){
    var largest = name[0];
    for(var i = 0; i < name.length; i++){
        var currentName = name[i];
        if(currentName > largest){
            largest = currentName;
        }
    }
    return largest;
}
var largestName = tinyFriend(["Riday", "Sanny", "jon", "Rohomotulla", "Biplob"]);
console.log(largestName);




