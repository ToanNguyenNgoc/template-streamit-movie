import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor(
    public route: Router
  ) { }

  ngOnInit(): void {
  }
  playNow(){
    this.route.navigateByUrl('/Streamit/play-movie')
  }

}
