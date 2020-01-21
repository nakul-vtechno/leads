import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//
// Form Controls
//

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { MatNativeDateModule, MatListModule, MatChipsModule } from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'angular-highcharts';
import { CommonModule } from '@angular/common';
import { CommonUiModule } from './commonui/commonui.module';

import {TooltipModule} from 'primeng/tooltip';
import { NgxPopperModule } from 'ngx-popper';
import { EditLeadComponent } from './commonui/edit-lead/edit-lead.component';
import {CardModule} from 'primeng/card';
import { AddLeadComponent } from './commonui/add-lead/add-lead.component';
import { ProductCountTableComponent } from './commonui/product-count-table/product-count-table.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    LoginComponent,
    ProductCountTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatNativeDateModule,
    MatListModule,
    MatCardModule,
    NgbProgressbarModule,
    HttpClientModule,
    ChartModule,
    FontAwesomeModule,
    CommonModule,
    CommonUiModule,
    TooltipModule,
    MatButtonModule,
    CardModule,
    MatChipsModule,
    PagesModule,
    NgxPopperModule.forRoot({placement: 'bottom'})
  ],
  providers: [EditLeadComponent, AddLeadComponent, ProductCountTableComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
