/* eslint-disable linebreak-style */
import { MovieResult } from './movie.model'

export default interface AppState {
  imgUrlConfig: string | null,
  movies: MovieResult[] | null,
  selectedFilm: MovieResult | null
}


