10.times do
  d = Department.create(
    name: Faker::Commerce.department
  )
  25.times do
    i = Item.create(
      name: Faker::Commerce.product_name,
      description: Faker::Lorem.sentence,
      price: Faker::Commerce.price.to_f,
      department_id: d.id
    )
    5.times do
      r = Review.create(
        title: Faker::TvShows::MichaelScott.quote,
        body: Faker::Lorem.paragraph,
        author: Faker::FunnyName.two_word_name,
        rating: Faker::Number.between(1, 10),
        item_id: i.id
      )
    end
  end
end

puts "A crap ton of seeds were seeded"
