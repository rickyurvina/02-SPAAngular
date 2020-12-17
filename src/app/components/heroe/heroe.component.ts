import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe:any={};

  constructor(private activateRoute:ActivatedRoute, private _heroesService:HeroesService) {
    this.activateRoute.params.subscribe(params=> {
      console.log(params['id']);
      this.heroe=this._heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    })


   }

  ngOnInit(): void {
  }

}
