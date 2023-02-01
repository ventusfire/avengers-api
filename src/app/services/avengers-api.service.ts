import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

const api = `${environment.url_api}/characters?ts=1&apikey=${environment.public_Key}&hash=${environment.hash}`

@Injectable({
  providedIn: 'root'
})
export class AvengersAPIService {

  constructor(
    private http: HttpClient
  ) { }

  ramdomPetition(){
  }

  pagination(limit:number, offset:number){
    let params = new HttpParams;
    params.set('limit', limit);
    params.set('offset', offset);

    return this.http.get(api, { params: { limit, offset } }).pipe(map((data:any) => data.data.results));
  }

  getAvenger():Observable<any>{
    return this.http.get(api).pipe(map((data:any) => data.data.results));
  }

  getAvengerDetail(id: number){
    return this.http.get(`${environment.url_api}/characters/${id}?ts=1&apikey=${environment.public_Key}&hash=${environment.hash}`).pipe(map((data:any) =>
    data.data.results));
  }

  getComics(id: number){
    return this.http.get(`${environment.url_api}/characters/${id}/comics?ts=1&apikey=${environment.public_Key}&hash=${environment.hash}`).pipe(
      map((data:any) => data.data.results)
    );
  }

  public findAvengerStartWith(startWith: string){
    return this.http.get(`${environment.url_api}/characters?ts=1&apikey=${environment.public_Key}&hash=${environment.hash}&nameStartsWith=${startWith}`).pipe(map((data:any) => data.data.results))
  }
}
