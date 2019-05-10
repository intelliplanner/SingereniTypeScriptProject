/**
 * Created by admin on 5/29/2017.
 */
var CanvasEvent = /** @class */ (function () {
    function CanvasEvent() {
    }
    CanvasEvent.prototype.drawImage = function (ctx, imageObj, newLat, longitude, url) {
        imageObj.onload = function () {
            ctx.drawImage(imageObj, newLat, longitude, imageObj.width, imageObj.height);
        };
        imageObj.src = url;
    };
    CanvasEvent.prototype.drawImageNew = function (ctx, imageObj, newLat, longitude, noOfVehiclesAtSamePosition) {
        imageObj.onload = function () {
            ctx.drawImage(imageObj, newLat, longitude, imageObj.width, imageObj.height);
        };
        imageObj.src = imageObj.src;
    };
    CanvasEvent.prototype.drawText = function (ctx, newLat, longitude, blinkRate, textStr) {
        // ctx.clearRect(newLat, longitude, newLat+25,longitude+25);
        //  ctx.fillStyle = "yellow";
        //  if(blinkRate > 0){
        //      ctx.fillStyle = "red";
        //  }
        //  ctx.fillRect(newLat,longitude,10,10);
        ctx.fillStyle = "black";
        ctx.font = "10px Arial";
        ctx.fillText(textStr, newLat, longitude);
        //  ctx.drawImage(newLat, longitude , imageObj.height);
    };
    return CanvasEvent;
}());
//# sourceMappingURL=CanvasEvent.js.map