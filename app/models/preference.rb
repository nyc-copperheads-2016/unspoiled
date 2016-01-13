class Preference < ActiveRecord::Base
  belongs_to :user
  belongs_to :media
  has_many :words

  validates :user, :media, :active, presence: true
  validates :media_id, :uniqueness => {:scope => :user}

  def self.create_media_words(preference, media)
    media_type = media.category_type
    tmdb_id = TmdbMovie.find_first_match_id(media_type, media_title)
    characters = TmdbMovie.find_characters(media_type, tmdb_id, media_title)
    characters.each { |word| preference.words.create!(word:word) }
  end

end
