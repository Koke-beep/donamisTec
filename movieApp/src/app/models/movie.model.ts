/* eslint-disable linebreak-style */

export interface MovieList {
  page: number,
  results: MovieResult[],
  total_results: number,
  total_pages: number
}

export interface MovieBase {
  adult: boolean,
  backdrop_path: string | null,
  poster_path: string | null,
  overview: string,
  release_date: string
  id: number
  original_title: string
  original_language: string
  title: string
  vote_count: number
  video: boolean
  vote_average: number
}

export interface MovieResult extends  MovieBase {
  genre_ids: number[],
  popularity: number,
}

export interface Movie extends MovieBase{
  belongs_to_collection: Collection[],
  burget: number,
  genres: {[key:string]: string}[],
  homepage: string,
  imdb_id: string,
  popularity: number,
  production_companies: Company[],
  production_countries: Country[],
  revenue: number,
  runtime: number,
  spoken_languages: {[key: string]: string}[],
  status: string,
  tagline: string,
}

export interface Collection {
  id: string,
  name: string,
  poster_path: string,
  backdrop_path: string
}

export interface Company {
  id: number,
  logo_path: string,
  name: string,
  origin_country: string
}

export interface Country {
  iso_3166_1: string,
  name: string
}
