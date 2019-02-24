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
        Dialog.openConfirmationDialog(_items, _event, alert, Dialog.sendAction);
    };
    MenuAction.globalEventAction = function (_items, _event) {
        //alert(_event);
        Dialog.openConfirmationDialogGlobal(_items, _event, Dialog.sendAction);
    };
    return MenuAction;
}());
//# sourceMappingURL=MenuAction.js.map