import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
 
import { Hero }         from '../mappingHeroesConstants/hero';
import { HeroService }  from '../hero.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;
  constructor( private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,private router:Router) { }

    @HostListener('window:keyup', ['$event'])
    keyEvent(event: KeyboardEvent) {
      console.log(event);
      if(event.shiftKey && event.keyCode == 68) {
        this.router.navigateByUrl('/dashboard');
      }
      if(event.shiftKey && event.keyCode == 72) {
        this.router.navigateByUrl('/heroes');
      }
      if(event.shiftKey && event.keyCode == 37) {
        this.goBack()
      }
    }  

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
 
  goBack(): void {
    this.location.back();
  }

}
