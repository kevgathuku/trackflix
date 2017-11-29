class CreateSeasons < ActiveRecord::Migration[5.1]
  def change
    create_table :seasons do |t|
      t.string :name
      t.text :overview
      t.integer :tmdb_id
      t.json :tmdb_data
      t.references :show, foreign_key: true

      t.timestamps
    end
    add_index :seasons, :name
    add_index :seasons, :tmdb_id
  end
end
