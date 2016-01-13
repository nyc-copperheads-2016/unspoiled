class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string   :username, null: false
      t.string   :email, null: false
      t.string   :password_digest, null: false
      t.boolean  :active, default: true, null: false

      t.timestamps
    end
  end
end
