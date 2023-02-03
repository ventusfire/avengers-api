import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AvengersAPIService } from 'src/app/services/avengers-api.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.less']
})
export class ComicsComponent implements OnInit {

  comics: any;
  idAvenger: any;
  noDescription ='NO DESCRIPTION'

  constructor(
    private avengersAPIServiceh: AvengersAPIService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getComics();
  }

  getComics() {
    this.activatedRoute.params.subscribe(
      (data) => (this.idAvenger = data['id']));
    this.avengersAPIServiceh.getComics(this.idAvenger).subscribe(data => this.comics = data);
  }

}
