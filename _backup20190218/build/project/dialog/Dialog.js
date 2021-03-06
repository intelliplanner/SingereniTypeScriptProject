/**
 * Created by admin on 5/25/2017.
 */
var dialogDataForm;
var menuOptions = null;
var _eventName = null;
var Dialog = /** @class */ (function () {
    function Dialog() {
    }
    Dialog.openDialog = function (_items, _event, handler) {
        document.getElementById("dumper").innerHTML = _items.value;
        _eventName = _event;
        menuOptions = _items;
        dialogDataForm = this.showInputDialougeExt("Showel Reassignment", 210, 450, document.forms['data_form'], '#dialog_form', handler);
        // document.getElementById("data_form").style = _items.value;
        // $(".ui-dialog-titlebar" ).css("display", "block" );
    };
    Dialog.showInputDialougeExt = function (title, m_height, m_width, _form, dialougeFormId, handler) {
        var _dialogForm = null;
        _dialogForm = $(dialougeFormId).dialog({
            // create: function (event, ui) {
            // //     $(".ui-widget-header").show();
            // $(".ui-dialog-titlebar" ).css("display", "block" );
            // },
            autoOpen: false,
            height: m_height,
            width: m_width,
            modal: true,
            resizable: false,
            title: title,
            buttons: {
                "Cancel": function () {
                    _dialogForm.dialog("close");
                },
                "submit": handler
            },
            close: function () {
                _dialogForm.dialog("close");
            }
        });
        _dialogForm.find(_form).on("submit", function (event) {
            event.preventDefault();
        });
        _dialogForm.find("form").on('keydown', 'input, select, textarea', function (e) {
            var self = $(this), form = self.parents('form:eq(0)'), focusable, next;
            if (e.keyCode == 13) {
                focusable = form.find('input,a,select,button,textarea').filter(':visible');
                next = focusable.eq(focusable.index(this) + 1);
                if (next.length) {
                    next.focus();
                }
                else {
                    _dialogForm.parent().find("button")[0].focus();
                    // form.submit();
                }
                return false;
            }
        });
        _dialogForm.dialog("open");
        return _dialogForm;
    };
    // public static GetXmlHttpObject():any {
    //     var xmlHttp = null;
    //     try {
    //         xmlHttp = new XMLHttpRequest();
    //     } catch (e) {
    //         //Internet Explorer
    //         try {
    //             xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
    //         } catch (e) {
    //             xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    //         }
    //     }
    //     return xmlHttp;
    // }
    Dialog.reAssignShowel = function () {
        var action = MouseEventList.EVENT_REASSIGN;
        var selectedShowelId = document.getElementById("showel").value;
        // var url = "http://203.197.197.16:9680/LocTracker/TempleDashboardData.jsp?action_p=reassign&showelId=27377&dur=15";
        // var url = "http://localhost:8080/LocTracker/SingereniDashBoardData.jsp?action=reassign&showelId="+selectedShowelId+"&dur=15";
        if (selectedShowelId == '-1') {
            alert("Please Select Showel.");
            return;
        }
        var url = menuOptions.url + "" + selectedShowelId;
        var xmlHttp;
        var jsonObj;
        xmlHttp = TimerTask.GetXmlHttpObject();
        if (xmlHttp == null) {
            alert("Your browser does not support AJAX!");
            return;
        }
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4) {
                // jsonObj = eval(xmlHttp.responseText);
                Temple.showelList = JSON.parse(this.responseText).ShowelList;
                console.log(Temple.showelList);
                dialogDataForm.dialog("close");
                Temple.refreshLanes();
            }
        };
        xmlHttp.open("POST", url, true);
        xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlHttp.send();
    };
    Dialog.popolateShowelList = function () {
        $('#showel').find("option").remove();
        var optionData = "";
        $('#showel').append("<option value='-1' >--Select--</option>");
        for (var x in Temple.showelList) {
            optionData = "<option value=" + Temple.showelList[x].id + " >" + Temple.showelList[x].name + "</option>";
            $('#showel').append(optionData);
        }
    };
    Dialog.sendAction = function () {
        // var url = "http://203.197.197.16:9680/LocTracker/TempleDashboardData.jsp?action_p=reassign&showelId=27377&dur=15";
        // var url = "http://localhost:8080/LocTracker/SingereniDashBoardData.jsp?action=reassign&showelId="+selectedShowelId+"&dur=15";
        var url = menuOptions.url;
        var xmlHttp;
        xmlHttp = TimerTask.GetXmlHttpObject();
        if (xmlHttp == null) {
            alert("Your browser does not support AJAX!");
            return;
        }
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4) {
                Temple.refreshLanes();
                dialogDataForm.dialog("close");
            }
        };
        xmlHttp.open("POST", url, true);
        xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlHttp.send();
    };
    Dialog.openConfirmationDialogGlobal = function (_items, _event, handler) {
        _eventName = _event;
        menuOptions = _items;
        dialogDataForm = this.confirmationDialog(_event, 180, 550, document.forms['form_alert_dialog_id'], '#div_alert_dialog', handler);
    };
    Dialog.openConfirmationDialog = function (_items, _event, alert, handler) {
        var alertMsg = alert; // "Do you want '" + _event + "' to dumper '" + _items.value + "' ?."
        document.getElementById("alertMsg").innerHTML = alertMsg;
        _eventName = _event;
        menuOptions = _items;
        dialogDataForm = this.confirmationDialog("Confirmation", 180, 550, document.forms['form_dialog_id'], '#div_dialog_id', handler);
    };
    Dialog.confirmationDialog = function (title, m_height, m_width, _form, dialougeFormId, handler) {
        var _dialogForm = null;
        _dialogForm = $(dialougeFormId).dialog({
            // create: function (event, ui) {
            // //     $(".ui-widget-header").show();
            // $(".ui-dialog-titlebar" ).css("display", "block" );
            // },
            autoOpen: false,
            height: m_height,
            width: m_width,
            modal: true,
            resizable: false,
            title: title,
            buttons: {
                "Cancel": function () {
                    _dialogForm.dialog("close");
                },
                "Ok": handler
            },
            close: function () {
                _dialogForm.dialog("close");
            }
        });
        _dialogForm.find(_form).on("submit", function (event) {
            event.preventDefault();
        });
        _dialogForm.find("form").on('keydown', 'input, select, textarea', function (e) {
            var self = $(this), form = self.parents('form:eq(0)'), focusable, next;
            if (e.keyCode == 13) {
                focusable = form.find('input,a,select,button,textarea').filter(':visible');
                next = focusable.eq(focusable.index(this) + 1);
                if (next.length) {
                    next.focus();
                }
                else {
                    _dialogForm.parent().find("button")[0].focus();
                    // form.submit();
                }
                return false;
            }
        });
        _dialogForm.dialog("open");
        return _dialogForm;
    };
    return Dialog;
}());
//# sourceMappingURL=Dialog.js.map