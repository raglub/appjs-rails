# Appjs::Rails
[![Gem Version](https://badge.fury.io/rb/appjs-rails.png)](http://badge.fury.io/rb/appjs-rails)
[![Dependency Status](https://gemnasium.com/raglub/appjs-rails.png)](https://gemnasium.com/raglub/appjs-rails)

The additional library for javaScript

## Installation

Add this line to your application's Gemfile:

    gem 'appjs-rails'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install appjs-rails

The app file will be added to the asset pipeline when you in file ```app/assets/javascripts/application.js``` add this line:

```
//= require app
```

## Usage

Creation new singleton without initialize

```javascript
app._singleton.add('example', function() {
  return {
    toString: 'Class Example'
  }
} );
app.example.init();
app.example.toString; // 'Class Example'
```

Creation new singleton with initialize


```javascript
app._singleton.init('example', function() {
  return {
    toString: 'Class Example'
  }
} );
app.example.toString; // 'Class Example'
```

Generation UUID

```javascript
app._uuid(); //6b644386-6ccb-98af-1144-6b8de194387a
```

We can Extend Array object by using function

```javascript
app._config.array()
```

Now all Array object has got functions

```javascript
[1, 2, 3].equal('2, 3'); // false

[1, 2, 3].any(); // true

[1, 2, 3].empty(); // false

['1', '2', '3'].each(function(item) {console.log('item: ' + item)} );

['1', '2', '3'].erase(); // []

['1', '2', '3'].first(); // 1

[].first(); // undefined

['a', 'b'].last(); // 'b'

```

### For Bootstrap 3

Adding a counter that counts how many characters left to use
Use requires the following steps:

* You must add initializer into script

```javascript
  app._bootstrap.inputDownCounter();
```

* Adding class 'js-input-down-counter-x' (where x is a limit to down count) into an input tag.

For Example

```html
  <div class="form-group">
    <label class="col-lg-3 control-label">Name</label>
    <div class="controls">
      <input type='text' class='form-control js-input-down-counter-20" value='Example'>
    </div>
  </div>
```

# License

appjs-rails uses the MIT license. Please check the [LICENSE][] file for more details.

[license]: https://github.com/raglub/appjs-rails/blob/master/LICENSE
