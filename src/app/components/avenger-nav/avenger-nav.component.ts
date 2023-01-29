import { AfterViewInit, Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Subscription, debounceTime, distinctUntilChanged, fromEvent, map, startWith } from 'rxjs';
import { SearchAvengerServiceService } from 'src/app/services/search-avenger-service.service';

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

  constructor(
    private searchAvengerServiceService:SearchAvengerServiceService
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

  ngOnDestroy(){

  }




  /*searchAvenger(){
    this.filteredAvenger = this.avengers.filter((avenger) =>
      avenger.name.toLowerCase().includes(this.searchAvengerTxt.toLocaleLowerCase);
    )
  }*/

}
