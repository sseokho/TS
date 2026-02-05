"use strict";
var Square = /** @class */ (function () {
    function Square(width, height, bg) {
        this.width = width;
        this.height = height;
        this.bg = bg;
    }
    Square.prototype.draw = function () {
        var _a;
        var body = document.querySelector('body');
        var box = document.createElement('div');
        var randomX = Math.floor(Math.random() * (window.innerWidth));
        var randomY = Math.floor(Math.random() * (window.innerHeight));
        box.style.width = "".concat(this.width, "px");
        box.style.height = "".concat(this.height, "px");
        box.style.background = this.bg;
        box.style.position = 'absolute';
        box.style.left = "".concat(randomX, "px");
        box.style.top = "".concat(randomY, "px");
        (_a = document.body) === null || _a === void 0 ? void 0 : _a.appendChild(box);
    };
    return Square;
}());
var 네모 = new Square(30, 30, 'red');
네모.draw();
네모.draw();
