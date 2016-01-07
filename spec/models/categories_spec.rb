require 'rails-helper'

Rspec.describe Category, type: :model do

   describe Category do

    context "Associations" do
      it {should belong_to(:media)}
    end
  end



end