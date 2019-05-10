

class Temple {
    public static jsonObj: any  = null;
    public static laneBeanListObj: Lane[] = null;
    public static laneParserObj: Parser  = null;
    public static vehiclePositionList = [];
    public static dumperList = [] ;
    public static showelList: JsonDataFormat[] = null;
    public static menuListGlobal: MenuList = null;
    public static alertListDumper: JsonDataFormat[] = null;
    public static alertListShowel: JsonDataFormat[] = null;
    public static alertListAll: JsonDataFormat[] = null;
    public static routeList: JsonDataFormat[] = null;
    

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
            // LaneAction.removeAllLane(Temple.laneBeanListObj);
            Temple.vehiclePositionList = [];
            StartApplication.rightDestList=[];
            for (let entry in Temple.laneParserObj.laneList) {
                laneBean = Temple.laneParserObj.laneList[entry];
                if (StartApplication.stopCustomization == false && StartApplication.customize_showelList.length != 0) {
                    if (this.getSelectedShowelMatched(laneBean.loadToUnload.sourceLeft.laneId)) {
                        var laneActionObj = new LaneAction(laneBean);
                        laneActionObj.addLane(false);
                    }
                } else {
                    var laneActionObj = new LaneAction(laneBean);
                    laneActionObj.addLane(false);
                }
            }
            // VehicleAction.addVehicleList(Temple.vehiclePositionList);
            
        }
    }

    public static getSelectedShowelMatched(_laneId: string): boolean {
        var status = false;
        for (let x in StartApplication.customize_showelList) {
            if (StartApplication.customize_showelList[x] == _laneId) {
                status = true
            }
        }
        return status;
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


public static getSelectedShowelId(): String{
    var customize_showelIdList = "";
    for (let entry in Temple.showelList) {
        for (let m in StartApplication.customize_showelList) {
            if(Temple.showelList[entry].name == StartApplication.customize_showelList[m]){
                customize_showelIdList += Temple.showelList[entry].id + ",";
            }
        }
    }
    return customize_showelIdList;
}

}