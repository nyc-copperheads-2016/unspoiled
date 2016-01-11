class MediaController < ApplicationController

  def add_filter_words
    arr = Word.new(user: current_user, words: params[:cast])
    if arr.save
      redirect_to filtered_words_path
    end
  end
end
