require 'rails-helper'

Rspec.describe User, type: :model do

   describe Preferences do

    context "Associations" do
      it {should have_many(:preferences)}
    end
  end





end