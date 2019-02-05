declare module namespace {

    export interface Play {
        name: string;
        icon: string;
        id: string;
        value: string;
        url: string;
    }

    export interface Edit {
        id: string;
        name: string;
        value: string;
        url: string;
        icon: string;
    }

    export interface Refresh {
        id: string;
        name: string;
        icon: string;
        value: string;
        url: string;
    }

    export interface Delete {
        name: string;
        icon: string;
        id: string;
        value: string;
        url: string;
    }

    export interface Menu {
        play: Play;
        edit: Edit;
        refresh: Refresh;
        delete: Delete;
    }

    export interface IconInformation {
        icon: string;
        iconText: string;
        iconHoverText: string;
        pophover: string;
        pane: string;
        menu: Menu;
    }

    export interface SourceInformation {
        name: string;
        hoverText: string;
        textStyle: string;
    }

    export interface SourceLeft {
        loadSiteId: string;
        iconInformation: IconInformation;
        sourceInformation: SourceInformation[];
    }

    export interface DestinationLeft {
        name: string;
        hoverText: string;
        textStyle: string;
    }

    export interface LoadToUnload {
        sourceLeft: SourceLeft;
        destinationLeft: DestinationLeft[];
    }

    export interface Menu2 {
    }

    export interface Vehicle {
        icon: string;
        imageName: string;
        iconText: string;
        iconHoverText: string;
        popHover: string;
        blinkSpeed: string;
        pane: string;
        percentLegCompleted: string;
        menu: Menu2;
    }

    export interface SourceRight {
        name: string;
        hoverText: string;
        textStyle: string;
    }

    export interface SourceInformation2 {
        name: string;
        hoverText: string;
        textStyle: string;
    }

    export interface DestinationRight {
        unloadSiteId: string;
        sourceInformation: SourceInformation2[];
    }

    export interface UnloadToLoad {
        sourceRight: SourceRight[];
        destinationRight: DestinationRight;
    }

    export interface LaneId {
        laneId: string;
        loadToUnload: LoadToUnload;
        vehicle: Vehicle[];
        unloadToLoad: UnloadToLoad;
    }

    export interface RootObject {
        laneId: LaneId;
    }

}

