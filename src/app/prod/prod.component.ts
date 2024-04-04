import { Component, Input, input } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-prod',
  standalone: true,
  imports: [],
  templateUrl: './prod.component.html',
  styleUrl: './prod.component.scss'
})
export class ProdComponent {

  @Input() product: Product = {
    name: '',
    direction: '',
    category: '',
    price: 0,
    quantity: 0,
    color: '',
    code: '',
    width: 0,
    height: 0,
    weight: 0,
    material: '',
    image1: '',
    image2: ''
  };
  getImage1(){
    return this.product.image1;
  }
  getImage2(){
    return this.product.image2;
  }
}
