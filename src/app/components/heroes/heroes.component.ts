import { Component } from '@angular/core';
import { HeroesService , Heroe } from 'src/app/servicios/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  
})
export class HeroesComponent {


  heroes: Heroe [] = [];

  constructor( private _heoresService:HeroesService,
               private router:Router
   ) {
/*     console.log("constructor"); */
  }



    ngOnInit () {


this.heroes = this._heoresService.getHeroes();

/* console.log( this.heroes) */
    }

    verHeroe(idx:number){
  this.router.navigate(['/heroe', idx])

    }
 

}
