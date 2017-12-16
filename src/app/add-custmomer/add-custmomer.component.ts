import { LoginService } from './../AllServices/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
// import { RequestOptions, Http } from '@angular/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-add-custmomer',
  templateUrl: './add-custmomer.component.html',
  styleUrls: ['./add-custmomer.component.css']
})
export class AddCustmomerComponent implements OnInit {
  currentFileUpload: any;
  ImgUrl: any;
  selectedFiles;
  alert: boolean = false;
  alertf: boolean = false;
  userRegisterFrm: FormGroup;
  constructor(private fb: FormBuilder,
    private LoginService: LoginService,
    private http: Http) { }

  ngOnInit() {
    this.userRegisterFrm = this.fb.group({
      name: ['', Validators.required],
      emailId: ['', Validators.compose([
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]
      )],
      location: ['', Validators.required],
      otp: ['', Validators.required],
      confPass: ['', Validators.required],
      mobileNo: ['', Validators.compose([
        Validators.required,
        this.length10
      ])],
      password: ['', Validators.compose([
        Validators.required,
        this.length8
      ])],

      image: ""
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

      console.log(event.target.files[0]);
    }
  }

  submitUser() {
    this.LoginService.addCustservice(this.userRegisterFrm.value).subscribe(data => {
      if (data.json().status == "success") {
        this.alert = true
        this.alertf = false;
      } else {
        this.alertf = true
        this.alert = false;
      }
    })
    this.userRegisterFrm.reset();

  }
  merchntImg(formData) {
    this.ImgUrl = event.target;
    console.log(this.ImgUrl);
    // this.LoginService.merchantImg(this.ImgUrl.value,this.userId.value)
    // .subscribe(data=>{
    //   console.log(data);  
    // })
  }
  fileChange(event) {
    // this.selectedFiles = event.target.files;
    // console.log(this.selectedFiles);

  }

  upload() {

    // this.currentFileUpload = this.selectedFiles.item(0)
    // // console.log("In Upload fun", this.currentFileUpload);
    // this.LoginService.merchantImg(this.currentFileUpload).subscribe(res =>console.log(res));
  }
}

