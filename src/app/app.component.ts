import { Component } from '@angular/core';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  originals$ = this.movies.originals(); 
  trending$ = this.movies.trending();
  action$ = this.movies.action();
  horror$ = this.movies.horror();
  topRated$ = this.movies.topRated();
  romance$ = this.movies.romance();
  comedy$ = this.movies.comedy();

  constructor(private movies: MovieService) {}
}
