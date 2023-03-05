class RouteSerializer < ActiveModel::Serializer
  attributes :id, :origin, :destination, :transport_mode, :count
end
