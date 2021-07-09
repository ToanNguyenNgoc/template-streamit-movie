import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StreamitComponent } from './streamit/streamit.component';
import { HeaderComponent } from './streamit/header/header.component';
import { BannerComponent } from './streamit/banner/banner.component';
import { ContainerComponent } from './streamit/container/container.component';
import { FooterComponent } from './streamit/footer/footer.component';
import { LatesMovieComponent } from './streamit/container/lates-movie/lates-movie.component';
import { UpdateMovieComponent } from './streamit/container/update-movie/update-movie.component';
import { TopTvshowComponent } from './streamit/container/top-tvshow/top-tvshow.component';
import { MoviePlayComponent } from './streamit/movie-play/movie-play.component';

@NgModule({
  declarations: [
    AppComponent,
    StreamitComponent,
    HeaderComponent,
    BannerComponent,
    ContainerComponent,
    FooterComponent,
    LatesMovieComponent,
    UpdateMovieComponent,
    TopTvshowComponent,
    MoviePlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
