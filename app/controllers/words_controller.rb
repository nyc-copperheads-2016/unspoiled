class WordsController < ApplicationController
  def new
  end

  def create
    new_word = params[:word][:word].gsub(',','').split(' ')
    media = Media.find_by(id: params[:media_id])
    new_preference = media.preferences.create!(user: current_user)
    new_word.each do |word|
      Word.create!(word: word, preference: new_preference)
    end
    redirect_to user_path(current_user.id)
  end
end
