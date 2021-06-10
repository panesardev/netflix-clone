import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-row',
  template: `
    <div class="movies">
      <div *ngFor="let movie of movies">
        <div class="movie">
          <img loading="lazy" [src]="movie.poster_path ? imgUrl + movie.poster_path : ''" [alt]="movie.title">
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./movie-row.component.scss']
})
export class MovieRowComponent implements OnInit {

  @Input() movies: Movie[];

  imgUrl: string;

  constructor() { 
    this.imgUrl = environment.API_IMG_URL;
  }

  ngOnInit(): void {}

}
