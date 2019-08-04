import { Component, OnInit } from '@angular/core';
import { MobileBrandService } from '../services/mobile-brand.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  productDeatails: any;
  modelId: number;

  constructor(private brandservice: MobileBrandService, private route: ActivatedRoute, private cartService: CartService, private router: Router) {
    this.route.params.subscribe(param => {
      this.modelId = parseInt(param['modelId']);
    });
    this.productDeatails = this.brandservice.getProductDetailById(this.modelId);
  }


  ngOnInit() {
  }

  addToCart(product){
    this.cartService.addProductToCart(product);
    this.router.navigate(['addToCart']);
  }

}
