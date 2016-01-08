require 'rails_helper'

describe MediaController do

  describe 'GET #index' do

    it "populates an array of all media objects that belongs to a certain category" do
      category1 = Category.create(category_type: "Movie")
      media1 = FactoryGirl.create(:media, title: "Smith", category_id: category1.id)
      media2 = FactoryGirl.create(:media, title: "Jones", category_id: category1.id)
      get :index, category_id: category1.id
      expect(assigns(:medias)).to match_array([media1, media2])
    end

  end

end
