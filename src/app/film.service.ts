import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http:HttpClient) {}

  getFilms(filmSearchValue: string, pageIndex: number) {
    let params = new HttpParams()
    .append('apikey', environment.apiKey)
    .append('s', filmSearchValue)
    .append('page', pageIndex.toString());

    return this.http.get(environment.apiUrl, { params: params });
  }

  getFilm(filmId: string) {
    let params = new HttpParams().append('apikey', environment.apiKey).append('i', filmId);

    return this.http.get(environment.apiUrl, { params: params });
  }
}
