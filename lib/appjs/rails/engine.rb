# Used to ensure that Rails 3.0.x, as well as Rails >= 3.1 with asset pipeline disabled
# get the minified version of the scripts included into the layout in production.
module Appjs
  module Rails
    class Engine < ::Rails::Engine
    end
  end
end
