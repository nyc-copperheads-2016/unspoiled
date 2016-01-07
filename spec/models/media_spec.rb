require 'rails-helper'

Rspec.describe Media, type: :model do

   describe Preferences do

    context "Associations" do
      it {should belong_to(:category)}
      it {should have_many (:preferences)}
    end

    context "Validations" do
      let(:media){Media.new}

      media.should validate_presence_of(:title)
  end





end