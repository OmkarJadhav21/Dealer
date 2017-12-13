import { LoginService } from '../../AllServices/login.service'
import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
// import { RequestOptions, Http } from '@angular/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-add-merchant',
  templateUrl: './add-merchant.component.html',
  styleUrls: ['./add-merchant.component.css']
})
export class AddMerchantComponent implements OnInit {
  currentFileUpload: any;
  ImgUrl: any;
  userId = "5a2942e895a1c35af9821dca";
  selectedFiles;
  ;
  userRegisterFrm: FormGroup;
  constructor(private fb: FormBuilder,
    private LoginService: LoginService,
    private http: Http) { }

  ngOnInit() {
    this.userRegisterFrm = this.fb.group({
      emailId: ['', Validators.compose([
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
      location: ['', Validators.required],
      otp: ['', Validators.required],
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
      console.log(this.ImgUrl);
      reader.readAsDataURL(event.target.files[0]);
      // console.log(event.target.files[0].name);
    }
  }

  submitUser() {
    this.LoginService.addCustservice(this.userRegisterFrm.value).subscribe(data => {
      console.log(data);
    })
  }
  merchntImg(formData) {
    this.ImgUrl = event.target;
    console.log(this.ImgUrl);

    this.userId = this.userId;
    // this.LoginService.merchantImg(this.ImgUrl.value,this.userId.value)
    // .subscribe(data=>{
    //   console.log(data);  
    // })
  }
  fileChange(event) {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);

  }
  upload() {

    this.currentFileUpload = this.selectedFiles.item(0)
    // console.log("In Upload fun", this.currentFileUpload);

    this.LoginService.merchantImg(this.currentFileUpload).subscribe(res => console.log(res));

    // this.selectedFiles = undefined
  }
}