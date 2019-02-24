

class Temple {
    public static jsonObj: any;
    public static laneBeanListObj: Lane[];
    public static laneParserObj: Parser;
    public static vehiclePositionList = [];
    public static showelList: JsonDataFormat[];
    public static menuListGlobal: MenuList = null;
    public static alertList: JsonDataFormat[];

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
                for (let x in StartApplication.customize_showelList){
                    if(StartApplication.customize_showelList[x] ==  laneBean.loadToUnload.sourceLeft.laneId){
                        var laneActionObj = new LaneAction(laneBean);
                        laneActionObj.addLane(false); 
                    }    
                }                
            }
            VehicleAction.addVehicleList(Temple.vehiclePositionList);
        }
    }

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
}