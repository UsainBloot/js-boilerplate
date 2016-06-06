module.exports = (function() {

  'use strict';

  var data = require("../data/data");
  var Component = require("../components/component");

  (function() {
    window.app.components.component = new Component();
    window.app.data = data;
  })();

})();
