# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

6.times do | num |
  Task.create(title: "title #{num + 1}", description: "description #{num + 1}")
end

Task.create(title: "title 1 finished", description: "description 1 finished", isFinished: true)
Task.create(title: "title 2 finished", description: "description 1 finished", isFinished: true)
Task.create(title: "title 1 deleted", description: "description 2 deleted", isDeleted: true)
Task.create(title: "title 2 deleted", description: "description 2 deleted", isDeleted: true)
