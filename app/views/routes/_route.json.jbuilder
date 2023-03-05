json.extract! route, :id, :origin, :destination, :transport_mode, :count, :created_at, :updated_at
json.url route_url(route, format: :json)
