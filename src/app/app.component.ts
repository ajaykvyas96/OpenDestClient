import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OpenDestClient';
  prodSearchForm = this.formBuilder.group({
    productname: '',
    rating: null,
    minPrice: null,
    maxPrice: null,
    orderByColumnName:null,
    orderBy:null
  });

  products: any[] = [];
  productSearch : any[] = [];
  isExists: boolean = true;
  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService
  ) { }

  reverse: boolean = false;
  sort(columnName:any): void {
    this.prodSearchForm.value['orderByColumnName'] = columnName;
    this.reverse = !this.reverse;
    this.prodSearchForm.value['orderBy'] = this.reverse;
    this.onSubmit();
  }

  onSubmit(): void {
    this.products = []; 
    this.appService.getProducts(this.prodSearchForm.value).subscribe((data : any) => {
      this.products = data;
      this.isExists = this.products.length > 0 ? true : false;
    })
  }
}
