import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class MoviesService {
    constructor(private $http: HttpClient) {

    }

    getData(): Observable<any> {
        return this.$http.get('https://api.themoviedb.org/3/trending/movie/day?api_key=c0f5a0330dd598b05d1f1b62ad42d199');
  }
}
