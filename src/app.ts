import {Router, RouterConfiguration} from 'aurelia-router';

export class App {

  public title: string = 'Tour of Heroes';
  private router: Router;

  public configureRouter(config: RouterConfiguration, router: Router): void {
    config.title = 'Aurelia Tour of Heroes';
    config.map([
      {route: ['', 'dashboard'], name: 'dashboard', moduleId: 'dashboard/dashboard', nav: true, title: 'Dashboard'},
      {route: 'heroes', name: 'heroes', moduleId: 'heroes/heroes', nav: true, title: 'Heroes'},
      {route: 'hero-detail/:id', name: 'hero-detail', moduleId: 'heroes/hero-detail', title: 'Hero Detail'},
    ]);

    this.router = router;
  }
}
