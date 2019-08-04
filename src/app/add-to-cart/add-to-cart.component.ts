import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  cartDetails: any;
  constructor(private cartService: CartService) { 
    this.cartDetails = this.cartService.getCartDetails();
  }
  
  ngOnInit() {
    console.log(this.cartDetails)
  }

}
