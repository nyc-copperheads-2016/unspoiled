class Category < ActiveRecord::Base
  has_many :medias

  validates :media_type, presence: true
end
