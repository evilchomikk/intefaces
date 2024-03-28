import { Component } from '@angular/core';
import { Product } from '../../model/product';
import { NgFor } from '@angular/common';
import { ProdComponent } from '../prod/prod.component';

@Component({
  selector: 'app-prod-list',
  standalone: true,
  imports: [NgFor,ProdComponent],
  templateUrl: './prod-list.component.html',
  styleUrl: './prod-list.component.scss'
})
export class ProdListComponent {

  products:Product[] = [
    {
      name: '1',
      direction: '1',
      category: '1',
      price: 0,
      quantity: 0,
      color: '1',
      code: '1',
      width: 0,
      height: 0,
      weight: 0,
      material: '1',
      photo1: '1',
      photo2: '1'
    },
    {
      name: '1',
      direction: '1',
      category: '1',
      price: 0,
      quantity: 0,
      color: '1',
      code: '1',
      width: 0,
      height: 0,
      weight: 0,
      material: '1',
      photo1: '1',
      photo2: '1'
    },
    {
      name: '1',
      direction: '1',
      category: '1',
      price: 0,
      quantity: 0,
      color: '1',
      code: '1',
      width: 0,
      height: 0,
      weight: 0,
      material: '1',
      photo1: '1',
      photo2: '1'
    },
    {
      name: '1',
      direction: '1',
      category: '1',
      price: 0,
      quantity: 0,
      color: '1',
      code: '1',
      width: 0,
      height: 0,
      weight: 0,
      material: '1',
      photo1: '1',
      photo2: '1'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
