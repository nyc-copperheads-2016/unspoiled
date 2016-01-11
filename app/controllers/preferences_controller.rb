class PreferencesController < ApplicationController
  before_filter :authorize_user!


  def create
    @mediaobj = Media.find_by(id: params[:preference][:media_id])
    @category = Category.find_by(id: @mediaobj.category_id )
    @preference = Preference.new(user: current_user, media: @mediaobj)
    if @preference.save
      redirect_to user_path(current_user.id)
    else
      @medias = Media.where(category_id: @category.id)

      render '/media/index', :layout =>false
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
