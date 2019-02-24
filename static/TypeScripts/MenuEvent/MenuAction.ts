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
        Dialog.openConfirmationDialog(_items, _event, alert,Dialog.sendAction);
    }
    public static globalEventAction(_items: any, _event: string) {
        Dialog.popolateAlertList();
        Dialog.openConfirmationDialogGlobal(_items, _event,Dialog.sendGlobalAction);
    }


}