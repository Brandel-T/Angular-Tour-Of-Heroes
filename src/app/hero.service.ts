import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-hereos';

import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(private messageService: MessageService) { }
 
  getHeroes(): Observable<Hero[]> {
    this.messageService.add(`HeroService: fetched heroes`);
    return of(HEROES); //va nous retourner un Observable en provenance du serveur
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find( h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
