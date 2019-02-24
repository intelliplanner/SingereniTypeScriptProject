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
        var _url = StartApplication.TYPESCRIPT_BASE + "jsonData/LaneData.json";
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                Temple.jsonObj = eval(this.responseText);
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
        this.getMenuDataFromJson();
    }

    public static getLaneData() {

        var xmlHttp;
        var jsonObj;
        xmlHttp = this.GetXmlHttpObject();
        if (xmlHttp == null) {
            alert("Your browser does not support AJAX!");
            return;
        }
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4) {
                // this.laneList = eval(xmlHttp.responseText);
                // Main.parseJsonToTypeScript(this.laneList);
                Temple.jsonObj = eval(xmlHttp.responseText);
                Temple.setJsonToTypeScriptObject();
                Temple.refreshLanes();
                //   var refresh = new Ti();
                // TimerTask.refreshLanes();
                //   console.log(jsonObj);
                // document.getElementById("testId").innerHTML =document.getElementById("testId").innerHTML + "</br>" + jsonObj;
                // return jsonObj;
            }
        };
        xmlHttp.open("POST", StartApplication.url_lane_data_list, true);
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
                Temple.menuListGlobal = JSON.parse(this.responseText).GloabalMenu;
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
                Temple.showelList = JSON.parse(this.responseText).ShowelList;
                Temple.alertList = JSON.parse(this.responseText).AlertList;
                
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
                Temple.menuListGlobal = JSON.parse(this.responseText).GloabalMenu;
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
                // jsonObj = eval(xmlHttp.responseText);
                Temple.alertList = JSON.parse(this.responseText).AlertList;
                // console.log(Temple.showelList);
            }
        };
        xmlHttp.open("POST", StartApplication.url_alert_list, true);
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
                Temple.showelList = JSON.parse(this.responseText).ShovelList;
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
                var jsonDataObj = JSON.parse(this.responseText)
                Temple.showelList = jsonDataObj.ShovelList;
                Temple.menuListGlobal = jsonDataObj.GloabalMenu;
                Temple.alertList = jsonDataObj.AlertList;
            }
        };
        xmlHttp.open("POST", StartApplication.url_all_processing_data_list, true);
        // var params = "action=something";
        xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlHttp.send();
        
    }

}