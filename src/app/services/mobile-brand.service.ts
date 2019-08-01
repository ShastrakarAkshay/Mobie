import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MobileBrandService {

  constructor(private http:HttpClient) { }

  getBrandById(productId){
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+productId);
  }
}
