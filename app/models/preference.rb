class Preference < ActiveRecord::Base
  belongs_to :user
  belongs_to :media
  has_many :words

  validates :user, :media, :active, presence: true
  validates :media_id, :uniqueness => {:scope => :user}


  def on_or_off
    if active == true
      "on"
    else
      "off"
    end
  end

  def self.create_movie_words(preference, media_title)
    tmdb_id = TmdbMovie.find_first_match_id("movie", media_title)
      characters = TmdbMovie.find_characters("movie", tmdb_id, media_title)
      characters.each do |character|
        if character != ""
          preference.words.create!(word: character)
        end
      end
  end

  def self.create_tv_words(preference, media_title)
    tmdb_id = TmdbMovie.find_first_match_id("tv", media_title)
      characters = TmdbMovie.find_characters("tv", tmdb_id, media_title)
      characters.each do |character|
        preference.words.create!(word: character)
      end
  end
end
