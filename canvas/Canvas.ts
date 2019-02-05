/**
 * Created by admin on 5/28/2017.
 */
class Canvas{
    laneBean:Lane;
    canvasIdLeft:string;
    canvasIdRight:string;
    private canvasLeft: HTMLCanvasElement;
    private canvasRight: HTMLCanvasElement;
    ctxLeft: CanvasRenderingContext2D;
    ctxRight: CanvasRenderingContext2D;
    vehicleListLeftCanvas:any = [];
    vehicleListRightCanvas:any = [];
    //menuEvent:MouseEventList;

    private static dismissEvent:string = "Dismiss";
    private static reminderEvent:string = "Reminder";
    private static RE_ASSIGN_EVENT:string = "Re-Assign";

    private static RE_ASSIGN:number = 0;
    private static REMINDER:number = 1;
    private static DISMISS:number = 2;


    constructor(laneBean:Lane){
        this.laneBean = laneBean;
       // this.menuEvent = new MouseEventList();
        var leftLane = <HTMLInputElement>document.getElementById("leftLaneCheckBox");
        var rightLane = <HTMLInputElement>document.getElementById("rightLaneCheckBox");
        if(leftLane.checked){
            this.canvasIdLeft = Common.getDivId(laneBean.id, Common.leftCanvasId);
            this.canvasLeft = <HTMLCanvasElement>document.getElementById(this.canvasIdLeft);
            this.ctxLeft = this.canvasLeft.getContext("2d");
            var hit = false;
            // this.ctxLeft.clearRect(0, 0, this.canvasLeft.width, this.canvasLeft.height);
            this.canvasLeft.addEventListener("mousemove",function (evt) {
                var mousePos = MouseEventList.getMousePos(this, evt);
                if(Temple.vehiclePositionList != null && Temple.vehiclePositionList.length >0){
                    hit = false;
                    var hoverTextList = [];
                    for ( var i in Temple.vehiclePositionList) {
                    if(Temple.vehiclePositionList[i].CanvasId != this.id)
                        continue;

                    if ((Temple.vehiclePositionList[i].Lattitude < mousePos.x) && (mousePos.x < Temple.vehiclePositionList[i].LattitudeNew)
                        && (Temple.vehiclePositionList[i].Longitude < mousePos.y) && (mousePos.y < Temple.vehiclePositionList[i].LongitudeNew)) {
                        // alert("Position Match");

                        if(Temple.vehiclePositionList[i].Lattitude > 86) {
                            hit = true;
                           // MouseEventList.drawToolTipOnCanvas(mousePos, evt, Temple.vehiclePositionList[i].HoverText, hit);
                            hoverTextList.push(Temple.vehiclePositionList[i].HoverText);
                        }
                       // break;
                    }

                }
                    MouseEventList.drawToolTipOnCanvasForMultipleVehicle(mousePos, evt,hoverTextList,hit);
                }
                MouseEventList.drawToolTipOnCanvasForMultipleVehicle(mousePos, evt,hoverTextList,hit);
            });


            this.canvasLeft.addEventListener("contextmenu",function (evt) {
                var mousePos = MouseEventList.getMousePos(this, evt);
                if(Temple.vehiclePositionList != null && Temple.vehiclePositionList.length >0){
                    for ( var i in Temple.vehiclePositionList) {
                        if(Temple.vehiclePositionList[i].CanvasId != this.id)
                            continue;
                        var hit = false;
                        if ((Temple.vehiclePositionList[i].Lattitude < mousePos.x) && (mousePos.x < Temple.vehiclePositionList[i].LattitudeNew)
                            && (Temple.vehiclePositionList[i].Longitude < mousePos.y) && (mousePos.y < Temple.vehiclePositionList[i].LongitudeNew)) {
                            // alert("Position Match");
                            hit = true;
                            //alert("Hello Click on vehicle "+Temple.vehiclePositionList[i].CanvasId);
                            MouseEventList.drawToolTipOnCanvas(mousePos, evt,Temple.vehiclePositionList[i].HoverText,false);
                            $( function() {
                                $.contextMenu( {
                                    selector : '#' + Temple.vehiclePositionList[i].CanvasId,
                                    callback : function(key, options) {
                                        var m = "clicked: " + key;
                                         console.log(m);
                                         alert(m);
                                        var res = key.split(",");

                                        var _name = res[0];
                                        var _event = Number(res[1]);
                                        switch(_event){
                                            case Canvas.RE_ASSIGN:
                                                //EventListener.eventOnShowelRouteChange(key, options);
                                             //   MouseEventList.drawToolTipOnCanvas(mousePos, evt,Temple.vehiclePositionList[i].HoverText,false);
                                                EventListener.eventOnShowelRouteChange(this,_name, Canvas.RE_ASSIGN_EVENT);

                                                //Dialog.openDialog(this,Dialog.saveRoutes());
                                                break;
                                            case Canvas.REMINDER:
                                                EventListener.eventOnShowelReminder(key, options);
                                                break;
                                            case Canvas.DISMISS:
                                                EventListener.eventOnShowelDismiss(key, options);
                                                break;

                                            default:
                                                break;
                                        }
                                    },
                                    items :  Temple.vehiclePositionList[i].Menu
                                });
                            });
                            break;
                        }
                        MouseEventList.drawToolTipOnCanvas(mousePos, evt,Temple.vehiclePositionList[i].HoverText,hit);
                    }
                }
            });


        }
        if(rightLane.checked) {
            this.canvasIdRight = Common.getDivId(laneBean.id, Common.rightCanvasId);
            this.canvasRight = <HTMLCanvasElement>document.getElementById(this.canvasIdRight);
            this.ctxRight = this.canvasRight.getContext("2d");
            // this.ctxRight.clearRect(0, 0, this.canvasRight.width, this.canvasRight.height);
            var hit = false;

            // this.canvasRight.addEventListener("mousemove",function (evt) {
            //     var mousePos = MouseEventList.getMousePos(this, evt);
            //     MouseEventList.drawToolTipOnCanvasForMultipleVehicle(mousePos, evt,"",false);
            // });

            this.canvasRight.addEventListener("mousemove",function (evt) {
                var mousePos = MouseEventList.getMousePos(this, evt);
                if(Temple.vehiclePositionList != null && Temple.vehiclePositionList.length >0){
                    hit = false;
                    var hoverTextList = [];
                    for ( var i in Temple.vehiclePositionList) {
                        if(Temple.vehiclePositionList[i].CanvasId != this.id)
                            continue;

                        if ((Temple.vehiclePositionList[i].Lattitude < mousePos.x) && (mousePos.x < Temple.vehiclePositionList[i].LattitudeNew)
                            && (Temple.vehiclePositionList[i].Longitude < mousePos.y) && (mousePos.y < Temple.vehiclePositionList[i].LongitudeNew)) {
                            // alert("Position Match");
                            hit = true;
                            hoverTextList.push(Temple.vehiclePositionList[i].HoverText);
                            // document.getElementById("VehicleTip").innerHTML = Temple.vehiclePositionList[i].HoverText;
                            //break;
                        }

                    }
                    MouseEventList.drawToolTipOnCanvasForMultipleVehicle(mousePos, evt,hoverTextList,hit);
                  //
                }
               // hit = false;
                MouseEventList.drawToolTipOnCanvasForMultipleVehicle(mousePos, evt,hoverTextList,hit);
            });

            this.canvasRight.addEventListener("contextmenu",function (evt) {
                var mousePos = MouseEventList.getMousePos(this, evt);
                if(Temple.vehiclePositionList != null && Temple.vehiclePositionList.length >0){
                    for ( var i in Temple.vehiclePositionList) {
                        if(Temple.vehiclePositionList[i].CanvasId != this.id)
                            continue;
                        var hit = false;
                        if ((Temple.vehiclePositionList[i].Lattitude < mousePos.x) && (mousePos.x < Temple.vehiclePositionList[i].LattitudeNew)
                            && (Temple.vehiclePositionList[i].Longitude < mousePos.y) && (mousePos.y < Temple.vehiclePositionList[i].LongitudeNew)) {
                            // alert("Position Match");

                            hit = true;
                          //  MouseEventList.addRightClickEvent("this.canvasRight",Temple.vehiclePositionList[i].Menu);
                           // MouseEventList.addLeftClickEvent('settingImage',TempleConstant.leftClickMenu)
                            //alert("Hello Click on vehicle "+Temple.vehiclePositionList[i].CanvasId);

                            MouseEventList.drawToolTipOnCanvas(mousePos, evt,Temple.vehiclePositionList[i].HoverText,false);
                            $( function() {
                                $.contextMenu( {
                                    selector : '#' + Temple.vehiclePositionList[i].CanvasId,
                                    callback : function(key, options) {
                                        var m = "clicked: " + key;
                                        console.log(m);
                                        alert(m);
                                        var res = key.split(",");

                                        var _name = res[0];
                                        var _event = Number(res[1]);
                                        switch(_event){
                                            case Canvas.RE_ASSIGN:
                                                //EventListener.eventOnShowelRouteChange(key, options);
                                              // MouseEventList.drawToolTipOnCanvas(mousePos, evt,Temple.vehiclePositionList[i].HoverText,false);
                                                EventListener.eventOnShowelRouteChange(this,_name, Canvas.RE_ASSIGN_EVENT);
                                                //Dialog.openDialog(this,Dialog.saveRoutes());
                                                break;
                                            case Canvas.REMINDER:
                                                EventListener.eventOnShowelReminder(key, options);
                                                break;
                                            case Canvas.DISMISS:
                                                EventListener.eventOnShowelDismiss(key, options);
                                                break;

                                            default:
                                                break;
                                        }
                                    },
                                    items :  Temple.vehiclePositionList[i].Menu
                                });
                            });



                            break;
                        }
                        MouseEventList.drawToolTipOnCanvas(mousePos, evt,Temple.vehiclePositionList[i].HoverText,hit);
                    }
                }
            });

        }
    }
    public  refreshCanvas(laneBean:Lane, canvasPosition : String){

    }
    public drawImagesOnCanvas(){

        var canvasSize = Common.canvasWidth;
        var border = 400;
        var maximumDistance = 880;

        var horMoveToXRightCanvas = 100;
        var horLineToXRightCanvas = 350;
        var horLineToXRightCanvasNew = 1060;

        var verMoveToXLeftCanvas = 100;
        var verLineToXLeftCanvas = 450;
        var verLineToXLeftCanvasNew = 1160;


        var verMoveToXRightCanvas = 0;
        var verLineToXRightCanvas = 350;
        var verLineToXRightCanvasNew = 1060;
        // var verMoveToY = 0;
        // var verLineToY = 60;

        var imageObj = null;
        var isTrue = false;
        if(this.canvasLeft != null && this.canvasRight != null)
            isTrue = true;


        var leftDestinations =  this.laneBean.loadToUnload.destinationLeft == null ? 0 : this.laneBean.loadToUnload.destinationLeft.length;
        var rightDestinations = this.laneBean.unloadToLoad.sourceRight == null ? 0 :this.laneBean.unloadToLoad.sourceRight.length
        if(this.canvasLeft != null && this.canvasRight != null){
            this.drawLines(this.ctxLeft,leftDestinations,verMoveToXLeftCanvas,verLineToXLeftCanvas,horMoveToXRightCanvas,Misc.getCanvasHeight(leftDestinations,rightDestinations));
            this.drawLines(this.ctxRight,rightDestinations,verMoveToXRightCanvas,verLineToXRightCanvas,horLineToXRightCanvas,Misc.getCanvasHeight(leftDestinations,rightDestinations));
        }else if(this.canvasLeft != null){
            this.drawLines(this.ctxLeft,leftDestinations,verMoveToXLeftCanvas,verLineToXLeftCanvasNew,horMoveToXRightCanvas,Misc.getCanvasHeight(leftDestinations,rightDestinations));
        }else{
            //this.drawLines(this.ctxRight,this.laneBean.unloadToLoad.sourceRight.length,verMoveToXRightCanvas,verLineToXRightCanvasNew,horLineToXRightCanvasNew,Misc.getCanvasHeight(this.laneBean.loadToUnload.destinationLeft.length,this.laneBean.unloadToLoad.sourceRight.length));
            this.drawLines(this.ctxRight,rightDestinations,verMoveToXRightCanvas,verLineToXRightCanvasNew,horLineToXRightCanvasNew,Misc.getCanvasHeight(leftDestinations,rightDestinations));
        }


        var leftLaneChecked = <HTMLInputElement>document.getElementById("leftLaneCheckBox");
        var rightLaneChecked = <HTMLInputElement>document.getElementById("rightLaneCheckBox");

        if(leftLaneChecked  && rightLaneChecked){

            for (let destinationInfo in this.laneBean.loadToUnload.destinationLeft){
              //  var yPoint = Canvas.getImageYPointOnCanvas(this.laneBean.loadToUnload.destinationLeft.length,this.laneBean.unloadToLoad.sourceRight.length,Number(destinationInfo)+1);
                var yPoint = Canvas.getImageYPointOnCanvas(leftDestinations,rightDestinations,Number(destinationInfo)+1);
                //getImageYPointOnCanvas(noOfPoints:number,canvasHeight:number,routePosition:number):number {
                var vehicles = this.laneBean.loadToUnload.destinationLeft[destinationInfo].dumpers;
                for(let vehicleInfo in vehicles){
                    if(vehicles[vehicleInfo] == null){
                        continue;
                    }
                    imageObj = new Image();
                    imageObj.width = Common.dumperImageWidth;//Misc.getImageWidth(isTrue);
                    imageObj.height = Common.dumperImageHeight;//Misc.getImageHeight(isTrue);
                    let  _vehicle:Vehicle = vehicles[vehicleInfo];
                    imageObj.src = Common.getSourceImage(_vehicle.imageName);

                    if(_vehicle.loadStatus >= Common.rightCanvasloadStatus ) {
                        //var xPoint = Number(Common.canvasWidth) - Number(Canvas.getImageXPointOnCanvas(this.canvasLeft.width, _vehicle.percentLegCompleted));
                        var xPoint = Number(Common.canvasWidth) - Number(Canvas.getImageXPointOnCanvas(Common.canvasWidth, _vehicle.percentLegCompleted));
                        console.log("right Canvas vehicle"+_vehicle.icon + ", ImageXPoint: " +xPoint+","+ yPoint);
                    }
                    else{

                       // var xPoint = Canvas.getImageXPointOnCanvas(this.canvasLeft.width,_vehicle.percentLegCompleted);
                        var xPoint = Canvas.getImageXPointOnCanvas(Common.canvasWidth,_vehicle.percentLegCompleted);
                        console.log("left Canvas vehicle"+_vehicle.icon + " , ImageXPoint: "+xPoint+","+ yPoint);
                    }


                    var imageXPoint = Number(xPoint) + Number(imageObj.width);
                    var  imageYPoint =  Number(yPoint) + Number(imageObj.height);
                    Temple.vehiclePositionList.push({
                        CanvasId:this.canvasIdLeft,
                        VehicleName:_vehicle.icon,
                        HoverText:_vehicle.pophover,
                        Lattitude:xPoint,
                        Longitude:yPoint,
                        LattitudeNew:imageXPoint,
                        LongitudeNew:imageYPoint,
                        Menu:_vehicle.menu
                    });

                    this.vehicleListLeftCanvas.push({
                        CanvasId:this.canvasIdLeft,
                        VehicleName:_vehicle.icon,
                        HoverText:_vehicle.pophover,
                        Lattitude:xPoint,
                        Longitude:yPoint,
                        LattitudeNew:imageXPoint,
                        LongitudeNew:imageYPoint});

                    this.quickDrawCanvas(this.canvasLeft,this.ctxLeft,_vehicle.blinkSpeed, xPoint, yPoint,imageObj,imageXPoint,imageYPoint);
                }

            }
            for (let sourceInfoRight in this.laneBean.unloadToLoad.sourceRight){
            //    var yPoint = Canvas.getImageYPointOnCanvas(this.laneBean.loadToUnload.destinationLeft.length,this.laneBean.unloadToLoad.sourceRight.length,Number(sourceInfoRight)+1);
                var yPoint = Canvas.getImageYPointOnCanvas(leftDestinations,rightDestinations,Number(sourceInfoRight)+1);
                //getImageYPointOnCanvas(noOfPoints:number,canvasHeight:number,routePosition:number):number {
                var vehicles = this.laneBean.unloadToLoad.sourceRight[sourceInfoRight].dumpers;
                for(let vehicleInfo in vehicles){
                    if(vehicles[vehicleInfo] == null){
                        continue;
                    }
                    imageObj = new Image();
                    imageObj.width = Common.dumperImageWidth;//Misc.getImageWidth(isTrue);
                    imageObj.height = Common.dumperImageHeight;//Misc.getImageHeight(isTrue);
                    let  _vehicle:Vehicle = vehicles[vehicleInfo];
                    imageObj.src = Common.getSourceImage(_vehicle.imageName);

                    if(_vehicle.loadStatus >= Common.rightCanvasloadStatus ) {// right Canvas
                        var xPoint = Number(Common.canvasWidth) - Number(Canvas.getImageXPointOnCanvas(Common.canvasWidth, _vehicle.percentLegCompleted));
                        console.log("right Canvas vehicle"+_vehicle.icon + " , ImageXPoint: "+xPoint+","+ yPoint);
                    }
                    else{//left Canvas
                        var xPoint =  Number(Canvas.getImageXPointOnCanvas(Common.canvasWidth, _vehicle.percentLegCompleted));
                        console.log("left Canvas vehicle"+_vehicle.icon + " , ImageXPoint: "+xPoint +","+ yPoint);
                    }

                    var imageXPoint = Number(xPoint) + Number(imageObj.width);
                    var  imageYPoint =  Number(yPoint) + Number(imageObj.height);

                    Temple.vehiclePositionList.push({
                        CanvasId:this.canvasIdRight,
                        VehicleName:_vehicle.icon,
                        HoverText:_vehicle.pophover,
                        Lattitude:xPoint,
                        Longitude:yPoint,
                        LattitudeNew:imageXPoint,
                        LongitudeNew:imageYPoint,
                        Menu:_vehicle.menu
                    });

                    this.vehicleListRightCanvas.push({
                        CanvasId:this.canvasIdRight,
                        VehicleName:_vehicle.icon,
                        HoverText:_vehicle.pophover,
                        Lattitude:xPoint,
                        Longitude:yPoint,
                        LattitudeNew:imageXPoint,
                        LongitudeNew:imageYPoint});


                    this.quickDrawCanvas(this.canvasRight,this.ctxRight,_vehicle.blinkSpeed, xPoint, yPoint,imageObj,imageXPoint,imageYPoint);
                }

            }
        }
        else if(leftLaneChecked){

        }
        else{ // right lane checked

        }

    }

