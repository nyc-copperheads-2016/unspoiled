class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?

  def current_user
    @user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def logged_in?
    !!session[:user_id]
  end

  def login user
     session[:user_id] = user.id
   end

  def authorize_user!
    redirect_to login_path unless current_user.present?
  end

  private
  def require_login
      redirect_to login_path unless logged_in?
  end
end
