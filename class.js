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
    constructor(name, color, spieces){
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