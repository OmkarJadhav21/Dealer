import { Component, HostListener, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // count=600;
  // countDown;
  title = 'app';
  ngOnInit() {
    // this.countDown = Observable.timer(0,1000)
    // .take(this.count)
    // .map(()=> --this.count);
  }

  // @HostListener('mousemove', ['$event'])
  // onMousemove(event: MouseEvent) {
  //   this.count=600;
  // } 
  // @HostListener('document:keypress', ['$event'])
  // onkeybord(event: MouseEvent) {
  //   this.count=600;
  // } 
}
