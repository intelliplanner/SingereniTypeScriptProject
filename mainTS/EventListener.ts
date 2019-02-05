/**
 * Created by admin on 10/13/2017.
 */
class EventListener{

    public static eventOnShowelRouteChange(_this,_name:string, _event:string){
        Dialog.openDialog(_this,_name, _event);
    }
    public static eventOnShowelReminder(showelInfo:string,options:any){
       // alert("Reminder event Call");

    }
    public static eventOnShowelDismiss(showelInfo:string,options:any){
        alert("Dismiss event Call");
    }


}