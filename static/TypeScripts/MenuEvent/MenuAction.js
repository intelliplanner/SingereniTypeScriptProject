/**
 * Created by admin on 5/28/2017.
 */
var MenuAction = /** @class */ (function () {
    function MenuAction() {
    }
    // public static popolateShowelList() {
    //     $('#showel').find("option").remove();
    //     var optionData = "";
    //     $('#showel').append("<option value='-1' >--Select--</option>");
    //     for (let x in Temple.showelList) {
    //         optionData = "<option value=" + Temple.showelList[x].id + " >" + Temple.showelList[x].name + "</option>";
    //         $('#showel').append(optionData);
    //     }
    // }
    MenuAction.eventShowelReassign = function (_items, _event) {
        Dialog.popolateShowelList();
        Dialog.openDialog(_items, _event, Dialog.reAssignShowel);
    };
    MenuAction.cofirmationAlert = function (_str) {
        var status = confirm("Do you want to " + _str + "?");
        return status;
    };
    MenuAction.eventAction = function (_items, _event) {
        //alert(_event);
        var alert = "Do you want '" + _event + "' to dumper '" + _items.value + "' ?.";
        Dialog.openConfirmationDialog(_items, _event, alert, Dialog.sendAction);
    };
    MenuAction.showelEventAction = function (_items, _event) {
        //alert(_event);
        var alert = "Do you want '" + _event + "' to showel '" + _items.value + "' ?.";
        Dialog.openConfirmationDialog(_items, _event, alert, Dialog.sendActionOnShowel);
    };
    MenuAction.globalEventAction = function (_items, _event, _alertList) {
        Dialog.popolateList("alerts", _alertList);
        Dialog.openConfirmationDialogGlobal(_items, _event, Dialog.sendGlobalAction);
    };
    MenuAction.onClickEvent = function (vehicleId, vehicleName, _event, workingOrAvalable, vehicleType) {
        //alert(_event);
        var alert = "Do you want '" + _event + "' to " + vehicleType + ' ' + vehicleName + "' ?.";
        Dialog.openDialogOnVehicles(vehicleId, _event, alert, workingOrAvalable, Dialog.sendActionOnVehicles);
    };
    MenuAction.onClickEventNew = function (vehicleId, vehicleName, _event, workingOrAvalable, vehicleType, _routeList) {
        var alert = "Going to '" + _event + "' Shovel '" + vehicleName + "'.";
        Dialog.popolateList("routeId", _routeList);
        Dialog.openConfirmationDialogOnVehicles(vehicleId, _event, alert, workingOrAvalable, Dialog.sendActionOnVehicles);
    };
    MenuAction.getActionEvent = function (vehicleId, vehicleName, _event, workingOrAvalable, vehicleType, _list) {
        switch (workingOrAvalable) {
            case TempleConstant.WORKING_DUMPERS:
                var alert = "Do you want '" + _event + "' to " + vehicleType + ' ' + vehicleName + "' ?.";
                Dialog.openDialogOnVehicles(vehicleId, _event, alert, workingOrAvalable, Dialog.sendActionOnVehicles);
                break;
            case TempleConstant.AVAILABLE_DUMPERS:
                var alert = "Do you want '" + _event + "' to " + vehicleType + ' ' + vehicleName + "' ?.";
                Dialog.openDialogOnVehicles(vehicleId, _event, alert, workingOrAvalable, Dialog.sendActionOnVehicles);
                break;
            case TempleConstant.AVAILABLE_SHOWELS:
                var alert = "Going to '" + _event + "' Shovel '" + vehicleName + "'.";
                Dialog.popolateList("routeId", _list);
                Dialog.openConfirmationDialogOnVehicles(vehicleId, _event, alert, workingOrAvalable, Dialog.sendActionOnVehicles);
                break;
            case TempleConstant.GHOST_DUMPERS:
                var alert = vehicleName;
                Dialog.popolateList("showelId", _list); //showelList
                Dialog.openConfirmationDialogOnGhostVehicles(vehicleId, _event, alert, workingOrAvalable, Dialog.sendActionOnGhostVehicles);
                break;
            case TempleConstant.REQUIRED_DUMPERS:
                break;
            case TempleConstant.COUNT_AVAILABLE_DUMPERS:
                break;
            default:
                break;
        }
    };
    return MenuAction;
}());
//# sourceMappingURL=MenuAction.js.map