import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
  private em: EventEmitter<any>

  constructor(private router: Router,private http:Http) {
    this.em = new EventEmitter<any>();
  }
  loginSer(loginData) {
    if (loginData.Username == "admin" && loginData.Password == "admin") {
      this.em.emit({
        user: "admin",
        success: null
      })
      this.router.navigate(['/navbar'])
    }
    else {
      this.em.emit({
        success: "Username Or Password is Incorrect"
      })
    }
  }

  addCustservice(addcustomer){
    return this.http.post(`http://localhost:8080/addcustomer`,addcustomer).map(res=>{
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
