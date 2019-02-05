/**
 * Created by admin on 5/28/2017.
 */
var MouseEventList = /** @class */ (function () {
    function MouseEventList() {
    }
    MouseEventList.prototype.addMenuList = function (contextSelector, paneSide, menuItems) {
        var menuList = menuItems;
        $(function () {
            $.contextMenu({
                selector: '#' + contextSelector,
                trigger: paneSide.toLowerCase(),
                callback: function (key, options) {
                    var m = "clicked: " + key;
                    //  window.console && console.log(m) || alert(m);
                    console.log(m);
                    var res = key.split(",");
                    var _name = res[0];
                    var _event = Number(res[1]);
                    switch (_event) {
                        case MouseEventList.RE_ASSIGN:
                            //EventListener.eventOnShowelRouteChange(key, options);
                            EventListener.eventOnShowelRouteChange(this, _name, MouseEventList.RE_ASSIGN_Event);
                            //Dialog.openDialog(this,Dialog.saveRoutes());
                            break;
                        case MouseEventList.REMINDER:
                            EventListener.eventOnShowelReminder(key, options);
                            break;
                        case MouseEventList.DISMISS:
                            EventListener.eventOnShowelDismiss(key, options);
                            break;
                        default:
                            break;
                    }
                },
                items: menuItems
            });
        });
    };
    MouseEventList.addLeftClickEvent = function (contextSelector, menuList) {
        var menuList = menuList;
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
    };
    MouseEventList.addRightClickEvent = function (contextSelector, menuList) {
        var menuList = menuList;
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
    };
    MouseEventList.prototype.setLeftClickEvent = function (contextSelector, menuList) {
        var menuList = menuList;
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
    };
    MouseEventList.prototype.setRightClickEvent = function (contextSelector, menuList) {
        var menuList = menuList;
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
    };
    MouseEventList.getMousePos = function (canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    };
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
    MouseEventList.drawToolTipOnCanvas = function (mousePos, evt, msg, hit) {
        var tipCanvas = document.getElementById("vehicleToolTip");
        var tipCtx = tipCanvas.getContext("2d");
        //
        // var maxWidth = 10;
        // var lineHeight =0;
        var x = 2; //(tipCanvas.width - maxWidth) / 2;
        var y = 15;
        if (!hit) {
            tipCanvas.style.left = "-200px";
        }
        else {
            tipCanvas.style.left = (evt.clientX + 20) + "px"; // (list[i][1])
            tipCanvas.style.top = (evt.clientY - 20) + "px"; // (list[i][2]-50) +
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
    };
    MouseEventList.drawToolTipOnCanvasForMultipleVehicle = function (mousePos, evt, msg, hit) {
        var tipCanvas = document.getElementById("vehicleToolTip");
        var tipCtx = tipCanvas.getContext("2d");
        //
        // var maxWidth = 10;
        // var lineHeight =0;
        var x = 2; //(tipCanvas.width - maxWidth) / 2;
        var y = 15;
        var initialHeight = 220;
        tipCanvas.height = initialHeight * (msg.length > 3 ? 3 : msg.length);
        if (!hit) {
            tipCanvas.style.left = "-200px";
        }
        else {
            tipCanvas.style.left = (evt.clientX + 20) + "px"; // (list[i][1])
            tipCanvas.style.top = (evt.clientY - 20) + "px"; // (list[i][2]-50) +
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
    };
    MouseEventList.wrapText = function (context, text) {
        var words = text == null ? "" : text.split(',');
        var x = 6;
        var y = 14;
        var line = '';
        context.font = "bold 11px Arial";
        context.fillStyle = '#000066';
        // context.font = "Arial, Helvetica, Verdana, sans-serif 11px bold";
        // context.fillStyle = '#000066';
        for (var n = 0; n < words.length; n++) {
            y = (n + 1) * 18; //n == 0 ? 18 : n == 1 ? 36  : n == 2 ? 48 : n == 3 ? 60 : n == 4 ? 74 : 88;
            line = n == 0 ? this.addSpaces(words[n], 27) : words[n];
            context.fillText(line, x, y);
        }
    };
    MouseEventList.wrapTextforMultiVehicles = function (context, text) {
        var words = text == null ? "" : text.split(',');
        var x = 6;
        //var y=14;
        var line = '';
        context.font = "bold 11px Arial";
        context.fillStyle = '#000066';
        // context.font = "Arial, Helvetica, Verdana, sans-serif 11px bold";
        // context.fillStyle = '#000066';
        for (var n = 0; n < words.length; n++) {
            var y = (n + 1) * 18; //n == 0 ? 18 : n == 1 ? 36  : n == 2 ? 48 : n == 3 ? 60 : n == 4 ? 74 : 88;
            line = n == 0 ? this.addSpaces(words[n], 27) : words[n];
            context.fillText(line, x, y);
        }
    };
    MouseEventList.addSpaces = function (str, totalNumberOfCharactor) {
        var val = "";
        if (str != null && str.length > 0) {
            totalNumberOfCharactor = totalNumberOfCharactor - str.length;
            for (var n = 0; n < totalNumberOfCharactor; n++) {
                val += " ";
            }
            val = val + str;
        }
        return val;
    };
    MouseEventList.subStr = function (word, maximumCharactors) {
        if (word.length > maximumCharactors) {
            word = word.substring(0, maximumCharactors);
        }
        return word;
    };
    MouseEventList.playEvent = "play";
    MouseEventList.editEvent = "edit";
    MouseEventList.deleteEvent = "delete";
    MouseEventList.addEvent = "add";
    MouseEventList.refreshEvent = "refresh";
    MouseEventList.dismissEvent = "Dismiss";
    MouseEventList.reminderEvent = "Reminder";
    MouseEventList.RE_ASSIGN_Event = "Re-Assign";
    MouseEventList.RE_ASSIGN = 0;
    MouseEventList.REMINDER = 1;
    MouseEventList.DISMISS = 2;
    return MouseEventList;
}());
//# sourceMappingURL=MouseEventList.js.map