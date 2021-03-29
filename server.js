// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080; // Step 1
const MONGODB_URI  ='mongodb+srv://Montenegro:Rodrigojesus1001@cluster1.m8gzd.mongodb.net/test?authSource=admin&replicaSet=atlas-11sziz-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true';
const routes = require('./routes/api');

// Step 2
mongoose.connect(MONGODB_URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

// Data parsing

app.use(express.urlencoded({ extended: false }));

// Step 3

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}


// HTTP request logger

app.use('/api', routes);




app.listen(PORT, console.log(`Server is starting at ${PORT}`));
