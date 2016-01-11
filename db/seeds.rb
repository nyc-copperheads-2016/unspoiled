# Media.all.each do |media|
#   pref = Preference.create!(media: media, user:arc, active:true)
#   tmdb_id = TmdbMovie.find_first_match_id(media.title)
#   characters = TmdbMovie.find_characters(tmdb_id)
#   characters.each do |character|
#     pref.words.create!(word: character)
#   end
# end

FactoryGirl.create(:user)

a = Category.create(category_type: "Movies")
b = Category.create(category_type: "T.V. Shows")
c = Category.create(category_type: "Sports Teams")


Media.create(title: "South Park",category_id: b.id )
Media.create(title: "Game of Thrones", category_id: b.id)
Media.create(title: "Walking Dead", category_id: b.id)

Media.create(title: "Starwars", category_id: a.id)
Media.create(title: "Top Gun", category_id: b.id)
Media.create(title: "John Tucker Must Die!", category_id: b.id)

Media.create(title: "Detroit Lions", category_id: c.id)



