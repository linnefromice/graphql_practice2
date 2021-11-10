module Types
  class TaskType < Types::BaseObject
    description "task"
    field :id, ID, null: false
    field :title, String, null: false, description: "タイトル"
    field :description, String, null: false, description: "説明本文"
    field :isFinished, Boolean, null: false, description: "完了済みか"
    field :isDeleted, Boolean, null: false, description: "削除済みか"
    field :version, Int, null: false, description: "バージョン"
  end
end
