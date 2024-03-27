import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddProdComponent } from './add-prod/add-prod.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AddProdComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DOORSLY';
}
