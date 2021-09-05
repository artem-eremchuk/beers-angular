import { Component, OnInit } from '@angular/core';
import { BeersService } from '../beers-service'; 

@Component({
  selector: 'app-beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.css']
})
export class BeersListComponent implements OnInit {

  constructor(private beersService: BeersService){}

  beersList = []
  favorites: any = []

  ngOnInit(): void {
    this.beersService.getBeersList().subscribe((response: any) => {
      this.beersList = response;
    })

    const favoriteBeers: any = 
      localStorage.getItem('favoritBeers');

    this.favorites = JSON.parse(favoriteBeers);
  }

  getMatch(beer: any){
    return this.favorites
      .some((favorite: any) => favorite.id === beer.id)
  }

  onSelectedBeer(beer: any){
    this.beersService.setSelectedBeer(beer);
  }

  addToFavorites(event:any, beer:any){
    const newFovirites = this.favorites;
    const {id} = beer;
    const checked = event.target.checked;

    if (!newFovirites.length){
      newFovirites.push({id, checked});
    } else {
      const index = newFovirites.findIndex((favorite: any) => favorite.id === id);

      if (index === -1){
        newFovirites.push({id, checked});
      } else {
        this.favorites = newFovirites.filter((favorite: any) => favorite.id !== id)
      }
    }

    localStorage
      .setItem('favoritBeers', JSON.stringify(this.favorites));
  }
}
