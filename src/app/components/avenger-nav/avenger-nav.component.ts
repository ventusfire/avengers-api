import { AfterViewInit, Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Subscription, debounceTime, distinctUntilChanged, fromEvent, map, startWith } from 'rxjs';
import { SearchAvengerServiceService } from 'src/app/services/search-avenger-service.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-avenger-nav',
  templateUrl: './avenger-nav.component.html',
  styleUrls: ['./avenger-nav.component.less']
})
export class AvengerNavComponent implements AfterViewInit, OnInit  {

  @ViewChild('search')
  inputSearch?: ElementRef

  filteredAvenger = [];
  filterSubscription?: Subscription;
  avengers = []
  searchAvengerTxt = ''
  displaySearch = true;
  none?:boolean;

  constructor(
    private searchAvengerServiceService:SearchAvengerServiceService,
    private router: Router
  ) { }
  ngOnInit() {
    this.searchAvengerServiceService.avengerObservable.subscribe()
  }

  ngAfterViewInit() {
    this.filterSubscription = fromEvent<any>(this.inputSearch?.nativeElement, 'keyup').pipe(map(data => data.target.value),
      startWith(''),
      debounceTime(800),
      distinctUntilChanged()
    ).subscribe( data => this.searchAvengerServiceService.emitAvenger(data))
  }

  noneEvent(){
    if(this.router.url.includes('management')){
      this.none = false;
      console.log(this.none)
    }
  }

  ngOnDestroy(){

  }

}
