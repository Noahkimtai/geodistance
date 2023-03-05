class Dropregions < ActiveRecord::Migration[7.0]
  def change
    drop_table :regions
  end
end
