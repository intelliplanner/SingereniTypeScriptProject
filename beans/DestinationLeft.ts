/**
 * Created by admin on 10/12/2017.
 */
class DestinationLeft{
    private _name:string;
    private _hoverText:string;
    private _textStyle:string;
    private _dumpers:Vehicle[] = null ;

    get dumpers(): Vehicle[] {
        return this._dumpers;
    }

    set dumpers(value: Vehicle[]) {
        this._dumpers = value;
    }
 

    // private _destinationInformation:DestinationInformation[];
    //
    //
    // get destinationInformation(): DestinationInformation[] {
    //     return this._destinationInformation;
    // }
    //
    // set destinationInformation(value: DestinationInformation[]) {
    //     this._destinationInformation = value;
    // }

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