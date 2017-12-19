import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { LoginService } from '../../AllServices/login.service';

@Component({
  selector: 'app-viewcustomer',
  templateUrl: './viewcustomer.component.html',
  styleUrls: ['./viewcustomer.component.css']
})
export class ViewcustomerComponent implements OnInit {
  list: string[] = [];
  constructor(private router: Router,
    private ser: LoginService) { }

  ngOnInit() {
    this.ser.viewMerchant().subscribe(data => {
      this.list = data.json().result;
    });
  }

  viewCustomer(id) {
    this.router.navigate(['/editcustomer',id]);
}
}