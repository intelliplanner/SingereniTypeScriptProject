class UnloadToLoad{
    private _sourceRight:SourceRight[]=null;
    private _destinationRight:DestinationRight=null;


    get sourceRight(): SourceRight[] {
        return this._sourceRight;
    }

    set sourceRight(value: SourceRight[]) {
        this._sourceRight = value;
    }


    get destinationRight(): DestinationRight {
        return this._destinationRight;
    }

    set destinationRight(value: DestinationRight) {
        this._destinationRight = value;
    }
}