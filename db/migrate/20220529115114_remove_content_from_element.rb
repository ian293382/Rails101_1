class RemoveContentFromElement < ActiveRecord::Migration[6.1]
  def change
    remove_column :elements, :content
  end
end
