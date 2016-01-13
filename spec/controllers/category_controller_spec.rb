require 'rails_helper'

describe CategoriesController do

  describe 'GET #index' do
    it "populates an array with all catergories" do
      category1 = FactoryGirl.create(:category)
      category2 = FactoryGirl.create(:category)
      get :index
      expect(assigns(:categories)).to match_array([category1, category2])
    end

    it "renders the :index template" do
      get :index
      expect(response).to render_template :index
    end
  end

end

