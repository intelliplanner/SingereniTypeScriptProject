/**
 * Created by admin on 10/12/2017.
 */
class Parser{
   private _laneList:Lane[] =null;
    constructor(laneList:Lane[]){
        this._laneList = laneList;
    }
    get laneList(): Lane[] {
        return this._laneList;
    }

    set laneList(value: Lane[]) {
        this._laneList = value;
    }


}