class TmdbMovie
  API_ROOT = "http://api.themoviedb.org/3/"

  def self.find_first_match_id title
    url = API_ROOT + "search/movie?api_key=e0c6c7bded5055b146501304684b8f94&query=" + URI.escape(title)
    response = HTTParty.get(url)
    response.parsed_response["results"][0]["id"]
  end

  def self.find_characters movie_id
    url = API_ROOT + "movie/#{movie_id}/credits?api_key=e0c6c7bded5055b146501304684b8f94"
    response = HTTParty.get(url)
    arr = []
    response.parsed_response["cast"].each do |entry|
      arr << entry["character"]
    end
    arr
  end
end



# TmdbMovie.find_movies('Top Gun')
# TmdbMovie.find_cast(744)
