import data from '../data/data';
import Component from '../components/component';

export default function() {

  window.app.components.component = new Component();
  window.app.data = data;

}
