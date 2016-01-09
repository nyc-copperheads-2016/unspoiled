require 'rails_helper'

describe MediaController do
  before(:each) do
    @category_new = FactoryGirl.create(:category)
  end
  describe 'GET #index' do

    it "populates an array of media objects that belongs to a certain category" do
      media1 = FactoryGirl.create(:media, title: "Smith", category_id: @category_new.id)
      media2 = FactoryGirl.create(:media, title: "Jones", category_id: @category_new.id)
      get :index, category_id: @category_new.id
      expect(assigns(:medias)).to match_array([media1, media2])
    end

    it "renders the :index template" do
      get :index, category_id: @category_new.id
      expect(response).to render_template :index
    end

  end
end
