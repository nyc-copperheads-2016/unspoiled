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
    before :each do
      @admins = [
        attributes_for(:admin),
        attributes_for(:admin),
        attributes_for(:admin)
      ]
    end

    context "with valid attributes" do
      it "saves the new user in the database" do
        expect{
          post :create, user: attributes_for(:user,
            admins_attributes: @admins)
        }.to change(User, :count).by(1)
      end

      it "redirects to root_path"
    end
  end

  describe 'Get #show' do
    it "assigns the requested user to @user"
  end
end
