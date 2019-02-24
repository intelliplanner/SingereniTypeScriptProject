/**
 * Created by admin on 5/25/2017.
 */
var dialogDataForm: any;
var menuOptions: any = null;
var _eventName: string = null;
var isChecked = false;
class Dialog {
    public static openDialog(_items: any, _event: string, handler) {
        document.getElementById("dumper").innerHTML = _items.value;
        _eventName = _event;
        menuOptions = _items;
        dialogDataForm = this.showInputDialougeExt(_event, 210, 450, document.forms['data_form'], '#dialog_form', handler);
        // document.getElementById("data_form").style = _items.value;
        // $(".ui-dialog-titlebar" ).css("display", "block" );
    }

    public static openConfirmationDialogGlobal(_items: any, _event: string, handler) {
        _eventName = _event;
        menuOptions = _items;
        // dialogDataForm =  this.confirmationDialog(_event,180,550,document.forms['form_alert_dialog_id'],'#div_alert_dialog',handler);
        dialogDataForm = this.showInputDialougeExt(_event, 200, 500, document.forms['form_alert_dialog_id'], '#div_alert_dialog', handler);
    }

    public static openConfirmationDialog(_items: any, _event: string, _alertMsg: string, handler) {
        document.getElementById("alertMsg").innerHTML = _alertMsg;
        _eventName = _event;
        menuOptions = _items;
        // dialogDataForm =  this.confirmationDialog("Confirmation",180,550,document.forms['form_dialog_id'],'#div_dialog_id',handler);
        dialogDataForm = this.showInputDialougeExt("Confirmation", 180, 550, document.forms['form_dialog_id'], '#div_dialog_id', handler);
    }

    public static customizeShowelData() {
        this.addShowelDataList();
        dialogDataForm = this.showInputDialougeExt("Customize", 500, 500, document.forms['form_customize_showel_list_id'], '#div_customize_showel_list_id', this.setSelectedCheckBoxList);
    }

    public static showInputDialougeExt(title, m_height, m_width, _form, dialougeFormId, handler) {
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
            var self = $(this)
                , form = self.parents('form:eq(0)')
                , focusable
                , next
                ;
            if (e.keyCode == 13) {
                focusable = form.find('input,a,select,button,textarea').filter(':visible');
                next = focusable.eq(focusable.index(this) + 1);
                if (next.length) {
                    next.focus();
                } else {
                    _dialogForm.parent().find("button")[0].focus();
                    // form.submit();
                }
                return false;
            }
        });
        _dialogForm.dialog("open");
        return _dialogForm;
    }

    public static reAssignShowel() {
        // var action = MouseEventList.EVENT_REASSIGN;
        var selectedShowelId = (<HTMLInputElement>document.getElementById("showel")).value;
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
    }


    public static popolateShowelList() {
        $('#showel').find("option").remove();
        var optionData = "";
        $('#showel').append("<option value='-1' >--Select--</option>");
        for (let x in Temple.showelList) {
            optionData = "<option value=" + Temple.showelList[x].id + " >" + Temple.showelList[x].name + "</option>";
            $('#showel').append(optionData);
        }
    }
    public static popolateAlertList() {
        $('#alerts').find("option").remove();
        var optionData = "";
        $('#alerts').append("<option value='-1' >--Select--</option>");
        for (let x in Temple.alertList) {
            optionData = "<option value=" + Temple.alertList[x].id + " >" + Temple.alertList[x].name + "</option>";
            $('#alerts').append(optionData);
        }
    }

    public static sendAction() {
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
    }
    public static sendGlobalAction() {
        var _min = (<HTMLInputElement>document.getElementById("minute")).value;
        var _hours = (<HTMLInputElement>document.getElementById("hours")).value;

        var _alert = (<HTMLInputElement>document.getElementById("alerts")).value;

        var duration = Number(_hours) * 60 + Number(_min);
        if (_alert == '-1') {
            alert("Please Select Alert.");
            return;
        }
        //  var url=StartApplication.url_global_event + "&duration=" +duration+"&alertType="+_alert;
        var url = menuOptions.url + "&duration=" + duration + "&alertType=" + _alert;;
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
    }





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

    public static setSelectedCheckBoxList() {
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
    }

    public static toogleCheckBox(checkIdAndClass: any): void {
        if ($('#'+checkIdAndClass).prop("checked")) {
            $('.'+checkIdAndClass).each(function(){
                this.checked = true;
            })
        } else {
            $('.'+checkIdAndClass).each(function(){
                this.checked = false;
            })
        }
    }

    public static addShowelDataList() {
        this.removeList("customize_showel_table");

        for (let x in Temple.showelList) {
            var _select = this.isShowelExist(Temple.showelList[x].name) ? "checked" : "";
            var trData = "<tr ><td width='3%' class='tmTableDataCell'><input type='checkbox' class='showelCheckbox' name='showelCheckbox' id='showelCheckbox' " + _select + "  value='" + Temple.showelList[x].name + "' onclick=''></td>"
                + " <td class='tmTableDataCell'><span name='showelName' id='showelName' value='" + Temple.showelList[x].id + "'  onmouseover=''  onmouseout='' >"
                + Temple.showelList[x].name
                + "</span></td>"
                + "</tr>";
            $('#customize_showel_table').find("tbody").append(trData);


        }
    }

    public static isShowelExist(showelName: string): boolean {
        var status = false;
        for (let x in StartApplication.customize_showelList) {
            if (showelName == StartApplication.customize_showelList[x]) {
                status = true;
                break;
            }
        }
        return status;
    }

    public static removeList(tableId: string) {
        $('#customize_showel_table').find("tbody tr").remove();
    }

    // 

}