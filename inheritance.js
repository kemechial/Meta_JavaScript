var bird = {
    canFly: true,
    hasWings: true,
    hasFeathers: true
}

var eagle1 = Object.create(bird);

console.log(eagle1.canFly);
eagle1.canFly = false;
console.log(eagle1.canFly);
