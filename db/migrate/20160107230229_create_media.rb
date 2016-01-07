class CreateMedia < ActiveRecord::Migration
  def change
    create_table   :media do |t|
      t.string     :title, null: false
      t.references :category, null: false

      t.timestamps
    end
  end
end
