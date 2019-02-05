/**
 * Created by admin on 10/12/2017.
 */
class Lane{

    private _id:string;
    private _loadToUnload:LoadToUnload= null;
    private _unloadToLoad:UnloadToLoad = null;
    //private _vehicle:Vehicle[];

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }
    
    get loadToUnload(): LoadToUnload {
        return this._loadToUnload;
    }

    set loadToUnload(value: LoadToUnload) {
        this._loadToUnload = value;
    }

    get unloadToLoad(): UnloadToLoad {
        return this._unloadToLoad;
    }
    set unloadToLoad(value: UnloadToLoad) {
        this._unloadToLoad = value;
    }

}