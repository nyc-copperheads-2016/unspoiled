class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to root_path
    else
      render :new
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    if request.xhr?
      render '/users/show', layout: false
    else
      redirect_to root_path
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.active == true
      @user.update_attribute(:active, false)
      if request.xhr?
        render partial: '/users/filterstatus', layout: false
      else

       redirect_to root_path
      end
    else
      @user.update_attribute(:active, true)
      if request.xhr?
        render partial: '/users/filterstatus', layout: false
      else
        redirect_to root_path
      end
    end
  end

  private
  def user_params
    params.require(:user).permit(:username,:password,:email)
  end
end
