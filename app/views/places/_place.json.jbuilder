json.extract! place, :id, :name, :country_id, :latitude, :longitude, :description, :created_at, :updated_at
json.url place_url(place, format: :json)
