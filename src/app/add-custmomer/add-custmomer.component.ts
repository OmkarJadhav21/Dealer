import { LoginService } from './../AllServices/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-custmomer',
  templateUrl: './add-custmomer.component.html',
  styleUrls: ['./add-custmomer.component.css']
})
export class AddCustmomerComponent implements OnInit {

  addUserFrm: FormGroup;
  constructor(private fb: FormBuilder,
              private LoginService:LoginService) { }

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


  submitUser() {
    this.LoginService.addCustservice(this.addUserFrm.value).subscribe(data=>{
      console.log(data);  
    })
  }
}
