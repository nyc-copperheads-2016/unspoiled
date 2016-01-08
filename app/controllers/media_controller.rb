class MediaController < ApplicationController
  def index
    @medias = Media.where(category_id: params[:category_id])
  end

end