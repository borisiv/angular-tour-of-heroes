import { Component, OnInit } from '@angular/core';
import Hero from '../../hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  initHeroes(): void {
    this.heroService.heroes.subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.initHeroes();
  }

  add(heroName: string): void {
    const name = heroName.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => this.heroes.push(hero));
  }

  delete(hero: Hero): void {
    this.heroService.deleteHero(hero).subscribe(() => {
      this.heroes = this.heroes.filter(h => h.id !== hero.id);
    });
  }

}
