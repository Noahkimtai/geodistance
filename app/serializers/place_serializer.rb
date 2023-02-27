class PlaceSerializer < ActiveModel::Serializer
  attributes :id, :name,:latitude, :longitude, :description

  belongs_to :country
end
