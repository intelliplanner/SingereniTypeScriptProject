/**
 * Created by admin on 5/28/2017.
 */
/**
 * Created by admin on 5/19/2017.
 */
var Misc = /** @class */ (function () {
    function Misc() {
    }
    Misc.getUndefInt = function () {
        return this.intVal;
    };
    Misc.getImageWidth = function (isBothCanvasVisible) {
        if (isBothCanvasVisible)
            return TempleConstant.imageWidth;
        else
            return TempleConstant.newImageWidth;
    };
    Misc.getImageHeight = function (isBothCanvasVisible) {
        if (isBothCanvasVisible)
            return TempleConstant.imageHeight;
        else
            return TempleConstant.newImageHeight;
    };
    Misc.getstyle = function (isBothCanvasVisible, oldStyle, newStyle) {
        if (isBothCanvasVisible)
            return oldStyle;
        else
            return newStyle;
    };
    Misc.getCanvasWidth = function (isBothCanvasVisible, oldVal, newVal) {
        if (isBothCanvasVisible)
            return oldVal;
        else
            return newVal;
    };
    Misc.getCanvasHeight = function (noOfDestination, noOfUnloadSource) {
        var defaultHeight = 60;
        var heightLen;
        heightLen = noOfDestination > noOfUnloadSource ? noOfDestination : noOfUnloadSource;
        if (heightLen <= 3) {
            return 60;
        }
        else {
            return (heightLen * 20);
        }
    };
    Misc.getVerticalLineWidth = function (isBothCanvasVisible) {
        if (isBothCanvasVisible)
            return TempleConstant.verticalLineWidth;
        else
            return TempleConstant.verticalLineWidthNew;
    };
    Misc.getVerticalDrawLineDestance = function (arrSize, canvasHeight) {
        var arrSizeNew = arrSize + 1;
        var val = canvasHeight / arrSizeNew; //arrSize == 4 ? 8 : arrSize == 3 ? (canvasHeight/val) : arrSize == 2 ? 20 : arrSize == 1 ? 30 : 0;
        return val;
    };
    Misc.getNewVerticalDrawLineDestance = function (newVal, val) {
        var n = val * newVal; //  newVal == 0 ? val : newVal == 1 ? (val*2) : (val*3) ;
        return n;
    };
    Misc.getLongitude = function (val) {
        var n = val == 4 ? 20 : val == 3 ? 25 : val == 2 ? 15 : val == 1 ? 10 : 0;
        return n;
    };
    Misc.getSubString = function (strVal, strLen) {
        var str = strVal != null && strVal.length > strLen ? strVal.substring(0, strLen) : strVal;
        return str;
    };
    Misc.intVal = -1111111;
    return Misc;
}());
//# sourceMappingURL=Misc.js.map