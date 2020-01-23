import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  public products = [];
  public productStatuses = [];
  public stauses = [
    'Active',
    'Inactive',
    'On hold'
  ];
  public expression = false;
  public date = new Date();

  constructor(private productsService: ProductsService, private modalService: NgbModal) { }

  ngOnInit() {
    const products = this.productsService.getProducts();
    if (products.data.length) {
      this.products = products.data;
    }
  }

  insertBlankProduct(){
    this.products.push({
      product_id : null,
      product_name: '',
      product_short_name: '',
      product_status: 'inactive'});
  }

  deleteProduct(index, content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      if(result === 'yes') {
        this.products.splice(index, 1);
      }
    }, (reason) => {
    });
  }

  saveClicked() {
    alert('saved');
  }

  selectionChanged(event) {

  }
}
