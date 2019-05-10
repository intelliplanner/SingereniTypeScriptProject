/**
 * Created by admin on 10/11/2017.
 */
var VehicleAction = /** @class */ (function () {
    function VehicleAction() {
    }
    VehicleAction.addVehicleList = function (vehicleBeanArr) {
        for (var x in vehicleBeanArr) {
            var trData = "<tr ><td width='3%' class='tmTableDataCell'><input type='checkbox' name='vehicleCheckbox' class='vehicleCheckbox' id='vehicleCheckbox' value='" + vehicleBeanArr[x].VehicleName + "' checked='checked' onclick=''></td>"
                + " <td class='tmTableDataCell'><span name='vehicleName' id='vehicleName' value='" + vehicleBeanArr[x].VehicleName + "'  onmouseover=''  onmouseout='' >"
                + (Number(x) + Number(1)) + ": " + vehicleBeanArr[x].VehicleName
                + "</span></td>"
                + " <td class='tmTableDataCell'><img src='" + StartApplication.imagePath + "cancel.gif' onclick='VehicleAction.deleteVehicleFromDB(" + Misc.getSubString(vehicleBeanArr[x].VehicleName, 4) + ")'></td>"
                + "</tr>";
            $('#tableData').find("tbody").append(trData);
        }
    };
    VehicleAction.populateVehicles = function () {
        this.removeVehicles();
        for (var x in Temple.dumperList) {
            // var workingDumpers = "";
            // var availableDumpers = "";
            // var availableShowels = "";
            if (Number(Temple.dumperList[x].value) == TempleConstant.WORKING_DUMPERS) {
                this.addVehicles("#workingDumpers", Temple.dumperList[x].id, Temple.dumperList[x].name, TempleConstant.WORKING_DUMPERS);
            }
            else if (Number(Temple.dumperList[x].value) == TempleConstant.AVAILABLE_DUMPERS) {
                this.addVehicles("#availableDumpers", Temple.dumperList[x].id, Temple.dumperList[x].name, TempleConstant.AVAILABLE_DUMPERS);
            }
            else if (Number(Temple.dumperList[x].value) == TempleConstant.AVAILABLE_SHOWELS) {
                this.addVehicles("#availableShowels", Temple.dumperList[x].id, Temple.dumperList[x].name, TempleConstant.AVAILABLE_SHOWELS);
            }
            else if (Number(Temple.dumperList[x].value) == TempleConstant.GHOST_DUMPERS) {
                this.addVehicles("#ghostDumpers", Temple.dumperList[x].id, Temple.dumperList[x].name, TempleConstant.GHOST_DUMPERS);
            }
            else if (Number(Temple.dumperList[x].value) == TempleConstant.REQUIRED_DUMPERS) {
                this.addVehicles("#requiredDumpers", Temple.dumperList[x].id, Temple.dumperList[x].name, TempleConstant.REQUIRED_DUMPERS);
            }
            else if (Number(Temple.dumperList[x].value) == TempleConstant.COUNT_AVAILABLE_DUMPERS) {
                this.addVehicles("#countAvailableDumpers", Temple.dumperList[x].id, Temple.dumperList[x].name, TempleConstant.COUNT_AVAILABLE_DUMPERS);
            }
        }
    };
    VehicleAction.removeVehicleList = function () {
        $('#tableData').find("tbody tr").remove();
    };
    VehicleAction.removeVehicles = function () {
        $("#workingDumpers li").remove();
        $("#availableDumpers li").remove();
        $("#availableShowels li").remove();
        $("#ghostDumpers li").remove();
        $("#countAvailableDumpers li").remove();
        $("#requiredDumpers li").remove();
    };
    VehicleAction.addVehicles = function (_id, _vehicleId, _vehicleName, workingOrAvalable) {
        var ulist = "<li class='active'><a href='javascript:VehicleAction.action(" + '"' + _vehicleName + '",' + _vehicleId + ',' + workingOrAvalable + ");' >" + _vehicleName + "</a></li>";
        $(_id).append(ulist);
    };
    VehicleAction.deleteVehicleFromDB = function (vehicleId) {
        alert(vehicleId);
    };
    VehicleAction.action = function (_vehicleName, _vehicleId, workingOrAvalable) {
        if (workingOrAvalable == undefined)
            return;
        switch (workingOrAvalable) {
            case TempleConstant.WORKING_DUMPERS:
                // MenuAction.onClickEvent(_vehicleId,_vehicleName, MouseEventList.eventOut,workingOrAvalable ,"dumper");
                MenuAction.getActionEvent(_vehicleId, _vehicleName, MouseEventList.eventIn, workingOrAvalable, "dumper", null);
                break;
            case TempleConstant.AVAILABLE_DUMPERS:
                // MenuAction.onClickEvent(_vehicleId,_vehicleName, MouseEventList.eventIn,workingOrAvalable, "dumper");
                MenuAction.getActionEvent(_vehicleId, _vehicleName, MouseEventList.eventIn, workingOrAvalable, "dumper", null);
                break;
            case TempleConstant.AVAILABLE_SHOWELS:
                // MenuAction.onClickEventNew(_vehicleId,_vehicleName, MouseEventList.eventIn,workingOrAvalable, "shovel", Temple.routeList);
                MenuAction.getActionEvent(_vehicleId, _vehicleName, MouseEventList.eventIn, workingOrAvalable, "ghost", Temple.routeList);
                break;
            case TempleConstant.GHOST_DUMPERS:
                // MenuAction.onClickEventNew(_vehicleId,_vehicleName, MouseEventList.eventIn,workingOrAvalable, "ghost", Temple.showelList);
                MenuAction.getActionEvent(_vehicleId, _vehicleName, MouseEventList.eventOnDumpers, workingOrAvalable, "ghost", Temple.showelList);
                break;
            default:
                break;
        }
    };
    return VehicleAction;
}());
//# sourceMappingURL=VehicleAction.js.map