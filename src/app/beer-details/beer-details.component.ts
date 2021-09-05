import { Component, OnInit} from '@angular/core';
import { BeersService } from '../beers-service'; 

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {
  constructor(private beersService: BeersService){}
  
  selectedBeer: any

  ngOnInit() {
    this.selectedBeer = this.beersService.getSelectedBeer();
  }

  showSelectedBeer(){
    console.log(this.selectedBeer)
  }
}
