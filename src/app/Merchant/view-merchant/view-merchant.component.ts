import { element } from 'protractor';
import { LoginService } from './../../AllServices/login.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { forEach } from '@angular/router/src/utils/collection';
import { ApproveService } from '../../AllServices/approve.service';

@Component({
  selector: 'app-view-merchant',
  templateUrl: './view-merchant.component.html',
  styleUrls: ['./view-merchant.component.css']
})
export class ViewMerchantComponent implements OnInit {
  list: string[] = [];
  constructor(private router: Router,
    private ser: LoginService,
    private aprvSer: ApproveService) { }

  ngOnInit() {
    this.ser.viewMerchant().subscribe(data => {
      this.list = data.json().result;
    });
  }

  viewCustomer(id) {
    this.router.navigate(['/editmerchant', id]);
  }
  prticlrMerchantDeal(id) {
    console.log(id);
    this.router.navigate(['/adddeal', id])
  }

  approveMerchant(val, id) {
    console.log(id);
    this.aprvSer.approveMerchant(val, id).subscribe(data => {
      console.log(data);
    })
  }
  deleteMerchant(id) {
    this.aprvSer.deleteMerchant(id).subscribe(data => {
      console.log(data);
    })
  }
}