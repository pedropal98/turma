class Event < ApplicationRecord
  has_one_attached :photo
  belongs_to :user

  has_many :invitations, dependent: :destroy
  has_many :users, through: :invitations
  has_many :messages, dependent: :destroy

  validates :name, presence: true
  validates :date, presence: true
  validates :address, presence: true

  geocoded_by :address
  after_validation :geocode, if: :will_save_change_to_address?
end
