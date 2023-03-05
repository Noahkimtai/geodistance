class RemoveRegionIdFromCountries < ActiveRecord::Migration[7.0]
  def change
    remove_column :countries, :region_id, :integer
  end
end
