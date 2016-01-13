class User < ActiveRecord::Base

  has_secure_password

  has_many :preferences
  has_many :filters, through: :preference, source: 'media'

  validates :username, :email, :active, presence: true
  validates_uniqueness_of :username, :email
  validates :username, length: { minimum: 4 }
  validates :password, length: { minimum: 6 }
  validates :email, :format => { :with => /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i }


  def on_or_off
    if active == true
      "on"
    else
      "off"
    end
  end
end
