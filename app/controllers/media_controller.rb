class MediaController < ApplicationController

  def index
    @category = Category.find(params[:category_id])
    @medias = Media.where(category_id: params[:category_id])
    @preference = Preference.new
    if request.xhr?
      render '/media/index', layout: false
    else
      redirect_to root_path
    end
  end

  def new
    Media.new
  end

  def create
    new_media = Media.new(title: params[:media][:title], category: Category.find_by(category_type: 'Custom Filters'))
    if new_media.save
      redirect_to "/media/#{new_media.id}/words"
    else
      redirect_to new_category_media_path(params[:category_id])
    end
  end

end
