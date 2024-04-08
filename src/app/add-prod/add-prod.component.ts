import { ChangeDetectorRef, Component, HostBinding } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Product } from '../../model/product';
import FileSaver from 'file-saver';
import { ProdFiltService } from '../prod-filt.service';


@Component({
  standalone: true,
  selector: 'app-add-prod',
  templateUrl: './add-prod.component.html',
  styleUrl: './add-prod.component.scss',
  imports: [FormsModule]
})
export class AddProdComponent {

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
  }

  File1!:File;
  File2!:File;

standalone: any;


  constructor(private cdr:ChangeDetectorRef, private prodservice:ProdFiltService) { }

  ngOnInit(): void {
  }

  postProduct() {
    fetch('http://localhost:8080/api/door/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.product),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      this.prodservice.doors.push(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  onFile1Selected(event:any){
    this.File1 = event.target.files[0];

    if(this.File1){
      const formData = new FormData();
      formData.append('image', this.File1);

        fetch('http://localhost:8080/api/door/savePhoto', {
        method: 'POST',
        body: formData
      })
      .then(response => {
        if (response.ok) {
          console.log('File uploaded successfully');
          
        } else {
          console.error('File upload failed');
        }
        return response.text(); // Convert response to text
      })
      .then(data =>{
        this.product.image1 = data; // Assign response data as string
      })
    .catch(error => {
      console.error('Error uploading file:', error);
    });
    }else{
      console.log("No file selected");
    }
  }
  
  onFile2Selected(event:any){

    this.File2 = event.target.files[0];

    if(this.File2){
      const formData = new FormData();
      formData.append('image', this.File2);

        fetch('http://localhost:8080/api/door/savePhoto', {
        method: 'POST',
        body: formData
      })
      .then(response => {
        if (response.ok) {
          console.log('File uploaded successfully');
          
        } else {
          console.error('File upload failed');
        }
        return response.text(); // Convert response to text
      })
      .then(data =>{
        this.product.image2 = data; // Assign response data as string
      })
    .catch(error => {
      console.error('Error uploading file:', error);
    });
    }else{
      console.log("No file selected");
    }
  }

}
