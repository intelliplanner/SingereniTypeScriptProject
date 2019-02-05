/**
 * Created by admin on 10/12/2017.
 */
class SourceLeft {
    private _loadSiteId:string;
    private _sourceLeftId: string;
    private _iconInformation: IconInformation;
    private _sourceInformation: TextInformation;

    get loadSiteId(): string {
        return this._loadSiteId;
    }

    set loadSiteId(value: string) {
        this._loadSiteId = value;
    }
    get iconInformation(): IconInformation {
        return this._iconInformation;
    }

    set iconInformation(value: IconInformation) {
        this._iconInformation = value;
    }

    get sourceLeftId(): string {
        return this._sourceLeftId;
    }

    set sourceLeftId(value: string) {
        this._sourceLeftId = value;
    }


    get sourceInformation(): TextInformation {
        return this._sourceInformation;
    }

    set sourceInformation(value: TextInformation) {
        this._sourceInformation = value;
    }
}