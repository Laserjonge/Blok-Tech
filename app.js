console.log('hi');


const express = require('express');
const {engine} = require('express-handlebars');
const app = express();
const port = 3000;


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(__dirname + "/static"));

app.get('/', (req, res) => {
  res.render('Home', {
    title: 'Home Page',
    name: 'Axel de Ruiter',
    age: 21,
    isDisplayName: true,
    isAgeEnabled: true
  });
});

app.get('/about', (req, res) => {
  res.render('About', {
    person: {
      firstname: "Axel",
      lastname: "de Ruiters",
    },
    title: "About"
  });
});

app.get('/settings', (req, res) => {
  res.render('Settings');
});

app.get('/dashboard', (req, res) => {
  res.render('Dashboard', {
    isListEnabled: true
  });
});

app.get('/each/helper', (req, res) => {
  res.render('Contact', {
    people: [
      "James",
      "Peter",
      "Sadrack",
      "Morissa"
    ]
  });
});

app.get('*', (req, res) => {
  res.send('404, niets gevonden');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});