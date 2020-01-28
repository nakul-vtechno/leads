import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { PageHeaderComponent } from './page-header/page-header.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { MatIconModule} from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { ManageSettingsComponent } from './manage-settings/manage-settings.component';




@NgModule({
  declarations: [AddUserComponent, PageHeaderComponent, ManageProductComponent, ManageUsersComponent, ManageSettingsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SelectDropDownModule,
    MatIconModule,
    FontAwesomeModule,
    MatCheckboxModule
  ],
  entryComponents: [AddUserComponent]
})
export class PagesModule { }
