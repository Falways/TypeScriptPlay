var username = 'xuhang';
var age = 22;
var man = true;
var habbit = '快乐';
var func = function () {
    return 'xuhang love';
};
var DefineProperty = /** @class */ (function () {
    function DefineProperty() {
    }
    DefineProperty.prototype.exec = function (username) {
        console.log(username + this.doing + this.level);
    };
    return DefineProperty;
}());
var person = new DefineProperty();
person.doing = '唱King。。。';
person.level = 5;
person.exec('xuhang');
var test = function (p1, p2, p3) {
    if (p3 === void 0) { p3 = 'test'; }
    console.log(p1, p2, p3);
};
test('start');
function red() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    args.forEach(function (arg) {
        console.log(arg);
    });
}
red(1, 2, 3);
function blue(a, b, c) {
    console.log(a, b, c);
}
var arr = [1, 2];
var arr1 = [4, 5, 6, 7];
blue.apply(void 0, arr);
blue.apply(void 0, arr1);
//# sourceMappingURL=types.js.map