var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(name, age, gender, isHuman) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.isHuman = isHuman;
    }
    Human.prototype.action = function () {
        return "Hi, my name is ".concat(this.name, ", I am ").concat(this.age, ", i identify as a ").concat(this.gender, ", human ").concat(this.isHuman);
    };
    return Human;
}());
var Person = new Human('Favour', 70, 'Male', true);
// console.log(Person)
// console.log(Person.action())
var child = /** @class */ (function (_super) {
    __extends(child, _super);
    function child(name, age, gender, isHuman, rich) {
        var _this = _super.call(this, name, age, gender, isHuman) || this;
        _this.rich = rich;
        return _this;
    }
    child.prototype.action2 = function () {
        return "Hi, my name is ".concat(this.name, ", I am ").concat(this.age, ", i identify as a ").concat(this.gender, ", human ").concat(this.isHuman, ". Rich? ").concat(this.rich);
    };
    return child;
}(Human));
var Pikin = new child('Favour', 70, 'man', false, true);
console.log(Pikin.action2());
