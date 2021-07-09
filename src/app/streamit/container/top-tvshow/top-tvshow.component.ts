import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-tvshow',
  templateUrl: './top-tvshow.component.html',
  styleUrls: ['./top-tvshow.component.scss']
})
export class TopTvshowComponent implements OnInit {

  constructor(
    public route: Router
  ) { }

  ngOnInit(): void {
  }
  playNow(){
    this.route.navigateByUrl('/Streamit/play-movie');
  }

}
