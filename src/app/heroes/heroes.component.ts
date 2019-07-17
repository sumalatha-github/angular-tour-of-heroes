import { Component, OnInit,HostListener } from '@angular/core';
import { Hero } from '../mappingHeroesConstants/hero';
import { HEROES } from '../mappingHeroesConstants/mock-heroes'
import { HeroService } from '../hero.service';
import { Router } from "@angular/router";

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

  constructor(private heroService:HeroService,private router:Router) { }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);
    if(event.shiftKey && event.keyCode == 68) {
      this.router.navigateByUrl('/dashboard');
    }
  }  
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
