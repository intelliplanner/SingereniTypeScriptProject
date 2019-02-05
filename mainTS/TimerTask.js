var TimerTask = /** @class */ (function () {
    function TimerTask(_timeout) {
        this._timeout = _timeout;
    }
    TimerTask.prototype.scheduleRequest = function () {
        var timer;
        clearTimeout(timer);
        var interval = setInterval(function () { TimerTask.getData(); }, this._timeout);
    };
    TimerTask.getDataJson = function () {
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
    TimerTask.getData = function () {
        //  var url = "jsonData.json";
        //   var url = "http://localhost:8080/Temple/TempleDataNew.jsp";
        //  var url = "http://localhost:8080/TempleDashboard/TempleDataNew.jsp";
        // var url = "http://203.197.197.17:9580/LocTracker/TempleDashboardData.jsp";
        // var url = "http://localhost:8080/LocTracker/TempleDashboardData.jsp";
        var url = "http://localhost:8080/LocTracker/TempleDataNew.jsp";
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
        xmlHttp.open("POST", url, true);
        var params = "action=something";
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
    return TimerTask;
}());
//# sourceMappingURL=TimerTask.js.map