class WelcomeController < ApplicationController
  def index
    gon.all_shows = Show.select(:id, :name, :overview, "tmdb_data -> 'poster_path' as show_poster")
  end
end
