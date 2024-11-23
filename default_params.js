class Animal {
    constructor(name){
        this.name = name;
    }

    print(){
        console.log(`name of this animal is ${this.name}`
        );
            
    }
}

class Bird extends Animal {
    constructor(name = "cat", color = "blue", spieces = "cat"){
        super(name);
        this.color = color;
        this.spieces = spieces;
    }

     fly() {
        if(this.spieces === "eagle"){
            console.log(`This ${this.spieces} can fly`);
            
        }
    }

}

eagle = new Bird("jack","red","eagle");
eagle.fly();
eagle.print();

class NoDefaultParams {
    constructor(num1, num2, num3, string1, bool1) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}

var fail = new NoDefaultParams(1,2,3,false);
console.log(fail.calculate()); // 'The value of bool1 is incorrect');

