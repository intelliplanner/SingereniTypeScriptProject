
class LoadToUnload{
    private _sourceLeft:SourceLeft = null;
    private _destinationLeft:DestinationLeft[] = null;


    get destinationLeft(): DestinationLeft[] {
        return this._destinationLeft;
    }

    set destinationLeft(value: DestinationLeft[]) {
        this._destinationLeft = value;
    }

    get sourceLeft(): SourceLeft {
        return this._sourceLeft;
    }

    set sourceLeft(value: SourceLeft) {
        this._sourceLeft = value;
    }

}