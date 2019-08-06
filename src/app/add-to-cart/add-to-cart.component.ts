import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  cartDetails: any;
  quantity: number = 1;
  totalItems: number = 0;
  totalPrice: number = 0;
  totalCharges: number = 0;
  totalPayable: number = 0;

  constructor(private cartService: CartService) { 
    this.cartDetails = this.cartService.getCartDetails();
    this.calculateCheckoutDetails(this.cartDetails);
    this.totalItems = this.cartDetails.length;
  }
  
  ngOnInit() {
    console.log(this.cartDetails)
  }

  removeItem(productId){
    this.cartDetails = this.cartService.removeCartItem(productId);
    this.totalItems = this.cartDetails.length;
    this.calculateCheckoutDetails(this.cartDetails);
  }

  incrementQuantity(id, quantity){
    quantity = parseInt(quantity);
    if(quantity < 10)
      quantity+=1;
    this.cartDetails = this.cartService.updateQuantity(id, quantity);
    this.calculateCheckoutDetails(this.cartDetails);
  }
  
  decrementQuantity(id, quantity){
    quantity = parseInt(quantity);
    if(quantity > 1)
      quantity-=1;
    this.cartDetails = this.cartService.updateQuantity(id, quantity);
    this.calculateCheckoutDetails(this.cartDetails);
  }

  calculateCheckoutDetails(cartItems){
    this.resetCheckout();
    for(let item of cartItems){
      this.totalPrice = this.totalPrice + parseInt(item.price)*parseInt(item.quantity);
    }
    if(this.totalPrice < 20000 && cartItems.length>0)
      this.totalCharges = 100;
    this.totalPayable = this.totalPrice + this.totalCharges;
  }

  resetCheckout(){
    this.totalCharges = 0;
    this.totalPayable = 0;
    this.totalPrice= 0;
  }

}
