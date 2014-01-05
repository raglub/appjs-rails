var app = {};

app.addClass = function(name, fn) {
  app[name] = fn;
  app[name].init = function(){ };
}
