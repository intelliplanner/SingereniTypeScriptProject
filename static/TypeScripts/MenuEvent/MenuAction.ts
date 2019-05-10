/**
 * Created by admin on 5/28/2017.
 */

class MenuAction {

    // public static popolateShowelList() {
    //     $('#showel').find("option").remove();
    //     var optionData = "";
    //     $('#showel').append("<option value='-1' >--Select--</option>");
    //     for (let x in Temple.showelList) {
    //         optionData = "<option value=" + Temple.showelList[x].id + " >" + Temple.showelList[x].name + "</option>";
    //         $('#showel').append(optionData);
    //     }
    // }
    public static eventShowelReassign(_items: any, _event: string) {
        Dialog.popolateShowelList();
        Dialog.openDialog(_items, _event, Dialog.reAssignShowel);
    }


    public static cofirmationAlert(_str: string): boolean {
        var status = confirm("Do you want to " + _str + "?");
        return status;
    }

    public static eventAction(_items: any, _event: string) {
        //alert(_event);
        var alert =  "Do you want '" + _event + "' to dumper '" + _items.value + "' ?.";
        Dialog.openConfirmationDialog(_items, _event, alert,Dialog.sendAction);
    }
    public static showelEventAction(_items: any, _event: string) {
        //alert(_event);
        var alert =  "Do you want '" + _event + "' to showel '" + _items.value + "' ?.";
        Dialog.openConfirmationDialog(_items, _event, alert,Dialog.sendActionOnShowel);
    }
    public static globalEventAction(_items: any, _event: string,_alertList:any) {
        Dialog.popolateList("alerts",_alertList);
        Dialog.openConfirmationDialogGlobal(_items, _event,Dialog.sendGlobalAction);
    }

    public static onClickEvent(vehicleId: string,vehicleName: string, _event: string ,workingOrAvalable:number, vehicleType:string) {
        //alert(_event);
        var alert =  "Do you want '" + _event + "' to " + vehicleType + ' ' + vehicleName + "' ?.";
        Dialog.openDialogOnVehicles(vehicleId, _event, alert,workingOrAvalable,Dialog.sendActionOnVehicles);
    }

    public static onClickEventNew(vehicleId: string,vehicleName: string, _event: string ,workingOrAvalable:number, vehicleType:string,_routeList:any) {
        var alert =  "Going to '" + _event + "' Shovel '" + vehicleName + "'.";
        Dialog.popolateList("routeId",_routeList);
        Dialog.openConfirmationDialogOnVehicles(vehicleId, _event, alert,workingOrAvalable,Dialog.sendActionOnVehicles);
    }

    public static getActionEvent(vehicleId: string,vehicleName: string, _event: string ,workingOrAvalable:number, vehicleType:string,_list:any){
        switch(workingOrAvalable){
            case TempleConstant.WORKING_DUMPERS:
                var alert =  "Do you want '" + _event + "' to " + vehicleType + ' ' + vehicleName + "' ?.";
                Dialog.openDialogOnVehicles(vehicleId, _event, alert,workingOrAvalable,Dialog.sendActionOnVehicles);
                break;
            case TempleConstant.AVAILABLE_DUMPERS:
                var alert =  "Do you want '" + _event + "' to " + vehicleType + ' ' + vehicleName + "' ?.";
                Dialog.openDialogOnVehicles(vehicleId, _event, alert,workingOrAvalable,Dialog.sendActionOnVehicles);
                break;
            case TempleConstant.AVAILABLE_SHOWELS:
                var alert =  "Going to '" + _event + "' Shovel '" + vehicleName + "'.";
                Dialog.popolateList("routeId",_list);
                Dialog.openConfirmationDialogOnVehicles(vehicleId, _event, alert,workingOrAvalable,Dialog.sendActionOnVehicles);
                break;
            case TempleConstant.GHOST_DUMPERS:
                var alert = vehicleName;
                Dialog.popolateList("showelId",_list);//showelList
                Dialog.openConfirmationDialogOnGhostVehicles(vehicleId, _event, alert,workingOrAvalable,Dialog.sendActionOnGhostVehicles);
                break;
            case TempleConstant.REQUIRED_DUMPERS:
                break;
            case TempleConstant.COUNT_AVAILABLE_DUMPERS:
                break;
            default:
                break;    
        }    

        
    }

}