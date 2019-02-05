/**
 * Created by admin on 10/12/2017.
 */
class Vehicle {

    private _icon: string;
    private _imageName: string;
    private _iconText: string;
    private _iconHoverText: string;
    private _pophover: string;
    private _blinkSpeed: number;
    private _pane: string;
    private _percentLegCompleted: number;
    private _loadStatus: number;
    private _menu: Menu[];


    get icon(): string {
        return this._icon;
    }

    set icon(value: string) {
        this._icon = value;
    }

    get imageName(): string {
        return this._imageName;
    }

    set imageName(value: string) {
        this._imageName = value;
    }

    get iconText(): string {
        return this._iconText;
    }

    set iconText(value: string) {
        this._iconText = value;
    }

    get iconHoverText(): string {
        return this._iconHoverText;
    }

    set iconHoverText(value: string) {
        this._iconHoverText = value;
    }



    get blinkSpeed(): number {
        return this._blinkSpeed;
    }

    get pophover(): string {
        return this._pophover;
    }

    set pophover(value: string) {
        this._pophover = value;
    }


    set blinkSpeed(value: number) {
        this._blinkSpeed = value;
    }

    get pane(): string {
        return this._pane;
    }

    set pane(value: string) {
        this._pane = value;
    }

    get percentLegCompleted(): number {
        return this._percentLegCompleted;
    }

    set percentLegCompleted(value: number) {
        this._percentLegCompleted = value;
    }
    get loadStatus(): number {
        return this._loadStatus;
    }

    set loadStatus(value: number) {
        this._loadStatus = value;
    }


    get menu(): Menu[] {
        return this._menu;
    }

    set menu(value: Menu[]) {
        this._menu = value;
    }
}