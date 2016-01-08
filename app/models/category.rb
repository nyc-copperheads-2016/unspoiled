class Category < ActiveRecord::Base
  has_many :medias

  validates :type, presence: true
end
