const express = require('express');
const expressLaouts = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

 app.use(express.urlencoded( {extended: true}));
 app.use(express.static('public'));
 app.use(expressLaouts);

app.set('layout', './layouts/main');
app.set('view engine', 'ejs');
 const routes = require('./server/routes/recipeRoutes.js');
 app.use('/', routes);
// app.get('/',(req, res)=>{
//     res.json({ user: 'geek' });
// })

app.listen(port, ()=> console.log(`Listening to port ${port}`));


