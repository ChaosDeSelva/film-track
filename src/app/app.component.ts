import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'film-track';
  searchValue: string;
  selectedFilmId: string;

  getSearchResults(event: string) {
    this.searchValue = event;
  }

  getFilmId(event: string) {
    this.selectedFilmId = event;
  }
}
