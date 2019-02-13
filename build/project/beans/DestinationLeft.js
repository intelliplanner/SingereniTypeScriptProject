/**
 * Created by admin on 10/12/2017.
 */
var DestinationLeft = /** @class */ (function () {
    function DestinationLeft() {
        this._dumpers = null;
    }
    Object.defineProperty(DestinationLeft.prototype, "dumpers", {
        get: function () {
            return this._dumpers;
        },
        set: function (value) {
            this._dumpers = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DestinationLeft.prototype, "name", {
        // private _destinationInformation:DestinationInformation[];
        //
        //
        // get destinationInformation(): DestinationInformation[] {
        //     return this._destinationInformation;
        // }
        //
        // set destinationInformation(value: DestinationInformation[]) {
        //     this._destinationInformation = value;
        // }
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DestinationLeft.prototype, "hoverText", {
        get: function () {
            return this._hoverText;
        },
        set: function (value) {
            this._hoverText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DestinationLeft.prototype, "textStyle", {
        get: function () {
            return this._textStyle;
        },
        set: function (value) {
            this._textStyle = value;
        },
        enumerable: true,
        configurable: true
    });
    return DestinationLeft;
}());
//# sourceMappingURL=DestinationLeft.js.map