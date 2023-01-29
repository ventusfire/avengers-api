import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

const api = `${environment.url_api}/characters?ts=1&apikey=${environment.public_Key}&hash=${environment.hash}`

@Injectable({
  providedIn: 'root'
})
export class SearchAvengerServiceService {

  private avengerSubject: BehaviorSubject<string>
  public avengerObservable: Observable<string>

  constructor( private http:HttpClient) {

    this.avengerSubject = new BehaviorSubject<string>('')
    this.avengerObservable = this.avengerSubject.asObservable()

  }

  emitAvenger(avenger: string){
    this.avengerSubject.next(avenger)
  }


  


}
