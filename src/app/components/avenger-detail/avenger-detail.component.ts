import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { AvengersAPIService } from 'src/app/services/avengers-api.service';

@Component({
  selector: 'app-avenger-detail',
  templateUrl: './avenger-detail.component.html',
  styleUrls: ['./avenger-detail.component.less'],
})
export class AvengerDetailComponent implements OnInit {
  idAvenger: any;
  avenger: any;
  team = 'team';
  currentTeam: any;


  constructor(
    private avengersAPIServiceh: AvengersAPIService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAvengerId();
  }

  getAvengerId() {
    this.activatedRoute.params.subscribe(
      (data) => (this.idAvenger = data['id'])
    );
    parseInt(this.idAvenger);
    this.avengersAPIServiceh
      .getAvengerDetail(this.idAvenger)
      .subscribe((data) => {
        this.avenger = {
          name: data[0].name,
          description: data[0].description,
          path: data[0].thumbnail.path,
          extension: data[0].thumbnail.extension
        };
        if (this.avenger.description) {
          this.avenger.description;
        } else {
          this.avenger.description = 'Sin informacion';
        }
      });
  }

  addAvenger() {
    const data = localStorage.getItem(this.team) as string;
    this.currentTeam = JSON.parse(data) as string[];
    let maxHero = JSON.stringify(this.currentTeam).length
    const image = `${this.avenger.path}.${this.avenger.extension}`;
    console.log(maxHero)
    if(maxHero <= 384){
      if (this.currentTeam === null) {
        this.currentTeam = [image]
        localStorage.setItem(this.team, JSON.stringify(this.currentTeam));
      } else {
       this.currentTeam.push(image)
        this.avenger = localStorage.setItem(this.team, JSON.stringify(this.currentTeam));
        location.reload()
      }
    }else{
      alert('Tu equipo no puede tener mas de 6 Heroes')
    }
  }

}

