class MediaController < ApplicationController
  def index
    @medias = Media.where(params[:category_id])
  end

end