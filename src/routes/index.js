const { Router } = require('express');
const { route } = require('express/lib/application');
const router = Router();

router.get('/', (req, res) => {
	res.render('index');
});
router.post('/register', (req, res) => {
	req.flash('success', 'estas registrado');
	res.redirect('/productos');
});
router.get('/profile', (req, res) => {
	res.render('profile');
});
router.get('/productos', (req, res) => {
	res.render('productos');
});

module.exports = router;
