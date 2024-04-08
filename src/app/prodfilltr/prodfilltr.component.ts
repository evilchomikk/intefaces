import { Component } from '@angular/core';
import { Product } from '../../model/product';
import { FormsModule } from '@angular/forms';
import { ProdFiltService } from '../prod-filt.service';

@Component({
  selector: 'app-prodfilltr',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './prodfilltr.component.html',
  styleUrl: './prodfilltr.component.scss'
})
export class ProdfilltrComponent {


   product: Product = {
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

  getFillterdProducts(){

    fetch('http://localhost:8080/api/door/getFiltered',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.product),
    }).then(response => response.json()).then(data => {
      console.log('Success:', data);
      this.prodService.doors = data;
      this.prodService.setProducts(data);
      return data as Product[];
    }).catch((error) => {
      console.error('Error:', error);
    });
    return this.prodService.doors;

    console.log(this.prodService.doors);
  }

  constructor(private prodService:ProdFiltService) {}

}
