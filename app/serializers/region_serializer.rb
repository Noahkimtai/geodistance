class RegionSerializer < ActiveModel::Serializer
  attributes :id, :name, :countries

  has_many :countries
end
