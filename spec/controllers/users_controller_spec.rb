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

     context "with valid attributes" do
      it "saves the new user in the database" do
        attribs = { user: FactoryGirl.attributes_for(:user) }
        expect{post :create, attribs}.to change{User.count}.by(1)
      end

      it "redirects to root_path" do
        attribs = { user: FactoryGirl.attributes_for(:user) }
          post :create,
            user: FactoryGirl.attributes_for(:user)
          expect(response).to redirect_to root_path
      end
     end

     context "with invalid attributes" do
      it "does not save the new user in the database" do
        attribs = {user: FactoryGirl.attributes_for(:user, password:nil)}
        expect{post :create, attribs}.not_to change{User.count}
      end

      it "re-renders the :new template" do
        post :create,
          user: FactoryGirl.attributes_for(:user, password:nil)
        expect(response).to render_template :new
      end
    end
  end

  describe 'Get #show' do
    it "assigns the requested user to @user" do
      user = FactoryGirl.create(:user)
      get :show, id: user
      expect(assigns(:user)).to eq user
    end
  end
end
