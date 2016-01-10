class SessionsController < ApplicationController

  def create
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to root_path
    else
      redirect_to root_path, flash: {notice: "Invalid email or password"}
    end
  end

  def new
  end

  def destroy
    session.clear
    redirect_to root_path
  end

  def user_logged_in
    render :json => current_user
  end
end
