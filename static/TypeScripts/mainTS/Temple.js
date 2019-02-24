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
            LaneAction.removeAllLane(Temple.laneBeanListObj);
            VehicleAction.removeVehicleList();
            Temple.vehiclePositionList = [];
            for (var entry in Temple.laneParserObj.laneList) {
                laneBean = Temple.laneParserObj.laneList[entry];
                for (var x in StartApplication.customize_showelList) {
                    if (StartApplication.customize_showelList[x] == laneBean.loadToUnload.sourceLeft.laneId) {
                        var laneActionObj = new LaneAction(laneBean);
                        laneActionObj.addLane(false);
                    }
                }
            }
            VehicleAction.addVehicleList(Temple.vehiclePositionList);
        }
    };
    Temple.vehiclePositionList = [];
    Temple.menuListGlobal = null;
    return Temple;
}());
//# sourceMappingURL=Temple.js.map