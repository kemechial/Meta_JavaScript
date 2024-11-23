var table = {
        legs: 4,
        color: "green",
        priceUSD: 40
}
console.log(table);
console.log(table.legs);

var school = {};
 school.rooms = 20;
 school.student = 2000;
 school.name = "high school";

 console.log(school);

 var car = {color: "yellow", maxSpeed: 300}
 console.log(car["color"]);
 car["passengers"] = 2;
 console.log(car.passengers);
 
 var testArray = ["test", 3, 5, 5.2];

 for(var i = 0; i< testArray.length; i++){
    console.log(testArray[i]);
 }

 testArray.push("some");

 for(var i = 0; i< testArray.length; i++){
    console.log(testArray[i]);
 }

 console.log(testArray.pop());

 for(var i = 0; i< testArray.length; i++){
    console.log(testArray[i]);
 }

 anotherArray = arrayBuilder("one", 4, true);
 printArray(anotherArray);

 function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}

function printArray(input_array) {
    for(var i = 0; i< input_array.length; i++){
        console.log("element index %d:", i, input_array[i]);
     }
}

console.log(testArray);
