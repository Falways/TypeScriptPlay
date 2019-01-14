var _this = this;
function getStock() {
    return {
        name: 'xuhang',
        age: '22',
        hab: {
            relax: true,
            dream: 'singer'
        }
    };
}
var _a = getStock(), name = _a.name, age = _a.age, relax = _a.hab.relax;
console.log(name, age, relax);
var array = [1, 2, 3, 4];
function doSometings(_a) {
    var num1 = _a[0], num2 = _a[1], others = _a.slice(2);
    console.log(num1);
    console.log(num2);
    console.log(others);
}
doSometings(array);
for (var _i = 0, _b = 'myisxuhang'; _i < _b.length; _i++) {
    var a = _b[_i];
    if (a == 'h')
        break;
    console.log(a);
}
// this指针
var test = function () {
    _this.name = 'xiaoming';
    setInterval(function () {
        console.log(_this.name);
    });
};
//# sourceMappingURL=quik.js.map