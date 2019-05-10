var Temple = /** @class */ (function () {
    function Temple() {
    }
    Temple.setJsonToTypeScriptObject = function () {
        var isTrue = false;
        if (Temple.jsonObj != null) {
            this.laneParserObj = new Parser(Temple.jsonObj);
            this.laneBeanListObj = this.laneParserObj.laneList;
            isTrue = true;
        }
        return isTrue;
    };
    Temple.refreshLanes = function () {
        var laneBean;
        if (Temple.laneParserObj != null) {
            // LaneAction.removeAllLane(Temple.laneBeanListObj);
            Temple.vehiclePositionList = [];
            StartApplication.rightDestList = [];
            for (var entry in Temple.laneParserObj.laneList) {
                laneBean = Temple.laneParserObj.laneList[entry];
                if (StartApplication.stopCustomization == false && StartApplication.customize_showelList.length != 0) {
                    if (this.getSelectedShowelMatched(laneBean.loadToUnload.sourceLeft.laneId)) {
                        var laneActionObj = new LaneAction(laneBean);
                        laneActionObj.addLane(false);
                    }
                }
                else {
                    var laneActionObj = new LaneAction(laneBean);
                    laneActionObj.addLane(false);
                }
            }
            // VehicleAction.addVehicleList(Temple.vehiclePositionList);
        }
    };
    Temple.getSelectedShowelMatched = function (_laneId) {
        var status = false;
        for (var x in StartApplication.customize_showelList) {
            if (StartApplication.customize_showelList[x] == _laneId) {
                status = true;
            }
        }
        return status;
    };
    // public static refreshLanes() {
    //     var laneBean: Lane;
    //     if (Temple.laneParserObj != null) {
    //         LaneAction.removeAllLane(Temple.laneBeanListObj);
    //         VehicleAction.removeVehicleList();
    //         Temple.vehiclePositionList = [];
    //         for (let entry in Temple.laneParserObj.laneList) {
    //             laneBean = Temple.laneParserObj.laneList[entry];
    //             var laneActionObj = new LaneAction(laneBean);
    //             laneActionObj.addLane(false);
    //         }
    //         VehicleAction.addVehicleList(Temple.vehiclePositionList);
    //     }
    // }
    Temple.getSelectedShowelId = function () {
        var customize_showelIdList = "";
        for (var entry in Temple.showelList) {
            for (var m in StartApplication.customize_showelList) {
                if (Temple.showelList[entry].name == StartApplication.customize_showelList[m]) {
                    customize_showelIdList += Temple.showelList[entry].id + ",";
                }
            }
        }
        return customize_showelIdList;
    };
    Temple.jsonObj = null;
    Temple.laneBeanListObj = null;
    Temple.laneParserObj = null;
    Temple.vehiclePositionList = [];
    Temple.dumperList = [];
    Temple.showelList = null;
    Temple.menuListGlobal = null;
    Temple.alertListDumper = null;
    Temple.alertListShowel = null;
    Temple.alertListAll = null;
    Temple.routeList = null;
    return Temple;
}());
//# sourceMappingURL=Temple.js.map