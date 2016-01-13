require 'rails_helper'

RSpec.describe Preference, type: :model do

  describe Preference do

    context "Associations" do
      it {should belong_to (:user)}
      it {should belong_to (:media)}

      it { should validate_presence_of(:active) }
    end
  end
end