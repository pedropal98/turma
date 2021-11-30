class AddUnreadToMessages < ActiveRecord::Migration[6.0]
  def change
    add_column :messages, :unread, :boolean, deafult: true
  end
end
