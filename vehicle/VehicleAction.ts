/**
 * Created by admin on 10/11/2017.
 */
 
 class VehicleAction{
    public static addVehicleList(vehicleBeanArr) {
        for (let x in vehicleBeanArr) {
            var trData = "<tr ><td width='3%' class='tmTableDataCell'><input type='checkbox' name='checkbox' value='"+ vehicleBeanArr[x].VehicleName+"' checked='checked' onclick=''></td>"
                + " <td class='tmTableDataCell'><span name='vehicleName' id='vehicleName' value='"+ vehicleBeanArr[x].VehicleName+"'  onmouseover=''  onmouseout='' >"
                + (Number(x)+Number(1)) + ": "  + vehicleBeanArr[x].VehicleName
                + "</span></td>"
                + " <td class='tmTableDataCell'><img src='"+Common.imagePath+"cancel.gif' onclick='VehicleAction.deleteVehicleFromDB("+ Misc.getSubString(vehicleBeanArr[x].VehicleName,4)+")'></td>"
                + "</tr>";
            $('#tableData').find("tbody").append(trData);
        }
    }

    public static removeVehicleList() {
        $('#tableData').find("tbody tr").remove();
    }

    public static deleteVehicleFromDB(vehicleId:number){
        alert(vehicleId);
    }

}