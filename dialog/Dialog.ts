/**
 * Created by admin on 5/25/2017.
 */
class Dialog{

    public static openDialog(_items:any, _event:string){
        document.getElementById("dumper").innerHTML = _items.value;
        var showelDialogForm=null;
        showelDialogForm = this.showInputDialougeExt("Showel Reassignment",300,350,document.forms['data_form'],'#dialog_form',_items, _event);
    }

    public static showInputDialougeExt(title,m_height,m_width,form,dialougeFormId,_items:any, _event:string){
        var _dialogForm = null;
        _dialogForm = $( dialougeFormId ).dialog({
        autoOpen: false,
        height: m_height,
        width: m_width,
        modal: true,
        title: title,
        buttons: {
            "Cancel":function() {
                _dialogForm.dialog( "close" );
            },
            "submit":function() {
                Dialog.reAssignShowel(_dialogForm,_items, _event);
            }
        },
        close: function() {
            _dialogForm.dialog( "close" );
        }

    });
    _dialogForm.find( form ).on( "submit", function( event ) {
        event.preventDefault();

    });
    _dialogForm.find( "form" ).on('keydown', 'input, select, textarea', function(e) {
        var self = $(this)
            , form = self.parents('form:eq(0)')
            , focusable
            , next
        ;
        if (e.keyCode == 13) {
            focusable = form.find('input,a,select,button,textarea').filter(':visible');
            next = focusable.eq(focusable.index(this)+1);
            if (next.length) {
                next.focus();
            } else {
                _dialogForm.parent().find("button")[0].focus();
                // form.submit();
            }
            return false;
        }
    });
    _dialogForm.dialog( "open" );
    return _dialogForm;
}
private static GetXmlHttpObject() {
    var xmlHttp = null;

    try {
        xmlHttp = new XMLHttpRequest();
    } catch (e) {
        //Internet Explorer
        try {
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    return xmlHttp;
}
public static reAssignShowel(_dialogForm,_items:any, _event:string){
        var action = MouseEventList.EVENT_REASSIGN;
        var selectedShowelId = (<HTMLInputElement>document.getElementById("showel")).value;
        // var url = "http://203.197.197.16:9680/LocTracker/TempleDashboardData.jsp?action_p=reassign&showelId=27377&dur=15";
        // var url = "http://localhost:8080/LocTracker/SingereniDashBoardData.jsp?action=reassign&showelId="+selectedShowelId+"&dur=15";
        if(selectedShowelId == '-1'){
            alert("Please Select Showel.");
            return ;
        }
        var url=_items.url + "" +selectedShowelId;
        var xmlHttp;
        var jsonObj;
        xmlHttp = this.GetXmlHttpObject();
        if (xmlHttp == null) {
            alert("Your browser does not support AJAX!");
            return;
        }
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4) {
                // jsonObj = eval(xmlHttp.responseText);
                Temple.showelList = JSON.parse(this.responseText).ShowelList;
                console.log(Temple.showelList);
                _dialogForm.dialog("close");
                Temple.refreshLanes();
            }
        };
        xmlHttp.open("POST", url, true);
        xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlHttp.send();    
    }
    

    public static popolateShowelList(){
        $('#showel').find("option").remove();
        var optionData = "";
        $('#showel').append("<option value='-1' >--Select--</option>");
        for (let x in Temple.showelList) {
            optionData = "<option value="+Temple.showelList[x].id+" >" +Temple.showelList[x].name+"</option>";
            $('#showel').append(optionData);
        }
    }

    public static sendAction(_items:any, _event:string){        
        // var url = "http://203.197.197.16:9680/LocTracker/TempleDashboardData.jsp?action_p=reassign&showelId=27377&dur=15";
        // var url = "http://localhost:8080/LocTracker/SingereniDashBoardData.jsp?action=reassign&showelId="+selectedShowelId+"&dur=15";
        var url=_items.url;
        var xmlHttp;
        xmlHttp = this.GetXmlHttpObject();
        if (xmlHttp == null) {
            alert("Your browser does not support AJAX!");
            return;
        }
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4) {
                Temple.refreshLanes();
            }
        };
        xmlHttp.open("POST", url, true);
        xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlHttp.send();    
    }
    

}