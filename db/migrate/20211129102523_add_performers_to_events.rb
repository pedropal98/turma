class AddPerformersToEvents < ActiveRecord::Migration[6.0]
  def change
    add_column :events, :performers, :string
  end
end
