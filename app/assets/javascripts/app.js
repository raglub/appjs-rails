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
          $("a[data-remote='true']").bind('ajax:beforeSend', function(){
            window.example = "beforeSend"
          }).bind("ajax:success", function() {
            window.example += 'success';
          }).bind("ajax:complete", function(event, data, status, xhr) {
            window.example += 'complete';
          });
        }
      }
    },
    _config: {
      array: function(){

        Array.prototype.any = function() {
          return (this.length > 0);
        }
        Array.prototype.each = function(fn) {
          for(var i=0; i<this.length; i++) {
            fn(this[i]);
          }
        }
        Array.prototype.empty = function() {
          return (this.length == 0);
        }
        Array.prototype.equal = function(nextArray) {
          return JSON.stringify(this) == JSON.stringify(nextArray);
        }
        Array.prototype.erase = function() {
          var length = this.length
          for(var i=0; i<length; i++) {
            this.pop();
          }
          return this;
        }
        Array.prototype.last = function() {
          return this[this.length-1];
        }
        Array.prototype.first = function() {
          return this[0];
        }

      },
      debug: function(){
        debugger;
      }
    },
    _uuid: function(){
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
  }
})();
