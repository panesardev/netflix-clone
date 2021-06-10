import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Movie, MovieResponse } from '../interfaces/movie';

@Injectable({ providedIn: 'root' })
export class MovieService {

	private trendingUrl = `${environment.API_URL}/trending/movie/day?api_key=${environment.API_KEY}`;
	private popularUrl = `${environment.API_URL}/movie/popular?api_key=${environment.API_KEY}&language=en-US&page=1`;
	private originalsUrl = `${environment.API_URL}/discover/tv?api_key=${environment.API_KEY}&with_networks=213`;
	private topRatedUrl = `${environment.API_URL}/movie/top_rated?api_key=${environment.API_KEY}&language=en-US`;
	private actionUrl = `${environment.API_URL}/discover/movie?api_key=${environment.API_KEY}&with_genres=28`;
	private comedyUrl = `${environment.API_URL}/discover/movie?api_key=${environment.API_KEY}&with_genres=35`;
	private horrorUrl = `${environment.API_URL}/discover/movie?api_key=${environment.API_KEY}&with_genres=27`;
	private romanceUrl = `${environment.API_URL}/discover/movie?api_key=${environment.API_KEY}&with_genres=10749`;

  constructor(private http: HttpClient) {}

	originals(): Observable<Movie[]> {
		return this.http.get<MovieResponse>(this.originalsUrl).pipe(
			map(response => response.results)
		);
	}

	trending(): Observable<Movie[]> {
		return this.http.get<MovieResponse>(this.trendingUrl).pipe(
			map(response => response.results)
		);
	}

	topRated(): Observable<Movie[]> {
		return this.http.get<MovieResponse>(this.topRatedUrl).pipe(
			map(response => response.results)
		);
	}
	
	action(): Observable<Movie[]> {
		return this.http.get<MovieResponse>(this.actionUrl).pipe(
			map(response => response.results)
		);
	}

	comedy(): Observable<Movie[]> {
		return this.http.get<MovieResponse>(this.comedyUrl).pipe(
			map(response => response.results)
		);
	}
	
	horror(): Observable<Movie[]> {
		return this.http.get<MovieResponse>(this.horrorUrl).pipe(
			map(response => response.results)
		);
	}

	romance(): Observable<Movie[]> {
		return this.http.get<MovieResponse>(this.romanceUrl).pipe(
			map(response => response.results)
		);
	}
}
