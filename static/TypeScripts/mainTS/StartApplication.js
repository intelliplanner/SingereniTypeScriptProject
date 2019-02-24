var StartApplication = /** @class */ (function () {
    function StartApplication() {
    }
    StartApplication.start = function () {
        // this.initializeScripts();
        this.addDivDynamically();
        if (this.isServer) { // data get from server
            var objTimers = new TimerTask(this._interval);
            objTimers.scheduleRequest();
            TimerTask.getShowelJsonList();
            TimerTask.getGloabalMenuJsonList();
            TimerTask.getAlertListJson();
            // TimerTask.getProcessingData();
        }
        else { // data get from json file
            TimerTask.getDataFromJsonFile();
        }
    };
    StartApplication.initializeScripts = function () {
        this.loadCSS(this.TYPESCRIPT_BASE + "style/contextMenu.css");
        this.loadJS(this.TYPESCRIPT_BASE + "commonJs/jquery-ui.min.js");
        this.loadJS(this.TYPESCRIPT_BASE + "commonJs/jquery.contextMenu.js");
        this.loadCSS(this.TYPESCRIPT_BASE + "style/jquery_custom.css");
        this.loadJS(this.TYPESCRIPT_BASE + "commonJs/jquery.ui.position.min.js");
        this.loadJS(this.TYPESCRIPT_BASE + "mouseEvent/MouseEventList.js");
        this.loadCSS(this.TYPESCRIPT_BASE + "style/common.css");
        this.loadCSS(this.TYPESCRIPT_BASE + "style/styleCss.css");
        this.loadJS(this.TYPESCRIPT_BASE + "constant/TempleConstant.js");
        this.loadJS(this.TYPESCRIPT_BASE + "constant/Misc.js");
        this.loadJS(this.TYPESCRIPT_BASE + "constant/Common.js");
        this.loadJS(this.TYPESCRIPT_BASE + "dialog/Dialog.js");
        this.loadCSS(this.TYPESCRIPT_BASE + "style/tmcss.css");
        this.loadJS(this.TYPESCRIPT_BASE + "MenuEvent/MenuAction.js");
        this.loadJS(this.TYPESCRIPT_BASE + "beans/MenuList.js");
        this.loadJS(this.TYPESCRIPT_BASE + "vehicle/VehicleAlerts.js");
        this.loadJS(this.TYPESCRIPT_BASE + "beans/Parser.js");
        this.loadJS(this.TYPESCRIPT_BASE + "mainTS/TimerTask.js");
        this.loadJS(this.TYPESCRIPT_BASE + "mouseEvent/MouseEventList.js");
        this.loadJS(this.TYPESCRIPT_BASE + "canvas/Canvas.js");
        this.loadJS(this.TYPESCRIPT_BASE + "canvas/CanvasEvent.js");
        this.loadJS(this.TYPESCRIPT_BASE + "vehicle/VehicleAction.js");
        this.loadJS(this.TYPESCRIPT_BASE + "mainTS/Temple.js");
        this.loadJS(this.TYPESCRIPT_BASE + "lane/LaneSites.js");
        this.loadJS(this.TYPESCRIPT_BASE + "lane/LaneAction.js");
    };
    StartApplication.loadJS = function (src) {
        var jsLink = $("<script type='text/javascript' src='" + src + "'>");
        $("head").append(jsLink);
    };
    ;
    StartApplication.loadCSS = function (href) {
        var cssLink = $("<link rel='stylesheet' type='text/css' href='" + href + "'>");
        $("head").append(cssLink);
    };
    ;
    StartApplication.addDivDynamically = function () {
        var newDiv = "<div class='divCustomizeScreen'><a class='noprint'  href='javascript:Dialog.customizeShowelData();'>Customize </a></div>";
        $(".divSideMenuContainer").before(newDiv);
    };
    StartApplication.isServer = true; // change when deploy on server otherwise data get from json file
    StartApplication._interval = 15000;
    StartApplication.TYPESCRIPT_BASE = "/static/TypeScripts/";
    StartApplication.imagePath = "/static/TypeScripts/images/";
    StartApplication.url_lane_data_list = "http://203.197.197.16:9680/LocTracker/TempleDashboardData.jsp";
    StartApplication.url_showel_list = "http://203.197.197.16:9680/LocTracker/TempleDashboardData.jsp?action_p=get_shovel_list";
    StartApplication.url_global_menu_list = "http://203.197.197.16:9680//LocTracker/TempleDashboardData.jsp?action_p=global_menu_list";
    StartApplication.url_alert_list = "http://203.197.197.16:9680/LocTracker/TempleDashboardData.jsp?action_p=get_alert_params&veh=all";
    StartApplication.url_all_processing_data_list = "http://203.197.197.16:9680/LocTracker/TempleDashboardData.jsp?actionShowelList=get_shovel_list&actionGlobalMenu=global_menu_list&actionAlertList=get_alert_params";
    StartApplication.url_global_event = "http://203.197.197.16:9680/LocTracker/TempleDashboardData.jsp?action_p=globalEvent";
    StartApplication.customize_showelList = [];
    return StartApplication;
}());
//# sourceMappingURL=StartApplication.js.map