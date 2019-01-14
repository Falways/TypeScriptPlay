class Person{
    age:number;
    constructor(public name:string){
        console.log('aa';
    }
    eat(){
        console.log('I am eating')
    }
}

class Worker extends  Person {
    constructor(name:string,code:string){
        // super关键字调父类的构造方法
        super(name);
        console.log('bb')
        this.code = code;
    }
    // super关键字调父类的方法
    doeat(){
       super.eat()
    }
    private work(){
        console.log('do working')
    }
}

let xuhang = new Worker('xuhang','5');
xuhang.eat()

//泛型，定义类型
let arr: Array<Person> = []
arr[0] = new Person('xuhang');
arr[1] = new Worker("falways","5");
arr[0].eat()
arr[1].doeat()

// 接口
interface limitType {
    name:string,
    age:number
}
function testLimit(info:limitType) {
    console.log(info.name,info.age)
}
testLimit({name:'xuhang',age:22})

interface Animal {
    eat();
}

class Sheep implements Animal{
    eat(){
        console.log('I eat grass')
    }
}

class Tiger implements Animal{
    eat(){
        console.log('I eat meat')
    }
}

let sheep = new Sheep();
let tiger = new Tiger();
sheep.eat();
tiger.eat()
