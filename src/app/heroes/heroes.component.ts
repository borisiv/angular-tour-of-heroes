import { Component, OnInit } from '@angular/core';
import Hero from '../hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  onSelect(hero: Hero): void {
    if (this.selectedHero === hero) {
      this.selectedHero = null;
      return;
    }
    this.selectedHero = hero;
  }

  initHeroes(): void {
    this.heroService.heroes.subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.initHeroes();
  }

}
