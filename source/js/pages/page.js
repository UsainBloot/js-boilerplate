import data from '../data/data';
import Module from '../modules/module';

export default class Page {

  constructor() {
    this.init();
  }

  init() {
    new Module();
    window.app.data = data;
  }

}
