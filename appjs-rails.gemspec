# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'appjs/rails/version'

Gem::Specification.new do |spec|
  spec.name          = "appjs-rails"
  spec.version       = Appjs::Rails::VERSION
  spec.authors       = ["Michał Szyma"]
  spec.email         = ["raglub.ruby@gmail.com"]
  spec.description   = %q{The additional library for javaScript.}
  spec.summary       = %q{Library for javaScript.}
  spec.homepage      = "https://github.com/raglub/appjs-rails"
  spec.license       = "MIT"

  spec.files         = `git ls-files`.split($/)
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.3"
  spec.add_development_dependency "rake"
end
