# import the net/http library
require 'net/http'

class DistanceCalculatorController < ApplicationController
    # create an end point to calculate distance between two points
    def find_distance
        origin = params[:origin]
        destination = params[:destination]
        # use the openstreetmap API to convert them to Geocode the names
        url = "https://nominatim.openstreetmap.org/search?q=#{origin}&format=json"
        uri = URI.parse(url)
        response = Net::HTTP.get(uri)
        origin_data = JSON.parse(response)[0]
        origin_lat = origin_data['lat'].to_f
        origin_long = origin_data['lon'].to_f
        origin_country = origin_data['display_name'].split(" ").last
    
        url = "https://nominatim.openstreetmap.org/search?q=#{destination}&format=json"
        uri = URI.parse(url)
        response = Net::HTTP.get(uri)
        destination_data =JSON.parse(response)[0]
        destination_lat = destination_data['lat'].to_f
        destination_long = destination_data['lon'].to_f
        destination_country = destination_data['display_name'].split(" ").last
        
        # Calculate the distance between the two points using haversine formula
        lat_change = destination_lat - origin_lat
        long_change = destination_long-origin_long
        earth_radius = 6371.0
        a = Math.sin(lat_change/2)**2 + Math.cos(origin_lat) * Math.cos(destination_lat) * Math.sin(long_change/2)**2
        c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
        distance = earth_radius * c

        # Add the data from user to database
        Country.find_or_create_by(name: origin_country)
        Country.find_or_create_by(name: destination_country)

        if !Place.exists?(name:origin)
            Place.create!(name: origin,country_id: Country.find_by(name:origin_country).id,latitude:origin_lat , longitude: origin_long, description: '')
        end
        
        if !Place.exists?(name:destination)
            Place.create(name:destination, country_id: Country.find_by(name:destination_country).id,latitude:destination_lat , longitude:destination_long,description:'')
        end
        
        if !Route.exists?(origin: origin)
            Route.create!(origin:origin, destination:destination, transport_mode: params[:transport_mode], count:1)
        end

        route_id = Route.find_by(origin:origin, destination:destination).id
        
        
        # return the distance
        render json: {distance: distance.round(2),
            origin_country: origin_country,
            destination_country: destination_country,
            origin: {latitude: origin_lat, longitude: origin_long},
            destination: {latitude: destination_lat, longitude: destination_long},
            route_id: route_id
        }
        
        end
end
