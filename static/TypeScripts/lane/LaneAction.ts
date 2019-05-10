/**
 * Created by admin on 10/11/2017.
 */
class LaneAction {
    laneBean: Lane = null;
    canvasObj: Canvas = null;
    constructor(laneBean: Lane) {
        this.laneBean = laneBean;

    }

    public addLane(removeAllLane: boolean): void {
        //var laneHeight = Misc.getCanvasHeight(this.laneBean.loadToUnload.destinationLeft.length);
        this.insertLane();
        var leftLane = <HTMLInputElement>document.getElementById("leftLaneCheckBox");
        var rightLane = <HTMLInputElement>document.getElementById("rightLaneCheckBox");
        var laneSites = new LaneSites(this.laneBean);
        if (leftLane.checked) {
            laneSites.createLeftSourceInnerHtml();
            laneSites.createLeftDestinationInnerHtml();
        } if (rightLane.checked) {
            laneSites.createRightSourceInnerHtml();
            laneSites.createRightDestinationInnerHtml();
        }
    }


    public static getElementId() {
        alert($('#laneContainer').children().length);
    }
    public insertLane(): void {
        var laneHeight;
        if (this.laneBean.unloadToLoad.sourceRight == null) {
            laneHeight = 60;
        } else {
            laneHeight = Misc.getCanvasHeight(this.laneBean.loadToUnload.destinationLeft.length, this.laneBean.unloadToLoad.sourceRight.length) + "px";
        }
        var leftLane = <HTMLInputElement>document.getElementById("leftLaneCheckBox");
        var rightLane = <HTMLInputElement>document.getElementById("rightLaneCheckBox");
        var newdiv1 = "<div id='" + Common.getDivId(this.laneBean.id, Common.laneDivId) + "' class=''>";//flex-container
        // var laneHeight = Misc.getCanvasHeight(this.laneBean.loadToUnload.destinationLeft.length);
        if (leftLane.checked) {
            newdiv1 += "<div class='divLeftSource' style='height: " + laneHeight + "' id='" + Common.getDivId(this.laneBean.id, Common.leftSource) + "'></div>"

                + "<div class='" + Misc.getstyle(rightLane.checked, 'divLeftCanvas', 'divLeftCanvasNew') + "'  style='height: " + laneHeight + "' id='" + Common.getDivId(this.laneBean.id, Common.leftCanvasDivId) + "'>"
                + "<canvas id='" + Common.getDivId(this.laneBean.id, Common.leftCanvasId) + "'  width='" + Misc.getCanvasWidth(rightLane.checked, 450, 1160) + "'   height='" + laneHeight + "'  ></canvas>"
                + "</div>" +
                "<div class='divLeftDestination' style='height: " + laneHeight + "' id='" + Common.getDivId(this.laneBean.id, Common.leftDest) + "'/>";
        }
        if (leftLane.checked && rightLane.checked) {
            newdiv1 += "<div class='divZizagPartition' style='height: " + laneHeight + "' ><img src='" + Common.getSourceImage('zigzag.png') + "' alt='Mountain View' style='width:11px;height:" + laneHeight + "'></div>"
        }
        if (rightLane.checked) {
            newdiv1 += "<div class='divRightSource' style='height: " + laneHeight + "' id='" + Common.getDivId(this.laneBean.id, Common.rightSource) + "'></div>"

                + "<div class='" + Misc.getstyle(leftLane.checked, 'divRightCanvas', 'divRightCanvasNew') + "'  style='height: " + laneHeight + "' id='" + Common.getDivId(this.laneBean.id, Common.rightCanvasDivId) + "'>"

                + "<canvas id='" + Common.getDivId(this.laneBean.id, Common.rightCanvasId) + "'   width='" + Misc.getCanvasWidth(leftLane.checked, 450, 1160) + "'  height='" + laneHeight + "' ></canvas>"

                + "</div><div class='divRightDestination' style='height: " + laneHeight + "' id='" + Common.getDivId(this.laneBean.id, Common.rightDest) + "'/>";
        }
        newdiv1 += "</div>";
        $('#laneContainer').children().last().append(newdiv1);

        this.canvasObj = new Canvas(this.laneBean);
        this.canvasObj.drawImagesOnCanvas();

    }


    public static removeAllLanes(laneBeanList: Lane[]) {
        if (laneBeanList != null && laneBeanList.length > 0) {
            for (let entry in laneBeanList) {
                var laneBean = laneBeanList[entry];
                this.removeLane(Common.getDivId(laneBean.id, Common.laneDivId));
            }
        }

    }

    public static removeAllLanesNew(laneBeanList: Lane[]) {
        if (laneBeanList != null && laneBeanList.length > 0) {
            var list = document.getElementById("laneContainer");
            var c = document.getElementById("laneContainer").childElementCount;
            while (c != 1) {
                list.removeChild(list.childNodes[c]);
                c = document.getElementById("laneContainer").childElementCount;
            }
        }
    }

    public static removeLane(laneId: String) {
        if (laneId == null && laneId.length == 0)
            return;
        $('#' + laneId).remove();
    }


}