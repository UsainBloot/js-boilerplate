(function() {

  'use strict';

  window.app = {};
  window.app.components = {};

  var pageName = document.querySelector('[data-page]').getAttribute('data-page');

  switch(pageName) {
    case 'home':
      require("./pages/page");
    break;

    default:
      console.error('No page type found');
    break;
  }

})();
