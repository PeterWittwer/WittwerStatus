const express = require('express');
 const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // will allow me to take requests from the body, such as post requests(e.g.)
const passport = require('passport');

const items = require('./routes/api/items');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const tran_shipment = require('./routes/api/Tran_shipments');


const app = express();

//boddyparser Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// DB CONFIG
const db =require('./config/keys').mongoURI;

//Connect to Mongo

mongoose.connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));
 
       
// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

 //Use Routes
 app.use('/api/items', items);
 //app.use('/api/individual-shipment', items);  mounting the oneShipment route to this path

 app.use('/api/users', users);
 app.use('/api/profile', profile);
 app.use('/api/posts', posts);
 app.use('/api/shipments', tran_shipment);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on ${port}`))
