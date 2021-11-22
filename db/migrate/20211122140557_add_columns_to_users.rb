class AddColumnsToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :name, :string, null: false
    add_column :users, :nick_name, :string
    add_column :users, :role, :string, null: false
    add_column :users, :address, :string
    add_column :users, :rider, :text
    add_column :users, :details, :text
  end
end
