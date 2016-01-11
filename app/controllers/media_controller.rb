class MediaController < ApplicationController

  def index
    @category = Category.find(params[:category_id])
    @medias = Media.where(category_id: params[:category_id])
    @preference = Preference.new
    if request.xhr?
      render '/media/index', layout: false
    else
      redirect_to root_path
    end
  end

  def add_filter_words
    arr = Word.new(user: current_user, words: params[:cast])
    if arr.save
      redirect_to filtered_words_path
    end
  end
end
