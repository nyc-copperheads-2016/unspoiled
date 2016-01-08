require 'rails_helper'

RSpec.describe User, type: :model do

   describe User do

    context "Associations" do
      it {should have_many(:preferences)}
    end
  end
end