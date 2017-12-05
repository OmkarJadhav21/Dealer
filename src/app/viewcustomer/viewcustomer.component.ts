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
  constructor(private fb: FormBuilder,
              private router:Router) { }

  ngOnInit() {
    this.addUserFrm = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]
      )],
      password: ['', Validators.compose([
        Validators.required,
        this.length8
      ])],
      confPass: ['', Validators.required ],
      mobileNo: ['', Validators.compose([
        Validators.required,
        this.length10
      ])],
      city: ['', Validators.required],
      otp: ['', Validators.required]
    })
  }
  length8(control: AbstractControl): ValidationErrors | null {
    return control.value.length >= 6 ? null : { myErr: 'Password must be 6 Characters' };
  }
  length10(control: AbstractControl): ValidationErrors | null {
    return control.value.length >= 10 ? null : { myErr: 'Number must be 10 Digits' };
  }


  updateUser() {
    console.log(this.addUserFrm);
  }
  cancel(){
    this.router.navigate(['/navbar'])
  }
}
