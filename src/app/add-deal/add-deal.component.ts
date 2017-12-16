import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DealServiceService } from '../AllServices/deal-service.service';

import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-add-deal',
  templateUrl: './add-deal.component.html',
  styleUrls: ['./add-deal.component.css']
})
export class AddDealComponent implements OnInit {
  addDealFrm: FormGroup
  check;
  merchntId;
  countDown;
  count = 60;
  constructor(private fb: FormBuilder,
    private dealSer: DealServiceService,
    public actRt: ActivatedRoute) { 
      this.countDown = Observable.timer(0,1000)
      .take(this.count)
      .map(()=> --this.count);
    }

  ngOnInit() {
    this.actRt.params.subscribe(params => {
      this.merchntId = params['id']
    })

    this.addDealFrm = this.fb.group({
      actualPrice: ['', Validators.required],
      discountedPrice: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      address: ['', Validators.required],
      mobileNo: ['', Validators.required]
    })
  }
  addDeal() {
    this.dealSer.addeDeal(this.addDealFrm.value,this.merchntId).subscribe(data => {
      console.log(data.json());
    })
  }
  changbox(val) {
    this.check = val
    console.log(val);
  }
}
