/**
 * Created by admin on 5/28/2017.
 */
class TempleConstant{

    public static WORKING_DUMPERS:number = 0;
    public static AVAILABLE_DUMPERS:number = 1;
    public static AVAILABLE_SHOWELS:number = 2;
    public static GHOST_DUMPERS:number = 3;
    public static COUNT_AVAILABLE_DUMPERS:number = 3;
    public static REQUIRED_DUMPERS:number = 3;
    
    public static imageWidth: number = 20;
    public static imageHeight: number = 25;

    public static newImageWidth: number = 10;
    public static newImageHeight: number = 25;

    public static verticalLineWidth: number = .01;
    public static verticalLineWidthNew: number = .01;

    public static rightClickMenu : any = {
        "play" : {
            name : "Play",
            icon : "play"
        },
        "edit" : {
            name : "Edit",
            icon : "edit"
        },
        "add" : {
            name : "Add Lane",
            icon : "add"
        },
        "refresh" : {
            name : "Refresh",
            icon : "refresh"
        },
        "delete" : {
            name : "Remove Lane",
            icon : "delete"
        }
    };

    public static leftClickMenu : any = {
        "play" : {
            name : "Play",
            icon : "play"
        },
        "edit" : {
            name : "Edit",
            icon : "edit"
        }
    };

}