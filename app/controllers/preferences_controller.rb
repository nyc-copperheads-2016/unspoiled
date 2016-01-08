class PreferencesController < ApplicationController

  def create
    mediaobj = Media.find(params[:preference][:media_id])
    preference = Preference.new(user: current_user, media: mediaobj)
  end

  def destroy
    preference = Preference.find_by(id: params[:preference_id])
    preference.destroy
    redirect_to user_path(current_user.id)
  end

end
