import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { distinctUntilChanged, map, take } from 'rxjs/operators'
import { Movie, MovieResult } from '../models/movie.model'
import AppState from '../models/state.model'
import { HttpMovieService } from './http-movie.service'

@Injectable({
	providedIn: 'root'
})
export class AppStateService {
	private _appState: BehaviorSubject<AppState> = new BehaviorSubject({
		imgUrlConfig: null,
		movies: null,
		selectedFilm: null
	} as AppState)

	public readonly $imgUrlConfig!: Observable<string>
	public readonly $movies!: Observable<MovieResult[]>
	public readonly $selectedFilm!: Observable<Movie>
	public readonly $appState: Observable<AppState> = this._appState.asObservable()

	constructor(private _httpMovie: HttpMovieService) {
		this.$imgUrlConfig = this._appState.pipe(
			map(({imgUrlConfig}) => imgUrlConfig as string),
			distinctUntilChanged()
		)
		this.$movies = this._appState.pipe(
			map(({movies}) => movies as MovieResult[] ),
			distinctUntilChanged()
		)
		this.$selectedFilm = this._appState.pipe(
			map(({selectedFilm}) => selectedFilm as Movie ),
			distinctUntilChanged()
		)

		this.getMoviesList()
	}

	getMoviesList(){
		this._httpMovie.getPopularFilms().pipe(
			take(1)
		).subscribe(({results}) => {
			this._appState.next({...this._appState.value, movies: results})
		})
	}

	getMovieDetail(id: string){
		this._httpMovie.getMovieDetail(id).pipe(
			map(res => {
				this._appState.next({...this._appState.value, selectedFilm: {...res}})
			}),
			take(1)
		).subscribe()
	}

	removeMovieSelected(){
		this._appState.next({...this._appState.value, selectedFilm: null})
	}
}

