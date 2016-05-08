import {inject} from 'aurelia-dependency-injection';
import {HttpClient} from 'aurelia-fetch-client';
import {Router} from 'aurelia-router';

import {HeroService} from 'services/hero-service';
import {Hero} from './hero';

@inject(HttpClient, Router, HeroService)
export class Heroes {

  public heroes: Array<Hero>;
  public selectedHero: Hero;

  private http: HttpClient;
  private heroService: HeroService;
  private router: Router;

  constructor(http: HttpClient, router: Router, heroService: HeroService) {
    this.http = http;
    this.router = router;
    this.heroService = heroService;
    this.selectedHero = undefined;
  }

  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  public gotoDetail(): void {
    this.router.navigateToRoute('hero-detail', {id: this.selectedHero.id});
  }

  public activate(): Promise<Array<Hero>> {
    return this.heroService.getHeroes()
      .then((heroes: Array<Hero>) => this.heroes = heroes);
  }
}
