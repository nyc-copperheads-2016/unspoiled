class Preference < ActiveRecord::Base
  belongs_to :user
  belongs_to :media
  has_many :words

  validates :user, :media, :active, presence: true
  validates :media_id, :uniqueness => {:scope => :user}


  def on_or_off
    if active == true
      "on"
    else
      "off"
    end
  end
end
