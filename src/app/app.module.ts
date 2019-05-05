import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmListComponent } from './film-list/film-list.component';
import { SearchComponent } from './search/search.component';
import { FilmViewComponent } from './film-view/film-view.component';

import { MatButtonModule, MatInputModule } from '@angular/material';

import { FilmService } from './film.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    SearchComponent,
    FilmViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
