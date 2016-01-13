class PreferencesController < ApplicationController
  before_filter :authorize_user!

  def create
    @mediaobj = Media.find_by(id: params[:preference][:media_id])
    @preference = Preference.new(user: current_user, media: @mediaobj)
    if @preference.save
      Preference.create_media_words(@preference, @mediaobj)
      render json: {message:@mediaobj.title}
    else
      render json: {message: @preference.errors.full_messages.join(' ') }, status: 422
    end
  end

  def update
    preference = Preference.find(params[:id])
    preference.update_attribute(:active, !preference.active)
    render json: {userId: preference.user_id, preferenceId: preference.id, active: preference.active }
  end

  def destroy
    preference = Preference.find_by(id: params[:id])
    preference.destroy
    render json: {id: params[:id]}
  end

end
