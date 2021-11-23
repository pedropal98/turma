class Event < ApplicationRecord
  has_one_attached :photo
  belongs_to :user

  has_many :invitations, dependent: :destroy
  has_many :users, through: :invitations
  has_many :messages, dependent: :destroy
end
