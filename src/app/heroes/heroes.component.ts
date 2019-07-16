import { Component, OnInit } from '@angular/core';
import { Hero } from '../mappingHeroesConstants/hero';
import { HEROES } from '../mappingHeroesConstants/mock-heroes'
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes:Hero[];
  // hero: Hero = {
  //   id:1,
  //   name:"Windstorm"
  // };

 // heroes = HEROES;

  constructor(private heroService:HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero:Hero) {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes =>this.heroes = heroes);
  }

}
