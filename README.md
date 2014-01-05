# Appjs::Rails

The additional library for javaScript

## Installation

Add this line to your application's Gemfile:

    gem 'appjs-rails'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install appjs-rails

## Usage

```javascript
app.addClass('Example', function() {
  return {
    toString: 'Class Example'
  }
} );
app.example.init();
app.example.toString; // 'Class Example'
```
