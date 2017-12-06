import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-viewcustomer',
  templateUrl: './viewcustomer.component.html',
  styleUrls: ['./viewcustomer.component.css']
})
export class ViewcustomerComponent implements OnInit {

  addUserFrm: FormGroup;
  constructor(private router: Router) { }

  ngOnInit() { }
  viewCustomer() {
    this.router.navigate(['/editcustomer'])
  }
}
