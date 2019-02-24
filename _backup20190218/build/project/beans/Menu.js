/**
 * Created by admin on 10/12/2017.
 */
var Menu = /** @class */ (function () {
    function Menu() {
    }
    Object.defineProperty(Menu.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (value) {
            this._items = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Menu.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    return Menu;
}());
//# sourceMappingURL=Menu.js.map