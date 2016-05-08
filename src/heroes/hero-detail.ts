import {inject} from 'aurelia-dependency-injection';

import {HeroService} from '../services/hero-service';
import {Hero} from './hero';

@inject(HeroService)
export class HeroDetails {

  public hero: Hero;
  private heroService: HeroService;

  constructor(heroService: HeroService) {
    this.heroService = heroService;
  }

  public goBack(): void {
    window.history.back();
  }

  public activate(params: any): Promise<any> {
    return this.heroService.getHero(params.id)
      .then((hero: Hero) => this.hero = hero);
  }
}
