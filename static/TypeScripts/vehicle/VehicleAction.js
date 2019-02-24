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
    VehicleAction.removeVehicleList = function () {
        $('#tableData').find("tbody tr").remove();
    };
    VehicleAction.deleteVehicleFromDB = function (vehicleId) {
        alert(vehicleId);
    };
    return VehicleAction;
}());
//# sourceMappingURL=VehicleAction.js.map