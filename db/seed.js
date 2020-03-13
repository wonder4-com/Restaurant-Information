const faker = require('faker');
const db = require('./db.js'); 

// const randomCard = faker.helpers.createCard(); // random contact card containing


const categories = ['Japanese', 'Vietamese', 'Chinese', 'Korean', 'American', 'Mexican', 'French', 'Italian', 'buffet', 'bar'];

const seeding = () => {
  for (var i = 0; i < 100; i++) {
    const categoriesIndex = Math.floor(Math.random() * categories.length);
    var status = true;
    if (Math.floor(Math.random() * 2) === 0) {
      status = false;
    }
    const createRestaurant = {
      category: categories[categoriesIndex],
      name: faker.company.companyName(),
      claimed: status
    };
    db.query(`INSERT INTO restaurants (category,restaurantname,claimed) 
    VALUES ("${createRestaurant.category}", "${createRestaurant.name}", "${createRestaurant.claimed}")`)
  }

  for (var i = 0 ; i < 300; i++) {
    const randomRating = Math.floor(Math.random() * 6);
    const randomRestaurantid = Math.floor(Math.random() * 100) +1;
    const createReview = {
      date: faker.date.past().toLocaleDateString(),
      star: randomRating,
      restaurant_id: randomRestaurantid
    };
    console.log(randomRestaurantid)
  
     db.query(`INSERT INTO reviews (restaurant_id, rating, date) 
     VALUES ("${createReview.restaurant_id}", "${createReview.star}", "${createReview.date}")`)
  }
}


seeding();

module.exports = {seeding};