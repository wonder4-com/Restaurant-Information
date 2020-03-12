const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = 3000;


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json())
// need to check the path
app.use(express.static(__dirname + '/../client/dist'));

app.get('/user', (req, res) => res.send(fake.user));
//   res.send('Hello World!')
// )

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
