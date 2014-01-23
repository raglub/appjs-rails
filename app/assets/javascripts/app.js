"use strict";

var app = (function() {
  var s4 = function () {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  };

  var singletons = []

  return {
    _singleton: {
      add: function(name, fn) {
        app[name] = fn;
        singletons.push(name);
        app[name].init = function(){
          app[name] = app[name]();
          if(app[name] == undefined) {
            app[name] = {};
          }
          app[name].init = function(){
            return app[name];
          }
          return app[name];
        };
      },
      init: function(name, fn) {
        app._singleton.add(name, fn);
        return app[name].init();
      },
      listAdded: singletons
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
