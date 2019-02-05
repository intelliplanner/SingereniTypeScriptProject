/**
 * Created by admin on 10/13/2017.
 */
var LaneSites = /** @class */ (function () {
    function LaneSites(laneBeanObj) {
        this.laneBeanObj = laneBeanObj;
    }
    LaneSites.prototype.createLeftSourceInnerHtml = function () {
        var divId = Common.getDivId(this.laneBeanObj.id, Common.leftSource);
        var sourceObj = this.laneBeanObj.loadToUnload.sourceLeft;
        var tableId = Common.getDivId(this.laneBeanObj.id, Common.leftSourceTableId);
        var laneId = this.laneBeanObj.id;
        this.leftSourceImageId = Common.getDivId(laneId, Common.leftSourceImageId);
        if (divId == null && divId.length == 0)
            return;
        var innerData = document.getElementById(divId);
        var data = "";
        if (sourceObj.sourceInformation != null) {
            data = "<div class='divLeftSource-div1'  >" + Misc.getSubString(this.laneBeanObj.loadToUnload.sourceLeft.loadSiteId, 13) + "</div>";
            data += "<div class='divLeftSource-div2' id=' " + tableId + "'> ";
            var text1 = sourceObj.sourceInformation.text1;
            var text2 = sourceObj.sourceInformation.text2;
            var text3 = sourceObj.sourceInformation.text3;
            if (text1 != null) {
                if (text1.hoverText == null || text1.hoverText.length == 0) {
                    data = data + "<div class='tooltipRightLeftSource'>" + Misc.getSubString(text1.name, 12) + "</div>";
                }
                else {
                    data = data + "<div class='tooltipRightLeftSource'><span class='tooltipContent'>" + text1.hoverText + "</span>" + Misc.getSubString(text1.name, 12) + "</div>";
                }
            }
            if (text2 != null) {
                if (text2.hoverText == null || text2.hoverText.length == 0) {
                    data = data + "<div class='tooltipRightLeftSource'>" + Misc.getSubString(text2.name, 12) + "</div>";
                }
                else {
                    data = data + "<div class='tooltipRightLeftSource'><span class='tooltipContent'>" + text2.hoverText + "</span>" + Misc.getSubString(text2.name, 12) + "</div>";
                }
            }
            if (text3 != null) {
                if (text3.hoverText == null || text3.hoverText.length == 0) {
                    data = data + "<div class='tooltipRightLeftSource'>" + Misc.getSubString(text3.name, 12) + "</div>";
                }
                else {
                    data = data + "<div class='tooltipRightLeftSource'><span class='tooltipContent'>" + text3.hoverText + "</span>" + Misc.getSubString(text3.name, 12) + "</div>";
                }
            }
            data = data + "</div>";
            if (sourceObj.iconInformation != undefined) {
                var menuLen = sourceObj.iconInformation.showelWaiting == undefined ? "0" : sourceObj.iconInformation.showelWaiting; //sourceObj.iconInformation.menu.length > 0 ? sourceObj.iconInformation.menu.length : "0"  ;
                var mouseEvent = new MouseEventList();
                data = data + "<div class='divLeftSource-div3' ><div class='row' style=''>";
                data = data + "<div class='col-sm-1 ' style=''>" + menuLen + "</div>";
                data = data + "<div class='tooltipRightLeftSource'><span class='tooltipContent'>" + sourceObj.iconInformation.iconHoverText + "</span>";
                data = data + "<a href='#'>";
                data = data + "<img  title='' id='" + this.leftSourceImageId + "' title='' oncontextmenu ='" + mouseEvent.addMenuList(this.leftSourceImageId, this.laneBeanObj.loadToUnload.sourceLeft.iconInformation.pane, this.laneBeanObj.loadToUnload.sourceLeft.iconInformation.menu) + "'";
                data = data + " style='width:" + Common.leftSourceImageWidth + "px;height:" + Common.leftSourceImageHeight + "px;'  src='" + Common.getSourceImage(sourceObj.iconInformation.icon) + "'></a>";
                data = data + "</div>";
            }
            innerData.innerHTML = data;
        }
    };
    LaneSites.prototype.createLeftDestinationInnerHtml = function () {
        var divId = Common.getDivId(this.laneBeanObj.id, Common.leftDest);
        var destObj = this.laneBeanObj.loadToUnload.destinationLeft;
        var tableId = Common.getDivId(this.laneBeanObj.id, Common.leftDestTableId);
        var iconArr;
        if (divId == null && divId.length == 0)
            return;
        var innerData = document.getElementById(divId);
        var data = "";
        if (destObj != null && destObj.length > 0) {
            for (var entry in destObj) {
                iconArr = destObj[entry];
                data += "<div class='tooltip'><span class='tooltiptext'>" + iconArr.name + "</span> " + Misc.getSubString(iconArr.name, 10) + "</div>";
                break;
            }
            innerData.innerHTML = data;
        }
    };
    LaneSites.prototype.createRightSourceInnerHtml = function () {
        var divId = Common.getDivId(this.laneBeanObj.id, Common.rightSource);
        var sourceObj = this.laneBeanObj.unloadToLoad.sourceRight;
        var tableId = Common.getDivId(this.laneBeanObj.id, Common.rightSourceTableId);
        var iconArr;
        if (divId == null && divId.length == 0)
            return;
        var innerData = document.getElementById(divId);
        var data = "";
        if (sourceObj != null && sourceObj.length > 0) {
            for (var entry in sourceObj) {
                iconArr = sourceObj[entry];
                data += "<div class='tooltipRight'><span class='tooltipContent'>" + iconArr.hoverText + "</span>" + Misc.getSubString(iconArr.name, 10) + "</div>";
                break;
            }
            innerData.innerHTML = data;
        }
    };
    LaneSites.prototype.createRightDestinationInnerHtml = function () {
        if (this.laneBeanObj.unloadToLoad.destinationRight == null) {
            return;
        }
        var divId = Common.getDivId(this.laneBeanObj.id, Common.rightDest);
        var destObj = this.laneBeanObj.unloadToLoad.destinationRight.destinationInformation;
        var tableId = Common.getDivId(this.laneBeanObj.id, Common.rightDestTableId);
        //var laneId = laneBeanObj.laneId;
        // var menuEvent = new MouseEventList(this.laneBeanObj);
        // var pairVal;
        var test;
        // Pan.rightClickMenu(divId, test );
        if (divId == null && divId.length == 0)
            return;
        var innerData = document.getElementById(divId);
        innerData.style.borderTop = "1px solid grey";
        var data = "<div class='divRightDestination-div1' >" + Misc.getSubString(this.laneBeanObj.unloadToLoad.destinationRight.unloadSiteId, 15) + "</div>";
        data += "<div class='divRightDestination-div2' id='" + tableId + "'> ";
        var text1 = destObj.text1;
        ;
        var text2 = destObj.text2;
        var text3 = destObj.text3;
        if (text1 != null) {
            data += "<div class='row' style='border-bottom: 2px solid white'>" +
                "<div class='tooltip'><span class='tooltiptext'>" + text1.hoverText + "</span>" + Misc.getSubString(text1.name, 15) + "</div>";
            "</div>";
        }
        if (text2 != null) {
            data += "<div class='row' style='border-bottom: 2px solid white'>" +
                "<div class='tooltip'><span class='tooltiptext'>" + text2.hoverText + "</span>" + Misc.getSubString(text2.name, 15) + "</div>";
            "</div>";
        }
        if (text3 != null) {
            data += "<div class='row' style='border-bottom: 2px solid white'>" +
                "<div class='tooltip'><span class='tooltiptext'>" + text3.hoverText + "</span>" + Misc.getSubString(text3.name, 15) + "</div>";
            "</div>";
        }
        data += "</div>";
        innerData.innerHTML = data;
    };
    return LaneSites;
}());
//# sourceMappingURL=LaneSites.js.map