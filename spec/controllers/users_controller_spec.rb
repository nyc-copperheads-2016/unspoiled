require 'rails_helper'

describe UsersController do

  describe 'Get #new' do

    it "assigns a new User to @user" do
      get :new
      expect(assigns(:user)).to be_a_new(User)
    end

    it "renders the :new template" do
      get :new
      expect(response).to render_template :new
    end

  end

  describe 'POST #create' do

#Can't figure this one out!
    # context "with valid attributes" do
      it "saves the new user in the database"


      it "redirects to root_path"
  end

  describe 'Get #show' do
    it "assigns the requested user to @user" do
      user = FactoryGirl.create(:user)
      get :show, id: user
      expect(assigns(:user)).to eq user
    end
  end
end