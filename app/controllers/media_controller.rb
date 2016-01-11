class MediaController < ApplicationController

  def index
    @medias = Media.where(category_id: params[:category_id])
    if request.xhr?
      render '/media/index', layout: false
    else
      redirect_to root_path
    end
  end

  def filtered_words
    filters = Word.where(user: current_user)
    render :json => filters
  end

  def add_filter_words
    arr = Word.new(user: current_user, words: params[:cast])
    if arr.save
      redirect_to filtered_words_path
    end
  end
end
