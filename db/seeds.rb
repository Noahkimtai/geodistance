# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts('Seeding regions....')
Region.destroy_all
regions = Region.create!([{name: 'Africa'}])

puts('Seeding countries....')
Country.destroy_all
countries = Country.create!([{name: 'Kenya', region_id:1},{name: "Nigeria", region_id:1}])

puts('Seeding places....')
Place.destroy_all
places = Place.create!([{name: 'Nairobi',country_id:1,latitude:-1.286389 , longitude: 36.817223, description: 'capital city of Kenya' },{name:'Lagos', country_id:2,latitude:6.5243793 , longitude:3.379205700000057,description:'capital city of Nigeria'}])
