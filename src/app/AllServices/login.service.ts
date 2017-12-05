import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  private em: EventEmitter<any>

  constructor(private router: Router) {
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

  lgncllbk(callback: any) {
    this.em.subscribe(data => {
      callback(data)
    }
    )
  }
}
