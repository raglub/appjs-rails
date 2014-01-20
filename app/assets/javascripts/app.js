"use strict";

var app = (function() {
  var s4 = function () {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  };

  return {
    _addSingleton: function(name, fn) {
      app[name] = fn;
      app[name].init = function(){ };
    },
    // free generator http://ajaxload.info/
    _ajax: {
      addEvent: {
        lockAfterClick: function() {
          $("a[data-remote='true']").bind('ajax:')
        }
      }
    },
    _uuid: function(){
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
  }

})();
