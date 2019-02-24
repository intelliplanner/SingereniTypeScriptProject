/**
 * Created by admin on 5/25/2017.
 */

var dialogBox = null ;

function openDialog(str){
    dialogBox = showInputDialougeExt('Loading Info',250,250,"document.forms['data_form']",'#dialog_form');
}

function showInputDialougeExt(title,m_height,m_width,form,dialougeFormId,handler){
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
             "Save": handler
        },
        close: function() {
            // form.reset();
            dialog.dialog( "close" );
        }
    });
    dialog.find( "form" ).on( "submit", function( event ) {
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

