class StartApplication {
    private static isServer: boolean = true;   // change when deploy on server otherwise data get from json file
    public static stopCustomization: boolean = false;  
    private static _interval: number = 15000;
    public static TYPESCRIPT_BASE = "/static/TypeScripts/";
    public static imagePath = "/static/TypeScripts/images/";

    public static url_lane_data_list: string = "http://203.197.197.16:9680/LocTracker/TempleDashboardData.jsp";
    public static url_showel_list: string = "http://203.197.197.16:9680/LocTracker/TempleDashboardData.jsp?action_p=get_shovel_list";
    public static url_global_menu_list: string = "http://203.197.197.16:9680//LocTracker/TempleDashboardData.jsp?action_p=global_menu_list";
    public static url_alert_list: string = "http://203.197.197.16:9680/LocTracker/TempleDashboardData.jsp?action_p=get_alert_params&veh=all";
    // public static url_all_processing_data_list: string = "http://203.197.197.16:9680/LocTracker/TempleDashboardData.jsp?actionShowelList=get_shovel_list&actionGlobalMenu=global_menu_list&actionAlertList=get_alert_params";
    public static url_all_processing_data_list: string = "http://203.197.197.16:9680/LocTracker/TempleDashboardData.jsp?action_p=global_json";
    public static url_global_event: string = "http://203.197.197.16:9680/LocTracker/TempleDashboardData.jsp?action_p=globalEvent";
    public static url_dumper_list: string = "http://203.197.197.16:9680/LocTracker/TempleDashboardData.jsp?action_p=get_dumper_list";
    
    public static customize_showelList = [];
    
    public static  rightDestList=[];

    public static start(): void {
        // this.initializeScripts();
        // this.addDivDynamically();
        if (this.isServer) { // data get from server
            console.log("Data Get From Server");
            var objTimers = new TimerTask(this._interval);
            objTimers.scheduleRequest();

            // TimerTask.getLaneData();
            TimerTask.getProcessingData();
        } else { // data get from json file
            console.log("Data Get From Json File");
            TimerTask.getDataFromJsonFile();
        }
    }

    
    public static initializeScripts() {
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
    }


    public static loadJS(src) {//function to load a given js file 
        var jsLink = $("<script type='text/javascript' src='" + src + "'>");
        $("head").append(jsLink);
    };
    public static loadCSS(href) {//     * function to load a given css file 
        var cssLink = $("<link rel='stylesheet' type='text/css' href='" + href + "'>");
        $("head").append(cssLink);
    };

    public static addDivDynamically(){
        var newDiv = "<div class='divCustomizeScreen'><a class='noprint'  href='javascript:Dialog.customizeShowelData();'>Customize </a></div>"
        $( ".divSideMenuContainer" ).before(newDiv);
    }

}