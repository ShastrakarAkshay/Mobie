import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartDetails: any[] = [];

  constructor(private http: HttpClient) { }

  addProductToCart(product){
    let flag = 0;
    for(let item of this.cartDetails){
      if(item.productId == product.productId){
        flag = 1;
      }
    }
    if(flag == 0)
      this.cartDetails.push(product);

  }

  getCartDetails(){
    return this.cartDetails;
  }

  removeCartItem(productId){
    let cartArr = [];
    for(let product of this.cartDetails){
      if(product.productId != productId){
        cartArr.push(product);
      }
    }
    this.cartDetails = cartArr;
    return this.cartDetails;
  }

  updateQuantity(id, quantity){
    let cartArr = [];
    for(let product of this.cartDetails){
      if(product.productId == id){
        product.quantity = quantity;
      }
      cartArr.push(product);
    }
    this.cartDetails = cartArr;
    return this.cartDetails;
  }
}
