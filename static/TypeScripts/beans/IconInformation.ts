/**
 * Created by admin on 10/12/2017.
 */
class IconInformation{

    private _icon:string;
    private _iconText:string;
    private _iconHoverText:string;
    private _popHover:string;
    private _pane:string;
    private _showelWaiting:string;
    private _menu:Menu;

    get showelWaiting(): string {
        return this._showelWaiting;
    }

    set showelWaiting(value: string) {
        this._showelWaiting = value;
    }

    get icon(): string {
        return this._icon;
    }

    set icon(value: string) {
        this._icon = value;
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

    get menu(): Menu {
        return this._menu;
    }

    set menu(value: Menu) {
        this._menu = value;
    }

    get popHover(): string {
        return this._popHover;
    }

    set popHover(value: string) {
        this._popHover = value;
    }

    get pane(): string {
        return this._pane;
    }

    set pane(value: string) {
        this._pane = value;
    }



}