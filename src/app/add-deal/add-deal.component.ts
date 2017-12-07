import { FormGroup,FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-deal',
  templateUrl: './add-deal.component.html',
  styleUrls: ['./add-deal.component.css']
})
export class AddDealComponent implements OnInit {
addDealFrm:FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.addDealFrm=this.fb.group({

    })
  }
addDeal(){

}
}
