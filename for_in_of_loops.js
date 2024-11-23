var car = {
    engine: "432",
    speed: "slow"
}

var sportsCar = Object.create(car);
sportsCar.speed = "fast";

console.log("The sportsCar object is: ", sportsCar);


for (prop in sportsCar) {
    console.log(prop); 
}

for (prop of Object.keys(sportsCar)) {
    console.log(prop); 
}

for (prop of Object.keys(sportsCar)) {
    console.log(sportsCar[prop]); 
}