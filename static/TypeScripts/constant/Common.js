/**
 * Created by admin on 5/28/2017.
 */
var Common = /** @class */ (function () {
    function Common() {
    }
    Common.getDivId = function (laneId, src) {
        if (laneId == null)
            return "";
        switch (src) {
            case this.laneDivId:
                this.srcId = "LANE_" + laneId;
                break;
            case this.leftSource:
                this.srcId = "LEFT_SOURCE_" + laneId;
                break;
            case this.leftCanvasDivId:
                this.srcId = "LEFT_CANVAS_DIV_" + laneId;
                break;
            case this.leftCanvasId:
                this.srcId = "LEFT_CANVAS_" + laneId;
                break;
            case this.leftDest:
                this.srcId = "LEFT_DEST_" + laneId;
                break;
            case this.rightSource:
                this.srcId = "RIGHT_SOURCE_" + laneId;
                break;
            case this.rightCanvasDivId:
                this.srcId = "RIGHT_CANVAS_DIV_" + laneId;
                break;
            case this.rightCanvasId:
                this.srcId = "RIGHT_CANVAS_" + laneId;
                break;
            case this.rightDest:
                this.srcId = "RIGHT_DEST_" + laneId;
                break;
            case this.leftSourceTableId:
                this.srcId = "LEFT_SOURCE_TABLE_" + laneId;
                break;
            case this.rightSourceTableId:
                this.srcId = "RIGHT_SOURCE_TABLE_" + laneId;
                break;
            case this.leftDestTableId:
                this.srcId = "LEFT_DEST_TABLE_" + laneId;
                break;
            case this.rightDestTableId:
                this.srcId = "RIGHT_DEST_TABLE_" + laneId;
                break;
            case this.leftSourceImageId:
                this.srcId = "LEFT_SOURCE_IMAGE_" + laneId;
                break;
            case this.rightDestImageId:
                this.srcId = "RIGHT_DESTINATION_IMAGE_" + laneId;
                break;
            default: break;
        }
        return this.srcId;
    };
    Common.getSourceImage = function (imageName) {
        var url = "";
        if (imageName == null || imageName.length == 0) {
            imageName = "";
        }
        url = StartApplication.imagePath + imageName;
        // switch (imageIcon) {
        //     case "showel":
        //         url = "images/showel.png";
        //        this.isDirectionLeft = false;
        //         break;
        //     case "HRG":
        //         url = "images/green-truck-horizontal-right.png";
        //         Common.isDirectionLeft = false;
        //         break;
        //     case "HLG":
        //         url = "images/green-truck-horizontal-left.png";
        //         Common.isDirectionLeft = true;
        //         break;
        //     case "VRG":
        //         url = "images/green-truck-verticle-right.png";
        //         this.isDirectionLeft = false;
        //         break;
        //     case "VLG":
        //         url = "images/green-truck-verticle-left.png";
        //         this.isDirectionLeft = true;
        //         break;
        //     case "HRR":
        //         url = "images/red-truck-horizontal-right.png";
        //         this.isDirectionLeft = false;
        //         break;
        //     case "HLR":
        //         url = "images/red-truck-horizontal-left.png";
        //         this.isDirectionLeft = true;
        //
        //         break;
        //     case "VRR":
        //         url = "images/red-truck-verticle-right.png";
        //         this.isDirectionLeft = false;
        //         break;
        //     case "VLR":
        //         url = "images/red-truck-verticle-left.png";
        //         this.isDirectionLeft = true;
        //         break;
        //     case "LOADED_LEFT":
        //         url = "images/yellow_truck_left_180.png";
        //         this.isDirectionLeft = true;
        //         break;
        //     case "LOADED_RIGHT":
        //         url = "images/yellow_truck_right_180.png";
        //         this.isDirectionLeft = false;
        //         break;
        //     default:
        //         break;
        // }
        return url;
    };
    Common.getMousePos = function (canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    };
    Common.getStyleClass = function (css) {
        var styleStr = "";
        if (css == null)
            return styleStr;
        if (css = 'divLeftSource-content') {
            styleStr += "fontColor: #000080; ";
            styleStr += "fontSize: 11.7px; ";
            styleStr += "fontStyle: normal;";
            styleStr += "fontFamily: Times New Roman;";
            styleStr += "fontWeight: normal;";
        }
        else if (css = '.divLeftDestinationNew-content') {
            styleStr += "fontColor: #000080; ";
            styleStr += "fontSize: 11.7px; ";
            styleStr += "fontStyle: normal;";
            styleStr += "fontFamily: Times New Roman;";
            styleStr += "fontWeight: normal;";
        }
        else if (css = 'divRightSource-content') {
            styleStr += "fontColor: #000080; ";
            styleStr += "fontSize: 11.7px; ";
            styleStr += "fontStyle: normal;";
            styleStr += "fontFamily: Times New Roman;";
            styleStr += "fontWeight: normal;";
        }
        else if (css = 'divRightDestinationNew-content') {
            styleStr += "fontColor: #000080; ";
            styleStr += "fontSize: 11.7px; ";
            styleStr += "fontStyle: normal;";
            styleStr += "fontFamily: Times New Roman;";
            styleStr += "fontWeight: normal;";
        }
        return styleStr;
    };
    // public static getStyleClass(textStyle:string):string{
    //  return textStyle;
    // }
    Common.selectOneCheckBox = function (_this) {
        var leftLane = document.getElementById("leftLaneCheckBox");
        var rightLane = document.getElementById("rightLaneCheckBox");
        if (_this.name == "leftLaneCheckBox") {
            if (!leftLane.checked) {
                rightLane.checked = true;
                // <HTMLInputElement>document.getElementById("leftLaneCheckBox").selected=true;
            }
        }
        else if (_this.name == "rightLaneCheckBox") {
            if (!rightLane.checked) {
                leftLane.checked = true;
            }
        }
        Temple.refreshLanes();
    };
    Common.displayBlock = function () {
        var _val = document.getElementById("actionId").value;
        if (_val != '0') {
            document.getElementById("showShowel").style.display = "";
        }
        else {
            document.getElementById("showShowel").style.display = 'none';
        }
    };
    Common.openNav = function () {
        document.getElementById("sideNavigation").style.width = "269.8px";
    };
    Common.closeNav = function () {
        document.getElementById("sideNavigation").style.width = "0px";
    };
    Common.getVehiclesAtSamePosition = function (lattitude, longitude, imageXPoint, imageYPoint) {
        var vehicleCount = 0;
        for (var i in Temple.vehiclePositionList) {
            if ((Temple.vehiclePositionList[i].Lattitude == lattitude) && (Temple.vehiclePositionList[i].Longitude == longitude)
                && (Temple.vehiclePositionList[i].LattitudeNew == imageXPoint) && (Temple.vehiclePositionList[i].LongitudeNew == imageYPoint)) {
                vehicleCount++;
            }
        }
        return vehicleCount;
    };
    Common.rightCanvasloadStatus = 4;
    Common.canvasWidth = 450;
    // public static canvasHeightDefault:number=0;
    Common.dumperImageWidth = 20;
    Common.dumperImageHeight = 18;
    Common.leftSourceImageWidth = 32;
    Common.leftSourceImageHeight = 27;
    Common.laneDivId = "LANE";
    Common.leftSource = "LEFT_SOURCE";
    Common.leftCanvasDivId = "LEFT_CANVAS_DIV";
    Common.leftCanvasId = "LEFT_CANVAS";
    Common.leftDest = "LEFT_DEST";
    Common.rightSource = "RIGHT_SOURCE";
    Common.rightCanvasDivId = "RIGHT_CANVAS_DIV";
    Common.rightCanvasId = "RIGHT_CANVAS";
    Common.rightDest = "RIGHT_DEST";
    Common.leftSourceTableId = "LEFT_SOURCE_TABLE";
    Common.rightSourceTableId = "RIGHT_SOURCE_TABLE";
    Common.leftDestTableId = "LEFT_DEST_TABLE";
    Common.rightDestTableId = "RIGHT_DEST_TABLE";
    Common.leftSourceImageId = "LEFT_SOURCE_IMAGE";
    Common.rightDestImageId = "RIGHT_DESTINATION_IMAGE";
    Common.isDirectionLeft = false;
    Common.srcId = "";
    return Common;
}());
//# sourceMappingURL=Common.js.map