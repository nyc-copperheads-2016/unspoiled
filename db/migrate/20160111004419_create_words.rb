class CreateWords < ActiveRecord::Migration
  def change
    create_table :words do |t|
      t.string :word, null: false
      t.references :preference, null: false

      t.timestamps null: false
    end
  end
end
