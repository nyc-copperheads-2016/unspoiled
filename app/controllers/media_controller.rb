class MediaController < ApplicationController

  def index
    @medias = Media.where(category_id: params[:category_id])
    if request.xhr?
      render :layout => false
    end
  end

end
