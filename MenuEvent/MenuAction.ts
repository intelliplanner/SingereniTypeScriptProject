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
        Dialog.openDialog(_items, _event);
    }
    public static eventDismiss(_items: any, _event: string) {
        // alert(_event);
        if(this.cofirmationAlert(_event)){
            Dialog.sendAction(_items, _event);
        }else{
            console.log("false");
        }
      
    }
    public static eventTeaBreak(_items: any, _event: string) {
        // alert(_event);
        if(this.cofirmationAlert(_event)){
            Dialog.sendAction(_items, _event);
        }else{
            console.log("false");
        }
    }
    public static eventRelease(_items: any, _event: string) {
        // alert(_event);
        if(this.cofirmationAlert(_event)){
            Dialog.sendAction(_items, _event);
        }else{
            console.log("false");
        }
    }

    public static eventStopImmediate(_items: any, _event: string) {
        // alert(_event);
        if(this.cofirmationAlert(_event)){
            Dialog.sendAction(_items, _event);
        }else{
            console.log("false");
        }
    }
    public static eventTakeFuel(_items: any, _event: string) {
        // alert(_event);
        if(this.cofirmationAlert(_event)){
            Dialog.sendAction(_items, _event);
        }else{
            console.log("false");
        }
    }

    public static eventMakeUnavailable(_items: any, _event: string) {
        // alert(_event);
        if(this.cofirmationAlert(_event)){
            Dialog.sendAction(_items, _event);
        }else{
            console.log("false");
        }
    }

    public static eventResumeWork(_items: any, _event: string) {
        // alert(_event);
        if(this.cofirmationAlert(_event)){
            Dialog.sendAction(_items, _event);
        }else{
            console.log("false");
        }
    }


    public static cofirmationAlert(_str: string): boolean {
        var status = confirm("Do you want to "+_str +"?");
        return status;
    }

}