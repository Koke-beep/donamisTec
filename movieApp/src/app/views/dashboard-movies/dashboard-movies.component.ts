import { Component, OnDestroy, OnInit } from '@angular/core'
import { AppStateService } from 'src/app/services/app-state.service'
import { distinctUntilChanged, filter } from 'rxjs/operators'
import { MovieResult } from 'src/app/models/movie.model'
import { Observable, Subscription } from 'rxjs'
import { HttpMovieService } from 'src/app/services/http-movie.service'

@Component({
	selector: 'app-dashboard-movies',
	templateUrl: './dashboard-movies.component.html',
	styleUrls: ['./dashboard-movies.component.scss']
})
export class DashboardMoviesComponent implements OnInit, OnDestroy {

	urlImgSubscribe!: Subscription
	moviesList!: Observable<MovieResult[]>
	imgUrl!: string

	constructor(private _appState: AppStateService, private _httpMovie: HttpMovieService) {}

	ngOnInit(): void {
		this.moviesList = this._appState.$movies

		this.urlImgSubscribe = this._httpMovie.$imgUrl.subscribe(url => {
			this.imgUrl = url
		})
		// this.urlImgSubscribe = this._appState.$imgUrlConfig.subscribe(res=>{
		// 	debugger
		// 	console.log(res)
		// })
		// this.movieSubscribe = this._appState.$movies.pipe(
		// 	filter(movies => movies?.length > 0 ),
		// 	distinctUntilChanged()
		// ).subscribe(movies => {
		// 	this.moviesList = movies
		// })
	}

	ngOnDestroy(): void {
		this.urlImgSubscribe.unsubscribe()
	}

	compactUrlImg(path: string){
		return `${this.imgUrl}${path}`
	}

}
