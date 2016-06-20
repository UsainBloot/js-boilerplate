import data from '../data/data';
import Module from '../modules/module';

export default function() {

  window.app.modules.module = new Module();
  window.app.data = data;

}
