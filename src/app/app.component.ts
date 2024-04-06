import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddProdComponent } from './add-prod/add-prod.component';
import { ProdListComponent } from './prod-list/prod-list.component';
import { Product } from '../model/product';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProdFiltService } from './prod-filt.service';
import { response } from 'express';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AddProdComponent,ProdListComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DOORSLY';

  doors!: Product[] ;

  constructor(private http: HttpClient,public prodservice:ProdFiltService) {
  
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getDoors();
    this.doors = this.prodservice.getDoors();
  }


  // async getDoors(): Promise<Product[]> {
  //   try {
  //     const response = await fetch('http://localhost:8080/api/door/getAll');
  //     const data = await response.json();
  //     const doors = data as Product[];
  //     console.log(doors);
  //     return doors;
  //   } catch (error) {
  //     alert('Nie udało się pobrać danych');
  //     return [];
  //   }
  // }
  getDoors(): Product[] {

      fetch('http://localhost:8080/api/door/getAll', {
        method: 'GET',
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        this.prodservice.doors = data;
        this.doors = this.prodservice.doors;
        console.log(this.prodservice.doors);
        return data as Product[];
      })
      .catch((error) => {
        console.error('Error:', error);
      });

      return [];
  }


}
