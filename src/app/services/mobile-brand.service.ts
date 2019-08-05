import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobileBrandService {

  products: any = [
    {
      "productId": "1",
      "modelName": "Samsung A1",
      "Specifications": {
        "ram": "4GB",
        "memory": "64GB",
        "processor": "Quad Core",
        "front-camera": "13MP",
        "rear-camera": "16MP",
        "os": "Oreo"
      },
      "price": "14999",
      "quantity":"1"
    },
    {
      "productId": "2",
      "modelName": "Samsung A2",
      "Specifications": {
        "ram": "4GB",
        "memory": "64GB",
        "processor": "Quad Core",
        "front-camera": "13MP",
        "rear-camera": "16MP",
        "os": "Oreo"
      },
      "price": "15999",
      "quantity":"1"
    },
    {
      "productId": "3",
      "modelName": "Samsung A3",
      "Specifications": {
        "ram": "4GB",
        "memory": "64GB",
        "processor": "Quad Core",
        "front-camera": "13MP",
        "rear-camera": "16MP",
        "os": "Oreo"
      },
      "price": "16999",
      "quantity":"1"
    },
    {
      "productId": "4",
      "modelName": "Samsung A4",
      "Specifications": {
        "ram": "4GB",
        "memory": "64GB",
        "processor": "Quad Core",
        "front-camera": "13MP",
        "rear-camera": "16MP",
        "os": "Oreo"
      },
      "price": "17999",
      "quantity":"1"
    },
    {
      "productId": "5",
      "modelName": "Samsung A5",
      "Specifications": {
        "ram": "4GB",
        "memory": "64GB",
        "processor": "Quad Core",
        "front-camera": "13MP",
        "rear-camera": "16MP",
        "os": "Oreo"
      },
      "price": "14999",
      "quantity":"1"
    },
    {
      "productId": "6",
      "modelName": "Samsung A6",
      "Specifications": {
        "ram": "4GB",
        "memory": "64GB",
        "processor": "Quad Core",
        "front-camera": "13MP",
        "rear-camera": "16MP",
        "os": "Oreo"
      },
      "price": "12999",
      "quantity":"1"
    },
    {
      "productId": "7",
      "modelName": "Samsung A7",
      "Specifications": {
        "ram": "4GB",
        "memory": "64GB",
        "processor": "Quad Core",
        "front-camera": "13MP",
        "rear-camera": "16MP",
        "os": "Oreo"
      },
      "price": "14999",
      "quantity":"1"
    },
    {
      "productId": "8",
      "modelName": "Samsung A8",
      "Specifications": {
        "ram": "4GB",
        "memory": "64GB",
        "processor": "Quad Core",
        "front-camera": "13MP",
        "rear-camera": "16MP",
        "os": "Oreo"
      },
      "price": "10999",
      "quantity":"1"
    },
    {
      "productId": "9",
      "modelName": "Samsung A9",
      "Specifications": {
        "ram": "4GB",
        "memory": "64GB",
        "processor": "Quad Core",
        "front-camera": "13MP",
        "rear-camera": "16MP",
        "os": "Oreo"
      },
      "price": "19999",
      "quantity":"1"
    },
    {
      "productId": "10",
      "modelName": "Samsung A10",
      "Specifications": {
        "ram": "4GB",
        "memory": "64GB",
        "processor": "Quad Core",
        "front-camera": "13MP",
        "rear-camera": "16MP",
        "os": "Oreo"
      },
      "price": "14999",
      "quantity":"1"
    },
  ];

  brandInfo: any[] = [
    {
      "productId": "1",
      "brandName": "Nokia",
    },
    {
      "productId": "2",
      "brandName": "Samsung",
    },
    {
      "productId": "3",
      "brandName": "Htc",
    },
    {
      "productId": "4",
      "brandName": "Blackberry",
    },
    {
      "productId": "5",
      "brandName": "Apple",
    },
    {
      "productId": "6",
      "brandName": "Lenovo",
    },
    {
      "productId": "7",
      "brandName": "Lg",
    },
    {
      "productId": "8",
      "brandName": "Huawei",
    },
    {
      "productId": "9",
      "brandName": "Toshiba",
    },
    {
      "productId": "10",
      "brandName": "Nokia",
    },
  ];

  constructor(private http: HttpClient) { }

  getBrandById(productId) {
    for(let item of this.brandInfo){
      if(item.productId == productId){
        return item;
      }
    }
  }

  getAllBrands(){
    return this.brandInfo;
  }

  getProductsByBrand(brandId) {
    return this.products;
  }

  getProductDetailById(id){
    for(let item of this.products){
      if(item.productId == id){
        return item;
      }
    }
  }

}
