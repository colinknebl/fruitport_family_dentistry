import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-special-event-popup',
  templateUrl: './special-event-popup.component.html',
  styleUrls: ['./special-event-popup.component.scss']
})
export class SpecialEventPopupComponent implements OnInit {

  showPopUp = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.showPopUp = true;
    }, 5000);
  }

  closePopUp() {
    this.showPopUp ? this.showPopUp = false : this.showPopUp = true;
  }

}
