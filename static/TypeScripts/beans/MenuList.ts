class MenuList {
    _menu: MenuItems[];
    constructor(_menu: MenuItems[]) {
        this._menu = _menu;
    }
    get menuListData(): MenuItems[] {
        return this._menu;
    }

    set menuListData(value: MenuItems[]) {
        this._menu = value;
    }
}