import { Component, OnInit } from '@angular/core';
import { MobileBrandService } from '../services/mobile-brand.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brand-products',
  templateUrl: './brand-products.component.html',
  styleUrls: ['./brand-products.component.css']
})
export class BrandProductsComponent implements OnInit {

  productsInfo: any[] = [];
  brandInfo: any;
  brandId: number;
  brandTitle: string = "";

  constructor(private mobileBrand: MobileBrandService, private route: ActivatedRoute) {
    this.route.params.subscribe(param => {
      this.brandId = parseInt(param['productId']);
    });
    this.brandInfo = this.mobileBrand.getBrandById(this.brandId);
    this.productsInfo = this.mobileBrand.getProductsByBrand(this.brandId);
  }
  
  ngOnInit() {}
  
}
