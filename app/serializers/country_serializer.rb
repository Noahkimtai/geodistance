class CountrySerializer < ActiveModel::Serializer
  attributes :id

  has_many :places
  belongs_to :region
end
