import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {
  email:String;
  mobileNo:String;
  location:String;
  password:String;
  
  private em: EventEmitter<any>
  linkhit = "http://localhost:8989/appStart/user"
  constructor(private router: Router, private http: Http) {
    this.em = new EventEmitter<any>();
  }
  loginSer(loginData) {
    if (loginData.Username == "admin" && loginData.Password == "admin") {
      this.em.emit({
        user: "admin",
        success: null
      })
      this.router.navigate(['/merchantList'])
    }
    else {
      this.em.emit({
        success: "Username Or Password is Incorrect"
      })
    }
  }

  loginAdmin(loginData) {
    return this.http.post(this.linkhit + '/loginUser', loginData).map(res => {
      return res;
    })
  }
  addCustservice(addcustomer) {
    return this.http.post(this.linkhit + '/RegisterUser', addcustomer).map(res => {
      return res;
    })
  }
  merchantImg(file: File): Observable<any> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    console.log("IN FormData", formdata);
    return this.http.post(this.linkhit + '/uploadImage', formdata).map(res => {
      return res;
    });
  }
  getById(id) {
    return this.http.get(this.linkhit + `/getUserById/${id}`).map(res => {
      // this.email=res.json().result.emailId;
      // this.mobileNo=res.json().result.mobileNo;
      // this.location=res.json().result.location;
      // this.password=res.json().result.password;
      // this.confPass=res.json().result.confPass;
      
      

      this.em.emit({
        emailId:res.json().result.emailId,
        location:res.json().result.location,
        mobileNo:res.json().result.mobileNo,
        password:res.json().result.password
        // confPass:this.confPass
      })
        this.router.navigate(['/editmerchant']);
})
  }
  viewMerchant() {
    return this.http.get(this.linkhit + '/getAllUsers').map(res => {
      return res;
    })
  }






  lgncllbk(callback: any) {
    this.em.subscribe(data => {
      callback(data)
    }
    )
  }
}
