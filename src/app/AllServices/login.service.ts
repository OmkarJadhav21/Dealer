import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take'; 

@Injectable()
export class LoginService {
  email: String;
  mobileNo: String;
  location: String;
  password: String;

  private em: EventEmitter<any>
  // linkhit = "http://123.252.131.54:4646/dealdool/user"
  linkhit = "http://localhost:8989/dealdool/user/"
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
      console.log(res);
      return res;
    })
  }
  merchantImg(file: File): Observable<any> {
    let formdata: FormData = new FormData();
    formdata.append('image', file);
    return this.http.post(this.linkhit + '/imageUpload', formdata).map(res => {
      return res;
    });
  }
  getById(id) {
    return this.http.get(this.linkhit + `/getUserById/${id}`).map(res => {
      return res;
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
