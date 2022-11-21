/* eslint-disable linebreak-style */
import { Movie, MovieResult } from './movie.model'

export default interface AppState {
  imgUrlConfig: string | null,
  movies: MovieResult[] | null,
  selectedFilm: Movie | null
}


