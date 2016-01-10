class MediaController < ApplicationController

  def index
    @medias = Media.where(category_id: params[:category_id])
    if request.xhr?
      # binding.pry
      render '/media/index', layout: false
    else
      redirect_to root_path
    end
  end

end
