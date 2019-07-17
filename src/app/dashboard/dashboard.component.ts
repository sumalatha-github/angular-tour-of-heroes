import { Component, OnInit, HostListener } from '@angular/core';
import { Hero } from '../mappingHeroesConstants/hero';
import { HeroService } from '../hero.service';
import { Router } from "@angular/router";

export enum KEY_CODE {
  
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  value = 0;
  heroes: Hero[] = [];
  constructor(private heroService: HeroService,private router: Router) { }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);
    if(event.shiftKey && event.keyCode == 72) {
      this.router.navigateByUrl('/heroes');
    }
  }
  

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

}
