class CreateEpisodes < ActiveRecord::Migration[5.1]
  def change
    create_table :episodes do |t|
      t.string :name
      t.text :overview
      t.integer :tmdb_id
      t.json :tmdb_data
      t.references :season, foreign_key: true
      t.integer :number

      t.timestamps
    end
    add_index :episodes, :name
    add_index :episodes, :tmdb_id
  end
end
