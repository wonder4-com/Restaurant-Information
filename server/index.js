const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/db.js')

const app = express();
const port = 3000;


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json())
// need to check the path
app.use(express.static(__dirname + '/../client/dist'));

app.get('/restaurant', (req, res) =>{
    var randomRestaurant = Math.floor(Math.random() * 101) +1;
    db.query(`SELECT * FROM restaurants INNER JOIN reviews ON restaurants.id=restaurant_id WHERE restaurants.id = ${randomRestaurant}`, (err,result) =>{
        if (err) {
            console.log(err)
        } else {
            console.log(randomRestaurant);
            res.send(result)
        }
    })
})
//   res.send('Hello World!')
// )

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
