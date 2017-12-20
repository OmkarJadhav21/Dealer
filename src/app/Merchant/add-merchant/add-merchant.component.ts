import { LoginService } from '../../AllServices/login.service'
import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
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
  alert: boolean = false;
  alertf: boolean = false;
  image;

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
      password: ['',[Validators.required,Validators.minLength(5)]],
      confPass: ['', Validators.required],
      mobileNo: ['',[Validators.required,Validators.maxLength(10)]],
      location: ['', Validators.required],
      otp: ['', Validators.required],
      image: [''],
      merchant: [''],
      merchantApproved:['']
    })
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
      this.image=event.target.files[0]
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
  }

  upload() {
    this.LoginService.merchantImg(this.image).subscribe(res => console.log(res));
  }
}