import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { PageHeaderComponent } from './page-header/page-header.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [AddUserComponent, PageHeaderComponent, ManageProductComponent, ManageUsersComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SelectDropDownModule,
    MatIconModule
  ],
  entryComponents: [AddUserComponent]
})
export class PagesModule { }
