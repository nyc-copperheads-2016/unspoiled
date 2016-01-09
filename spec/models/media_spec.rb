require 'rails_helper'

RSpec.describe Media, type: :model do

  describe Media do

    context "Associations" do
      it {should belong_to(:category)}
      it {should have_many (:preferences)}
    end

    context "Validations" do
      it { should validate_presence_of(:title) }
    end
  end
end
