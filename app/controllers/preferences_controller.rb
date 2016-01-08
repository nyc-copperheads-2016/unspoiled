class PreferencesController < ApplicationController

  def create
    mediaobj = Media.find(params[:preference][:media_id])
    preference = Preference.new(user: current_user, media: mediaobj)
    if preference.save
      redirect_to user_path(current_user.id)
    else
      @medias = Media.where(params[:preference][:media_id])
      flash[:notice] = "Unable to add filter"
      render 'media/index'
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
