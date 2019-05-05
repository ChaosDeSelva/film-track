import { Component, Input, SimpleChanges } from '@angular/core';
import { FilmService } from '../film.service';

export interface Film {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: number;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: FilmRating[];
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: number;
  imdbID: string;
  imdbRating: number;
  imdbVotes: number;
}

export interface FilmRating {
  Source: string;
  Value: string;
}

@Component({
  selector: 'app-film-view',
  templateUrl: './film-view.component.html',
  styleUrls: ['./film-view.component.scss']
})
export class FilmViewComponent {
  @Input() activeFilmId: string;

  public film: Film;

  constructor(private _filmService: FilmService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.activeFilmId && typeof changes.activeFilmId.currentValue !== 'undefined') {
      this.getFilm(changes.activeFilmId.currentValue);
    }
  }

  getFilm(filmId: string) {
   this._filmService.getFilm(filmId).subscribe(
      ( data: Film ) => { this.film = data; },
      err => console.error(err)
    );
  }

}
