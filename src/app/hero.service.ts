import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]>{
    //this.heroes = this.heroService.getHeroes(); syncronus without obserables
    const heroes = of(HEROES);
    return heroes;
  }
  constructor() { }
}
