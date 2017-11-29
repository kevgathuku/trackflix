class CreateShows < ActiveRecord::Migration[5.1]
  def change
    create_table :shows do |t|
      t.string :name
      t.text :overview
      t.integer :tmdb_id
      t.json :tmdb_data

      t.timestamps
    end
    add_index :shows, :name
    add_index :shows, :tmdb_id
  end
end
