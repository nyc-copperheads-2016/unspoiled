require 'rails_helper'

describe MediaController do

  describe 'GET #index' do
      category1 = Category.create(category_type: "Movie")
      media1 = FactoryGirl.create(:media, title: "Smith", category_id: category1.id)
      media2 = FactoryGirl.create(:media, title: "Jones", category_id: category1.id)
      get :index, category_id: category1.id
      expect(assigns(:medias)).to match_array([media1, media2])

    it "populates an array of media objects that belongs to a certain category" do
      get :index, category_id: category1.id
      expect(assigns(:medias)).to match_array([media1, media2])
    end

    it "renders the :index template" do
      get :index, category_id: category1.id
      expect(response).to render_template :index
    end

  end
end
