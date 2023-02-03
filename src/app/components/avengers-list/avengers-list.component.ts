import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-avengers-list',
  templateUrl: './avengers-list.component.html',
  styleUrls: ['./avengers-list.component.less']
})
export class AvengersListComponent {

  constructor() { }

  showButton = false;

  @HostListener('window:scroll')
  onWindowScroll(){
    const yOffSet = window.pageYOffset;
    const scrollTop = document.documentElement.scrollTop;
    this.showButton = (yOffSet || scrollTop) > 500;
  }

  onScrollTop(){
    document.documentElement.scrollTop = 0;
  }


}

