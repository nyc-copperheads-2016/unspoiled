class WordsController < ApplicationController
  def new
  end

  def create
    new_word_array = params[:word][:word].split(/[\, ]/)
    media = Media.find_by(id: params[:media_id])
    new_preference = media.preferences.new(user: current_user)
    if new_preference.save
      new_word_array.each do |word|
        if !word.match(/\W/) && !word.match(/\d/) && !word.match(/_/) && !word.blank?
          Word.create!(word: word.downcase.strip, preference: new_preference)
        end
      end
    end
    redirect_to user_path(current_user.id)
  end
end
