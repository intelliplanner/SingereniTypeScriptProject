/**
 * Created by admin on 5/28/2017.
 */
/**
 * Created by admin on 5/19/2017.
 */
class Misc{
   public static intVal:number = -1111111;
    public static getUndefInt():number{
        return this.intVal;
    }

    public static getImageWidth(isBothCanvasVisible:boolean):number{
        if(isBothCanvasVisible)
            return TempleConstant.imageWidth;
        else
            return TempleConstant.newImageWidth;
    }
    public static getImageHeight(isBothCanvasVisible:boolean):number{
        if(isBothCanvasVisible)
            return TempleConstant.imageHeight;
        else
            return TempleConstant.newImageHeight;
    }

    public static getstyle(isBothCanvasVisible:boolean,oldStyle:string,newStyle :string):string{
        if(isBothCanvasVisible)
            return oldStyle;
        else
            return newStyle;

    }
    public static getCanvasWidth(isBothCanvasVisible:boolean,oldVal:number,newVal :number):number{
        if(isBothCanvasVisible)
            return oldVal;
        else
            return newVal;

    }

    public static getCanvasHeight(noOfDestination:number,noOfUnloadSource:number):number{
        var defaultHeight=60;
        var heightLen ;
        heightLen = noOfDestination > noOfUnloadSource ? noOfDestination : noOfUnloadSource;
        if(heightLen <= 3) {
            return 60;
        }else{
            return (heightLen * 20);
        }
    }


    public static getVerticalLineWidth(isBothCanvasVisible:boolean):number{
        if(isBothCanvasVisible)
            return TempleConstant.verticalLineWidth;
        else
            return TempleConstant.verticalLineWidthNew;
    }

    public static getVerticalDrawLineDestance(arrSize:number,canvasHeight:number):number{
        var arrSizeNew = arrSize + 1;
        var val:number =  canvasHeight/arrSizeNew;  //arrSize == 4 ? 8 : arrSize == 3 ? (canvasHeight/val) : arrSize == 2 ? 20 : arrSize == 1 ? 30 : 0;
        return val;
    }
    public static getNewVerticalDrawLineDestance(newVal:number,val:number):number{
        var n : number = val * newVal;   //  newVal == 0 ? val : newVal == 1 ? (val*2) : (val*3) ;
        return n;
    }

    public static getLongitude(val:number):number{
        var n =  val == 4 ? 20 : val == 3 ? 25 : val == 2 ? 15 : val == 1 ? 10 : 0;
        return n;
    }


    public static getSubString(strVal:string,strLen:number):string{
        var str = strVal != null && strVal.length > strLen ?  strVal.substring(0,strLen) : strVal;
        return str;
    }

    public static add(val1:number, val2:number):number{
        var number = val1+val2;
        return number;
    }
}