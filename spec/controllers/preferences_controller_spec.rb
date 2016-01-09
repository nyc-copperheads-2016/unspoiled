require 'rails_helper'

describe PreferencesController do
   before(:each) do
      stub_authorize_user!
    end
  describe 'Post #create' do

    context "with valid attributes" do
      it "saves a new preference in the database" do
        user1 = User.create(username: "bobby", email: "bobby@bobby.com", password: "123456789")
        category1 = Category.create(category_type: "TV Show")
        media1 = Media.create(title: "Game of Thrones", category: category1)
        preference1 = Preference.create(user: user1, media: media1)

        expect{post :create, preference: preference1, media: media1, user: user1}
      end

      it "redirects to user_path" do
        user1 = User.create(username: "bobby", email: "bobby@bobby.com", password: "123456789")
        category1 = Category.create(category_type: "TV Show")
        media1 = Media.create(title: "Game of Thrones", category: category1)
        preference1 = Preference.create(user: user1, media: media1)
        current_user = user1
        stub_current_user(user1)

        post :create, :preference => {media_id: media1} , user_id: user1.id
        expect(response).to redirect_to user_path(user1)
      end
    end
  end

end

# mediaobj = Media.find(params[:preference][:media_id])

