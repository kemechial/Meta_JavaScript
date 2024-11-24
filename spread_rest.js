cars = ["bmw","mercedes","fiat"];
trucks= ["scania","ford","volvo"];
combined = [...cars, ...trucks];
console.log(combined);

combined_added = ["peugeot", ...combined];

console.log(combined_added);

const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar);

const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); 

const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}

car1.speed = 201

console.log(car1.speed, car2.speed)


const meal = ["soup", "steak", "ice cream"]
let [starter] = meal;
console.log(starter);

