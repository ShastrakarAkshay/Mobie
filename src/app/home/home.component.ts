import { Component, OnInit } from '@angular/core';
import { MobileBrandService } from '../services/mobile-brand.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allBrands: any;
  temp = [1,2,3,4];
  constructor(private brandService: MobileBrandService) { 
    this.allBrands = this.brandService.getAllBrands();
  }

  ngOnInit() {
  }

}
