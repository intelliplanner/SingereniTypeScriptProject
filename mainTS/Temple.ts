

class Temple {
    private static _interval: number = 15000;
    public static jsonObj: any;
    public static laneBeanListObj: Lane[];
    public static laneParserObj: Parser;
    public static vehiclePositionList = [];

    public static start(): void {
        //var objTimers = new TimerTask(this._interval);
        //   objTimers.scheduleRequest();
        // TimerTask.getData();
        TimerTask.getDataJson();
        //  document.getElementById("testId").innerHTML = jsonObj;
    }

    public static setJsonToTypeScriptObject(): boolean {
        var isTrue: boolean = false;
        if (Temple.jsonObj != null) {
            this.laneParserObj = new Parser(Temple.jsonObj);
            this.laneBeanListObj = this.laneParserObj.laneList;
            isTrue = true;
        }
        return isTrue;
    }

    public static refreshLanes() {
        var laneBean: Lane;

        if (Temple.laneParserObj != null) {
            LaneAction.removeAllLane(Temple.laneBeanListObj);
            VehicleAction.removeVehicleList();
            Temple.vehiclePositionList = [];
            for (let entry in Temple.laneParserObj.laneList) {
                laneBean = Temple.laneParserObj.laneList[entry];
                var laneActionObj = new LaneAction(laneBean);
                laneActionObj.addLane(false);
            }
            VehicleAction.addVehicleList(Temple.vehiclePositionList);
        }
    }



}