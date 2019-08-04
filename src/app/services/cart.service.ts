import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartDetails: any[] = [];

  constructor(private http: HttpClient) { }

  addProductToCart(product){
    this.cartDetails.push(product);
  }

  getCartDetails(){
    return this.cartDetails;
  }
}
