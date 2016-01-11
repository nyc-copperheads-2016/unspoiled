class CreateWords < ActiveRecord::Migration
  def change
    create_table :words do |t|
      t.string :words, null: false
      t.references :user, null: false

      t.timestamps null: false
    end
  end
end
