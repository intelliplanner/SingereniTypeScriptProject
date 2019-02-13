/**
 * Created by admin on 5/28/2017.
 */
class MouseEventList {


    // private static playEvent: string = "play";
    // private static editEvent: string = "edit";
    // private static deleteEvent: string = "delete";
    // private static addEvent: string = "add";
    // private static refreshEvent: string = "refresh";
    // private static reminderEvent: string = "Reminder";
    public static eventReassign: string = "Re-Assign";
    public static eventDismiss: string = "Dismiss";
    public static eventTeaBreak: string = "TEA_BREAK";
    public static eventResumeWork: string = "RESUME_WORK";
    public static eventMakeUnavailable: string = "MAKE_UNAVAILABLE";
    public static eventTakeFuel: string = "TAKE_FUEL";
    public static eventStopImmediate: string = "STOP_IMMEDIATE";
    public static eventRelease: string = "RELEASE";


    public static EVENT_REASSIGN: number = 0;
    public static EVENT_DISMISS: number = 1;
    public static EVENT_TEA_BREAK: number = 2;
    public static EVENT_RESUME_WORK: number = 3;
    public static EVENT_MAKE_UNAVAILABLE: number = 4;
    public static EVENT_TAKE_FUEL: number = 5;
    public static EVENT_STOP_IMMEDIATE: number = 6;
    public static EVENT_RELEASE: number = 7;
    // private static EVENT_REMINDER: number = 2;


    public addMenuList(contextSelector: string, paneSide: string, menuItems: any) {
        // var menuList: any = this.menuItemNew;
        $(function () {
            $.contextMenu({
                selector: '#' + contextSelector,
                trigger: paneSide.toLowerCase(),
                callback: function (key, options) {
                    var m = "clicked: " + key;
                    alert(m);
                    console.log(m);
                    var res = key.split(",");
                    var _name = res[0];
                    var _event = Number(res[1]);
                    switch (_event) {
                        case MouseEventList.EVENT_REASSIGN:
                            MenuAction.eventShowelReassign(options.items[key], MouseEventList.eventReassign);
                            break;
                        case MouseEventList.EVENT_DISMISS:
                            MenuAction.eventDismiss(options.items[key], MouseEventList.eventDismiss);
                            break;
                        case MouseEventList.EVENT_TEA_BREAK:
                            MenuAction.eventTeaBreak(options.items[key], MouseEventList.eventTeaBreak);
                            break;
                        case MouseEventList.EVENT_RESUME_WORK:
                            MenuAction.eventResumeWork(options.items[key], MouseEventList.eventResumeWork);
                            break;
                        case MouseEventList.EVENT_MAKE_UNAVAILABLE:
                            MenuAction.eventMakeUnavailable(options.items[key], MouseEventList.eventMakeUnavailable);
                            break;
                        case MouseEventList.EVENT_TAKE_FUEL:
                            MenuAction.eventTakeFuel(options.items[key], MouseEventList.eventTakeFuel);
                            break;
                        case MouseEventList.EVENT_STOP_IMMEDIATE:
                            MenuAction.eventStopImmediate(options.items[key], MouseEventList.eventStopImmediate);
                            break;
                        default:
                            break;
                    }
                },
                items: menuItems
                // items: this.menuItemNew
            });
        });
    }

    public static addLeftClickEvent(contextSelector: string, menuList: any) {
        var menuList: any = menuList;
        $(function () {
            $.contextMenu({
                selector: '#' + contextSelector,
                trigger: 'left',
                callback: function (key, options) {
                    var m = "clicked: " + key;
                    // window.console && console.log(m) || alert(m);
                },
                items: menuList
            });
        });
    }
    public static addRightClickEvent(contextSelector: string, menuList: any) {
        var menuList: any = menuList;
        $(function () {
            $.contextMenu({
                selector: '#' + contextSelector,
                trigger: 'right',
                callback: function (key, options) {
                    var m = "clicked: " + key;
                    // window.console && console.log(m) || alert(m);
                },
                items: menuList
            });
        });
    }
    public setLeftClickEvent(contextSelector: string, menuList: any) {
        var menuList: any = menuList;
        $(function () {
            $.contextMenu({
                selector: '#' + contextSelector,
                trigger: 'left',
                callback: function (key, options) {
                    var m = "clicked: " + key;
                    // window.console && console.log(m) || alert(m);
                },
                items: menuList
            });
        });
    }

