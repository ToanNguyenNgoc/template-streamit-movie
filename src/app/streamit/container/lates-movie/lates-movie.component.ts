import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lates-movie',
  templateUrl: './lates-movie.component.html',
  styleUrls: ['./lates-movie.component.scss']
})
export class LatesMovieComponent implements OnInit {

  constructor(
    public route: Router
  ) { }

  ngOnInit(): void {
  }
  playNow(){
    this.route.navigateByUrl('/Streamit/play-movie')
  }

}
