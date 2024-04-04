import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddProdComponent } from './add-prod/add-prod.component';
import { ProdListComponent } from './prod-list/prod-list.component';
import { Product } from '../model/product';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AddProdComponent,ProdListComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DOORSLY';

  doors: Product[] = [];

  constructor(private http: HttpClient) {
  
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getDoors().then((doors) => {
      this.doors = doors;
    });
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
  async getDoors(): Promise<Product[]> {
    try {
      const doors = await this.http.get<Product[]>('http://localhost:8080/api/door/getAll').toPromise();
      console.log(doors);
      return doors as Product[] ; // Add default value of an empty array
    } catch (error) {
      alert('Nie udało się pobrać danych');
      return [];
    }
  }
}
