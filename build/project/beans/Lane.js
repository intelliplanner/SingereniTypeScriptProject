/**
 * Created by admin on 10/12/2017.
 */
var Lane = /** @class */ (function () {
    function Lane() {
        this._loadToUnload = null;
        this._unloadToLoad = null;
    }
    Object.defineProperty(Lane.prototype, "id", {
        //private _vehicle:Vehicle[];
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Lane.prototype, "loadToUnload", {
        get: function () {
            return this._loadToUnload;
        },
        set: function (value) {
            this._loadToUnload = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Lane.prototype, "unloadToLoad", {
        get: function () {
            return this._unloadToLoad;
        },
        set: function (value) {
            this._unloadToLoad = value;
        },
        enumerable: true,
        configurable: true
    });
    return Lane;
}());
//# sourceMappingURL=Lane.js.map