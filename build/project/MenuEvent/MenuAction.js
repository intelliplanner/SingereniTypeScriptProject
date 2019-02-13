/**
 * Created by admin on 5/28/2017.
 */
var MenuAction = /** @class */ (function () {
    function MenuAction() {
    }
    MenuAction.popolateShowelList = function () {
        $('#showel').find("option").remove();
        var optionData = "";
        $('#showel').append("<option value='-1' >--Select--</option>");
        for (var x in Temple.showelList) {
            optionData = "<option value=" + Temple.showelList[x].id + " >" + Temple.showelList[x].name + "</option>";
            $('#showel').append(optionData);
        }
    };
    MenuAction.eventShowelReassign = function (_items, _event) {
        Dialog.openDialog(_items, _event);
    };
    MenuAction.eventDismiss = function (_items, _event) {
        // alert(_event);
        if (this.cofirmationAlert(_event)) {
            Dialog.sendAction(_items, _event);
        }
        else {
            console.log("false");
        }
    };
    MenuAction.eventTeaBreak = function (_items, _event) {
        // alert(_event);
        if (this.cofirmationAlert(_event)) {
            Dialog.sendAction(_items, _event);
        }
        else {
            console.log("false");
        }
    };
    MenuAction.eventRelease = function (_items, _event) {
        // alert(_event);
        if (this.cofirmationAlert(_event)) {
            Dialog.sendAction(_items, _event);
        }
        else {
            console.log("false");
        }
    };
    MenuAction.eventStopImmediate = function (_items, _event) {
        // alert(_event);
        if (this.cofirmationAlert(_event)) {
            Dialog.sendAction(_items, _event);
        }
        else {
            console.log("false");
        }
    };
    MenuAction.eventTakeFuel = function (_items, _event) {
        // alert(_event);
        if (this.cofirmationAlert(_event)) {
            Dialog.sendAction(_items, _event);
        }
        else {
            console.log("false");
        }
    };
    MenuAction.eventMakeUnavailable = function (_items, _event) {
        // alert(_event);
        if (this.cofirmationAlert(_event)) {
            Dialog.sendAction(_items, _event);
        }
        else {
            console.log("false");
        }
    };
    MenuAction.eventResumeWork = function (_items, _event) {
        // alert(_event);
        if (this.cofirmationAlert(_event)) {
            Dialog.sendAction(_items, _event);
        }
        else {
            console.log("false");
        }
    };
    MenuAction.cofirmationAlert = function (_str) {
        var status = confirm("Do you want to " + _str + "?");
        return status;
    };
    return MenuAction;
}());
//# sourceMappingURL=MenuAction.js.map