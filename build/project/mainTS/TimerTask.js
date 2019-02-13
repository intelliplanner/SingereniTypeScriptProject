var TimerTask = /** @class */ (function () {
    function TimerTask(_timeout) {
        this._timeout = _timeout;
    }
    TimerTask.prototype.scheduleRequest = function () {
        var timer;
        clearTimeout(timer);
        var interval = setInterval(function () { TimerTask.getLaneData(); }, this._timeout);
    };
    TimerTask.getLaneDataJson = function () {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                Temple.jsonObj = eval(this.responseText);
                Temple.setJsonToTypeScriptObject();
                Temple.refreshLanes();
            }
        };
        xhttp.open("GET", "jsonData/jsonDataNew.json", true);
        xhttp.send();
    };
    TimerTask.getDataFromServer = function () {
        this.getLaneData();
        this.getShowelJsonList();
    };
    TimerTask.getDataFromJsonFile = function () {
        this.getLaneDataJson();
        this.getShowelDataFromJson();
    };
    TimerTask.getLaneData = function () {
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
        xmlHttp.open("POST", this.url, true);
        // var params = "action=something";
        xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlHttp.send();
    };
    TimerTask.GetXmlHttpObject = function () {
        var xmlHttp = null;
        try {
            xmlHttp = new XMLHttpRequest();
        }
        catch (e) {
            //Internet Explorer
            try {
                xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
            }
            catch (e) {
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
        }
        return xmlHttp;
    };
    TimerTask.getShowelDataFromJson = function () {
        var xhttp;
        var jsonData;
        xhttp = this.GetXmlHttpObject();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                //this.jsonObj = JSON.parse(xhttp.responseText);
                //jsonData  = eval(this.responseText);
                Temple.showelList = JSON.parse(this.responseText).ShowelList;
            }
        };
        xhttp.open("GET", "jsonData/ShowelData.json", true);
        xhttp.send();
    };
    TimerTask.getShowelJsonList = function () {
        // var url_showel_list = "http://203.197.197.16:9680/LocTracker/TempleDashboardData.jsp?action_p=get_shovel_list";
        //  var url_showel_list = "http://localhost:8080/LocTracker/SingereniDashBoardData.jsp?action_p=get_shovel_list";
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
                Temple.showelList = JSON.parse(this.responseText).ShovelList;
                console.log(Temple.showelList);
            }
        };
        xmlHttp.open("POST", this.url_showel_list, true);
        // var params = "action=something";
        xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlHttp.send();
    };
    //  var url = "jsonData.json";
    //   var url = "http://localhost:8080/Temple/TempleDataNew.jsp";
    //  var url = "http://localhost:8080/TempleDashboard/TempleDataNew.jsp";
    // var url = "http://203.197.197.17:9580/LocTracker/TempleDashboardData.jsp";
    // var url = "http://203.197.197.16:9680/LocTracker/TempleDashboardData.jsp";
    // var url = "http://localhost:8080/LocTracker/TempleDashboardData.jsp";
    // var url = "http://localhost:8080/LocTracker/TempleDataNew.jsp";
    //  private static url:string = "http://localhost:8080/LocTracker/TempleDashboardData.jsp";
    //  private static url_showel_list:string = "http://localhost:8080/LocTracker/SingereniDashBoardData.jsp?action_p=get_shovel_list";
    TimerTask.url = "http://203.197.197.16:9680/LocTracker/TempleDashboardData.jsp";
    TimerTask.url_showel_list = "http://203.197.197.16:9680/LocTracker/TempleDashboardData.jsp?action_p=get_shovel_list";
    return TimerTask;
}());
//# sourceMappingURL=TimerTask.js.map