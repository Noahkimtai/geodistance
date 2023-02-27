class CountrySerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :places
  belongs_to :region
end
