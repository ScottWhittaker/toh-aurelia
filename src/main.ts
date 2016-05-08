import 'bootstrap';
import {Aurelia} from 'aurelia-framework';

export function configure(aurelia: Aurelia): void {

  'use strict';

  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  // uncomment the line below to enable animation.
  // aurelia.use.plugin('aurelia-animator-css');

  // anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin('aurelia-html-import-template-loader')

  aurelia.start().then(() => aurelia.setRoot());
}
