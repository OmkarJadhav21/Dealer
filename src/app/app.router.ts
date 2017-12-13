import { Routes, RouterModule } from '@angular/router'
import { NavabrComponent } from './navabr/navabr.component';
import { LoginComponent } from './login/login.component';
import { AddCustmomerComponent } from './add-custmomer/add-custmomer.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';
import { AddDealComponent } from './add-deal/add-deal.component';
import { ViewMerchantComponent } from './Merchant/view-merchant/view-merchant.component';
import { EditMerchantComponent } from './Merchant/edit-merchant/edit-merchant.component';
import { AddMerchantComponent } from './Merchant/add-merchant/add-merchant.component';

const routes:Routes=[
    { path:'',redirectTo:'/login',pathMatch:'full'},
    { path:'merchantList',redirectTo:'/viewmerchant',pathMatch:'full'},    
    { path:'login',component:LoginComponent},
    { path:'navbar',component:NavabrComponent},

    { path:'addcustomer',component:AddCustmomerComponent},
    { path:'editcustomer',component:EditcustomerComponent},
    { path:'viewcustomer',component:ViewcustomerComponent},

    { path:'addmerchant',component:AddMerchantComponent},
    { path:'editmerchant',component:EditMerchantComponent},
    { path:'viewmerchant',component:ViewMerchantComponent},
    
    { path:'adddeal',component:AddDealComponent},
    
    
];

export const MyRoutingModule = RouterModule.forRoot(routes);