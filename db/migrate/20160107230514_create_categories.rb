class CreateCategories < ActiveRecord::Migration
  def change
    create_table :categories do |t|
      t.string   :type, null: false

      t.timestamps
    end
  end
end
