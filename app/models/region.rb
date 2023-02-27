class Region < ApplicationRecord
    validates :name, presence:true, uniqueness:true

    has_many :countries
    #has_many: places through countries
end
