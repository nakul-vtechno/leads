import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { DashboardGridComponent } from './grids/dashboard-grid/dashboard-grid.component';
import { MatExpansionModule} from '@angular/material/expansion';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPopperModule} from 'ngx-popper';
import { MatCardModule} from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { EditLeadComponent } from './edit-lead/edit-lead.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule} from 'primeng/card';
import { DropdownModule} from 'primeng/dropdown';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { AddLeadComponent } from './add-lead/add-lead.component';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [DashboardGridComponent, EditLeadComponent, AddLeadComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatExpansionModule,
    NgbModule,
    MatCardModule,
    FormsModule,
    FontAwesomeModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    CardModule,
    DropdownModule,
    SelectDropDownModule,
    MatChipsModule,
    NgxPopperModule.forRoot({placement: 'bottom'})
  ],
  exports: [
    DashboardGridComponent
  ],
  entryComponents: [EditLeadComponent, AddLeadComponent]
})
export class CommonUiModule { }
