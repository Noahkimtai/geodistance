class RegionSerializer < ActiveModel::Serializer
  attributes :id

  has_many :countries
end
