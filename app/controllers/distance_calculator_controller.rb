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
    
        url = "https://nominatim.openstreetmap.org/search?q=#{destion}&format=json"
        uri = URI.parse(url)
        response = Net::HTTP.get(uri)
        destination_data =JSON.parse(response)[0]
        byebug
        destination_lat = destination_data['lat'].to_f
        destination_long = destination_data['lon'].to_f
        
        # Calculate the distance between the two points
        lat_change = destination_lat - origin_lat
        long_change = destination_long-origin_long
        earth_radius = 6371.0
        a = Math.sin(lat_change/2)**2 + Math.cos(origin_lat) * Math.cos(destination_lat) * Math.sin(long_change/2)**2
        c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
        distance = earth_radius * c
    
        # return the distance
        render json: {distance: distance.round(2), 
            origin: {latitude: origin_lat, longitude: origin_long},
            destination: {latitude: destination_lat, longitude: destination_long}
        }
        
        end
end
