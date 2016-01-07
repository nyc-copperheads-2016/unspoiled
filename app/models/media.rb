class Media < ActiveRecord::Base
  belongs_to: :category
  has_many: :preferences

  validates :title, :category, presence: true
end
