import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import{ MyRoutingModule } from '../app/app.router'
import { LoginService } from './AllServices/login.service';
import { NavabrComponent } from './navabr/navabr.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HttpModule } from '@angular/http';
import { AddMerchantComponent } from './Merchant/add-merchant/add-merchant.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EditMerchantComponent } from './Merchant/edit-merchant/edit-merchant.component';
import { ViewMerchantComponent } from './Merchant/view-merchant/view-merchant.component';
import { DealServiceService } from './AllServices/deal-service.service';
import { ApproveService } from './AllServices/approve.service';
import { TimePipePipe } from './AllServices/time-pipe.pipe';
import { AddDealComponent } from './Deals/add-deal/add-deal.component';
import { ViewDealComponent } from './Deals/view-deal/view-deal.component';
import { AddCustmomerComponent } from './Customer/add-custmomer/add-custmomer.component';
import { ViewcustomerComponent } from './Customer/viewcustomer/viewcustomer.component';
import { EditcustomerComponent } from './Customer/editcustomer/editcustomer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavabrComponent,
    AddCustmomerComponent,
    ViewcustomerComponent,
    EditcustomerComponent,
    FileUploadComponent,
    AddMerchantComponent,
    AddDealComponent,
    EditMerchantComponent,
    ViewMerchantComponent,
    ViewDealComponent,
    TimePipePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MyRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot(),
   
  ],
  providers: [LoginService,DealServiceService,ApproveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
