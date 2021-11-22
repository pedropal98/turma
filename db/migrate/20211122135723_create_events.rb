class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.date :date
      t.string :travel
      t.string :accomodation
      t.string :food
      t.string :category
      t.string :technician
      t.string :rider
      t.string :driver
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
