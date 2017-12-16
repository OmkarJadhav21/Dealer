import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DealServiceService {
  merid: Object = {}
  constructor(private http: Http) { }

  // linkhit = "http://123.252.131.54:4646/appStart/createDeal"
  linkhit = "http://localhost:8989/appStart/createDeal"
 
  addeDeal(adddeal, merchntId) {
    this.merid = { user: merchntId }
    var obj = Object.assign(adddeal, this.merid)
    console.log(obj);
    return this.http.post(this.linkhit + '/UserCreateDeal', obj).map(res => {
      return res;
    })
  }

}