    public setRightClickEvent(contextSelector: string, menuList: any): void {
        var menuList: any = menuList;
        $(function () {
            $.contextMenu({
                selector: '#' + contextSelector,
                trigger: 'right',
                callback: function (key, options) {
                    var m = "clicked: " + key;
                    console.log(m);
                    switch (key) {
                        case 'play':
                            // TempleEvent.eventCall();
                            alert(m);
                            break;
                        case 'edit':
                            // addLaneDynamic();
                            alert(m);
                            break;
                        case 'add':
                            alert(m);
                            break;
                        case 'refresh':
                            alert(m);
                            // addLaneDynamic();
                            break;
                        case 'play':
                            alert(m);
                            //play();
                            break;
                        case 'delete':
                            alert(m);
                            // removeLane(_this.laneId);
                            break;
                        default:
                            break;
                    }
                },
                items: menuList
            });
        });
    }

    public static getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }

    // public static drawToolTipOnCanvas(mousePos, evt,msg,hit) {
    //     var tipCanvas = <HTMLCanvasElement>document.getElementById("vehicleToolTip");
    //     var tipCtx = tipCanvas.getContext("2d");
    //
    //     var maxWidth = 10;
    //     var lineHeight =0;
    //     var  x = 2;//(tipCanvas.width - maxWidth) / 2;
    //     var y = 15;
    //
    //    if(!hit){
    //        tipCanvas.style.left = "-200px";
    //    }else {
    //        tipCanvas.style.left = (evt.clientX + 20) + "px";// (list[i][1])
    //        tipCanvas.style.top = (evt.clientY - 20) + "px";// (list[i][2]-50) +
    //        tipCtx.clearRect(0, 0, tipCanvas.width, tipCanvas.height);
    //        tipCtx.font = '15pt Calibri';
    //        tipCtx.fillStyle = '#333';
    //        // tipCtx.fillText(msg, 5, 15);
    //        //or
    //        this.wrapText(tipCtx, msg, x, y, maxWidth, lineHeight);
    //    }
    // }
    //
    // public static wrapText(context, text, x, y, maxWidth, lineHeight) {
    //     var words = text.split(' ');
    //     var line = '';
    //
    //     for(var n = 0; n < words.length; n++) {
    //         var testLine = line + words[n] + ' ';
    //         var metrics = context.measureText(testLine);
    //         var testWidth = metrics.width;
    //         if (testWidth > maxWidth && n > 0) {
    //             context.fillText(line, x, y);
    //             line = words[n] + ' ';
    //             y += lineHeight;
    //         }
    //         else {
    //             line = testLine;
    //         }
    //     }
    //     context.fillText(line, x, y);
    // }

    public static drawToolTipOnCanvas(mousePos, evt, msg, hit) {
        var tipCanvas = <HTMLCanvasElement>document.getElementById("vehicleToolTip");
        var tipCtx = tipCanvas.getContext("2d");
        //
        // var maxWidth = 10;
        // var lineHeight =0;
        var x = 2;//(tipCanvas.width - maxWidth) / 2;
        var y = 15;

        if (!hit) {
            tipCanvas.style.left = "-200px";
        } else {
            tipCanvas.style.left = (evt.clientX + 20) + "px";// (list[i][1])
            tipCanvas.style.top = (evt.clientY - 20) + "px";// (list[i][2]-50) +
            tipCtx.clearRect(0, 0, tipCanvas.width, tipCanvas.height);

            // fill background color
            tipCtx.fillStyle = "#D3D3D3";
            tipCtx.fillRect(5, 5, 190, 18);

            // fill close sign
            tipCtx.beginPath();
            tipCtx.moveTo(184, 10);
            tipCtx.lineTo(190, 17);
            tipCtx.moveTo(190, 10);
            tipCtx.lineTo(184, 17);
            tipCtx.stroke();

            this.wrapText(tipCtx, msg);
        }
    }

    public static drawToolTipOnCanvasForMultipleVehicle(mousePos, evt, msg, hit) {

        var tipCanvas = <HTMLCanvasElement>document.getElementById("vehicleToolTip");
        var tipCtx = tipCanvas.getContext("2d");
        //
        // var maxWidth = 10;
        // var lineHeight =0;
        var x = 2;//(tipCanvas.width - maxWidth) / 2;
        var y = 15;
        var initialHeight = 220;

        tipCanvas.height = initialHeight * (msg.length > 3 ? 3 : msg.length);


        if (!hit) {
            tipCanvas.style.left = "-200px";
        } else {
            tipCanvas.style.left = (evt.clientX + 20) + "px";// (list[i][1])
            tipCanvas.style.top = (evt.clientY - 20) + "px";// (list[i][2]-50) +
            tipCtx.clearRect(0, 0, tipCanvas.width, tipCanvas.height);

            var hoverText = "";
            for (var i in msg) {
                if (Number(i) > 2) {
                    break;
                }
                hoverText = hoverText + msg[i];

            }
            // fill background color
            tipCtx.fillStyle = "#D3D3D3";
            tipCtx.fillRect(5, 5, 190, 18);

            if (msg.length > 1) {
                var yPos = initialHeight - 17;
                tipCtx.fillRect(5, yPos, 190, 18);

                tipCtx.fillRect(5, 417, 190, 18);

            }
            // fill close sign
            // tipCtx.beginPath();
            // tipCtx.moveTo(184, 10);
            // tipCtx.lineTo(190, 17);
            // tipCtx.moveTo(190, 10);
            // tipCtx.lineTo(184, 17);
            // tipCtx.stroke();

            // tipCtx.beginPath();
            // tipCtx.moveTo(184, 10);
            // tipCtx.lineTo(190, 17);
            // tipCtx.moveTo(190, 10);
            // tipCtx.lineTo(184, 17);
            // tipCtx.stroke();
            this.wrapTextforMultiVehicles(tipCtx, hoverText);
        }
    }



    public static wrapText(context, text) {
        var words = text == null ? "" : text.split(',');
        var x = 6;
        var y = 14;
        var line = '';
        context.font = "bold 11px Arial";
        context.fillStyle = '#000066';

        // context.font = "Arial, Helvetica, Verdana, sans-serif 11px bold";
        // context.fillStyle = '#000066';

        for (var n = 0; n < words.length; n++) {
            y = (n + 1) * 18;                   //n == 0 ? 18 : n == 1 ? 36  : n == 2 ? 48 : n == 3 ? 60 : n == 4 ? 74 : 88;
            line = n == 0 ? this.addSpaces(words[n], 27) : words[n];
            context.fillText(line, x, y);
        }
    }

    public static wrapTextforMultiVehicles(context, text) {
        var words = text == null ? "" : text.split(',');
        var x = 6;
        //var y=14;
        var line = '';
        context.font = "bold 11px Arial";
        context.fillStyle = '#000066';

        // context.font = "Arial, Helvetica, Verdana, sans-serif 11px bold";
        // context.fillStyle = '#000066';

        for (var n = 0; n < words.length; n++) {
            var y = (n + 1) * 18;                   //n == 0 ? 18 : n == 1 ? 36  : n == 2 ? 48 : n == 3 ? 60 : n == 4 ? 74 : 88;
            line = n == 0 ? this.addSpaces(words[n], 27) : words[n];
            context.fillText(line, x, y);
        }
    }




    public static addSpaces(str: string, totalNumberOfCharactor: number): string {
        var val = "";
        if (str != null && str.length > 0) {
            totalNumberOfCharactor = totalNumberOfCharactor - str.length;
            for (var n = 0; n < totalNumberOfCharactor; n++) {
                val += " ";
            }
            val = val + str;
        }
        return val;
    }
    public static subStr(word: string, maximumCharactors: number): string {
        if (word.length > maximumCharactors) {
            word = word.substring(0, maximumCharactors);
        }
        return word;
    }

}