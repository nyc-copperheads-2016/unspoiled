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
      render '/users/show'
    end
  end

  def update
    #binding.pry
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

  def filtered_words
    if current_user
      pref = Preference.where(active: true).where('preferences.user_id = ?',current_user.id )
      filters = active_words(pref)
      # filters = Word.joins(:preference).where('preferences.user_id = ?', current_user.id).pluck(:word)
    else
      filters = []
    end
    render :json => filters
  end

  def active_words(array)
    list_of_words = []
    array.each do |preference|
      preference.words.each do |word|
        list_of_words << word.word
      end
    end
    list_of_words
  end


  private
  def user_params
    params.require(:user).permit(:username,:password,:email)
  end
end
