/**
 * Created by admin on 5/28/2017.
 */

class MenuAction {

    public static popolateShowelList() {
        $('#showel').find("option").remove();
        var optionData = "";
        $('#showel').append("<option value='-1' >--Select--</option>");
        for (let x in Temple.showelList) {
            optionData = "<option value=" + Temple.showelList[x].id + " >" + Temple.showelList[x].name + "</option>";
            $('#showel').append(optionData);
        }
    }
    public static eventShowelReassign(_items: any, _event: string) {
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


    // public static eventDismiss(_items: any, _event: string) {
    //     // alert(_event);
    //     if(this.cofirmationAlert(_event)){
    //         Dialog.sendAction(_items, _event);
    //     }else{
    //         console.log("false");
    //     }

    // }
    // public static eventTeaBreak(_items: any, _event: string) {
    //     // alert(_event);
    //     if(this.cofirmationAlert(_event)){
    //         Dialog.sendAction(_items, _event);
    //     }else{
    //         console.log("false");
    //     }
    // }
    // public static eventRelease(_items: any, _event: string) {
    //     // alert(_event);
    //     if(this.cofirmationAlert(_event)){
    //         Dialog.sendAction(_items, _event);
    //     }else{
    //         console.log("false");
    //     }
    // }

    // public static eventStopImmediate(_items: any, _event: string) {
    //     // alert(_event);
    //     Dialog.openConfirmationDialog(_items, _event);
    //     if(this.cofirmationAlert(_event)){
    //         Dialog.sendAction(_items, _event);
    //     }else{
    //         console.log("false");
    //     }
    // }
    // public static eventTakeFuel(_items: any, _event: string) {
    //     // alert(_event);
    //     if(this.cofirmationAlert(_event)){
    //         Dialog.sendAction(_items, _event);
    //     }else{
    //         console.log("false");
    //     }
    // }

    // public static eventMakeUnavailable(_items: any, _event: string) {
    //     // alert(_event);
    //     if(this.cofirmationAlert(_event)){
    //         Dialog.sendAction(_items, _event);
    //     }else{
    //         console.log("false");
    //     }
    // }

    // public static eventResumeWork(_items: any, _event: string) {
    //     // alert(_event);
    //     if(this.cofirmationAlert(_event)){
    //         Dialog.sendAction(_items, _event);
    //     }else{
    //         console.log("false");
    //     }
    // }


    // public static eventDismiss(_items: any, _event: string) {
    //     // alert(_event);
    //     Dialog.openConfirmationDialog(_items, _event,"sendAction"); 
    // }
    // public static eventTeaBreak(_items: any, _event: string) {
    //     // alert(_event);
    //     Dialog.openConfirmationDialog(_items, _event,"sendAction");
    // }
    // public static eventRelease(_items: any, _event: string) {
    //     // alert(_event);
    //     Dialog.openConfirmationDialog(_items, _event,"sendAction");
    // }

    // public static eventStopImmediate(_items: any, _event: string) {
    //     Dialog.openConfirmationDialog(_items, _event,"sendAction");

    // }
    // public static eventTakeFuel(_items: any, _event: string) {
    //     Dialog.openConfirmationDialog(_items, _event,"sendAction");
    // }

    // public static eventMakeUnavailable(_items: any, _event: string) {
    //     Dialog.openConfirmationDialog(_items, _event,"sendAction");
    // }

    // public static eventResumeWork(_items: any, _event: string) {
    //     // alert(_event);
    //     Dialog.openConfirmationDialog(_items, _event,"sendAction");
    // }

}