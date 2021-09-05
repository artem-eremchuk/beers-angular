import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {AutoCompleteModule} from 'primeng/autocomplete';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BeersListComponent } from './beers-list/beers-list.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/beers', pathMatch: 'full'},
  {path: 'beers', component: BeersListComponent},
  {path: 'beers/:id', component: BeerDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BeersListComponent,
    BeerDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AutoCompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
