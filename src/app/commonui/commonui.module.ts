import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DashboardGridComponent } from './grids/dashboard-grid/dashboard-grid.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [DashboardGridComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatExpansionModule,
    NgbModule
  ],
  exports: [
    DashboardGridComponent
  ]
})
export class CommonUiModule { }
