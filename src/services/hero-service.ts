import {HEROES} from '../heroes/mock-heroes';
import {Hero} from '../heroes/hero';

export class HeroService {

  public getHeroes(): Promise<Array<Hero>> {
    return Promise.resolve(HEROES);
  }

  public getHero(id: string): Promise<Hero> {
    return Promise.resolve(HEROES)
      .then((heroes: Array<Hero>) => heroes.filter((hero: Hero) => hero.id === +id)[0]);
  }
}
