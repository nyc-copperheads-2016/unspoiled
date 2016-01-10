class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      redirect_to root_path
    else
      render :new
    end
  end

  def show
    @user = User.find_by(id: params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.active == true
      @user.update_attribute(:active, false)
      redirect_to root_path
    else
      @user.update_attribute(:active, true)
      redirect_to root_path
    end
  end

  private
  def user_params
    params.require(:user).permit(:username,:password,:email)
  end
end
