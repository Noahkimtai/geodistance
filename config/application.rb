require_relative "boot"
require "rails/all"
require 'rack/cors'

Bundler.require(*Rails.groups)

module Geodistance
  class Application < Rails::Application
    config.load_defaults 7.0

    # Add this code to configure rack-cors middleware
    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins '*'
        resource '*', :headers => :any, :methods => [:get, :post, :put, :patch, :delete, :options]
      end
    end
  end
end