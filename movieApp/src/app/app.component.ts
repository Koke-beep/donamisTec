import { Component } from '@angular/core'
import { HttpMovieService } from './services/http-movie.service'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(private _httpMovie: HttpMovieService){
		this._httpMovie.getApiConfiguration()
	}
}
