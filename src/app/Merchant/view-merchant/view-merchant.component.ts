import { element } from 'protractor';
import { LoginService } from './../../AllServices/login.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-view-merchant',
  templateUrl: './view-merchant.component.html',
  styleUrls: ['./view-merchant.component.css']
})
export class ViewMerchantComponent implements OnInit {
  list: string[] = [];
  constructor(private router: Router,
    private ser: LoginService) { }

  ngOnInit() {
    this.ser.viewMerchant().subscribe(data => {
      this.list = data.json().result;
    });
  }


  viewCustomer(id) {
    console.log(id);
    this.ser.getById(id).subscribe(data => {
      console.log(data);

    })
    // this.router.navigate(['/editcustomer'])
  }
}