    public  quickDrawCanvas(canvas:HTMLCanvasElement,context:CanvasRenderingContext2D,blinkRate:number,lattitude:number, longitude : number,imageObj:HTMLImageElement,imageXPoint:number,imageYPoint:number){
        var noOfVehiclesAtSamePosition = Common.getVehiclesAtSamePosition(lattitude, longitude,imageXPoint,imageYPoint);
        if(blinkRate > 0) {
            var blinker = new VehicleAlerts(canvas, context, 800, lattitude, longitude, imageObj,noOfVehiclesAtSamePosition);
            blinker.Imageblinker();
        }
        else{
            var canvasEve = new CanvasEvent();
            canvasEve.drawImage(context, imageObj, lattitude, longitude, imageObj.src);
        }
        // else
        // if(blinkRate > 0  && Number(noOfVehiclesAtSamePosition) > 1) {
        //     var canvasEve = new CanvasEvent();
        //     canvasEve.drawText(context, lattitude, longitude, blinkRate, noOfVehiclesAtSamePosition);
        // }
    }


    public drawLines(ctx,noOfPoints:number,moveToX:number,lineToX:number,lineToXHor:number,canvasHeight:number){
        // if(ctx != null && ctx.)
        var val:number = Misc.getVerticalDrawLineDestance(noOfPoints,canvasHeight);

        for (var i=0;i<noOfPoints;i++) {
            var lineDrawAt = Misc.getNewVerticalDrawLineDestance(Number(i)+ 1, Number(val));
            ctx.beginPath();
            ctx.lineWidth = .1;
            ctx.moveTo(moveToX, lineDrawAt);
            ctx.lineTo(lineToX, lineDrawAt);
            ctx.stroke();

            ctx.beginPath();
            ctx.lineWidth= .1;
            ctx.moveTo(lineToXHor, 0);
            ctx.lineTo(lineToXHor, canvasHeight);
            ctx.stroke();
        }
    }

  public static getImageXPointOnCanvas(canvasWidth:number, percentageLegComleted:number):number {
     //var maxRunningAreaOnCanvas = 80;
      var xPoint;
        // if(percentageLegComleted <= 80) {
        //      xPoint = (canvasWidth * percentageLegComleted)/100 ;
        // }else{
        //      xPoint = (canvasWidth * maxRunningAreaOnCanvas)/100 ;
        // }
        xPoint = (canvasWidth * percentageLegComleted)/100 ;
        return xPoint;
  }
  public static getImageYPointOnCanvas(noOfPoints:number,noOfSourcePoints:number,routePosition:number):number {
    var yPoint = 20;
    var val  = Misc.getVerticalDrawLineDestance(noOfPoints,Misc.getCanvasHeight(noOfPoints,noOfSourcePoints));
    yPoint = Misc.getNewVerticalDrawLineDestance(routePosition, Number(val));
    return yPoint;
}

public static clearCanvas(canvasLeft){
    var canvasa = <HTMLCanvasElement>document.getElementById(canvasLeft);
    var context = <CanvasRenderingContext2D>canvasa.getContext("2d");
    context.clearRect(0, 0, canvasa.width, canvasa.height);
}

}