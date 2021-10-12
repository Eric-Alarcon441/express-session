const flash = require('connect-flash');
const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();

//configuraciones
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	session({
		secret: 'mysecret',
		resave: false,
		saveUninitialized: false,
	})
);
app.use(flash());

// varialbles globales
app.use((req, res, next) => {
	app.locals.message = req.flash('success');
	next();
});

//routes
app.use(require('./routes/index'));

app.listen(3000);
console.log('server on port: ', 3000);
