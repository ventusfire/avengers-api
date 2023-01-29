import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AvengersAPIService } from 'src/app/services/avengers-api.service';

@Component({
  selector: 'app-avenger-detail',
  templateUrl: './avenger-detail.component.html',
  styleUrls: ['./avenger-detail.component.less']
})
export class AvengerDetailComponent implements OnInit {

  idAvenger:any;
  avenger:any;
  comics:any;

  constructor(
    private avengersAPIServiceh:AvengersAPIService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getAvengerId()
   // this.getComics()
  }

  getComics(){
    this.comics = this.avengersAPIServiceh.getComics(this.idAvenger)
  }

  getAvengerId(){
    this.activatedRoute.params.subscribe( data =>
      this.idAvenger = data['id']
    );
    console.log(this.idAvenger)
    parseInt(this.idAvenger)
    this.avengersAPIServiceh.getAvengerDetail(this.idAvenger).subscribe(
      (data) => {
        this.avenger={
          name:data[0].name,
          description:data[0].description,
          path:data[0].thumbnail.path,
          extension:data[0].thumbnail.extension,
          urls:data[0].urls[0].url,
          comic:data[0].comics.items[0],
          comicName:data[0].comics.items[1]

        };
        if (this.avenger.description) {
          this.avenger.description
        } else {
          this.avenger.description = 'Sin informacion'
        }
      }
    )
  }

}
