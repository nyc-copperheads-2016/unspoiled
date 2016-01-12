# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


arc = User.create!(email:'arc@example.com', username:'arcangelo', password:'password', active:true)
a = Category.create!(category_type: "Movies")
b = Category.create!(category_type: "T.V. Shows")

#tv shows
Media.create!(title: "Marvel's Daredevil",category_id: b.id )
Media.create!(title: "Game of Thrones", category_id: b.id)
Media.create!(title: "The Walking Dead", category_id: b.id)
Media.create!(title: "Humans", category_id: b.id)
Media.create!(title: "Narcos", category_id: b.id)
Media.create!(title: "Marco Polo", category_id: b.id)

#movies
Media.create!(title: "Star Wars: The Force Awakens", category_id: a.id)
Media.create!(title: "The Revenant", category_id: a.id)
Media.create!(title: "The Martian", category_id: a.id)
Media.create!(title: "The Hateful Eight", category_id: a.id)
Media.create!(title: "Interstellar", category_id: a.id)
Media.create!(title: "Terminator Genisys", category_id: a.id)


# Media.all.each do |media|
#   pref = Preference.create!(media: media, user:arc, active:true)
#   tmdb_id = TmdbMovie.find_first_match_id(media.title)
#   characters = TmdbMovie.find_characters(tmdb_id)
#   characters.each do |character|
#     pref.words.create!(word: character)
#   end
# end



