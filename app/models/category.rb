class Category < ActiveRecord::Base
  has_many :medias

  validates :category_type, presence: true
end
