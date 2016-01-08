class PreferencesController < ApplicationController
  
  def create
    mediaobj = Media.find(params[:preference][:media_id])
    preference = Preference.new(user: current_user, media: mediaobj)
  end 

end