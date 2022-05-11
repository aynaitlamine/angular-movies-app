import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { TrendingsComponent } from './components/trendings/trendings.component';
import { CardComponent } from './components/card/card.component';
import { ScrollItemComponent } from './components/scroll-item/scroll-item.component';
import { PopularMoviesComponent } from './components/popular-movies/popular-movies.component';
import { PopularTvShowsComponent } from './components/popular-tv-shows/popular-tv-shows.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SearchComponent, HomeComponent, TrendingsComponent, CardComponent, ScrollItemComponent, PopularMoviesComponent, PopularTvShowsComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
