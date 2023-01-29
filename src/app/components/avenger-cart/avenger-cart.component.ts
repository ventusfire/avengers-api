import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AvengersAPIService } from 'src/app/services/avengers-api.service';
import { SearchAvengerServiceService } from 'src/app/services/search-avenger-service.service';

@Component({
  selector: 'app-avenger-cart',
  templateUrl: './avenger-cart.component.html',
  styleUrls: ['./avenger-cart.component.less']
})
export class AvengerCartComponent implements OnInit {

  avengers:any = [];
  rta?: any
  searchTxt?:string
  test?:any
  filterSubscription?: Subscription;
  offset = 20;


  constructor(
    private avengersAPIService: AvengersAPIService,
    private searchAvengerServiceService:SearchAvengerServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.avengersAssemble()
    this.searchAvengerServiceService.avengerObservable.subscribe(data => this.filter(data))
    this.searchAvengerServiceService.avengerObservable.subscribe( data => {
      this.filter(data)
    })
  }

  avengersAssemble(){
    this.avengersAPIService.getAvenger().subscribe(data => this.avengers = data);
  }

  avengerDtl(id: string){
    this.router.navigate(['/character/', id]);
  }

  infiniteScroll(){
    const limit = 20;
    this.avengersAPIService.pagination(limit,this.offset).subscribe(data => {
      this.avengers.push(...data);
    });
    this.offset += 20;
  }


  filter(text:string){
    this.searchTxt += text;
    if (text !== '' && text.length > 1) {
      this.search(text)
    }else{
      this.avengersAssemble();
    }
  }

  search(startWith:string){
    this.avengersAPIService.findAvengerStartWith(startWith).subscribe(data => {
      this.avengers = data
    });
  }
}
