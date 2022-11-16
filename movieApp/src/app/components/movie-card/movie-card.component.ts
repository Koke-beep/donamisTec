import { Component, OnInit } from '@angular/core'
import {HttpClient } from '@angular/common/http'

@Component({
	selector: 'app-movie-card',
	templateUrl: './movie-card.component.html',
	styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

	imgUrl = 'http://image.tmdb.org/t/p/w500/Ach0puWzxuO2imh1yWEUK7CGsx.jpg'

	constructor(private _http: HttpClient) { }

	ngOnInit(): void {}

}
