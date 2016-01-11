class PreferencesController < ApplicationController
  before_filter :authorize_user!


  def create
    @mediaobj = Media.find_by(id: params[:preference][:media_id])
    @category = Category.find_by(id: @mediaobj.category_id )
    @categories = Category.all
    @preference = Preference.new(user: current_user, media: @mediaobj)
    if @preference.save
      create_words(@mediaobj.title)
      render json: {message:@mediaobj.title}
    else
      render json: {message:'Failed to save'}, status: 422
    end
  end

  def create_words(media_title)
    tmdb_id = TmdbMovie.find_first_match_id(media_title)
      characters = TmdbMovie.find_characters(tmdb_id)
      characters.each do |character|
        @preference.words.create!(word: character)
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

  # def add_filter_words
  #   arr = Word.new(user: current_user, words: params[:cast])
  #   if arr.save
  #     redirect_to filtered_words_path
  #   end
  # end
end
