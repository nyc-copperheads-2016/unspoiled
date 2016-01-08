class User < ActiveRecord::Base
  has_many :preferences
  has_many :filters, through: :preference, source: 'media'

  validates :username, :password, :email, :active, presence: true
  validates_uniqueness_of :username, :email
  validates :username, length: { minimum: 4 }
  validates :password, length: { minimum: 6 }
  validates :password, confirmation: true
  validates_presence_of :password_confirmation
  validates :email, :format => { :with => /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i }
end
