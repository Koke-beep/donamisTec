/* eslint-disable linebreak-style */
import { of } from 'rxjs'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { AppComponent } from '../app.component'
import { HttpMovieService } from './http-movie.service'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { Movie, MovieList } from '../models/movie.model'

const resultExpected: MovieList = {
	page: 3,
	results: [
		{
			adult: false,
			backdrop_path: '/naNXYdBzTEb1KwOdi1RbBkM9Zv1.jpg',
			genre_ids: [
				27,
				53
			],
			id: 420634,
			original_language: 'en',
			original_title: 'Terrifier',
			overview: 'On Halloween night, a young woman finds herself as the obsession of a sadistic murderer known as Art the Clown.',
			popularity: 830.069,
			poster_path: '/nfRlQCl590F30L37aihuqBGBvaO.jpg',
			release_date: '2016-03-15',
			title: 'Terrifier',
			video: false,
			vote_average: 6.6,
			vote_count: 1025
		}
	],
	total_pages: 35983,
	total_results: 719644
}

describe('HttpMovieService', ()=> {
	let service!: HttpMovieService
	let httpController!: HttpTestingController

	beforeEach(()=> {
		TestBed.configureTestingModule({
			imports: [ HttpClientTestingModule ]
		})

		service = TestBed.inject(HttpMovieService)
		httpController = TestBed.inject(HttpTestingController)
	})

	it('should call getPopularFilms and return MovieList object', ()=> {

		service.getPopularFilms().subscribe(res => {
			expect(res).toEqual(resultExpected)
		})
		const req = httpController.expectOne({
			method: 'GET',
			url: 'https://api.themoviedb.org/3/movie/popular'
		})

		req.flush(resultExpected)
	})
})
