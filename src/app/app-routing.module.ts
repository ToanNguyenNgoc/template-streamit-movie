import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviePlayComponent } from './streamit/movie-play/movie-play.component';
import { StreamitComponent } from './streamit/streamit.component';

const routes: Routes = [
  {path:'', component: StreamitComponent},
  {path:'Streamit/play-movie', component: MoviePlayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
