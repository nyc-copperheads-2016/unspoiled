class PreferencesController < ApplicationController
  before_filter :authorize_user!


  def create
    @mediaobj = Media.find_by(id: params[:preference][:media_id])
    @category = Category.find_by(id: @mediaobj.category_id )
    @categories = Category.all
    @preference = Preference.new(user: current_user, media: @mediaobj)
    if @preference.save
      if @mediaobj.category.category_type == "Movies"
        Preference.create_movie_words(@preference, @mediaobj.title)
      else
        Preference.create_tv_words(@preference, @mediaobj.title)
      end
      render json: {message:@mediaobj.title}
    else
      render json: {message:'Failed to save'}, status: 422
    end
  end

  def update
    preference = Preference.find(params[:id])
    if preference.active == true
      preference.update_attribute(:active, !true)

      render json: {userId: preference.user_id, preferenceId: preference.id, active: false}
      # redirect_to user_path(current_user.id)
    else
      preference.update_attribute(:active, true)
      render json: {userId: preference.user_id, preferenceId: preference.id, active: true}
    end
  end

  def destroy
    preference = Preference.find_by(id: params[:id])
    preference.destroy
    render json: {id: params[:id]}
  end

end
