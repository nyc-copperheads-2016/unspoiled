class Media < ActiveRecord::Base
  belongs_to :category
  has_many :preferences
  # The media should own the words (not the preference owning 
  # the words) unless you want it to be possible for each 
  # person to block different words for the same movie.

  validates :title, :category, presence: true

  delegate :category_type, to: category
end
