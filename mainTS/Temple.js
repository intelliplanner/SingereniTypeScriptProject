var Temple = /** @class */ (function () {
    function Temple() {
    }
    Temple.start = function () {
        //var objTimers = new TimerTask(this._interval);
        //   objTimers.scheduleRequest();
        // TimerTask.getData();
        TimerTask.getDataJson();
        //  document.getElementById("testId").innerHTML = jsonObj;
    };
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
                var laneActionObj = new LaneAction(laneBean);
                laneActionObj.addLane(false);
            }
            VehicleAction.addVehicleList(Temple.vehiclePositionList);
        }
    };
    Temple._interval = 15000;
    Temple.vehiclePositionList = [];
    return Temple;
}());
//# sourceMappingURL=Temple.js.map