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

  isImageExpandedImg1 = false;
  isImageExpandedImg2 = false;

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

  openFullscreen(event: { target: any; }) {
    const elem = event.target;
  
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }

  expandImage1() {
    this.isImageExpandedImg1 = !this.isImageExpandedImg1;
  }
  expandImage2() {
    this.isImageExpandedImg2 = !this.isImageExpandedImg2;
  }
}
