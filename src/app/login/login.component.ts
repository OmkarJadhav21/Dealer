import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../AllServices/login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginSuccess;
  user;
  fun = false;
  funp = false;
  constructor(private lgnSer: LoginService,
    private router: Router) { }
  ngOnInit() {
    // this.lgnSer.lgncllbk(dt => {
    //   this.user = dt.user;
    //   this.loginSuccess = dt.success;
    // })
  }
  login(loginForm: NgForm) {
    this.lgnSer.loginSer(loginForm.value).subscribe(data=>{
        this.router.navigate(['/merchantList'])
    });
  }
  placeholderFun(z: string) {
    if (z == "u") {
      this.fun = true
      this.funp = false;
    } else if (z == "p") {
      this.funp = true
      this.fun = false
    }
  }
  placeholderF(z: string) {
    if (z == "u") {
      this.fun = true
      this.funp = false;
    } else if (z == "p") {
      this.funp = true
      this.fun = false
    }
  }
  withFacebook(){
    this.lgnSer.facebookLogin()
  }
}
