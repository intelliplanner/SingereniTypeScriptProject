/**
 * Created by admin on 10/12/2017.
 */
var Parser = /** @class */ (function () {
    function Parser(laneList) {
        this._laneList = null;
        this._laneList = laneList;
    }
    Object.defineProperty(Parser.prototype, "laneList", {
        get: function () {
            return this._laneList;
        },
        set: function (value) {
            this._laneList = value;
        },
        enumerable: true,
        configurable: true
    });
    return Parser;
}());
//# sourceMappingURL=Parser.js.map