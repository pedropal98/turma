class Event < ApplicationRecord
  belongs_to :user

  has_many :invitations, dependent: :destroy
  has_many :users, through: :invitations
  has_many :messages, dependent: :destroy
end
