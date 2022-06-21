 const mongoose = require('mongoose');
// console.log("DB");
  mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});
// //mongoose.connect('mongodb://localhost/Recipes');

const db = mongoose.connection;

db.on('error', console.error.bind(console, `connection error:`));
db.once('open', function(){
    console.log('DataBase Connected');
});

require('./Category');



