/**
 * Created by admin on 5/28/2017.
 */
 class Common{
    public static imagePath:string="images/";
    // public static imagePath = "/static/TypeScripts/images/";
    public static rightCanvasloadStatus:number = 4;
    public static canvasWidth:number=450;
   // public static canvasHeightDefault:number=0;
    public static dumperImageWidth = 20;
    public static dumperImageHeight = 18;

    public static leftSourceImageWidth = 32;
    public static leftSourceImageHeight = 27;

    public static laneDivId: string= "LANE";
    public static leftSource: string= "LEFT_SOURCE";
    public static leftCanvasDivId: string= "LEFT_CANVAS_DIV";
    public static leftCanvasId: string= "LEFT_CANVAS";
    public static leftDest: string= "LEFT_DEST";
    public static rightSource: string= "RIGHT_SOURCE";
    public static rightCanvasDivId: string= "RIGHT_CANVAS_DIV";
    public static rightCanvasId: string= "RIGHT_CANVAS";
    public static  rightDest : string = "RIGHT_DEST";
    public static leftSourceTableId: string= "LEFT_SOURCE_TABLE";
    public static rightSourceTableId: string= "RIGHT_SOURCE_TABLE";
    public static leftDestTableId: string= "LEFT_DEST_TABLE";
    public static rightDestTableId: string= "RIGHT_DEST_TABLE";
    public static leftSourceImageId : string= "LEFT_SOURCE_IMAGE";
    public static rightDestImageId : string= "RIGHT_DESTINATION_IMAGE";
    public static isDirectionLeft: boolean = false ;
    private static srcId : string = "";



    public static getDivId(laneId : string,src : string):string{
        if(laneId == null)
            return "";
        switch (src){
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
    }


    public static getSourceImage(imageName : string) :string {
        var url = "";


        if (imageName == null || imageName.length == 0){
            imageName = "";
       }

        url = this.imagePath + imageName;

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
    }
    public static getMousePos(canvas:any, evt):any {
        var rect = canvas.getBoundingClientRect();
        return {
            x : evt.clientX - rect.left,
            y : evt.clientY - rect.top
        };
    }

    public static getStyleClass(css:string):string{
        var styleStr : string = "";
        if(css == null)
            return styleStr;

        if(css='divLeftSource-content'){
            styleStr += "fontColor: #000080; ";
            styleStr += "fontSize: 11.7px; ";
            styleStr += "fontStyle: normal;";
            styleStr += "fontFamily: Times New Roman;";
            styleStr += "fontWeight: normal;";
        }else if(css='.divLeftDestinationNew-content'){
            styleStr += "fontColor: #000080; ";
            styleStr += "fontSize: 11.7px; ";
            styleStr += "fontStyle: normal;";
            styleStr += "fontFamily: Times New Roman;";
            styleStr += "fontWeight: normal;";

        }else if(css='divRightSource-content'){
            styleStr += "fontColor: #000080; ";
            styleStr += "fontSize: 11.7px; ";
            styleStr += "fontStyle: normal;";
            styleStr += "fontFamily: Times New Roman;";
            styleStr += "fontWeight: normal;";

        }else if(css = 'divRightDestinationNew-content'){
            styleStr += "fontColor: #000080; ";
            styleStr += "fontSize: 11.7px; ";
            styleStr += "fontStyle: normal;";
            styleStr += "fontFamily: Times New Roman;";
            styleStr += "fontWeight: normal;";

        }

        return styleStr;
    }

    // public static getStyleClass(textStyle:string):string{
    //  return textStyle;
    // }

    public static selectOneCheckBox(_this){
        var leftLane = <HTMLInputElement>document.getElementById("leftLaneCheckBox");
        var rightLane = <HTMLInputElement>document.getElementById("rightLaneCheckBox");
        if(_this.name == "leftLaneCheckBox"){
            if(!leftLane.checked){
                rightLane.checked = true;
                // <HTMLInputElement>document.getElementById("leftLaneCheckBox").selected=true;
            }
        }else if(_this.name == "rightLaneCheckBox"){
            if(!rightLane.checked){
                leftLane.checked = true;
            }
        }
     Temple.refreshLanes();

    }

    public static openNav() {
        document.getElementById("sideNavigation").style.width = "269.8px";
    }
    public static closeNav() {
        document.getElementById("sideNavigation").style.width = "0";
    }
    public static getVehiclesAtSamePosition(lattitude, longitude,imageXPoint,imageYPoint):number {
        var vehicleCount = 0;

        for (var i in Temple.vehiclePositionList) {
            if ((Temple.vehiclePositionList[i].Lattitude == lattitude) && (Temple.vehiclePositionList[i].Longitude == longitude)
                && (Temple.vehiclePositionList[i].LattitudeNew == imageXPoint) && (Temple.vehiclePositionList[i].LongitudeNew == imageYPoint)) {
                vehicleCount++;
            }
        }
        return vehicleCount;
    }
 }