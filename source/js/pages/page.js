module.exports = (function() {

  var data = require("../data/data");
  var Module = require("../modules/module");

  function Page() {
    this.init();
  }

  Page.prototype.init = function() {
    new Module();
    window.App.data = data;
  };

  return Page;

})();
