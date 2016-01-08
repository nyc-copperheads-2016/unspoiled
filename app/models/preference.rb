class Preference < ActiveRecord::Base
  belongs_to :user
  belongs_to :media

  validates :user, :media, :active, presence: true
end
