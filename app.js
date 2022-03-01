console.log('hi');

// import express from 'express';
// import { engine } from 'express-handlebars';

// const app = express();

// app.engine('handlebars', engine());
// app.set('view engine', 'handlebars');
// app.set('views', './views');

// app.get('/home', (req, res) => {
//     res.render('home');
// });

// app.listen(3000);



const express = require('express')
const {engine} = require('express-handlebars')
const app = express()
const port = 3000

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// import { engine } from 'express-handlebars';

app.use(express.static(__dirname + "/static"));

app.get('/', (req, res) => {
  res.render('Home')
})

app.get('/about', (req, res) => {
  res.render('About')
})

app.get('/settings', (req, res) => {
  res.send('Verander hier jouw instellingen')
})

app.get('*', (req, res) => {
  res.send('404, niets gevonden')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})