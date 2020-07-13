import { Component, OnInit } from '@angular/core';
//import { Action } from 'src/app/model/actions';
import {Observable, interval} from "rxjs";
import {map, share, distinctUntilChanged} from "rxjs/operators";

const DEG_PAR_H = 360 / 12;
const DEG_PAR_MIN = 360 / 60;
const DEG_PAR_SEC = DEG_PAR_MIN;

@Component({
  selector: 'app-horloge',
  templateUrl: './horloge.component.html',
  styleUrls: ['./horloge.component.scss']
})
export class HorlogeComponent implements OnInit {
  
  private clock: Observable<Date>;
  heureDegrees: Observable<number>;
  minDegrees: Observable<number>;
  secDegrees: Observable<number>;


  constructor() {
    this.clock = interval(1000)
    .pipe(
        map(tick => new Date()),
        share()
    );  

    this.heureDegrees = this.clock.pipe(
      map(date => DEG_PAR_H * (date.getHours() % 12) - 90),
      distinctUntilChanged()
    );
    this.minDegrees = this.clock.pipe(
      map(date => DEG_PAR_MIN * date.getMinutes() - 90),
      distinctUntilChanged()
    );
    this.secDegrees = this.clock.pipe(
      map(date => DEG_PAR_SEC * date.getUTCSeconds() - 90),
      distinctUntilChanged()
    );
   }

  ngOnInit() {
  }

}
