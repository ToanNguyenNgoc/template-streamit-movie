import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.scss']
})
export class UpdateMovieComponent implements OnInit {

  constructor(
    public route: Router
  ) { }

  ngOnInit(): void {
  }
  playNow(){
    this.route.navigateByUrl('/Streamit/play-movie')
  }

}
