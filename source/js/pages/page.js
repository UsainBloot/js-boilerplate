module.exports = (function() {

  var data = require("../data/data");
  var Module = require("../components/component");

  function Page() {
    this.init();
  }

  Page.prototype.init = function() {
    new Module();
    window.app.data = data;
  };

  return Page;

})();
