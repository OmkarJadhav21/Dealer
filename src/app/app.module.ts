import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import{ MyRoutingModule } from '../app/app.router'
import { LoginService } from './AllServices/login.service';
import { NavabrComponent } from './navabr/navabr.component';
import { AddCustmomerComponent } from './add-custmomer/add-custmomer.component';
import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavabrComponent,
    AddCustmomerComponent,
    ViewcustomerComponent,
    EditcustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MyRoutingModule,
    ReactiveFormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
