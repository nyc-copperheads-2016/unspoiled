class Category < ActiveRecord::Base
  has_many: :media

  validates :type, presence: true
end
