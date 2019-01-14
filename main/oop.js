var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        console.log('aa');
    }
    Person.prototype.eat = function () {
        console.log('I am eating');
    };
    return Person;
}());
var Worker = /** @class */ (function (_super) {
    __extends(Worker, _super);
    function Worker(name, code) {
        var _this = 
        // super关键字调父类的构造方法
        _super.call(this, name) || this;
        console.log('bb');
        _this.code = code;
        return _this;
    }
    // super关键字调父类的方法
    Worker.prototype.doeat = function () {
        _super.prototype.eat.call(this);
    };
    Worker.prototype.work = function () {
        console.log('do working');
    };
    return Worker;
}(Person));
var xuhang = new Worker('xuhang', '5');
xuhang.eat();
//泛型，定义类型
var arr = [];
arr[0] = new Person('xuhang');
arr[1] = new Worker("falways", "5");
arr[0].eat();
arr[1].doeat();
function testLimit(info) {
    console.log(info.name, info.age);
}
testLimit({ name: 'xuhang', age: 22 });
var Sheep = /** @class */ (function () {
    function Sheep() {
    }
    Sheep.prototype.eat = function () {
        console.log('I eat grass');
    };
    return Sheep;
}());
var Tiger = /** @class */ (function () {
    function Tiger() {
    }
    Tiger.prototype.eat = function () {
        console.log('I eat meat');
    };
    return Tiger;
}());
var sheep = new Sheep();
var tiger = new Tiger();
sheep.eat();
tiger.eat();
//# sourceMappingURL=oop.js.map