require 'rails_helper'

RSpec.describe Category, type: :model do

   describe Category do

    context "Associations" do
      it {should have_many(:medias)}
    end
  end
end