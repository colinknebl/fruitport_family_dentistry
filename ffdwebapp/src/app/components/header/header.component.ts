import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isHiding = true;

  constructor() { }

  ngOnInit() {
  }

  navAction(event) {
    if(this.isHiding) {
      this.isHiding = false;
    }
    else {
      this.isHiding = true;
    }
  }
}
