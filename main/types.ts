let username: string = 'xuhang';
let age: number = 22;
let man: boolean = true;
let habbit: any = '快乐';

let func = (): string => {
    return 'xuhang love';
}

class DefineProperty {
    doing: string;
    level: number;

    exec(username:string): void{
        console.log(username+this.doing+this.level);
    }
}

let person = new DefineProperty();
person.doing = '唱King。。。';
person.level = 5;
person.exec('xuhang');

let test = (p1: string,p2?:string,p3:string='test'):void => {
    console.log(p1,p2,p3)
}
test('start')

function red(...args) {
    args.forEach((arg)=>{
        console.log(arg)
    })
}
red(1,2,3)

function blue(a,b,c) {
    console.log(a,b,c)
}

let arr:any = [1,2]
let arr1: any = [4,5,6,7]

blue(...arr);
blue(...arr1);

