var MenuList = /** @class */ (function () {
    function MenuList(_menu) {
        this._menu = _menu;
    }
    Object.defineProperty(MenuList.prototype, "menuListData", {
        get: function () {
            return this._menu;
        },
        set: function (value) {
            this._menu = value;
        },
        enumerable: true,
        configurable: true
    });
    return MenuList;
}());
//# sourceMappingURL=MenuList.js.map