import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProdFiltService {

  private _doors: Product[] = [];

  get doors(): Product[] {
    return this._doors;
  }
  
  set doors(doors: Product[]) {
    this._doors = doors;
  }

  constructor() { }

  getDoors(): Product[] {
    return this.doors;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  
}
