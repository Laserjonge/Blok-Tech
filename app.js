console.log('hi');

const express = require('express');
const expbs = require('express-handlebars');
const app = express();
const port = 3000;

const hbs = expbs.create();

app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(__dirname + "/static"));

// Routes
app.get('/', (req, res) => {
  res.render('Home', {
    title: 'Home Page',
    style: "home.css",
    name: 'Axel de Ruiter',
    age: 21,
    isDisplayName: true,
    isAgeEnabled: true,
    people: [
      {firstName: "Yehuda", lastName: "Katz"},
      {firstName: "Carl", lastName: "Lerche"},
      {firstName: "Alan", lastName: "Johnson"}
    ]
  });
});

// app.get('/about', (req, res) => {
//   res.render('About', {
//     person: {
//       firstname: "Axel",
//       lastname: "de Ruiters",
//     },
//     title: "About",
//     style: "about.css"
//   });
// });

app.get('/settings', (req, res) => {
  res.render('Settings');
});

app.get('/dashboard', (req, res) => {
  res.render('Dashboard', {
    isListEnabled: true,
    style: "dashboard.css"
  });
});

app.get('/each/helper', (req, res) => {
  res.render('Contact', {
    people: [
      "James",
      "Peter",
      "Sadrack",
      "Morissa"
    ],
    user: {
      username: 'accimeesterlin',
      age: 20,
      phone: 4647644
    },
    lists: [
      {
        items: ['Mango', 'Banana', 'Pineapple']
      },

      {
        items: ['Potatoe', 'Manioc', 'Avocado']
      }
    ]
  });
});


app.get('*', (req, res) => {
  res.send('404, niets gevonden');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});