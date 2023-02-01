import { Component, OnInit, } from '@angular/core';
import { SearchAvengerServiceService } from 'src/app/services/search-avenger-service.service';


@Component({
  selector: 'app-you-avengers-team',
  templateUrl: './you-avengers-team.component.html',
  styleUrls: ['./you-avengers-team.component.less']
})
export class YouAvengersTeamComponent implements OnInit {

  teamAvengers:any;

  constructor(
    private searchAvengerServiceService: SearchAvengerServiceService
  ) { }

  ngOnInit(): void {
    this.teamAvengers = this.searchAvengerServiceService.getTeam();
    console.log(this.teamAvengers)
  }

  deleteHero(position:number){
    if(confirm('Seguro que quieres eliminar este Heroe?')){
      this.searchAvengerServiceService.delteLocalStrorageHero(position)
    }
  }

}
