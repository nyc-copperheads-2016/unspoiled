FactoryGirl.define do

  factory :user do
    username {Faker::Internet.user_name}
    password 'password'
    email {Faker::Internet.email}
  end

  factory :category do
    category_type {Faker::Commerce.color}
  end

  factory :media do
    title {Faker::Team.name}
    association :category
  end


  factory :preference do
    association :user
    association :media
  end
end
