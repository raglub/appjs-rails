# Appjs::Rails
[![Gem Version](https://badge.fury.io/rb/appjs-rails.png)](http://badge.fury.io/rb/appjs-rails)

The additional library for javaScript

## Installation

Add this line to your application's Gemfile:

    gem 'appjs-rails'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install appjs-rails

## Usage

Creation new singleton

```javascript
app._addSingleton('example', function() {
  return {
    toString: 'Class Example'
  }
} );
app.example.init();
app.example.toString; // 'Class Example'
```
Generaion UUID

```javascript
app._uuid(); //6b644386-6ccb-98af-1144-6b8de194387a
```

# License

appjs-rails uses the MIT license. Please check the [LICENSE][] file for more details.

[license]: https://github.com/raglub/appjs-rails/blob/master/LICENSE
