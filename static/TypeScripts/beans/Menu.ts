/**
 * Created by admin on 10/12/2017.
 */

class Menu{
  private _name:string;
  private _items:MenuItems[];

  get items(): MenuItems[] {
    return this._items;
  }

  set items(value: MenuItems[]) {
    this._items = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}