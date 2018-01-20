class WelcomeController < ApplicationController
  before_action :set_popular_shows

  def index
    gon.all_shows = @all_shows
  end

  def popular_shows
    render :json => @all_shows
  end

  private

  def set_popular_shows
    @all_shows = Show.select(:id, :name, :overview, "tmdb_data -> 'poster_path' as show_poster")
  end
end
