import { HttpClient, HttpParams } from '@angular/common/http';
import { HostListener, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Team } from '../models/team';

const api = `${environment.url_api}/characters?ts=1&apikey=${environment.public_Key}&hash=${environment.hash}`

@Injectable({
  providedIn: 'root'
})
export class SearchAvengerServiceService {

  currentTeam: [] = [];
  team = 'team';
  hero: any;


  private avengerSubject: BehaviorSubject<string>
  public avengerObservable: Observable<string>

  constructor( private http:HttpClient) {

    this.avengerSubject = new BehaviorSubject<string>('');
    this.avengerObservable = this.avengerSubject.asObservable();

  }

  emitAvenger(avenger: string){
    this.avengerSubject.next(avenger)
  }

  getTeam() {
    if(localStorage.getItem(this.team) === null) {
      this.currentTeam = [];
    } else {
      this.currentTeam = JSON.parse(localStorage.getItem(this.team) as string);
    }
     return this.currentTeam;
  }


  delteLocalStrorageHero(position:number){
      for(let i = 0; i < this.currentTeam.length; i++){
        if(position == this.currentTeam[i]){
          this.currentTeam.splice(i, 1);
          localStorage.setItem('team', JSON.stringify(this.currentTeam))
        }
      }
  }







}
