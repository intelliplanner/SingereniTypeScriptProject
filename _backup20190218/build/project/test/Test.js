var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.count = function () {
        document.write("hello");
        console.log("hello");
    };
    return Test;
}());
var a = new Test();
a.count();
//# sourceMappingURL=Test.js.map