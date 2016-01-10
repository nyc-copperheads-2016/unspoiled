class PreferencesController < ApplicationController
  before_filter :authorize_user!


  def create
    mediaobj = Media.find_by(id: params[:preference][:media_id])
    preference = Preference.new(user: current_user, media: mediaobj)
    if preference.save
      redirect_to root_path
    else
      @medias = Media.where(category_id: params[:preference][:media_id])
      flash[:notice] = "Unable to add filter"
      render '/media/index'
    end
  end

  def update
    preference = Preference.find(params[:id])
    if preference.active == true
      preference.update_attribute(:active, !true)
      redirect_to user_path(current_user.id)
    else
      preference.update_attribute(:active, true)
      redirect_to user_path(current_user.id)
    end
  end

  def destroy
    preference = Preference.find_by(id: params[:id])
    preference.destroy
    redirect_to user_path(current_user.id)
  end
end
