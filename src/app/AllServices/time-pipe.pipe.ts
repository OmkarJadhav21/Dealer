import { Pipe, PipeTransform } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Pipe({
  name: 'timePipe'
})
export class TimePipePipe implements PipeTransform {
  count=600;
  countDown;
  transform(value: number): string {
    this.countDown = Observable.timer(0,1000)
    .take(this.count)
    .map(()=> --this.count);
    const minutes: number = Math.floor(value / 60);
    return minutes + ':' + (value - minutes * 60);
  }

}
