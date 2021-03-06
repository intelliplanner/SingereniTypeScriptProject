/**
 * Created by admin on 5/31/2017.
 */
class VehicleAlerts{

    canvas : HTMLCanvasElement;
    blinkRate : number;
    textVisible : boolean = false;
    context:CanvasRenderingContext2D ;
    imageObj:HTMLImageElement;
    lat:number;
    long:number;
    noOfVehiclesAtSamePosition:number;


    constructor(canvas:HTMLCanvasElement,context:CanvasRenderingContext2D,blinkRate:number,lat:number, long : number,imageObj:HTMLImageElement,noOfVehiclesAtSamePosition:number){
        this.canvas = canvas;
        this.blinkRate = blinkRate;
        this.lat = lat;
        this.long = long;
        this.imageObj = imageObj;
        this.context = context;
        this.noOfVehiclesAtSamePosition =noOfVehiclesAtSamePosition;
    }

    public Imageblinker() {
        var self = this;
        var interval;
        interval = setInterval(function () { self.doBlinkImage(); }, this.blinkRate);
    }
    public doBlinkImage(){
        if(this.textVisible)
        {
            this.context.clearRect(this.lat, this.long, this.imageObj.width, this.imageObj.height);
            this.textVisible = false;
        }
        else{
            this.drawImage(this.context);
            this.textVisible = true;
        }
    }

    public drawImage(context){
        var canvasDraw = new CanvasEvent();
        canvasDraw.drawImageNew(context,this.imageObj,this.lat,this.long,this.noOfVehiclesAtSamePosition);
    }


    public doBlinkText(){
        if(this.textVisible)
        {
            this.context.clearRect(this.lat, this.long, this.imageObj.width, this.imageObj.height);
            this.textVisible = false;
        }
        else{
            this.drawText(this.context);
            this.textVisible = true;
        }
    }


    public drawText(ctx){
        //
        // var imagePaper = new Image();
        // imagePaper.onload = function() {
        //     con.drawImage(imagePaper, 20, 20, 20, 20);
        // }
        // imagePaper.src = "images/red-truck-horizontal-right.png";
       //  ctx.fillStyle = "yellow";
       //  if(this.blinkRate > 0){
       //      ctx.fillStyle = "red";
       //  }
       // ctx.fillRect(this.lat,this.long,10,10);
       //  ctx.fillStyle = "black";
       //  ctx.font = "15px Arial";
       //  ctx.fillText(this.totalVehicle,this.lat+5,this.long+15);
    }


}
