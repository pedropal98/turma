# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Destroying old events"
Event.destroy_all

puts "Creating events"
user = User.new(email: "pk@gmail.com", password: "1234567", name: "Philipp",
                role: "mediocre")
user.save!
30.times do
  event = Event.new(
    name: Faker::Name.name,
    address: Faker::Address.street_address,
    date: Faker::Date.forward,
    travel: Faker::Vehicle.make_and_model,
    accomodation: Faker::Ancient.god,
    food: Faker::Restaurant.name,
    category: Faker::GreekPhilosophers.name,
    technician: Faker::Superhero.name,
    rider: Faker::Cannabis.cannabinoid,
    driver: Faker::ChuckNorris.fact
  )
  event.user = User.last
  event.save!
end
