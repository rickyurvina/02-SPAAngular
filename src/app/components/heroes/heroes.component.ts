import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [],
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(private _heroresService: HeroesService) {
    console.log('Constructor');
  }

  ngOnInit(): void {
    this.heroes = this._heroresService.getHeroes();
    console.log(this.heroes);
  }
}
