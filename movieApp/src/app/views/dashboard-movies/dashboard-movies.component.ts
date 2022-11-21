import { Component, OnInit } from '@angular/core'
import { AppStateService } from 'src/app/services/app-state.service'
import { MovieResult } from 'src/app/models/movie.model'
import { Observable, Subscription, throwError } from 'rxjs'
import { HttpMovieService } from 'src/app/services/http-movie.service'
import { Router } from '@angular/router'
import { take, filter } from 'rxjs/operators'

@Component({
	selector: 'app-dashboard-movies',
	templateUrl: './dashboard-movies.component.html',
	styleUrls: ['./dashboard-movies.component.scss']
})
export class DashboardMoviesComponent implements OnInit {

	urlImgSubscribe!: Subscription
	moviesList!: Observable<MovieResult[]>
	imgUrl!: string

	constructor(
    private _appState: AppStateService,
    private _httpMovie: HttpMovieService,
    private _router: Router
	) {}

	ngOnInit(): void {
		this.moviesList = this._appState.$movies

		this._httpMovie.$imgUrl.pipe(
			filter(url => url.length > 0),
			take(1)
		).subscribe(url => {
			this.imgUrl = url
		})
	}

	compactUrlImg(path: string): string{
		return `${this.imgUrl}${path}`
	}

	redirectToDetail(id: number){
		this._appState.removeMovieSelected()
		this._appState.getMovieDetail(id.toString())
		this._router.navigate(['/detail', id ])
	}
}
