function getStock() {
   return {
       name: 'xuhang',
       age: '22',
       hab:{
           relax:true,
           dream:'singer'
       }
   }
}
let {name,age,hab:{relax}} = getStock();
console.log(name,age,relax)

let array = [1,2,3,4];
function doSometings([num1,num2,...others]) {
    console.log(num1)
    console.log(num2)
    console.log(others)
}

doSometings(array)


for (let a of 'myisxuhang'){
    if (a == 'h') break;
    console.log(a)
}

// this指针
let test = () => {
    this.name = 'xiaoming';
    setInterval(()=>{
        console.log(this.name)
    })
}
