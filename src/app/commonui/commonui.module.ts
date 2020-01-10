import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DashboardGridComponent } from './grids/dashboard-grid/dashboard-grid.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPopperModule} from 'ngx-popper';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [DashboardGridComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatExpansionModule,
    NgbModule,
    MatCardModule,
    NgxPopperModule.forRoot({placement: 'bottom'})
  ],
  exports: [
    DashboardGridComponent
  ]
})
export class CommonUiModule { }
