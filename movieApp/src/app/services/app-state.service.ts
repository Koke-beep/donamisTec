import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { distinctUntilChanged, map } from 'rxjs/operators'
import { ApiConfig } from '../models/apiConfig.model'
import { MovieResult } from '../models/movie.model'
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


	public $imgUrlConfig!: Observable<string>
	public $movies!: Observable<MovieResult[]>
	public $selectedFilm!: Observable<MovieResult>

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
			map(({selectedFilm}) => selectedFilm as MovieResult ),
			distinctUntilChanged()
		)

		this.initializeMoviesData()
	}

	initializeMoviesData(){
		this._httpMovie.getPopularFilms().subscribe(({results}) => {
			this._appState.next({...this._appState.value, movies: results})
		})
	}
}

// getApiConfiguration(){
// 	this._http.get<ApiConfig>('https://api.themoviedb.org/3/configuration?api_key=c6aeee577586ba38e487b74dfede5deb').subscribe(response => {
// 		this._appState.next({...this._appState.value, imgUrlConfig: {...response}})
// 	})

// }
