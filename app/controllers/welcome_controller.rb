class WelcomeController < ApplicationController
  def index
    @popular_shows = Show.select(:id, :name, :overview, "tmdb_data -> 'poster_path' as show_poster")
  end

  def popular_shows
    render :json => @popular_shows
  end

  # private
end
