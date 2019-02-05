/**
 * Created by admin on 10/13/2017.
 */
var EventListener = /** @class */ (function () {
    function EventListener() {
    }
    EventListener.eventOnShowelRouteChange = function (_this, _name, _event) {
        Dialog.openDialog(_this, _name, _event);
    };
    EventListener.eventOnShowelReminder = function (showelInfo, options) {
        // alert("Reminder event Call");
    };
    EventListener.eventOnShowelDismiss = function (showelInfo, options) {
        alert("Dismiss event Call");
    };
    return EventListener;
}());
//# sourceMappingURL=EventListener.js.map