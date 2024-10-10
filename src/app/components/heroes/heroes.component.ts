import { Component } from '@angular/core';
import { HeroesService , Heroe } from 'src/app/servicios/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  
})
export class HeroesComponent {


  heroes: Heroe [] = [];

  constructor( private _heoresService:HeroesService ) {
    console.log("constructor");
  }



    ngOnInit () {


this.heroes = this._heoresService.getHeroes();

console.log( this.heroes)
    }
 

}
