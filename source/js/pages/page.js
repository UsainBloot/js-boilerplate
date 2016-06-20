module.exports = (function() {

  'use strict';

  var data = require("../data/data");
  var Module = require("../modules/module");

  (function() {
    window.app.modules.module = new Module();
    window.app.data = data;
  })();

})();
