class TimerTask {
    //  private  url:string = "http://localhost:8080/LocTracker/TempleDashboardData.jsp";
    //  private  url_showel_list:string = "http://localhost:8080/LocTracker/SingereniDashBoardData.jsp?action_p=get_shovel_list";

    _timeout: number;
    static _ob: LaneAction;
    constructor(_timeout: number) {
        this._timeout = _timeout;
    }

    public scheduleRequest(): any {
        var timer;
        clearTimeout(timer);
        let interval = setInterval(function () { TimerTask.getLaneData() }, this._timeout);
    }

    public static getLaneDataJson() {
        var _url =  StartApplication.TYPESCRIPT_BASE + "jsonData/LaneData.json";
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                // Temple.jsonObj = eval(this.responseText);

                var _jsondata = JSON.parse(xhttp.responseText);
                Temple.jsonObj =_jsondata.Dashboard;

                Temple.dumperList = _jsondata.VehicleList;
                VehicleAction.populateVehicles();
                
                Temple.setJsonToTypeScriptObject();
                Temple.refreshLanes();
            }
        };
        xhttp.open("GET", _url, true);
        xhttp.send();
    }

    // public static getDataFromServer() {
    //     this.getLaneData();
    //     this.getShowelJsonList();   
    // }
    public static getDataFromJsonFile() {
        this.getLaneDataJson();
        this.getDataFromJson();
        // this.getMenuDataFromJson();
    }

    public static getLaneData() {
        var _url = "";
        if(Temple.getSelectedShowelId() != null && (Temple.getSelectedShowelId()).length > 0){
            _url = StartApplication.url_lane_data_list + "?showelIdList="+  Temple.getSelectedShowelId();
        }else{
            _url=StartApplication.url_lane_data_list;
        }
        console.log("StartApplication.url_lane_data_list:"+ _url);
        var xmlHttp;
        // var jsonObj;
        xmlHttp = this.GetXmlHttpObject();
        if (xmlHttp == null) {
            alert("Your browser does not support AJAX!");
            return;
        }
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4) {
                LaneAction.removeAllLanes(Temple.laneBeanListObj);
                var _jsondata = JSON.parse(xmlHttp.responseText);
                Temple.jsonObj =_jsondata.Dashboard;
                Temple.dumperList = _jsondata.VehicleList;
                VehicleAction.populateVehicles();
                Temple.setJsonToTypeScriptObject();
                Temple.refreshLanes();
            }
        };
        xmlHttp.open("POST", _url, true);
        // var params = "action=something";
        xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlHttp.send();
    }

    public static GetXmlHttpObject() {
        var xmlHttp = null;
        try {
            xmlHttp = new XMLHttpRequest();
        } catch (e) {
            //Internet Explorer
            try {
                xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
        }
        return xmlHttp;
    }

    public static getMenuDataFromJson() {
        var _url = StartApplication.TYPESCRIPT_BASE + "jsonData/GlobalData.json";
        var xhttp;
        var jsonData;
        xhttp = this.GetXmlHttpObject();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                Temple.menuListGlobal = JSON.parse(xhttp.responseText).GloabalMenu;
            }
        };
        xhttp.open("GET", _url, true);
        xhttp.send();
    }

    public static getDataFromJson() {
        var _url = StartApplication.TYPESCRIPT_BASE + "jsonData/GlobalData.json";
        var xhttp;
        var jsonData;
        xhttp = this.GetXmlHttpObject();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                //this.jsonObj = JSON.parse(xhttp.responseText);
                //jsonData  = eval(this.responseText);
                // Temple.showelList = JSON.parse(this.responseText).ShowelList;
                // Temple.alertListDumper = JSON.parse(this.responseText).AlertList;
                // Temple.dumperList = JSON.parse(this.responseText).VehicleList;
                var jsonDataObj= JSON.parse(xhttp.responseText);
                Temple.showelList = jsonDataObj.ShovelList;
                Temple.menuListGlobal = jsonDataObj.GlobalMenu;
                Temple.alertListDumper = jsonDataObj.AlertList_D;
                Temple.alertListShowel = jsonDataObj.AlertList_S;
                Temple.alertListAll = jsonDataObj.AlertList_All;
                Temple.routeList = jsonDataObj.RouteList;
            }
        };
        xhttp.open("GET", _url, true);
        xhttp.send();
    }

    public static getGloabalMenuJsonList() {
        var xmlHttp;
        var jsonObj;
        xmlHttp = this.GetXmlHttpObject();
        if (xmlHttp == null) {
            alert("Your browser does not support AJAX!");
            return;
        }
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4) {
                // jsonObj = eval(xmlHttp.responseText);
                Temple.menuListGlobal = JSON.parse(xmlHttp.responseText).GloabalMenu;
                // console.log(Temple.showelList);
            }
        };
        xmlHttp.open("POST", StartApplication.url_global_menu_list, true);
        // var params = "action=something";
        xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlHttp.send();
    }

    public static getAlertListJson() {
        var xmlHttp;
        var jsonObj;
        xmlHttp = this.GetXmlHttpObject();
        if (xmlHttp == null) {
            alert("Your browser does not support AJAX!");
            return;
        }
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4) {
                Temple.alertListDumper = JSON.parse(xmlHttp.responseText).AlertList;
            }
        };
        xmlHttp.open("POST", StartApplication.url_alert_list, true);
        // var params = "action=something";
        xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlHttp.send();
    }
    public static getDumperListJson() {
        var xmlHttp;
        var jsonObj;
        xmlHttp = this.GetXmlHttpObject();
        if (xmlHttp == null) {
            alert("Your browser does not support AJAX!");
            return;
        }
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4) {
                Temple.dumperList = JSON.parse(xmlHttp.responseText).VehicleList;
                VehicleAction.populateVehicles();
            }
        };
        xmlHttp.open("POST", StartApplication.url_dumper_list, true);
        // var params = "action=something";
        xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlHttp.send();
    }

    public static getShowelJsonList() {
        var xmlHttp;
        var jsonObj;
        xmlHttp = this.GetXmlHttpObject();
        if (xmlHttp == null) {
            alert("Your browser does not support AJAX!");
            return;
        }
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4) {
                Temple.showelList = JSON.parse(xmlHttp.responseText).ShovelList;
            }
        };
        xmlHttp.open("POST", StartApplication.url_showel_list, true);
        // var params = "action=something";
        xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlHttp.send();
    }



    // public static refreshLanes():void{
    //     //this._ob = new LaneAction();
    //     //this._ob.insertLane();

    // }
    // var isSuccess : boolean = false;

    public static getProcessingData(){
        var xmlHttp;
        var jsonObj;
        
        xmlHttp = this.GetXmlHttpObject();
        
        if (xmlHttp == null) {
            alert("Your browser does not support AJAX!");
            return;
        }
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4) {
                // jsonObj = eval(xmlHttp.responseText);
                var jsonDataObj = JSON.parse(xmlHttp.responseText);
                Temple.showelList = jsonDataObj.ShovelList;
                Temple.menuListGlobal = jsonDataObj.GlobalMenu;
                Temple.alertListDumper = jsonDataObj.AlertList_D;
                Temple.alertListShowel = jsonDataObj.AlertList_S;
                Temple.alertListAll = jsonDataObj.AlertList_All;
                Temple.routeList = jsonDataObj.RouteList;
            }
        };
        console.log("StartApplication.url_all_processing_data_list: "+StartApplication.url_all_processing_data_list);
        xmlHttp.open("POST", StartApplication.url_all_processing_data_list, true);
        // var params = "action=something";
        xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlHttp.send();
    }

}