import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DashboardGridComponent } from './grids/dashboard-grid/dashboard-grid.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPopperModule} from 'ngx-popper';
import {MatCardModule} from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [DashboardGridComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatExpansionModule,
    NgbModule,
    MatCardModule,
    FormsModule,
    FontAwesomeModule,
    NgxPopperModule.forRoot({placement: 'bottom'})
  ],
  exports: [
    DashboardGridComponent
  ]
})
export class CommonUiModule { }
