# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

query = {
  "api_key" => ENV['TMDB_API_KEY'],
  "language" => 'en-US',
  "sort_by" => "popularity.desc"
}

response = HTTParty.get(
  "https://api.themoviedb.org/3/discover/tv",
  :query => query
)

SAVED_SHOW_PROPERTIES = %w( name overview id )

response.parsed_response['results'].each {|fetched_show|
  Show.find_or_create_by(tmdb_id: fetched_show['id']) do |show|
    show.name = fetched_show['name']
    show.overview = fetched_show['overview']
    show.tmdb_id = fetched_show['id']
    show.tmdb_data = fetched_show.reject {|k,v| SAVED_SHOW_PROPERTIES.include?(k)}
  end
}
