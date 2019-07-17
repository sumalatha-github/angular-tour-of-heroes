import { Injectable } from '@angular/core';
import { Hero } from '../app/mappingHeroesConstants/hero';
import { HEROES } from '../app/mappingHeroesConstants/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient,private messageService: MessageService) { }

  private heroesUrl = 'api/heroes';  // URL to web api

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getHeroes():Observable< Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
