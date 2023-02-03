import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Team } from 'src/app/models/team';
import { TeamManagement } from 'src/app/models/team-management';
import { SearchAvengerServiceService } from 'src/app/services/search-avenger-service.service';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-team-management',
  templateUrl: './team-management.component.html',
  styleUrls: ['./team-management.component.less']
})
export class TeamManagementComponent implements OnInit {

  teams:any;
  name = ''
  description =''
  teamCom?: TeamManagement[];

  constructor(
    private searchAvengerServiceService: SearchAvengerServiceService
  ) { }

  ngOnInit(): void {
    this.teams = this.searchAvengerServiceService.getTeam()
    register()
  }

  deleteHero(position:number){
    if(confirm('Seguro que quieres eliminar este Heroe?')){
      this.searchAvengerServiceService.delteLocalStrorageHero(position)
    }
  }
  saveTeam(name:string, description:string, team?: Team){
    localStorage.getItem('complete')
  }

}
