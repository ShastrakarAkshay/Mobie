import { Component, OnInit } from '@angular/core';
import { MobileBrandService } from '../services/mobile-brand.service';

@Component({
  selector: 'app-brand-products',
  templateUrl: './brand-products.component.html',
  styleUrls: ['./brand-products.component.css']
})
export class BrandProductsComponent implements OnInit {

  products: any;
  tempProduct = [10,20,30,40,50,60,70,80,90,100];
  constructor(private mobileBrand: MobileBrandService) { }

  ngOnInit() {
    
  }

}
