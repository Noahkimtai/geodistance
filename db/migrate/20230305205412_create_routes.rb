class CreateRoutes < ActiveRecord::Migration[7.0]
  def change
    create_table :routes do |t|
      t.string :origin
      t.string :destination
      t.string :transport_mode
      t.integer :count

      t.timestamps
    end
  end
end
