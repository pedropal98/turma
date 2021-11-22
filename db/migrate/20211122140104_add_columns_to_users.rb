class AddColumnsToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :nick_name, :string
    add_column :users, :role, :string
    add_column :users, :address, :string
    add_column :users, :rider, :text
    add_column :users, :details, :text
  end
end
