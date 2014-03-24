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
    },
    _bootstrap: {
      inputDownCounter: function(){
        jInputs = $('[class*="js-input-down-counter-"]');

        for(var i=0; i< jInputs.length; i++){
          if (!$(jInputs[i]).hasClass('js-used-input-down-counter')) {
            var maxNameLength = undefined;

            $(jInputs[i]).attr('class').split(' ').map(function(item){
              if(!item.indexOf('js-input-down-counter-')){
                maxNameLength = item.split('-').last();
              }
            })

            jInputGroup = $('<div class="input-group"></div>');
            jInputGroup.insertBefore($(jInputs[i]));
            jInputGroup.append($(jInputs[i]));

            $('<span class="text-muted input-group-addon add-on" style="background: #fff">0</span>').insertAfter($(jInputs[i]))
            var usedChar = maxNameLength - parseInt($(jInputs[i]).val().length);
            $(jInputs[i]).next().text(usedChar);
            $(jInputs[i]).bind('keyup', function(){
              var usedChar = maxNameLength - parseInt($(this).val().length);
              if (usedChar >= 0) {
                $(this).next().text(usedChar);
              } else {
                $(this).next().text(0);
                $(this).val($(this).val().substr(0, maxNameLength));
              }
            })
            $(jInputs[i]).addClass('js-used-input-down-counter');
          }
        }
      },
      showIcons: function(){
        styles = document.styleSheets;
        result = []

        for (i=0; i< styles.length; i++) {
          style = styles[i];
          for(j=0; j< style.cssRules.length; j++) {
            if(style.cssRules[j].cssText.match('glyphicon-.*::')) {
              result.push(style.cssRules[j].cssText.match("(glyphicon-.*)::.*")[1])
            }
          }
        }

        for(i=0; i<result.length; i++){
          $('#page-wrapper').append("<div class='col-lg-3'><span style='font-size: 30px' class='glyphicon " + result[i]  + "'></span> " + result[i] + "</div>")
        }
      }
    }

  }
})();
