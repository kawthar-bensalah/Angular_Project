import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() poster_path: string;
  @Input() title: string;
  @Input() release_date : number;
  @Input() original_language: string;
  @Input() vote_average: number;
  @Input() overview: number;



  constructor() { }

  ngOnInit() {
  }

}