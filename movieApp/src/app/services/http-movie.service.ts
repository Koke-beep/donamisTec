import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ApiConfig } from '../models/apiConfig.model'
import { distinctUntilChanged, map, take } from 'rxjs/operators'
import { Movie, MovieList } from '../models/movie.model'
import { BehaviorSubject, Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable({
	providedIn: 'root'
})
export class HttpMovieService {
	private _imgUrl = new BehaviorSubject<string>('')

	$imgUrl!:Observable<string>
	apiUrl = environment.apiKey

	constructor(private _http: HttpClient) {
		this.$imgUrl = this._imgUrl.pipe(
			map(url => url),
			distinctUntilChanged()
		)
	}

	getApiConfiguration(){
		return this._http.get<ApiConfig>(`${this.apiUrl}/configuration`).pipe(
			map(({images}) => {
				this._imgUrl.next(`${images?.base_url}${images?.backdrop_sizes[0]}`)
			}),
			take(1)
		).subscribe()
	}

	getPopularFilms(){
		return this._http.get<MovieList>(`${this.apiUrl}/movie/popular`)
	}

	getMovieDetail(id: string){
		return this._http.get<Movie>(`${this.apiUrl}/movie/${id}`).pipe(
			map(res => {
				return { ...res, backdrop_path: `${this._imgUrl.value}${res.backdrop_path}`}
			})
		)
	}
}
