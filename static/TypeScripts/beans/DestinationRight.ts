/**
 * Created by admin on 10/12/2017.
 */
class DestinationRight {
    private _unloadSiteId: string;
    private _destinationInformation: TextInformation;


    get destinationInformation(): TextInformation {
        return this._destinationInformation;
    }

    set destinationInformation(value: TextInformation) {
        this._destinationInformation = value;
    }


    get unloadSiteId(): string {
        return this._unloadSiteId;
    }

    set unloadSiteId(value: string) {
        this._unloadSiteId = value;
    }
}