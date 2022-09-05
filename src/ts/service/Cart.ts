import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    sum():number{
      return this._items.reduce(  (summ: number, currentValue:Buyable) => summ + currentValue.price,
      0
    )
    }
    discount(discount:number):number{
      return discount * this._items.reduce(  (summ: number, currentValue:Buyable) => summ + currentValue.price,
      0
    )
    }
    delete(id:number):Buyable[]{
      return this._items.filter(item => item.id!==id)
    }
}
