require 'rails_helper'

RSpec.describe Preferences, type: :model do

  describe Preferences do

    context "Associations" do
      it {should belong_to (:user)}
      it {should belong_to (:media)}
    end
  end
end