console.log('hi');

const express = require('express');
const expbs = require('express-handlebars');
const app = express();
const port = 4000;

const hbs = expbs.create();

app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(__dirname + "/static"));

app.get('/about', (req, res) => {
	res.render('About', {
	  person: {
		firstname: "Axel",
		lastname: "de Ruiters",
	  },
	  title: "About",
	  style: "about.css"
	});
  });