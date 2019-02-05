/**
 * Created by admin on 10/12/2017.
 */
class Information{
    private _name:string;
    private _hoverText:string;
    private _textStyle:string;

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get hoverText(): string {
        return this._hoverText;
    }

    set hoverText(value: string) {
        this._hoverText = value;
    }

    get textStyle(): string {
        return this._textStyle;
    }

    set textStyle(value: string) {
        this._textStyle = value;
    }
}