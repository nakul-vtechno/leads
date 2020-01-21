import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { PageHeaderComponent } from './page-header/page-header.component';
import { ManageProductComponent } from './manage-product/manage-product.component';



@NgModule({
  declarations: [AddUserComponent, PageHeaderComponent, ManageProductComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SelectDropDownModule
  ],
  entryComponents: [AddUserComponent]
})
export class PagesModule { }
