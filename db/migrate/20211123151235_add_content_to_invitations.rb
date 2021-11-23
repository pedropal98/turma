class AddContentToInvitations < ActiveRecord::Migration[6.0]
  def change
    add_column :invitations, :content, :text
  end
end
