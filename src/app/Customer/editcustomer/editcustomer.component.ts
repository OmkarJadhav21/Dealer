import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../../AllServices/login.service';

@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css']
})
export class EditcustomerComponent implements OnInit {

  ImgUrl: any;
  addUserFrm: FormGroup;
  constructor(private fb: FormBuilder,
    private router: Router,
    private ser: LoginService,
    public asRt: ActivatedRoute) { }
  name;
  mail;
  password;
  mobileNo;
  city;
  id
  ngOnInit() {


    this.asRt.params.subscribe(params => {
      this.id = params['id']
    })
    this.ser.getById(this.id).subscribe(dt => {
      this.name = dt.json().result.name;      
      this.mail = dt.json().result.emailId;
      this.mobileNo = dt.json().result.mobileNo;
      // this.password = dt.json().result.password;
      this.city = dt.json().result.location;

    })

    this.addUserFrm = this.fb.group({
      name:['',Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]
      )],
      password: [''],
      confPass: [''],
      mobileNo: ['', Validators.compose([
        Validators.required,
        this.length10
      ])],
      city: ['', Validators.required],
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
    var frm = this.addUserFrm.value;
    console.log("frmmm", frm.value.email)
    //  this.addUserFrm.setValue({
    //    email:frm.value.email
    //  })
    // this.ser.addCustservice(this.addUserFrm).subscribe(data => {
    //   console.log(data);
    // })
  }

}
