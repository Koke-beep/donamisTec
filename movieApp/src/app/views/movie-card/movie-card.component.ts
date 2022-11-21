/* eslint-disable no-mixed-spaces-and-tabs */
import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { AppStateService } from 'src/app/services/app-state.service'
import { Movie } from 'src/app/models/movie.model'

@Component({
	selector: 'app-movie-card',
	templateUrl: './movie-card.component.html',
	styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
	$movie!: Observable<Movie>

	constructor(private _appState: AppStateService) { }

	ngOnInit(): void {
		this.$movie = this._appState.$selectedFilm
	}

	languagesMovie(languages: {[key: string]: string}[]): string{
		let movieLanguages = ''

		languages.forEach(({english_name}, index) => {
			if(index === 0 && english_name){
				movieLanguages = english_name
			}
			else if(languages[index + 1] !== undefined){
				movieLanguages = movieLanguages.concat(' / ', english_name)
			}
		})

		return movieLanguages
	}

	calculateStars(average: number): boolean[]{
		const wholeAverage = Math.floor(average)
		const stars = [2,4,6,8,10].reduce((curr, act) => {
			if(wholeAverage >= act){
				return [...curr, true]
			}else{
				return [...curr, false]
			}
		},[] as boolean[])

		return stars
	}
}
