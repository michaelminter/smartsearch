# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# User.create email: 'michael@smartsearch.email', password: 'password', password_confirmation: 'password', nickname: 'michael', time_zone: 'Central Time (US & Canada)'
# puts 'CREATED USER FOR: michael@smartsearch.email'

EventType.create [
     {
         name: 'Offer Letter',
         highlight_color: '#4687DF',
         order: 1
     }, {
         name: 'Interview',
         highlight_color: '#F7BC31',
         order: 2
     }, {
         name: 'Skills Assessment',
         highlight_color: '#2DBD9B',
         order: 3
     }, {
         name: 'Drug Screen',
         highlight_color: '#9C22C0',
         order: 4
     }, {
         name: 'Applied',
         highlight_color: '#C19D02',
         order: 5
    }
]
