/**
 * Created by admin on 5/25/2017.
 */
class Dialog{

    public static openDialog(_this,_name:string, _event:string){
        var landmarkDialog=null;
       // document.getElementById("popInfo").innerHTML = _this.alt;
        // document.forms['data_form'].popInfo.innerHTML = _this.content;
        landmarkDialog = this.showInputDialougeExt("Route",300,350,document.forms['data_form'],'#dialog_form',_name, _event);
    }

    public static showInputDialougeExt(title,m_height,m_width,form,dialougeFormId,_name:string, _event:string){
        var dialog = null;
        dialog = $( dialougeFormId ).dialog({
        autoOpen: false,
        height: m_height,
        width: m_width,
        modal: true,
        title: title,
        buttons: {
            "Cancel":function() {
                dialog.dialog( "close" );
            },
            "submit":function() {
                Dialog.saveRoutes(dialog,_name, _event);
            }
        },
        close: function() {
            dialog.dialog( "close" );
        }

    });
    dialog.find( form ).on( "submit", function( event ) {
        event.preventDefault();

    });
    dialog.find( "form" ).on('keydown', 'input, select, textarea', function(e) {
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
                dialog.parent().find("button")[0].focus();
                // form.submit();
            }
            return false;
        }
    });
    dialog.dialog( "open" );
    return dialog;
}



    public static saveRoutes(dialog,_name:string, _event:string){
        var action="SaveRoutes";
        var paramamer;
        alert("Hello");
        dialog.dialog( "close" );
    }

}