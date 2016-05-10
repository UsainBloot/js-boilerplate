module.exports = (function() {

  var data = require("../data/data");
  var Component = require("../components/component");

  function Page() {
    this.init();
  }

  Page.prototype.init = function() {
    new Component();
    window.app.data = data;
  };

  return Page;

})();
