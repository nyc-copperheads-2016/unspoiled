class Preference < ActiveRecord::Base
  belongs_to :user
  belongs_to :media

  validates :user, :media, :active, presence: true


  def on_or_off
    if self.active == true
      "on"
    else
      "off"
    end
  end
end
