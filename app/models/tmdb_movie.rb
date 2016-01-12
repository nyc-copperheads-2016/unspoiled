class TmdbMovie
  API_ROOT = "http://api.themoviedb.org/3/"

  def self.find_first_match_id category, title
    url = API_ROOT + "search/#{category}?api_key=e0c6c7bded5055b146501304684b8f94&query=" + URI.escape(title)
    response = HTTParty.get(url)
    response.parsed_response["results"][0]["id"]
  end

  def self.find_characters category, media_id, title
    url = API_ROOT + "#{category}/#{media_id}/credits?api_key=e0c6c7bded5055b146501304684b8f94"
    response = HTTParty.get(url)
    arr = [title]
    response.parsed_response["cast"].each do |entry|
      arr << entry["character"]
    end
    arr
  end
end



# TmdbMovie.find_movies('Top Gun')
# TmdbMovie.find_cast(744)
