import { ChangeDetectorRef, Component, HostBinding } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Product } from '../../model/product';



@Component({
  standalone: true,
  selector: 'app-add-prod',
  templateUrl: './add-prod.component.html',
  styleUrl: './add-prod.component.scss',
  imports: [FormsModule]
})
export class AddProdComponent {

  product: Product = {
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
standalone: any;


  constructor(private cdr:ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  postProduct() {

    console.log(this.product);
    const toSend = {
      id: 0,
      name: this.product.name,
      direction: this.product.direction,
      category: this.product.category,
      price: this.product.price,
      quantity: this.product.quantity,
      color: this.product.color,
      code: this.product.code,
      width: this.product.width,
      height: this.product.height,
      weight: this.product.weight,
      material: this.product.material,
      photo1: this.product.photo1,
      photo2: this.product.photo2
    }

    console.log(toSend);

    fetch('http://localhost:8080/api/door/add', {
      method: 'POST',
      body: JSON.stringify(toSend) ,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
      
    
  }
