class CategoriesController < ApplicationController
  def index
    @categories = Category.all
    @preference = Preference.new
  end

end
