import { editMerchantPojo } from './editMerchnt';
import { LoginService } from './../../AllServices/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-merchant',
  templateUrl: './edit-merchant.component.html',
  styleUrls: ['./edit-merchant.component.css']
})
export class EditMerchantComponent implements OnInit {
  ImgUrl: any;
  addUserFrm: FormGroup;
   pojo
  constructor(private fb: FormBuilder,
    private router: Router,
    private ser: LoginService) { }

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
      confPass: ['', Validators.required],
      mobileNo: ['', Validators.compose([
        Validators.required,
        this.length10
      ])],
      city: ['', Validators.required],
      otp: ['', Validators.required]
    })

    this.ser.lgncllbk(dt=>{
    // this.pojo.push(dt)
    //     console.log("datag dasdasd",this.pojo);

    this.pojo=new editMerchantPojo();
    this.pojo.email=dt.emailId;
    this.pojo.mobileNo=dt.mobileNo;
    this.pojo.city=dt.location;
    console.log(this.pojo); 
  })
  }

  length8(control: AbstractControl): ValidationErrors | null {
    return control.value.length >= 6 ? null : { myErr: 'Password must be 6 Characters' };
  }

  length10(control: AbstractControl): ValidationErrors | null {
    return control.value.length >= 10 ? null : { myErr: 'Number must be 10 Digits' };
  }

  choosePhoto() {
    document.getElementById('my_file').click();
  }
  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.ImgUrl = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
      console.log(event.target.files[0].name);
    }
  }

  updateUser() {
    console.log(this.addUserFrm);
  }

}
