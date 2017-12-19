import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DealServiceService } from '../../AllServices/deal-service.service';

@Component({
  selector: 'app-view-deal',
  templateUrl: './view-deal.component.html',
  styleUrls: ['./view-deal.component.css']
})
export class ViewDealComponent implements OnInit {

  constructor(private router: Router,
    private dealSer: DealServiceService) { }

  ngOnInit() {
    this.dealSer.getAllDeal().subscribe(data => {
      console.log(data)
    })
  }

}
