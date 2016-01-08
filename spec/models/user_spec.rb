require 'rails_helper'

RSpec.describe User, type: :model do

   describe User do

    context "Associations" do
      it {should have_many(:preferences)}
    end

    context "Validations" do
      it{should have_secure_password}
      it {should validate_length_of(:username)}
      it {should validate_length_of(:password)}
      it { should validate_presence_of(:username) }
      it { should validate_presence_of(:password) }
      it { should validate_presence_of(:email) }
    end
  end
end
