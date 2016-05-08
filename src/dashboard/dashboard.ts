import {inject} from 'aurelia-dependency-injection';
import {Router} from 'aurelia-router';

import {HeroService} from '../services/hero-service';
import {Hero} from '../heroes/hero';

@inject(Router, HeroService)
export class Dashboard {

  public heroes: Array<any>;
  private heroService: HeroService;
  private router: Router;

  constructor(router: Router, heroService: HeroService) {
    this.router = router;
    this.heroService = heroService;
  }

  public gotoDetail(hero: Hero): void {
    this.router.navigateToRoute('hero-detail', {id: hero.id});
  }

  public activate(): Promise<any> {
    return this.heroService.getHeroes()
      .then((heroes: Array<Hero>) => this.heroes = heroes.slice(1, 5));
  }
}
