import data from '../data/data';
import Component from '../components/component';

export default class Page {

  constructor() {
    this.init();
  }

  init() {
    new Component();
    window.app.data = data;
  }

}
