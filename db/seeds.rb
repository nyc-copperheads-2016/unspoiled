# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


user = FactoryGirl.create(:user)
arc = User.create!(email:'arc@example.com', username:'arcangelo', password:'password', active:true)
a = Category.create!(category_type: "Movies")
b = Category.create!(category_type: "T.V. Shows")


Media.create!(title: "South Park",category_id: b.id )
Media.create!(title: "Game of Thrones", category_id: b.id)
Media.create!(title: "Walking Dead", category_id: b.id)

Media.create!(title: "Starwars", category_id: a.id)
tg = Media.create!(title: "Top Gun", category_id: b.id)
Media.create!(title: "John Tucker Must Die!", category_id: b.id)

pref = Preference.create!(media: tg, user:arc, active:true)
pref.words.create!(word:'Tom Cruise')
pref.words.create!(word:'Kelly McGillis')




