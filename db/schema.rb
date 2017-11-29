# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171129120001) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "episodes", force: :cascade do |t|
    t.string "name"
    t.text "overview"
    t.integer "tmdb_id"
    t.json "tmdb_data"
    t.bigint "season_id"
    t.integer "number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_episodes_on_name"
    t.index ["season_id"], name: "index_episodes_on_season_id"
    t.index ["tmdb_id"], name: "index_episodes_on_tmdb_id"
  end

  create_table "seasons", force: :cascade do |t|
    t.string "name"
    t.text "overview"
    t.integer "tmdb_id"
    t.json "tmdb_data"
    t.bigint "show_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_seasons_on_name"
    t.index ["show_id"], name: "index_seasons_on_show_id"
    t.index ["tmdb_id"], name: "index_seasons_on_tmdb_id"
  end

  create_table "shows", force: :cascade do |t|
    t.string "name"
    t.text "overview"
    t.integer "tmdb_id"
    t.json "tmdb_data"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_shows_on_name"
    t.index ["tmdb_id"], name: "index_shows_on_tmdb_id"
  end

  add_foreign_key "episodes", "seasons"
  add_foreign_key "seasons", "shows"
end
