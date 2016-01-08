class AddMediaTypeToMigration < ActiveRecord::Migration
  def change
    add_column :categories, :media_type, :string
  end
end
