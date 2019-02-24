/**
 * Created by admin on 5/31/2017.
 */
var BlinkVehicle = /** @class */ (function () {
    function BlinkVehicle() {
    }
    BlinkVehicle.draw = function () {
        var c = document.getElementById("canvas1");
        var context = c.getContext("2d");
        var imageObj = new Image();
        // imageObj.width = 20;//Misc.getImageWidth(isTrue);
        // imageObj.height = 20;//Misc.getImageHeight(isTrue);
        // imageObj.src = "images/shovel_gray.png";
        // var blinker = new VehicleAlerts(c,context,1000,200,20,imageObj,20);
        //
        // blinker.Imageblinker(false);
        //
        // var imageObj1 = new Image();
        // imageObj1.width = 20;//Misc.getImageWidth(isTrue);
        // imageObj1.height = 20;//Misc.getImageHeight(isTrue);
        // imageObj1.src = "images/shovel_gray.png";
        // var blinker1 = new VehicleAlerts(c,context,2,300,20,imageObj,20);
        // blinker1.Imageblinker(false);
        //
        //
        //
        // var imageObj1 = new Image();
        // imageObj1.width = 20;//Misc.getImageWidth(isTrue);
        // imageObj1.height = 20;//Misc.getImageHeight(isTrue);
        // imageObj1.src = "images/shovel_gray.png";
        // var blinker1 = new VehicleAlerts(c,context,2,300,20,imageObj,20);
        // blinker1.Imageblinker(false);
        //
        //
        //
        // var imageObj2 = new Image();
        // imageObj2.width = 20;//Misc.getImageWidth(isTrue);
        // imageObj2.height = 20;//Misc.getImageHeight(isTrue);
        // imageObj2.src = "images/shovel_gray.png";
        // var blinker2 = new VehicleAlerts(c,context,2,500,20,imageObj,20);
        // blinker2.Imageblinker(false);
        var imageObj2 = new Image();
        imageObj2.width = 20; //Misc.getImageWidth(isTrue);
        imageObj2.height = 20; //Misc.getImageHeight(isTrue);
        var blinker2 = new VehicleAlerts(c, context, 2, 600, 20, imageObj, 20);
        // blinker2.Imageblinker(true);
    };
    return BlinkVehicle;
}());
//# sourceMappingURL=BlinkVehicle.js.map