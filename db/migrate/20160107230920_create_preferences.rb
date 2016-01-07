class CreatePreferences < ActiveRecord::Migration
  def change
    create_table   :preferences do |t|
      t.references :user, null: false
      t.references :media, null: false
      t.boolean    :active, default: true

      t.timestamps
    end
  end
end
