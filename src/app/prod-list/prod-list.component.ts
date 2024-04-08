import { Component, Input } from '@angular/core';
import { Product } from '../../model/product';
import { NgFor } from '@angular/common';
import { ProdComponent } from '../prod/prod.component';
import { ProdFiltService } from '../prod-filt.service';

@Component({
  selector: 'app-prod-list',
  standalone: true,
  imports: [NgFor,ProdComponent],
  templateUrl: './prod-list.component.html',
  styleUrl: './prod-list.component.scss'
})
export class ProdListComponent {

  @Input() products:Product[] = [];

  constructor(private prodService: ProdFiltService) { }

  ngOnInit(): void {
    console.log(this.products);
    this.prodService.products$.subscribe(products => {
      this.products = products;
    });
  }
}
