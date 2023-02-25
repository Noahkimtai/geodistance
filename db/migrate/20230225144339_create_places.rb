class CreatePlaces < ActiveRecord::Migration[7.0]
  def change
    create_table :places do |t|
      t.string :name
      t.integer :country_id
      t.float :latitude
      t.float :longitude
      t.text :description

      t.timestamps
    end
  end
end
