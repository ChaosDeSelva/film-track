import { Component, Input, SimpleChanges, Output, EventEmitter  } from '@angular/core';
import { FilmService } from '../film.service';

export interface FilmSearchResponse {
  Response: string;
  Search: FilmSearch[];
  totalResults: number;
  Error: string;
}

export interface FilmSearch {
  Title: string;
  Year: number;
  imdbID: string;
  Type: string;
  Poster: string;
}

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent {
  @Input() filmSearchValue: string;
  @Output() clickViewFilm = new EventEmitter();

  public films: FilmSearch[];

  private pageIndex: number = 1;
  private pageIndexError: boolean = false;

  constructor(private _filmService: FilmService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.filmSearchValue && typeof changes.filmSearchValue.currentValue !== 'undefined') {
      this.getFilms(changes.filmSearchValue.currentValue, this.pageIndex);
    }
  }

  getFilms(filmSearchValue: string, pageIndex: number) {
   this._filmService.getFilms(filmSearchValue, pageIndex).subscribe(
      ( data: FilmSearchResponse ) => {
        if (data.Response === 'False') {
          alert(data.Error);
          this.pageIndexError = true;
          this.pageIndex--;
          return;
        }
        this.films = data.Search;
      },
      err => console.error(err)
    );
  }

  onViewFilm(imdbID: string) {
    this.clickViewFilm.emit(imdbID);
  }

  prevPage() {
    this.pageIndex--;
    this.getFilms(this.filmSearchValue, this.pageIndex);

    if(this.pageIndexError) {
      this.pageIndexError = false;
    }
  }

  nextPage() {
    this.pageIndex++;
    this.getFilms(this.filmSearchValue, this.pageIndex);
  }
}
