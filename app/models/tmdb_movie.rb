class TmdbMovie
  API_ROOT = "http://api.themoviedb.org/3/"

  def self.find_first_match_id category, title
    url = API_ROOT + "search/#{category}?api_key==" + URI.escape(title)
    response = HTTParty.get(url)
    response.parsed_response["results"][0]["id"]
  end

  def self.find_characters category, media_id, title
    url = API_ROOT + "#{category}/#{media_id}/credits?api_key="
    response = HTTParty.get(url)
    arr = [title]
    response.parsed_response["cast"].each do |entry|
      arr << entry["character"]
    end
    arr
  end
end


