(function() {

  'use strict';

  var Page = require("./pages/page");

  window.App = {};

  /* Home page */
  if($('body.home').length) {
      new Page();
  }

})();
