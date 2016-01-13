class WordsController < ApplicationController
  def new
  end

  def create
    new_word_array = params[:word][:word].split(',')
    media = Media.find_by(id: params[:media_id])
    new_preference = media.preferences.create!(user: current_user)
    new_word_array.each do |word|
      Word.create!(word: word.downcase.strip, preference: new_preference)
    end
    redirect_to user_path(current_user.id)
  end
end
