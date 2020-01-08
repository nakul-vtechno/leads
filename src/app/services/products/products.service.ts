import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getProducts() {
    return {
      data: [
        {product_id : 1, product_name: 'Personal Loan', product_short_name: 'PL', product_status: 'active'},
        {product_id : 2, product_name: 'Credit Card', product_short_name: 'CC', product_status: 'active'},
        {product_id : 3, product_name: 'Auto Loan', product_short_name: 'AL', product_status: 'active'},
        {product_id : 4, product_name: 'Bussiness Loan', product_short_name: 'BL', product_status: 'active'},
        {product_id : 5, product_name: 'Home Loan', product_short_name: 'HL', product_status: 'active'},
        {product_id : 6, product_name: 'Loan Againt Property', product_short_name: 'LAP', product_status: 'active'}
      ]
    };
  }
}
