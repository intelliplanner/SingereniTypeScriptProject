/**
 * Created by admin on 5/25/2017.
 */
var dialogDataForm;
var menuOptions = null;
var _eventName = null;
var isChecked = false;
var _vehicleId;
var _workingOrAvalable;
var Dialog = /** @class */ (function () {
    function Dialog() {
    }
    Dialog.openDialog = function (_items, _event, handler) {
        document.getElementById("dumper").innerHTML = _items.value;
        _eventName = _event;
        menuOptions = _items;
        dialogDataForm = this.showInputDialougeExt(_event, 210, 450, document.forms['data_form'], '#dialog_form', handler);
        // document.getElementById("data_form").style = _items.value;
        // $(".ui-dialog-titlebar" ).css("display", "block" );
    };
    Dialog.openDialogOnVehicles = function (vehicleId, _event, _alertMsg, workingOrAvalable, handler) {
        document.getElementById("alertMsg").innerHTML = _alertMsg;
        _eventName = _event;
        _vehicleId = vehicleId;
        _workingOrAvalable = workingOrAvalable;
        dialogDataForm = this.showInputDialougeExt("Confirmation", 180, 550, document.forms['form_dialog_id'], '#div_dialog_id', handler);
    };
    Dialog.openConfirmationDialogOnVehicles = function (vehicleId, _event, _alertMsg, workingOrAvalable, handler) {
        document.getElementById("routeMsg").innerHTML = _alertMsg;
        _eventName = _event;
        _vehicleId = vehicleId;
        _workingOrAvalable = workingOrAvalable;
        dialogDataForm = this.showInputDialougeExt(_event, 200, 500, document.forms['form_route_dialog_id'], '#div_route_dialog_id', handler);
    };
    Dialog.openConfirmationDialogOnGhostVehicles = function (vehicleId, _event, _alertMsg, workingOrAvalable, handler) {
        document.getElementById("ghostDumperMsg").innerHTML = _alertMsg;
        _eventName = _event;
        _vehicleId = vehicleId;
        _workingOrAvalable = workingOrAvalable;
        dialogDataForm = this.showInputDialougeExt(_event, 200, 500, document.forms['form_ghost_dumper_dialog_id'], '#div_ghost_dumper_dialog_id', handler);
    };
    Dialog.openConfirmationDialogGlobal = function (_items, _event, handler) {
        _eventName = _event;
        menuOptions = _items;
        dialogDataForm = this.showInputDialougeExt(_event, 200, 500, document.forms['form_alert_dialog_id'], '#div_alert_dialog', handler);
    };
    Dialog.openConfirmationDialog = function (_items, _event, _alertMsg, handler) {
        document.getElementById("alertMsg").innerHTML = _alertMsg;
        _eventName = _event;
        menuOptions = _items;
        // dialogDataForm =  this.confirmationDialog("Confirmation",180,550,document.forms['form_dialog_id'],'#div_dialog_id',handler);
        dialogDataForm = this.showInputDialougeExt("Confirmation", 180, 550, document.forms['form_dialog_id'], '#div_dialog_id', handler);
    };
    Dialog.customizeShowelData = function () {
        this.addShowelDataList();
        dialogDataForm = this.showInputDialougeExt("Customize", 500, 500, document.forms['form_customize_showel_list_id'], '#div_customize_showel_list_id', this.setSelectedCheckBoxList);
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
    Dialog.reAssignShowel = function () {
        // var action = MouseEventList.EVENT_REASSIGN;
        var selectedShowelId = document.getElementById("showel").value;
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
                // Temple.showelList = JSON.parse(this.responseText).ShowelList;
                dialogDataForm.dialog("close");
                // Temple.refreshLanes();
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
    /*  public static popolateAlertList(alertList: any) {
          $('#alerts').find("option").remove();
          var optionData = "";
          $('#alerts').append("<option value='-1' >--Select--</option>");
          for (let x in alertList) {
              optionData = "<option value=" + alertList[x].id + " >" + alertList[x].name + "</option>";
              $('#alerts').append(optionData);
          }
      }
  */
    Dialog.popolateList = function (_id, _list) {
        $('#' + _id).find("option").remove(); // routeId       showelId
        var optionData = "";
        $('#' + _id).append("<option value='-1' >--Select--</option>");
        for (var x in _list) {
            optionData = "<option value=" + _list[x].id + " >" + _list[x].name + "</option>";
            $('#' + _id).append(optionData);
        }
    };
    Dialog.sendAction = function () {
        var url = menuOptions.url;
        var xmlHttp;
        xmlHttp = TimerTask.GetXmlHttpObject();
        if (xmlHttp == null) {
            alert("Your browser does not support AJAX!");
            return;
        }
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4) {
                // Temple.refreshLanes();
                dialogDataForm.dialog("close");
            }
        };
        xmlHttp.open("POST", url, true);
        xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlHttp.send();
    };
    Dialog.sendActionOnShowel = function () {
        var url = menuOptions.url;
        var xmlHttp;
        xmlHttp = TimerTask.GetXmlHttpObject();
        if (xmlHttp == null) {
            alert("Your browser does not support AJAX!");
            return;
        }
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4) {
                // Temple.refreshLanes();
                dialogDataForm.dialog("close");
                // window.location.reload();
            }
        };
        xmlHttp.open("POST", url, true);
        xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlHttp.send();
    };
    Dialog.sendGlobalAction = function () {
        var _min = document.getElementById("minute").value;
        var _hours = document.getElementById("hours").value;
        var _alert = document.getElementById("alerts").value;
        var duration = Number(_hours) * 60 + Number(_min);
        if (_alert == '-1') {
            alert("Please Select Alert.");
            return;
        }
        //  var url=StartApplication.url_global_event + "&duration=" +duration+"&alertType="+_alert;
        var url = menuOptions.url + "&duration=" + duration + "&alertType=" + _alert;
        var xmlHttp;
        xmlHttp = TimerTask.GetXmlHttpObject();
        if (xmlHttp == null) {
            alert("Your browser does not support AJAX!");
            return;
        }
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4) {
                // Temple.refreshLanes();
                dialogDataForm.dialog("close");
            }
        };
        xmlHttp.open("POST", url, true);
        xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlHttp.send();
    };
    Dialog.sendActionOnVehicles = function () {
        var url = StartApplication.url_lane_data_list + "?action_p=in_out&vehicle_id=" + _vehicleId + "&type=" + _workingOrAvalable;
        // var url = "localhost:8080/" + "?action_p=in_out&vehicle_id=" + _vehicleId + "&type=" + _workingOrAvalable;
        if (_workingOrAvalable == TempleConstant.AVAILABLE_SHOWELS) {
            var _routeType = document.getElementById("routeId").value;
            if (_routeType == '' || _routeType == '-1') {
                alert("Please Select Route.");
                return;
            }
            url = url + "&routeType=" + _routeType;
        }
        console.log("[ sendActionOnVehicles(): url= " + url + "]");
        var xmlHttp;
        xmlHttp = TimerTask.GetXmlHttpObject();
        if (xmlHttp == null) {
            alert("Your browser does not support AJAX!");
            return;
        }
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4) {
                // Temple.refreshLanes();
                dialogDataForm.dialog("close");
            }
        };
        xmlHttp.open("POST", url, true);
        xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlHttp.send();
    };
    Dialog.sendActionOnGhostVehicles = function () {
        var url = StartApplication.url_lane_data_list + "?action_p=in_out&vehicle_id=" + _vehicleId + "&type=" + _workingOrAvalable + "&shovel_id=";
        var _actionId = document.getElementById("actionId").value;
        var _showelId = document.getElementById("showelId").value;
        if (_actionId == '1' && _showelId == '-1') {
            alert("Please Select Showel.");
            return;
        }
        else if (_actionId == '0') {
            _showelId = "-1";
        }
        url = url + _showelId;
        console.log("[ sendActionOnVehicles(): url= " + url + "]");
        var xmlHttp;
        xmlHttp = TimerTask.GetXmlHttpObject();
        if (xmlHttp == null) {
            alert("Your browser does not support AJAX!");
            return;
        }
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4) {
                // Temple.refreshLanes();
                dialogDataForm.dialog("close");
            }
        };
        xmlHttp.open("POST", url, true);
        xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlHttp.send();
    };
    // public static confirmationDialog(title,m_height,m_width,_form,dialougeFormId,handler){ // Not Use 
    //     var _dialogForm = null;
    //     _dialogForm = $( dialougeFormId ).dialog({
    //     autoOpen: false,
    //     height: m_height,
    //     width: m_width,
    //     modal: true,
    //     resizable: false,
    //     title: title,
    //     buttons: {
    //         "Cancel":function() {
    //             _dialogForm.dialog( "close" );
    //         },
    //         "Ok":handler
    //     },
    //     close: function() {
    //         _dialogForm.dialog( "close" );
    //     }
    // });
    // _dialogForm.find( _form ).on( "submit", function( event ) {
    //     event.preventDefault();
    // });
    // _dialogForm.find( "form" ).on('keydown', 'input, select, textarea', function(e) {
    //     var self = $(this)
    //         , form = self.parents('form:eq(0)')
    //         , focusable
    //         , next
    //     ;
    //     if (e.keyCode == 13) {
    //         focusable = form.find('input,a,select,button,textarea').filter(':visible');
    //         next = focusable.eq(focusable.index(this)+1);
    //         if (next.length) {
    //             next.focus();
    //         } else {
    //             _dialogForm.parent().find("button")[0].focus();
    //             // form.submit();
    //         }
    //         return false;
    //     }
    // });
    // _dialogForm.dialog( "open" );
    // return _dialogForm;
    // }
    Dialog.setSelectedCheckBoxList = function () {
        StartApplication.customize_showelList = [];
        var xmlHttp;
        xmlHttp = TimerTask.GetXmlHttpObject();
        if (xmlHttp == null) {
            alert("Your browser does not support AJAX!");
            return;
        }
        $.each($("input[name='showelCheckbox']:checked"), function () {
            StartApplication.customize_showelList.push($(this).val());
        });
        Temple.refreshLanes();
        dialogDataForm.dialog("close");
    };
    Dialog.toogleCheckBox = function (checkIdAndClass) {
        if ($('#' + checkIdAndClass).prop("checked")) {
            $('.' + checkIdAndClass).each(function () {
                this.checked = true;
            });
        }
        else {
            $('.' + checkIdAndClass).each(function () {
                this.checked = false;
            });
        }
    };
    Dialog.addShowelDataList = function () {
        this.removeList("customize_showel_table");
        for (var x in Temple.showelList) {
            var _select = this.isShowelExist(Temple.showelList[x].name) ? "checked" : "";
            var trData = "<tr ><td width='3%' class='tmTableDataCell'><input type='checkbox' class='showelCheckbox' name='showelCheckbox' id='showelCheckbox' " + _select + "  value='" + Temple.showelList[x].name + "' onclick=''></td>"
                + " <td class='tmTableDataCell'><span name='showelName' id='showelName' value='" + Temple.showelList[x].id + "'  onmouseover=''  onmouseout='' >"
                + Temple.showelList[x].name
                + "</span></td>"
                + "</tr>";
            $('#customize_showel_table').find("tbody").append(trData);
        }
    };
    Dialog.isShowelExist = function (showelName) {
        var status = false;
        for (var x in StartApplication.customize_showelList) {
            if (showelName == StartApplication.customize_showelList[x]) {
                status = true;
                break;
            }
        }
        if (StartApplication.customize_showelList.length == 0) {
            status = true;
        }
        return status;
    };
    Dialog.removeList = function (tableId) {
        $('#customize_showel_table').find("tbody tr").remove();
    };
    return Dialog;
}());
//# sourceMappingURL=Dialog.js.map