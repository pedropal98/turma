class Event < ApplicationRecord
  belongs_to :user

  has_many :invitations
  has_many :users, through: :invitations
  has_many :messages
end
