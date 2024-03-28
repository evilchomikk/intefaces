import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddProdComponent } from './add-prod/add-prod.component';
import { ProdListComponent } from './prod-list/prod-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AddProdComponent,ProdListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DOORSLY';
}
