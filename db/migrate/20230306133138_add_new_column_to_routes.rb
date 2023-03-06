class AddNewColumnToRoutes < ActiveRecord::Migration[7.0]
  def change
    add_column :routes, :experience, :text
  end
end
