import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ApiConfig } from '../models/apiConfig.model'
import { distinctUntilChanged, map } from 'rxjs/operators'
import { Movie } from '../models/movie.model'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
	providedIn: 'root'
})
export class HttpMovieService {
	private _imgUrl = new BehaviorSubject<string>('')

	$imgUrl!:Observable<string>
	apiUrl = 'https://api.themoviedb.org/3/'
	apiKey = 'api_key=c6aeee577586ba38e487b74dfede5deb'

	constructor(private _http: HttpClient) {
		this.$imgUrl = this._imgUrl.pipe(
			map(url => url),
			distinctUntilChanged()
		)
	}

	getApiConfiguration(){
		return this._http.get<ApiConfig>(`${this.apiUrl}configuration`).pipe(
			map(({images}) => {
				this._imgUrl.next(`${images?.base_url}${images?.backdrop_sizes[0]}`)
			}),
			distinctUntilChanged()
		).subscribe()
	}

	getPopularFilms(){
		return this._http.get<Movie>(`${this.apiUrl}movie/popular`)
	}
}
