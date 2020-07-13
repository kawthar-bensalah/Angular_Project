import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../services/movies/movies.service';


function random(x:number,y:number): number {
  return Math.floor(Math.random() * (y - x + 1)) + x;
} 

@Component({
  selector: 'app-box-office',
  templateUrl: './box-office.component.html',
  styleUrls: ['./box-office.component.scss'],

})



export class BoxOfficeComponent implements OnInit {

  data: any;
  r1: number;
  r2: number;
  r3: number;
  r4: number;
  r5: number;
  r6: number;
  r7: number;


  constructor(private $ser: MoviesService) { 
    

  }


  
  // customize default values of carousels used by this component tree


  ngOnInit() {
    this.$ser.getData().subscribe(
      s => this.data = s,
      error => alert('error !!')



    );

    this.r1= random(0,2);
    this.r2= random(3,5);
    this.r3= random(6,8);
    this.r4= random(9,10);
    this.r5= random(11,13);
    this.r6= random(14,16);
    this.r7= random(17,19);

 
  
  }

  



}
