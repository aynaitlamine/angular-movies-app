import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { TrendingsComponent } from './components/trendings/trendings.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { PopularComponent } from './components/popular/popular.component';
import { TvShowComponent } from './pages/tv-show/tv-show.component';
import { PeopleComponent } from './pages/people/people.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'tv', component: TvShowComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'details/movie/:id', component: MovieDetailsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    HomeComponent,
    TrendingsComponent,
    MoviesComponent,
    PopularComponent,
    TvShowComponent,
    PeopleComponent,
    MovieDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
