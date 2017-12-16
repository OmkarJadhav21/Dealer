import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApproveService {
  // linkhit = "http://123.252.131.54:4646/dealdool/user"

  linkhit = "http://localhost:8989/dealdool/approve"

  constructor(private router: Router,
    private http: Http) { }

    
  approveMerchant(val,id) {
    var aprvData={
      'merchantId':id,
      'merchantApproved':val
    }
    // console.log(aprvData);
    return this.http.post(this.linkhit + '/ApproveMerchant',aprvData).map(res=>{
      return res;
    })
  }
  
  deleteMerchant(id){
    return this.http.get(this.linkhit + `/removeMerchant/${id}`).map(res=>{
      return res;
    })
  }

}
