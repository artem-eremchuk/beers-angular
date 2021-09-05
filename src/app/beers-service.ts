import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BeersService {
  constructor(private http: HttpClient) {}

  selectedBeer = {}

  public getBeersList(){
    return this.http.get('https://api.punkapi.com/v2/beers');
  }

  public setSelectedBeer(beer: any){
    this.selectedBeer = beer;
  }

  public getSelectedBeer(){
    return this.selectedBeer;
  }

}