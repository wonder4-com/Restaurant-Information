const faker = require('faker');

const randomName = faker.name.findName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
// const randomCard = faker.helpers.createCard(); // random contact card containing

const user = [];
const restaurant = [];
const review = [];

const categories = ['Japanese', 'Vietamese', 'Chinese', 'Korean', 'American', 'Mexican', 'French'];

for (var i = 0; i < 2; i++) {
  const categoriesIndex = Math.floor(Math.random() * categories.length);
  const randomRating = Math.floor(Math.random() * 6);

  const createUser = {
    name: randomName,
    email: randomEmail,
    streetAddress: faker.address.streetAddress(),
    city: faker.address.city,
    states: faker.address.state,
    zip: faker.address.zipCode(),
    phone: faker.phone.phoneNumber(),
    // image: faker.image.avatar()
  };

  const createRestaurant = {
    category: categories[categoriesIndex],
    name: randomName,
    streetAddress: faker.address.streetAddress(),
    city: faker.address.city,
    state: faker.address.state,
    zip: faker.address.zipCode(),
    phone: faker.phone.phoneNumber(),
    webAddress: faker.internet.url(),
    menuAddress: faker.internet.url()
  };
  const createReview = {
    content: faker.random.words(),
    star: randomRating
  };
  restaurant.push(createRestaurant);
  user.push(createUser);
  review.push(createReview);
}

module.exports = { user, restaurant, review };
