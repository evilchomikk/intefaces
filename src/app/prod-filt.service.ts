import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ProdFiltService {

  private _doors: Product[] = [];

  private productsSubject = new BehaviorSubject<Product[]>([]);
  products$ = this.productsSubject.asObservable();
  
  get doors(): Product[] {
    return this._doors;
  }
  
  set doors(doors: Product[]) {
    this._doors = doors;
  }

  setProducts(products: Product[]): void {
    this.productsSubject.next(products);
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
