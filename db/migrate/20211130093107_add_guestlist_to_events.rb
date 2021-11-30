class AddGuestlistToEvents < ActiveRecord::Migration[6.0]
  def change
    add_column :events, :guestlist, :string
  end
end
